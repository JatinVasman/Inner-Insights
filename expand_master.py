import os
import re
import json
import subprocess
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

# Paths
dir_path = r"C:\Users\adity\Desktop\innerinsights\app\blog\data"
cache_dir = r"C:\Users\adity\Desktop\innerinsights\app\blog\data\temp_expanded"
exe_path = r"C:\Users\adity\AppData\Local\Programs\antigravity\resources\bin\language_server.exe"
logs_dir = r"C:\Users\adity\.gemini\antigravity\brain"

# Create cache directory if it doesn't exist
os.makedirs(cache_dir, exist_ok=True)

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
    temp_js_path = os.path.join(cache_dir, f"temp_loader_{var_name}.mjs")
    with open(temp_js_path, "w", encoding="utf-8") as f:
        f.write(node_code)
    try:
        result = subprocess.run(["node", temp_js_path], capture_output=True, text=True, encoding="utf-8")
        if result.returncode != 0:
            raise RuntimeError(f"Node failed to parse JS: {result.stderr}")
        return json.loads(result.stdout)
    finally:
        if os.path.exists(temp_js_path):
            os.remove(temp_js_path)

# List of files to process
remaining_files = [
    ('lifepath.js', 'lifePathBlogs'),
    ('lifepath2.js', 'lifePathBlogs2'),
    ('lifepath3.js', 'lifePathBlogs3'),
    ('birthday-name.js', 'birthdayNameBlogs'),
    ('business-baby.js', 'businessBabyBlogs'),
    ('mobile-compat.js', 'mobileCompatBlogs'),
    ('loshu-graphology.js', 'loshuGraphologyBlogs'),
    ('graphotherapy-vastu.js', 'graphotherapyVastuBlogs'),
    ('vastu-career-love.js', 'vastuCareerLoveBlogs'),
    ('money-health-year.js', 'moneyHealthYearBlogs'),
    ('house-gems-colors.js', 'houseGemsColorsBlogs'),
    ('festival-basics-local.js', 'festivalBasicsLocalBlogs')
]

CONCURRENT_LIMIT = 3
MAX_RETRIES = 3

def clean_json_string(s):
    result = []
    in_quotes = False
    escaped = False
    i = 0
    while i < len(s):
        char = s[i]
        if char == '\\' and not escaped:
            escaped = True
            result.append(char)
            i += 1
            continue
        
        if char == '"' and not escaped:
            in_quotes = not in_quotes
        
        if in_quotes and char in ('\n', '\r'):
            if char == '\r' and i + 1 < len(s) and s[i+1] == '\n':
                i += 1
            result.append('\\n')
        else:
            result.append(char)
            
        escaped = False
        i += 1
    return "".join(result)

def generate_blog_post(blog, retry_count=0):
    title = blog.get('title')
    slug = blog.get('slug')
    category = blog.get('category')
    
    cache_path = os.path.join(cache_dir, f"{slug}.json")
    if os.path.exists(cache_path):
        try:
            with open(cache_path, 'r', encoding='utf-8') as f:
                cached_data = json.load(f)
            # Verify cached data has content and is within word count
            total_words = sum(len(block.get('p', '').split()) for block in cached_data.get('content', []))
            if 2000 <= total_words <= 3000:
                print(f"[CACHE] Post {slug} already expanded ({total_words} words). Skipping.")
                return slug, cached_data
        except Exception:
            pass

    print(f"[GEN] Starting generation for {slug} (Attempt {retry_count+1})...")
    
    prompt = f"""You are an expert content writer and SEO specialist.
Your task is to write the expanded content for the blog post titled: "{title}" (slug: "{slug}", category: "{category}").
The content must be structured as a JSON array of objects, where each object has keys "h" (heading, string or null) and "p" (paragraph, string).
The total word count of all content paragraphs combined MUST be between 2000 and 3000 words. (Count the words carefully to ensure the total is within 2000 to 3000 words, e.g. ~2400 words).

You must write high-quality, rich, detailed, and insightful analysis across exactly 7 sections as specified below.
Ensure you inject at least 2-3 standard HTML anchor tags contextually in the body text. Do not over-link. Choose 2-3 distinct links from this list (note that all link URLs MUST point exactly to the main homepage: https://innerinsights.net/):
- "Priyanka Agrawal" -> <a href="https://innerinsights.net/">Priyanka Agrawal</a>
- "Inner Insights" -> <a href="https://innerinsights.net/">Inner Insights</a>
- "numerology consultation" -> <a href="https://innerinsights.net/">numerology consultation</a>
- "name correction" -> <a href="https://innerinsights.net/">name correction</a>
- "business name numerology" -> <a href="https://innerinsights.net/">business name numerology</a>
- "mobile numerology" -> <a href="https://innerinsights.net/">mobile numerology</a>
- "signature analysis" -> <a href="https://innerinsights.net/">signature analysis</a>
- "Mokshapatam" -> <a href="https://innerinsights.net/">Mokshapatam</a>

Here are the 7 sections you must output (with their headings and approximate word counts):
1. Section 1 (heading: null, word count: ~350 words): Introduction & Priyanka Agrawal's Consultation Approach. Connect the blog's topic to Inner Insights and Priyanka Agrawal's practice.
2. Section 2 (heading: "Core Characteristics and Vibrational Energy", word count: ~400 words): Detailed core meanings and energetic/numerological/graphological patterns of this topic.
3. Section 3 (heading: "Career and Business Pathways", word count: ~400 words): Best career and business alignments and practical advice.
4. Section 4 (heading: "Love, Marriage and Relationship Compatibility", word count: ~400 words): Compatibility patterns, dynamics, and guidance for partnerships.
5. Section 5 (heading: "Common Challenges and Practical Remedies", word count: ~400 words): Shadow aspects, obstacles, and concrete practical remedies (like name alignment, gemstones, etc.).
6. Section 6 (heading: "Frequently Asked Questions", word count: ~400 words): 3-4 detailed FAQs and answers related to the topic.
7. Section 7 (heading: "Personalized Guidance & Next Steps", word count: ~300 words): Priyanka Agrawal's Guidance & Booking Details. Direct readers to book a numerology consultation or services.

Return ONLY the raw JSON array (enclosed in ```json ... ```). Do not add any text before or after the JSON block.
"""

    try:
        args = [exe_path, "agentapi", "new-conversation", "--model=pro", prompt]
        result = subprocess.run(args, capture_output=True, text=True, encoding="utf-8")
        
        if result.returncode != 0:
            raise RuntimeError(f"LS new-conversation failed: {result.stderr}")
            
        res_data = json.loads(result.stdout)
        if "error" in res_data:
            raise RuntimeError(f"LS returned error: {res_data['error']}")
            
        convo_id = res_data["response"]["newConversation"]["conversationId"]
        log_path = os.path.join(logs_dir, convo_id, ".system_generated", "logs", "transcript_full.jsonl")
        
        # Wait for completion (up to 120 seconds, polling every 3 seconds)
        completed = False
        for step in range(40):
            time.sleep(3)
            if os.path.exists(log_path):
                try:
                    with open(log_path, "r", encoding="utf-8") as lf:
                        lines = lf.readlines()
                    if not lines:
                        continue
                    # Check the last non-empty step of the transcript
                    last_line = ""
                    for line in reversed(lines):
                        if line.strip():
                            last_line = line
                            break
                    if not last_line:
                        continue
                    last_line_data = json.loads(last_line)
                    if last_line_data.get("source") == "MODEL" and last_line_data.get("type") == "PLANNER_RESPONSE" and last_line_data.get("status") == "DONE":
                        content = last_line_data.get("content", "")
                        
                        clean_content = content.strip()
                        if "```json" in clean_content:
                            clean_content = clean_content.split("```json")[1].split("```")[0].strip()
                        elif "```" in clean_content:
                            clean_content = clean_content.split("```")[1].split("```")[0].strip()
                        
                        cleaned = clean_json_string(clean_content)
                        # Remove trailing commas
                        cleaned = re.sub(r',\s*([\]}])', r'\1', cleaned)
                        parsed_json = json.loads(cleaned)
                        
                        # Validate word count
                        total_w = sum(len(item.get('p', '').split()) for item in parsed_json)
                        if total_w < 1800 or total_w > 3200:
                            print(f"[WARN] {slug} generated {total_w} words (outside 2000-3000 target).")
                            # We still accept it if it's close enough (e.g. >1800), but if it's way off, we retry.
                            if total_w < 1500:
                                raise ValueError(f"Word count too low: {total_w}")
                        
                        # Save result
                        updated_blog = dict(blog)
                        updated_blog['content'] = parsed_json
                        updated_blog['readTime'] = "15 min read"
                        
                        with open(cache_path, 'w', encoding='utf-8') as f:
                            json.dump(updated_blog, f, indent=2, ensure_ascii=False)
                            
                        print(f"[SUCCESS] {slug} expanded ({total_w} words). saved to cache.")
                        completed = True
                        return slug, updated_blog
                except Exception as e:
                    # If it's a parsing error or word count error, we might raise it
                    if step == 39:
                        raise e
            if completed:
                break
        
        raise TimeoutError("Conversation did not complete within timeout limits.")
        
    except Exception as e:
        print(f"[ERROR] Failed to expand {slug}: {e}")
        if retry_count < MAX_RETRIES - 1:
            # Wait with exponential backoff before retrying
            wait_time = 15 * (retry_count + 1)
            print(f"[RETRY] Waiting {wait_time}s before retrying {slug}...")
            time.sleep(wait_time)
            return generate_blog_post(blog, retry_count + 1)
        else:
            print(f"[FATAL] Max retries reached for {slug}. Skipping.")
            return slug, None

def process_js_file(file_name, var_name):
    file_path = os.path.join(dir_path, file_name)
    print(f"\n==================================================")
    print(f"PROCESSING FILE: {file_name}")
    print(f"==================================================")
    
    try:
        blogs = load_js_file_via_node(file_path, var_name)
    except Exception as e:
        print(f"Failed to parse original file {file_name} via Node: {e}")
        return
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    print(f"Loaded {len(blogs)} posts from {file_name}.")
    
    # Process posts in parallel batches
    expanded_blogs = []
    failed_slugs = []
    
    with ThreadPoolExecutor(max_workers=CONCURRENT_LIMIT) as executor:
        futures = {executor.submit(generate_blog_post, blog): blog for blog in blogs}
        
        for future in as_completed(futures):
            slug, result = future.result()
            if result is not None:
                expanded_blogs.append(result)
            else:
                failed_slugs.append(slug)
                
    if failed_slugs:
        print(f"[ALERT] The following {len(failed_slugs)} slugs failed to generate after max retries:")
        for s in failed_slugs:
            print(f"  - {s}")
        print("Merged file will NOT be written because some posts failed. Run the script again to retry failed posts.")
        return
        
    # Re-order the expanded blogs to match the original order
    order_map = {blog['slug']: idx for idx, blog in enumerate(blogs)}
    expanded_blogs.sort(key=lambda x: order_map[x['slug']])
    
    # Write the expanded blogs back to the file
    out_content = f"export const {var_name} = {json.dumps(expanded_blogs, indent=2, ensure_ascii=False)};\n"
    
    # Restore comments if any at the top (like Life Path markers)
    header_comment = ""
    comment_match = re.match(r"^(\s*//.*?\n)+", content)
    if comment_match:
        header_comment = comment_match.group(0)
        out_content = header_comment + out_content
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(out_content)
        
    print(f"[COMPLETE] Written expanded content back to {file_name}!")

if __name__ == '__main__':
    for file_name, var_name in remaining_files:
        process_js_file(file_name, var_name)
    print("\nAll remaining files processed successfully!")
