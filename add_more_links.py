"""
add_more_links.py
-----------------
Scans every blog post across all 19 data files.
Finds plain-text occurrences of key phrases (NOT already inside <a> tags)
and wraps them with anchor tags pointing to https://innerinsights.net/.
Target: 8 internal links per blog.
"""

import re
import json
import subprocess
import os
import sys

DIR_PATH = r"C:\Users\adity\Desktop\innerinsights\app\blog\data"
URL      = "https://innerinsights.net/"
TARGET   = 8   # desired minimum links per blog

FILES = [
    ('lifepath.js',              'lifePathBlogs'),
    ('lifepath2.js',             'lifePathBlogs2'),
    ('lifepath3.js',             'lifePathBlogs3'),
    ('angel.js',                 'angelBlogs'),
    ('birthday-name.js',         'birthdayNameBlogs'),
    ('business-baby.js',         'businessBabyBlogs'),
    ('mobile-compat.js',         'mobileCompatBlogs'),
    ('compatibility.js',         'compatibilityBlogs'),
    ('compatibility2.js',        'compatibilityBlogs2'),
    ('compatibility3.js',        'compatibilityBlogs3'),
    ('loshu-graphology.js',      'loshuGraphologyBlogs'),
    ('graphotherapy-vastu.js',   'graphotherapyVastuBlogs'),
    ('vastu-career-love.js',     'vastuCareerLoveBlogs'),
    ('money-health-year.js',     'moneyHealthYearBlogs'),
    ('house-gems-colors.js',     'houseGemsColorsBlogs'),
    ('festival-basics-local.js', 'festivalBasicsLocalBlogs'),
    ('celebrity-logo.js',        'celebrityLogoBlogs'),
    ('advanced-numerology.js',   'advancedNumerologyBlogs'),
    ('profession-remedies.js',   'professionRemediesBlogs'),
]

# (phrase, max_links_per_blog) — more specific phrases first
PHRASES = [
    ("Priyanka Agrawal",         2),
    ("Inner Insights",           2),
    ("numerology consultation",  2),
    ("name correction",          1),
    ("business name numerology", 1),
    ("mobile numerology",        1),
    ("signature analysis",       1),
    ("graphotherapy",            1),
    ("Lo Shu Grid",              1),
    ("Lo Shu grid",              1),
    ("numerology expert",        1),
    ("numerology specialist",    1),
    ("numerology reading",       1),
    ("numerology remedies",      1),
    ("personal consultation",    1),
    ("Vastu consultation",       1),
    ("Vastu Shastra",            1),
    ("graphology",               1),
    ("Personal Year Number",     1),
    ("Personal Year",            1),
    ("Life Path Number",         1),
]


# ── helpers ──────────────────────────────────────────────────────────────────

def load_js(file_path, var_name):
    abs_path = os.path.abspath(file_path).replace("\\", "/")
    loader = file_path + "._loader.mjs"
    with open(loader, "w", encoding="utf-8") as f:
        f.write(f"import('file:///{abs_path}').then(m=>console.log(JSON.stringify(m.{var_name}))).catch(e=>{{console.error(e.message);process.exit(1);}});\n")
    try:
        r = subprocess.run(["node", loader], capture_output=True, text=True, encoding="utf-8")
        if r.returncode != 0:
            raise RuntimeError(r.stderr[:300])
        return json.loads(r.stdout)
    finally:
        if os.path.exists(loader):
            os.remove(loader)


def count_links(content):
    return sum(b.get('p', '').count('<a href') for b in content)


def inject_once(html, phrase):
    """Replace the FIRST plain-text occurrence of phrase (not inside a tag) with a linked version.
    Returns (new_html, did_replace)."""
    # Split into alternating [text, tag, text, tag ...] segments
    parts = re.split(r'(<[^>]*>)', html)
    inside_a = 0
    replaced  = False

    for i, part in enumerate(parts):
        if i % 2 == 1:   # tag segment
            if re.match(r'<a[\s>]', part, re.I):
                inside_a += 1
            elif re.match(r'</a>', part, re.I):
                inside_a = max(0, inside_a - 1)
        else:             # text segment
            if not inside_a and not replaced and phrase in part:
                parts[i] = part.replace(phrase, f'<a href="{URL}">{phrase}</a>', 1)
                replaced = True

    return ''.join(parts), replaced


def add_links_to_blog(blog):
    content = blog.get('content', [])
    current = count_links(content)
    if current >= TARGET:
        return blog, 0

    new_content  = [dict(b) for b in content]
    added        = 0
    needed       = TARGET - current
    phrase_used  = {}    # phrase -> number of times linked in this blog

    for phrase, max_per_blog in PHRASES:
        if added >= needed:
            break
        used = phrase_used.get(phrase, 0)
        if used >= max_per_blog:
            continue

        for i, block in enumerate(new_content):
            if added >= needed:
                break
            used = phrase_used.get(phrase, 0)
            if used >= max_per_blog:
                break
            p = block.get('p', '')
            if phrase not in p:
                continue
            new_p, did = inject_once(p, phrase)
            if did:
                new_content[i] = {**block, 'p': new_p}
                phrase_used[phrase] = used + 1
                added += 1

    result = dict(blog)
    result['content'] = new_content
    return result, added


# ── main ─────────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    print("=" * 60)
    print("ADDING MORE INTERNAL LINKS  (target: %d per blog)" % TARGET)
    print("=" * 60)

    grand_blogs   = 0
    grand_updated = 0

    for fname, var_name in FILES:
        fpath = os.path.join(DIR_PATH, fname)
        sys.stdout.write(f"\n[{fname}] loading ... ")
        sys.stdout.flush()

        try:
            blogs = load_js(fpath, var_name)
        except Exception as e:
            print(f"SKIP ({e})")
            continue

        updated_blogs = []
        file_updated  = 0

        for blog in blogs:
            new_blog, added = add_links_to_blog(blog)
            updated_blogs.append(new_blog)
            grand_blogs += 1
            if added > 0:
                file_updated += 1
                grand_updated += 1

        # Write back
        out = f"export const {var_name} = {json.dumps(updated_blogs, indent=2, ensure_ascii=False)};\n"
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(out)

        print(f"{len(blogs)} blogs | {file_updated} updated | written")

    print(f"\n{'=' * 60}")
    print(f"DONE: {grand_blogs} total blogs, {grand_updated} had links added")
    print("=" * 60)
