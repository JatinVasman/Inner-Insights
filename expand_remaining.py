"""
expand_remaining.py
-------------------
Expands all short blogs (< 2000 words) to 2000-3000 words with internal links.
Processes: compatibility.js, compatibility2.js, compatibility3.js,
           house-gems-colors.js, festival-basics-local.js,
           celebrity-logo.js, advanced-numerology.js, profession-remedies.js

Also adds internal links (anchor tags) to any expanded blog missing them.

Usage:
    python expand_remaining.py

Caches each expanded post in temp_expanded/<slug>.json.
Run multiple times to retry failed posts — already-completed ones are skipped.
"""

import os
import re
import json
import subprocess
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

# ── Paths ───────────────────────────────────────────────────────────────────
DIR_PATH   = r"C:\Users\adity\Desktop\innerinsights\app\blog\data"
CACHE_DIR  = r"C:\Users\adity\Desktop\innerinsights\app\blog\data\temp_expanded"
EXE_PATH   = r"C:\Users\adity\AppData\Local\Programs\antigravity\resources\bin\language_server.exe"
LOGS_DIR   = r"C:\Users\adity\.gemini\antigravity\brain"

os.makedirs(CACHE_DIR, exist_ok=True)

# ── Files to expand ─────────────────────────────────────────────────────────
REMAINING_FILES = [
    ('compatibility.js',       'compatibilityBlogs'),
    ('compatibility2.js',      'compatibilityBlogs2'),
    ('compatibility3.js',      'compatibilityBlogs3'),
    ('house-gems-colors.js',   'houseGemsColorsBlogs'),
    ('festival-basics-local.js', 'festivalBasicsLocalBlogs'),
    ('celebrity-logo.js',      'celebrityLogoBlogs'),
    ('advanced-numerology.js', 'advancedNumerologyBlogs'),
    ('profession-remedies.js', 'professionRemediesBlogs'),
]

CONCURRENT_LIMIT = 3
MAX_RETRIES      = 3
MIN_WORDS        = 1800   # accept if >= 1800 (target is 2000)
HARD_MIN_WORDS   = 1500   # retry if below this

# ── Helpers ──────────────────────────────────────────────────────────────────

def load_js_file_via_node(file_path, var_name):
    abs_path = os.path.abspath(file_path).replace("\\", "/")
    node_code = f"""
import('file:///{abs_path}').then(m => {{
    console.log(JSON.stringify(m.{var_name}));
}}).catch(err => {{
    console.error(err);
    process.exit(1);
}});
"""
    temp_js = os.path.join(CACHE_DIR, f"_loader_{var_name}.mjs")
    with open(temp_js, "w", encoding="utf-8") as f:
        f.write(node_code)
    try:
        result = subprocess.run(["node", temp_js], capture_output=True, text=True, encoding="utf-8")
        if result.returncode != 0:
            raise RuntimeError(f"Node failed: {result.stderr[:300]}")
        return json.loads(result.stdout)
    finally:
        if os.path.exists(temp_js):
            os.remove(temp_js)


def clean_json_string(s):
    result, in_quotes, escaped = [], False, False
    i = 0
    while i < len(s):
        ch = s[i]
        if ch == '\\' and not escaped:
            escaped = True
            result.append(ch)
            i += 1
            continue
        if ch == '"' and not escaped:
            in_quotes = not in_quotes
        if in_quotes and ch in ('\n', '\r'):
            if ch == '\r' and i + 1 < len(s) and s[i+1] == '\n':
                i += 1
            result.append('\\n')
        else:
            result.append(ch)
        escaped = False
        i += 1
    return "".join(result)


def count_words(content_blocks):
    return sum(len(b.get('p', '').split()) for b in content_blocks)


def has_internal_link(content_blocks):
    return any('<a href' in b.get('p', '') for b in content_blocks)


# ── Core generator ────────────────────────────────────────────────────────────

LINK_OPTIONS = """
- "Priyanka Agrawal" -> <a href="https://innerinsights.net/">Priyanka Agrawal</a>
- "Inner Insights" -> <a href="https://innerinsights.net/">Inner Insights</a>
- "numerology consultation" -> <a href="https://innerinsights.net/">numerology consultation</a>
- "name correction" -> <a href="https://innerinsights.net/">name correction</a>
- "business name numerology" -> <a href="https://innerinsights.net/">business name numerology</a>
- "mobile numerology" -> <a href="https://innerinsights.net/">mobile numerology</a>
- "signature analysis" -> <a href="https://innerinsights.net/">signature analysis</a>
- "Mokshapatam" -> <a href="https://innerinsights.net/">Mokshapatam</a>
"""

SECTION_TEMPLATE = """
Here are the 7 sections you must output (with headings and approximate word counts):
1. (heading: null, ~350 words): Introduction & Priyanka Agrawal's Approach — connect the topic to Inner Insights.
2. (heading: "Core Characteristics and Vibrational Energy", ~400 words): Core meanings and numerological patterns.
3. (heading: "Career and Business Pathways", ~400 words): Career/business alignments and practical advice.
4. (heading: "Love, Marriage and Relationship Compatibility", ~400 words): Compatibility patterns and guidance.
5. (heading: "Common Challenges and Practical Remedies", ~400 words): Shadow aspects and concrete remedies.
6. (heading: "Frequently Asked Questions", ~400 words): 3-4 detailed FAQs on the topic.
7. (heading: "Personalized Guidance & Next Steps", ~300 words): Priyanka Agrawal's booking details.
"""


def build_prompt(blog):
    title    = blog.get('title', '')
    slug     = blog.get('slug', '')
    category = blog.get('category', '')
    return f"""You are an expert content writer and SEO specialist for an Indian numerology website.
Write expanded blog content for: "{title}" (slug: "{slug}", category: "{category}").

Output: a JSON array of objects with keys "h" (heading string or null) and "p" (paragraph string).
Total word count of ALL paragraphs combined MUST be between 2000 and 3000 words (aim for ~2400).

Inject 2-3 HTML anchor tags contextually in the body text (not all in one paragraph). Choose from:
{LINK_OPTIONS}
{SECTION_TEMPLATE}
Return ONLY a raw JSON array enclosed in ```json ... ```. No other text before or after.
"""


def run_antigravity_prompt(prompt):
    """Send a prompt to the antigravity language server and return the text response."""
    args = [EXE_PATH, "agentapi", "new-conversation", "--model=pro", prompt]
    result = subprocess.run(args, capture_output=True, text=True, encoding="utf-8")
    if result.returncode != 0:
        raise RuntimeError(f"LS failed: {result.stderr[:300]}")
    res_data = json.loads(result.stdout)
    if "error" in res_data:
        raise RuntimeError(f"LS error: {res_data['error']}")
    convo_id = res_data["response"]["newConversation"]["conversationId"]
    log_path = os.path.join(LOGS_DIR, convo_id, ".system_generated", "logs", "transcript_full.jsonl")

    for _ in range(40):
        time.sleep(3)
        if not os.path.exists(log_path):
            continue
        try:
            with open(log_path, "r", encoding="utf-8") as lf:
                lines = [l for l in lf.readlines() if l.strip()]
            if not lines:
                continue
            last = json.loads(lines[-1])
            if (last.get("source") == "MODEL"
                    and last.get("type") == "PLANNER_RESPONSE"
                    and last.get("status") == "DONE"):
                return last.get("content", "")
        except Exception:
            continue
    raise TimeoutError("Conversation timed out after 120 s")


def parse_content_from_response(raw_text):
    """Extract and parse JSON content array from LLM response."""
    text = raw_text.strip()
    if "```json" in text:
        text = text.split("```json")[1].split("```")[0].strip()
    elif "```" in text:
        text = text.split("```")[1].split("```")[0].strip()
    cleaned = clean_json_string(text)
    cleaned = re.sub(r',\s*([\]}])', r'\1', cleaned)
    return json.loads(cleaned)


def generate_expanded_blog(blog, retry=0):
    slug       = blog.get('slug', 'unknown')
    cache_path = os.path.join(CACHE_DIR, f"{slug}.json")

    # ── Check cache ─────────────────────────────────────────────────────────
    if os.path.exists(cache_path):
        try:
            with open(cache_path, 'r', encoding='utf-8') as f:
                cached = json.load(f)
            content = cached.get('content', [])
            words   = count_words(content)
            links   = has_internal_link(content)
            if words >= MIN_WORDS and links:
                print(f"[CACHE-OK]  {slug} ({words}w, has links). Skipping.")
                return slug, cached
            elif words >= MIN_WORDS and not links:
                print(f"[CACHE-NOLINK] {slug} ({words}w, NO links). Will add links.")
                # Fall through to add-links flow below
            # else: word count too low, regenerate
        except Exception:
            pass

    print(f"[GEN] {slug} (attempt {retry+1}) ...")

    try:
        raw_text = run_antigravity_prompt(build_prompt(blog))
        content  = parse_content_from_response(raw_text)
        words    = count_words(content)

        if words < HARD_MIN_WORDS:
            raise ValueError(f"Word count too low: {words}")

        if words < MIN_WORDS:
            print(f"[WARN] {slug}: {words} words (below 2000, but acceptable)")

        if not has_internal_link(content):
            print(f"[WARN] {slug}: no internal links in generated content")

        updated = dict(blog)
        updated['content']  = content
        updated['readTime'] = "15 min read"

        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump(updated, f, indent=2, ensure_ascii=False)
        print(f"[OK] {slug} ({words}w). Cached.")
        return slug, updated

    except Exception as e:
        print(f"[ERR] {slug}: {e}")
        if retry < MAX_RETRIES - 1:
            wait = 15 * (retry + 1)
            print(f"[RETRY] Waiting {wait}s ...")
            time.sleep(wait)
            return generate_expanded_blog(blog, retry + 1)
        print(f"[FATAL] {slug}: max retries exhausted. Skipping.")
        return slug, None


# ── File processor ────────────────────────────────────────────────────────────

def process_file(file_name, var_name):
    file_path = os.path.join(DIR_PATH, file_name)
    print(f"\n{'='*60}")
    print(f"FILE: {file_name}")
    print(f"{'='*60}")

    try:
        blogs = load_js_file_via_node(file_path, var_name)
    except Exception as e:
        print(f"[SKIP] Cannot load {file_name}: {e}")
        return

    # Filter to only blogs that need work
    to_process = []
    for blog in blogs:
        slug       = blog.get('slug', '')
        cache_path = os.path.join(CACHE_DIR, f"{slug}.json")
        needs_work = True
        if os.path.exists(cache_path):
            try:
                with open(cache_path, 'r', encoding='utf-8') as f:
                    cached = json.load(f)
                words = count_words(cached.get('content', []))
                links = has_internal_link(cached.get('content', []))
                if words >= MIN_WORDS and links:
                    needs_work = False
            except Exception:
                pass
        if needs_work:
            to_process.append(blog)

    already_done = len(blogs) - len(to_process)
    print(f"Total: {len(blogs)} | Already done: {already_done} | To expand: {len(to_process)}")

    if not to_process:
        print("All blogs in this file are already expanded. Re-writing file from cache...")
    else:
        # Generate in parallel
        expanded_map = {}
        failed = []

        with ThreadPoolExecutor(max_workers=CONCURRENT_LIMIT) as ex:
            futures = {ex.submit(generate_expanded_blog, b): b for b in to_process}
            for fut in as_completed(futures):
                slug, result = fut.result()
                if result is not None:
                    expanded_map[slug] = result
                else:
                    failed.append(slug)

        if failed:
            print(f"\n[ALERT] {len(failed)} blogs FAILED after max retries:")
            for s in failed:
                print(f"  - {s}")
            print("File will NOT be rewritten. Run script again to retry.")
            return

    # Build final list (original order) from cache + unchanged blogs
    final_blogs = []
    for blog in blogs:
        slug       = blog.get('slug', '')
        cache_path = os.path.join(CACHE_DIR, f"{slug}.json")
        if os.path.exists(cache_path):
            try:
                with open(cache_path, 'r', encoding='utf-8') as f:
                    cached = json.load(f)
                final_blogs.append(cached)
                continue
            except Exception:
                pass
        # If not in cache (e.g., was already expanded in the file), keep original
        final_blogs.append(blog)

    # Write back
    with open(file_path, 'r', encoding='utf-8') as f:
        original = f.read()
    header_comment = ""
    m = re.match(r"^(\s*//.*?\n)+", original)
    if m:
        header_comment = m.group(0)

    out = f"export const {var_name} = {json.dumps(final_blogs, indent=2, ensure_ascii=False)};\n"
    if header_comment:
        out = header_comment + out

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(out)
    print(f"[DONE] Written {len(final_blogs)} blogs back to {file_name}")


# ── Main ───────────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    print("=" * 70)
    print("INNER INSIGHTS — BLOG EXPANSION SCRIPT")
    print(f"Files to process: {len(REMAINING_FILES)}")
    print("=" * 70)

    for file_name, var_name in REMAINING_FILES:
        process_file(file_name, var_name)

    print("\n" + "=" * 70)
    print("ALL FILES PROCESSED.")
    print("Run count_blogs3.mjs to verify final word counts and link status.")
    print("=" * 70)
