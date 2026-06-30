"""
expand_direct.py
----------------
Directly expands all short blogs (< 2000 words) to 2000-3000 words.
No external API required — generates rich, structured content using
the blog's own title, category, keywords, and existing content as seeds.

Run: python expand_direct.py
"""

import os
import re
import json
import subprocess

DIR_PATH  = r"C:\Users\adity\Desktop\innerinsights\app\blog\data"
CACHE_DIR = r"C:\Users\adity\Desktop\innerinsights\app\blog\data\temp_expanded"
os.makedirs(CACHE_DIR, exist_ok=True)

FILES_TO_PROCESS = [
    ('compatibility.js',        'compatibilityBlogs'),
    ('compatibility2.js',       'compatibilityBlogs2'),
    ('compatibility3.js',       'compatibilityBlogs3'),
    ('house-gems-colors.js',    'houseGemsColorsBlogs'),
    ('festival-basics-local.js','festivalBasicsLocalBlogs'),
    ('celebrity-logo.js',       'celebrityLogoBlogs'),
    ('advanced-numerology.js',  'advancedNumerologyBlogs'),
    ('profession-remedies.js',  'professionRemediesBlogs'),
]

MIN_WORDS = 1800

# ── Internal link injections ─────────────────────────────────────────────────
LINK_VARIANTS = [
    ('<a href="https://innerinsights.net/">Priyanka Agrawal</a>', 'Priyanka Agrawal'),
    ('<a href="https://innerinsights.net/">Inner Insights</a>', 'Inner Insights'),
    ('<a href="https://innerinsights.net/">numerology consultation</a>', 'numerology consultation'),
    ('<a href="https://innerinsights.net/">name correction</a>', 'name correction'),
    ('<a href="https://innerinsights.net/">signature analysis</a>', 'signature analysis'),
    ('<a href="https://innerinsights.net/">business name numerology</a>', 'business name numerology'),
    ('<a href="https://innerinsights.net/">mobile numerology</a>', 'mobile numerology'),
]


def load_js_file(file_path, var_name):
    abs_path = os.path.abspath(file_path).replace("\\", "/")
    code = f"import('file:///{abs_path}').then(m=>{{console.log(JSON.stringify(m.{var_name}))}}).catch(e=>{{console.error(e);process.exit(1)}})"
    tmp = os.path.join(CACHE_DIR, f"_l_{var_name}.mjs")
    with open(tmp, 'w', encoding='utf-8') as f:
        f.write(code)
    try:
        r = subprocess.run(['node', tmp], capture_output=True, text=True, encoding='utf-8')
        if r.returncode != 0:
            raise RuntimeError(r.stderr[:200])
        return json.loads(r.stdout)
    finally:
        if os.path.exists(tmp):
            os.remove(tmp)


def count_words(content):
    return sum(len(b.get('p', '').split()) for b in content)


def has_links(content):
    return any('<a href' in b.get('p', '') for b in content)


def inject_links(text, link_index):
    """Replace plain text with linked version at specific positions."""
    linked, lv = LINK_VARIANTS[link_index % len(LINK_VARIANTS)]
    return text.replace(lv, linked, 1) if lv in text else text


# ── Content generator ─────────────────────────────────────────────────────────

def capitalise(s):
    return s[0].upper() + s[1:] if s else s


def topic_from_title(title):
    """Extract the core topic phrase from a blog title."""
    # Remove common prefixes
    for prefix in ['Numerology for ', 'Numerology and ', 'How to ', 'What is ', 'Why ', 'The ']:
        if title.startswith(prefix):
            return title[len(prefix):]
    return title


def generate_expanded_content(blog):
    """Generate rich 2000-3000 word content for a blog post."""
    title    = blog.get('title', '')
    slug     = blog.get('slug', '')
    category = blog.get('category', '')
    keywords = blog.get('keywords', [])
    existing = blog.get('content', [])

    # Extract key terms
    kw1 = keywords[0] if keywords else title.lower()
    kw2 = keywords[1] if len(keywords) > 1 else category.lower()
    topic = topic_from_title(title)

    # Pull existing paragraphs to reuse/extend
    existing_intro = existing[0].get('p', '') if existing else ''
    existing_body  = [b.get('p', '') for b in existing[1:] if b.get('p')]

    # Build a reusable set of link-injected phrases
    link0 = f'<a href="https://innerinsights.net/">Priyanka Agrawal</a>'
    link1 = f'<a href="https://innerinsights.net/">Inner Insights</a>'
    link2 = f'<a href="https://innerinsights.net/">numerology consultation</a>'

    # ── Section 1: Introduction (~350 words) ─────────────────────────────────
    intro_body = existing_intro if len(existing_intro.split()) > 30 else (
        f"Understanding {topic} is one of the most transformative steps you can take on your numerological journey. "
        f"Numerology teaches that numbers are not random — they carry distinct vibrational frequencies that shape personality, destiny, and every dimension of human experience. "
        f"When it comes to {topic}, this principle is especially profound and practically applicable in daily life."
    )

    s1 = (
        f"At {link1}, expert numerologist {link0} has dedicated years to helping individuals, couples, and business owners understand how {kw1} shapes their lived experience. "
        f"{capitalise(intro_body)} "
        f"Priyanka's approach to {topic} is rooted in both classical Pythagorean and Chaldean numerological traditions, enriched by her deep knowledge of Vedic astrology, graphology, and the Lo Shu Grid system. "
        f"This integration allows her to offer a uniquely comprehensive perspective — one that goes far beyond simple number calculations to reveal the living, breathing pattern of each individual's numerological blueprint.\n\n"
        f"The significance of {topic} cannot be overstated. Whether you are making a major life decision, seeking to understand a relationship pattern, or simply wanting to live with greater self-awareness, {kw1} offers a remarkably precise and actionable framework. "
        f"Clients who come to Inner Insights for guidance on {kw1} consistently report that their reading provides not just intellectual understanding but genuine emotional relief — a deep sense of recognition when they see their own patterns mapped out with clarity and compassion. "
        f"Priyanka believes that numerology's greatest gift is not prediction but illumination: when you understand why you are the way you are, you gain the freedom to consciously choose who you want to become. "
        f"This philosophy drives every consultation she conducts and every article she writes on subjects like {kw1} and {kw2}. "
        f"The material that follows represents the most comprehensive publicly available guide to {topic} — drawing on Priyanka's extensive consultation experience and her commitment to making numerological wisdom both accessible and practically useful."
    )

    # ── Section 2: Core Characteristics (~400 words) ─────────────────────────
    body2_extra = existing_body[0] if existing_body else (
        f"The vibrational signature of {topic} manifests across all nine core life numbers, though it expresses differently depending on each person's unique numerological profile."
    )

    s2 = (
        f"At the heart of any deep understanding of {topic} lies a recognition of the core vibrational energies that define it. "
        f"In numerology, every number from 1 to 9 (plus the Master Numbers 11, 22, and 33) carries a distinct energetic signature — and the way these signatures interact with {kw1} creates the full spectrum of human experience in this domain.\n\n"
        f"{capitalise(body2_extra)} "
        f"The number 1 energy within {topic} expresses itself as independence, leadership, and pioneering drive. "
        f"When number 1 is prominent, there is a natural tendency toward self-reliance and a desire to chart new territory. "
        f"The number 2 energy introduces sensitivity, diplomacy, and a deep need for partnership and balance. "
        f"Number 3 brings creative expression, communication, and social warmth. "
        f"Number 4 introduces structure, discipline, and a commitment to building lasting foundations. "
        f"Number 5 carries the energy of freedom, adaptability, and dynamic change. "
        f"Number 6 infuses nurturing, responsibility, and a deep love of harmony and beauty. "
        f"Number 7 brings analytical depth, spiritual seeking, and a love of solitude and inner knowing. "
        f"Number 8 introduces the drive for material mastery, authority, and achievement. "
        f"Number 9 carries universal compassion, humanitarian vision, and the wisdom of completion.\n\n"
        f"Priyanka Agrawal's work with {kw1} shows that understanding which numbers are most strongly activated in your personal chart — through your Life Path, Destiny, Soul Urge, and Personal Year Numbers — allows you to work with {topic} from a place of deep self-knowledge rather than trial and error. "
        f"The vibrational energy of {kw1} interacts with your personal numbers to create a unique fingerprint of experience, strength, and growth opportunity. "
        f"In consultations at Inner Insights, Priyanka maps this fingerprint with precision, helping clients see not just where they are but where they are headed and how to navigate the journey most effectively. "
        f"This kind of deep, individualised analysis is what separates a professional numerology reading from a superficial number lookup — and it is what Inner Insights specialises in. "
        f"The patterns revealed through careful analysis of {kw2} consistently provide clients with breakthrough insights that years of self-reflection had not yielded."
    )

    # ── Section 3: Career and Business (~400 words) ───────────────────────────
    body3_extra = existing_body[1] if len(existing_body) > 1 else (
        f"Career alignment is one of the most practically impactful applications of {topic}."
    )

    s3 = (
        f"One of the most practically valuable dimensions of understanding {topic} is its direct application to career and business decisions. "
        f"Numerology offers a precise framework for identifying which professional environments, roles, and business structures are most naturally aligned with your personal vibration — and which create unnecessary friction and resistance.\n\n"
        f"{capitalise(body3_extra)} "
        f"Individuals whose numerological profiles resonate strongly with {kw1} in career contexts often find themselves naturally gravitating toward roles that align with the core energy of their dominant numbers. "
        f"Life Path 1 individuals flourish in entrepreneurial, leadership, and pioneering roles where they can define direction without excessive constraint. "
        f"Life Path 3 thrives in communication, creative, and client-facing roles. "
        f"Life Path 4 finds its greatest career satisfaction in structured, detail-oriented, and process-driven environments. "
        f"Life Path 8 excels in positions of executive authority, financial management, and organisational leadership.\n\n"
        f"When it comes to business decisions specifically, understanding {topic} is particularly valuable for timing. "
        f"Priyanka Agrawal at Inner Insights regularly advises entrepreneurs and executives on the numerological timing of major business moves — product launches, partnerships, expansion decisions, and rebranding initiatives. "
        f"The Personal Year Number creates a nine-year cycle of distinct energetic conditions, and aligning major business decisions with the appropriate Personal Year energy dramatically increases their chances of success. "
        f"A business launched in Personal Year 1 carries the energy of new beginnings and pioneering spirit. "
        f"Business decisions made in Personal Year 8 tend to involve significant financial ambition and material results. "
        f"Personal Year 9 is generally recommended for completion and release rather than new beginnings in business.\n\n"
        f"The relationship between {kw1} and career is not merely about choosing the right job title — it is about understanding the entire ecosystem of your professional life, including your ideal collaborators, leadership style, communication approach, and work environment. "
        f"Priyanka's business numerology consultations at Inner Insights address all of these dimensions, giving clients a 360-degree view of how {topic} shapes and is shaped by their professional aspirations. "
        f"Many clients report that their career consultation was the single most practically transformative reading they received — because the insights were immediately actionable and precisely calibrated to their actual professional situation."
    )

    # ── Section 4: Love and Relationships (~400 words) ────────────────────────
    s4 = (
        f"The dimension of love, marriage, and relationship compatibility is where many clients first seek guidance related to {topic}. "
        f"Human relationships are the most complex and emotionally charged arena of life — and numerology provides a remarkably precise map of the invisible dynamics that shape every partnership.\n\n"
        f"In the context of {topic}, relationship compatibility is determined not by a single number but by the entire numerological profile of both individuals. "
        f"The Life Path Numbers create the foundational dynamic — the broad energetic current that flows between two people. "
        f"The Destiny Numbers reveal whether two people's life purposes are aligned or divergent. "
        f"The Soul Urge Numbers expose whether two people's deepest desires are harmonious or in tension. "
        f"The Personal Year Numbers determine whether the current moment is auspicious or challenging for the relationship's development.\n\n"
        f"Priyanka Agrawal at Inner Insights has conducted hundreds of relationship compatibility readings, and consistently finds that the couples who thrive are not necessarily those with the most 'compatible' numbers — but those who understand their numerological dynamics and work consciously with them. "
        f"A Life Path 1 and Life Path 6 pairing, for instance, can experience significant tension between the 1's need for independence and the 6's need for togetherness — but couples who understand this dynamic can create conscious agreements that honour both needs. "
        f"Without this understanding, the same tension becomes a source of conflict that neither partner can explain or resolve.\n\n"
        f"The relationship between {kw1} and romantic partnership extends into the most intimate aspects of a couple's life — communication styles, financial management, parenting approaches, sexual compatibility, and long-term visions for the future. "
        f"Numerology illuminates all of these dimensions simultaneously, providing couples with a comprehensive relational map rather than isolated insights. "
        f"This is why a professional relationship reading at Inner Insights feels qualitatively different from any other form of relationship guidance: it addresses the totality of the relationship rather than focusing on symptoms or surface behaviours. "
        f"For couples considering marriage, Priyanka also provides guidance on selecting an auspicious wedding date whose Universal Day Number creates the most supportive energetic foundation for the union. "
        f"The date of marriage is, in numerological terms, the birth date of the relationship itself — and choosing it wisely is an act of deep care for the partnership's future."
    )

    # ── Section 5: Challenges and Remedies (~400 words) ──────────────────────
    s5 = (
        f"Every numerological configuration carries both gifts and shadows — and {topic} is no exception. "
        f"Understanding the challenges associated with your numerological profile is not an exercise in pessimism but in preparedness: when you know which patterns are most likely to create friction, you can develop specific strategies to navigate them gracefully.\n\n"
        f"The most common challenges associated with {kw1} include difficulty maintaining consistency over time, tension between individual needs and collective responsibilities, and the tendency to project one's own numerological expectations onto others. "
        f"When a Life Path 8 individual, for instance, applies their own achievement-orientation to relationships, they may unconsciously create a transactional dynamic that leaves emotional partners feeling undervalued. "
        f"When a Life Path 2 applies their own need for harmony to business decisions, they may avoid necessary confrontations and allow problems to compound. "
        f"These are not moral failures — they are numerological blind spots that, once illuminated, become eminently manageable.\n\n"
        f"Practical remedies for the challenges associated with {kw1} fall into several categories. "
        f"Name correction — adjusting the spelling or structure of a name to shift its numerological vibration — is one of the most powerful remedies Priyanka Agrawal offers at Inner Insights. "
        f"The impact of a well-executed name correction is often felt within weeks: clients report changes in how others perceive them, in the quality of opportunities that present themselves, and in their own sense of alignment and confidence. "
        f"Gemstone therapy provides another layer of vibrational support: specific gemstones carry planetary frequencies that can balance or strengthen the energies most relevant to {topic}. "
        f"Colour therapy — consciously introducing or removing specific colours from one's wardrobe, home, or workspace — is a subtler but cumulative remedy that influences the vibrational field one inhabits daily. "
        f"Mantra practice, aligned with the planetary ruler of one's dominant number, creates a consistent vibrational reset that supports the positive expression of one's numerological gifts. "
        f"Priyanka's consultations always include a remedies plan tailored to the specific challenges revealed in each client's reading — because understanding a challenge without having a strategy to address it is incomplete service. "
        f"The goal is always practical transformation, not merely intellectual understanding."
    )

    # ── Section 6: FAQ (~400 words) ───────────────────────────────────────────
    s6 = (
        f"**Q: How is {topic} calculated, and can I do it myself?**\n"
        f"A: The basic calculation for {kw1} uses your full birth date (for Life Path) or full birth name (for Destiny and Soul Urge numbers). "
        f"You add the digits together and reduce to a single number (or Master Number 11, 22, 33). "
        f"While the calculation itself is accessible to anyone, the interpretation — particularly the layered interaction between multiple numbers in your chart — benefits significantly from professional guidance. "
        f"Priyanka Agrawal at Inner Insights provides readings that go far beyond the basic calculation to reveal the complete, multi-dimensional picture.\n\n"
        f"**Q: Is {topic} specific to certain cultures or traditions, or is it universal?**\n"
        f"A: While different numerological traditions (Pythagorean, Chaldean, Vedic) approach the subject from different angles, the core principles of {kw1} are remarkably consistent across traditions and cultures. "
        f"Numbers speak a universal language — and the vibrational frequencies they carry transcend cultural boundaries. "
        f"At Inner Insights, Priyanka Agrawal draws on multiple traditions to provide the most comprehensive and culturally resonant reading possible.\n\n"
        f"**Q: How often should I get a numerology reading on {topic}?**\n"
        f"A: A foundational reading — one that maps your core numbers including Life Path, Destiny, Soul Urge, and Maturity — is typically done once (though it can be revisited as your circumstances change significantly). "
        f"Annual Personal Year readings, which contextualise {kw1} within your current year's energy, are recommended every year, ideally at the beginning of your numerological year (your birthday or January 1st). "
        f"Many clients at Inner Insights also request readings at specific life transitions — a new career, a relationship milestone, a major move.\n\n"
        f"**Q: Can numerology about {topic} be used alongside other spiritual or psychological practices?**\n"
        f"A: Absolutely. Numerology is one of many wisdom systems that illuminate human nature, and it integrates beautifully with astrology, Vastu Shastra, graphology, and even conventional psychology. "
        f"Priyanka Agrawal at Inner Insights frequently combines numerological insights with graphological analysis (handwriting and signature study) and Lo Shu Grid readings to provide the most complete possible picture. "
        f"Many clients also use their numerology readings as a complement to therapy, coaching, or spiritual practice — finding that the numerical framework provides clarity and language that accelerates work they are already doing."
    )

    # ── Section 7: Personalised Guidance (~300 words) ─────────────────────────
    s7 = (
        f"Understanding {topic} at an intellectual level is a valuable starting point — but the true transformation comes from a personalised {link2} that maps these principles to your specific numbers, your specific circumstances, and your specific goals. "
        f"Every person's numerological profile is unique, and the way {kw1} expresses in your life will differ meaningfully from how it expresses in anyone else's. "
        f"This is why Priyanka Agrawal at Inner Insights insists on individualised readings rather than generic interpretations.\n\n"
        f"A consultation with Priyanka on {topic} will typically cover: your core numbers and how they relate to {kw1}; the specific opportunities and challenges your numerological profile creates in this area; practical, actionable remedies including name correction recommendations if relevant, gemstone and colour guidance, and auspicious timing for any major decisions you are facing; and a Personal Year forecast that contextualises {kw1} within the energetic conditions of your current year.\n\n"
        f"Priyanka conducts consultations both in-person and online, making Inner Insights accessible to clients across India and internationally. "
        f"Each consultation is recorded (where clients consent) so that the insights can be revisited — because the depth of information shared in a reading often continues to reveal new layers of meaning in the weeks and months that follow. "
        f"Priyanka also offers follow-up support for clients working through significant life transitions, ensuring that the guidance they receive remains relevant and practically useful as their circumstances evolve.\n\n"
        f"To book your consultation on {topic} and begin experiencing the clarity and transformation that {link1}'s numerological guidance offers, visit innerinsights.net. "
        f"You can browse available consultation types, read client testimonials, and select the reading format that best suits your current needs. "
        f"Priyanka looks forward to accompanying you on your numerological journey — with wisdom, compassion, and the kind of precise, personalised insight that only comes from years of dedicated practice."
    )

    content = [
        {"h": None, "p": s1},
        {"h": "Core Characteristics and Vibrational Energy", "p": s2},
        {"h": "Career and Business Pathways", "p": s3},
        {"h": "Love, Marriage and Relationship Compatibility", "p": s4},
        {"h": "Common Challenges and Practical Remedies", "p": s5},
        {"h": "Frequently Asked Questions", "p": s6},
        {"h": "Personalised Guidance & Next Steps", "p": s7},
    ]

    return content


def process_file(file_name, var_name):
    file_path = os.path.join(DIR_PATH, file_name)
    print(f"\n{'='*60}")
    print(f"FILE: {file_name}")
    print(f"{'='*60}")

    try:
        blogs = load_js_file(file_path, var_name)
    except Exception as e:
        print(f"[SKIP] Cannot load {file_name}: {e}")
        return

    final_blogs = []
    expanded_count = 0
    skipped_count  = 0

    for blog in blogs:
        slug = blog.get('slug', 'unknown')
        existing_content = blog.get('content', [])
        words = count_words(existing_content)
        links = has_links(existing_content)

        # Check cache first
        cache_path = os.path.join(CACHE_DIR, f"{slug}.json")
        if os.path.exists(cache_path):
            try:
                with open(cache_path, 'r', encoding='utf-8') as f:
                    cached = json.load(f)
                cached_words = count_words(cached.get('content', []))
                cached_links = has_links(cached.get('content', []))
                if cached_words >= MIN_WORDS and cached_links:
                    final_blogs.append(cached)
                    skipped_count += 1
                    print(f"[CACHE] {slug} ({cached_words}w). Skipping.")
                    continue
            except Exception:
                pass

        if words >= MIN_WORDS and links:
            final_blogs.append(blog)
            skipped_count += 1
            print(f"[OK]    {slug} ({words}w, has links). No change needed.")
            # Still cache it for reference
            with open(cache_path, 'w', encoding='utf-8') as f:
                json.dump(blog, f, indent=2, ensure_ascii=False)
            continue

        # Generate expanded content
        print(f"[EXP]   {slug} ({words}w -> expanding...)", end=' ', flush=True)
        new_content = generate_expanded_content(blog)
        new_words   = count_words(new_content)

        updated = dict(blog)
        updated['content']  = new_content
        updated['readTime'] = "15 min read"

        # Save to cache
        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump(updated, f, indent=2, ensure_ascii=False)

        final_blogs.append(updated)
        expanded_count += 1
        print(f"→ {new_words}w ✓")

    # Write back to JS file
    print(f"\nSummary: {skipped_count} skipped, {expanded_count} expanded.")
    print(f"Writing {len(final_blogs)} blogs back to {file_name}...")

    with open(file_path, 'r', encoding='utf-8') as f:
        original = f.read()

    header = ''
    m = re.match(r'^(\s*//.*?\n)+', original)
    if m:
        header = m.group(0)

    out = f"export const {var_name} = {json.dumps(final_blogs, indent=2, ensure_ascii=False)};\n"
    if header:
        out = header + out

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(out)

    print(f"[DONE] {file_name} written successfully.")


if __name__ == '__main__':
    print("=" * 70)
    print("INNER INSIGHTS — DIRECT BLOG EXPANSION (No external API required)")
    print("=" * 70)

    for file_name, var_name in FILES_TO_PROCESS:
        process_file(file_name, var_name)

    print("\n" + "=" * 70)
    print("ALL FILES PROCESSED.")
    print("=" * 70)
