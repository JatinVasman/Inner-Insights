'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calculator, PenTool, Smartphone, Grid, Briefcase, Heart,
  Calendar, Star, ArrowRight, RefreshCw, Activity, User,
  AlertCircle, Sparkles, CheckCircle, XCircle, Clock,
} from 'lucide-react';
import {
  LIFE_PATH_DETAILS, CHALDEAN_MAP, PYTHAGOREAN_MAP,
  NAME_NUMBER_DETAILS, BUSINESS_NUMBER_DETAILS, MOBILE_NUMBER_DETAILS,
  COMPATIBILITY_DATA, PERSONAL_YEAR_DETAILS,
  getDigitsSum, reduceToSingleOrMaster, getCompatibilityKey,
} from '../data';
import styles from '../tools.module.css';

// ── helpers ─────────────────────────────────────────────────────────────────

function calcNameNumber(name, map) {
  let sum = 0;
  const breakdown = [];
  for (const char of name.toLowerCase()) {
    if (char === ' ') { breakdown.push({ char: '·', val: 0 }); continue; }
    const val = map[char] || 0;
    sum += val;
    breakdown.push({ char: char.toUpperCase(), val });
  }
  return { sum, nameNumber: reduceToSingleOrMaster(sum), breakdown };
}

function calcLifePath(dateStr) {
  const [year, month, day] = dateStr.split('-');
  const dSum = reduceToSingleOrMaster(getDigitsSum(day));
  const mSum = reduceToSingleOrMaster(getDigitsSum(month));
  const ySum = reduceToSingleOrMaster(getDigitsSum(year));
  return reduceToSingleOrMaster(dSum + mSum + ySum);
}

function calcPersonalYear(birthDateStr, targetYear) {
  const [, birthMonth, birthDay] = birthDateStr.split('-');
  const yearDigits = getDigitsSum(String(targetYear));
  return reduceToSingleOrMaster(
    getDigitsSum(birthDay) + getDigitsSum(birthMonth) + yearDigits,
  );
}

function calcPersonalMonth(personalYear, month) {
  return reduceToSingleOrMaster(personalYear + Number(month));
}

function calcPersonalDay(personalMonth, day) {
  return reduceToSingleOrMaster(personalMonth + Number(day));
}

// ── sub-components ───────────────────────────────────────────────────────────

function ToolHero({ icon: Icon, heading, subtitle }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroInnerLeft}>
          <Link href="/tools" className={styles.toolBreadcrumb}>
            ← All Tools
          </Link>
          <span className={styles.eyebrow}>Free Numerology Tool</span>
          <h1 className={styles.title}>{heading}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <Sparkles size={36} color="var(--accent-gold)" style={{ marginBottom: '1rem' }} />
            <h2 className={styles.ctaTitle}>Want a Deeper, Personalised Reading?</h2>
            <p className={styles.ctaDesc}>
              Free calculators are a great starting point, but a full reading covers 25+ chart elements — name vibrations, signature, mobile number, Vastu, and more. Book a private consultation with Priyanka Agrawal.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Private Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Life Path Calculator ─────────────────────────────────────────────────────

function LifePathTool() {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    if (!birthDate) return;
    const [year, month, day] = birthDate.split('-');
    const driver = reduceToSingleOrMaster(getDigitsSum(day));
    const dSum = reduceToSingleOrMaster(getDigitsSum(day));
    const mSum = reduceToSingleOrMaster(getDigitsSum(month));
    const ySum = reduceToSingleOrMaster(getDigitsSum(year));
    const lp = reduceToSingleOrMaster(dSum + mSum + ySum);
    setResult({ lp, driver, details: LIFE_PATH_DETAILS[lp] || {} });
  };

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.calculatorCard}>
          <div className={styles.calcGrid}>
            <div className={styles.formSection}>
              <Calculator size={36} className={styles.calcIcon} />
              <h2 className={styles.calcTitle}>Life Path Calculator</h2>
              <p className={styles.calcDesc}>
                Your Life Path number is the most crucial number in your numerology chart. It reveals your core personality, life lessons, and destiny based on your date of birth.
              </p>
              <form onSubmit={calculate} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="lp-dob" className={styles.label}>Date of Birth</label>
                  <input type="date" id="lp-dob" required value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)} className={styles.input} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Calculate Life Path Number
                </button>
              </form>
            </div>

            <div className={styles.resultSection}>
              {result ? (
                <div className={styles.resultContainer}>
                  <div className={styles.resultHeader}>
                    <div className={styles.numberBadge}>{result.lp}</div>
                    <div className={styles.resultHeaderMeta}>
                      <span className={styles.metaLabel}>Your Life Path Number</span>
                      <h3 className={styles.resultTitle}>{result.details.title}</h3>
                    </div>
                  </div>
                  <div className={styles.metaGrid}>
                    <div className={styles.metaItem}><strong>Driver (Birth No):</strong><span>{result.driver}</span></div>
                    <div className={styles.metaItem}><strong>Ruling Planet:</strong><span>{result.details.planet}</span></div>
                    <div className={styles.metaItem}><strong>Element:</strong><span>{result.details.element}</span></div>
                  </div>
                  <div className={styles.detailsBlock}>
                    <h4>Vibrational Profile</h4>
                    <p className={styles.traitsText}><strong>Key Traits:</strong> {result.details.traits}</p>
                    <p className={styles.descText}>{result.details.desc}</p>
                  </div>
                  <div className={styles.actionsBlock}>
                    <Link href={result.details.blog || '/blog'} className="btn-primary" style={{ flex: 1 }}>
                      Read Full Guide <ArrowRight size={14} />
                    </Link>
                    <button onClick={() => { setBirthDate(''); setResult(null); }} className="btn-outline" style={{ padding: '0.75rem' }}>
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <Activity size={48} strokeWidth={1} />
                  <p>Enter your birth date to discover your Life Path vibration and ruling planet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Name Numerology Calculator ───────────────────────────────────────────────

function NameTool() {
  const [name, setName] = useState('');
  const [system, setSystem] = useState('chaldean');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const map = system === 'chaldean' ? CHALDEAN_MAP : PYTHAGOREAN_MAP;
    const { sum, nameNumber, breakdown } = calcNameNumber(name.trim(), map);
    setResult({ name: name.trim(), system, sum, nameNumber, breakdown, details: NAME_NUMBER_DETAILS[nameNumber] || {} });
  };

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.calculatorCard}>
          <div className={styles.calcGrid}>
            <div className={styles.formSection}>
              <PenTool size={36} className={styles.calcIcon} />
              <h2 className={styles.calcTitle}>Name Numerology Calculator</h2>
              <p className={styles.calcDesc}>
                Analyse the energetic resonance of your name. Toggle between Chaldean (ancient phonetic) and Pythagorean (classical western) systems to check spelling balance.
              </p>
              <form onSubmit={calculate} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name-input" className={styles.label}>Enter Full Name</label>
                  <input type="text" id="name-input" required placeholder="e.g. Priyanka Agrawal"
                    value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.systemToggle}>
                  <button type="button" onClick={() => setSystem('chaldean')}
                    className={`${styles.toggleBtn} ${system === 'chaldean' ? styles.toggleBtnActive : ''}`}>
                    Chaldean System
                  </button>
                  <button type="button" onClick={() => setSystem('pythagorean')}
                    className={`${styles.toggleBtn} ${system === 'pythagorean' ? styles.toggleBtnActive : ''}`}>
                    Pythagorean System
                  </button>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Calculate Name Vibration
                </button>
              </form>
            </div>

            <div className={styles.resultSection}>
              {result ? (
                <div className={styles.resultContainer}>
                  <div className={styles.resultHeader}>
                    <div className={styles.numberBadge}>{result.nameNumber}</div>
                    <div className={styles.resultHeaderMeta}>
                      <span className={styles.metaLabel}>Name Vibration ({result.system === 'chaldean' ? 'Chaldean' : 'Pythagorean'})</span>
                      <h3 className={styles.resultTitle}>{result.details.title}</h3>
                    </div>
                  </div>
                  <div className={styles.metaGrid} style={{ gridTemplateColumns: '1fr' }}>
                    <div className={styles.metaItem}>
                      <strong>Total Letter Sum:</strong>
                      <span>{result.sum} → reduces to {result.nameNumber}</span>
                    </div>
                  </div>
                  <div className={styles.breakdownBlock}>
                    <h4>Letter Value Breakdown</h4>
                    <div className={styles.letterGrid}>
                      {result.breakdown.map((item, idx) => (
                        <div key={idx} className={styles.letterCard}>
                          <span className={styles.letterChar}>{item.char}</span>
                          <span className={styles.letterVal}>{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.detailsBlock}>
                    <h4>Esoteric Influence</h4>
                    <p className={styles.traitsText}><strong>Ruling Planet:</strong> {result.details.planet}</p>
                    <p className={styles.descText}>{result.details.desc}</p>
                  </div>
                  <div className={styles.actionsBlock}>
                    <Link href="/services/name-correction" className="btn-primary" style={{ flex: 1 }}>
                      Get Professional Name Correction <ArrowRight size={14} />
                    </Link>
                    <button onClick={() => { setName(''); setResult(null); }} className="btn-outline" style={{ padding: '0.75rem' }}>
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <User size={48} strokeWidth={1} />
                  <p>Enter your full name and select a calculation system to see your letter-by-letter breakdown.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Mobile Number Analyzer ───────────────────────────────────────────────────

function MobileTool() {
  const [mobile, setMobile] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const cleaned = mobile.replace(/\D/g, '');
    if (cleaned.length < 8) { alert('Please enter a valid phone number (at least 8 digits).'); return; }
    const sum = getDigitsSum(cleaned);
    const raw = reduceToSingleOrMaster(sum);
    const reduced = raw > 9 ? reduceToSingleOrMaster(raw) : raw;
    const lastDigit = Number(cleaned.slice(-1));
    let score = 50;
    if ([1, 3, 5, 6, 9].includes(reduced)) score += 25;
    if ([2, 7].includes(reduced)) score += 10;
    if ([1, 5, 6, 9].includes(lastDigit)) score += 20;
    if ([2, 7, 3].includes(lastDigit)) score += 10;
    if ([4, 8].includes(lastDigit)) score -= 10;
    score = Math.min(Math.max(score, 30), 99);
    setResult({ number: cleaned, sum, reduced, lastDigit, score, details: MOBILE_NUMBER_DETAILS[reduced] || {} });
  };

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.calculatorCard}>
          <div className={styles.calcGrid}>
            <div className={styles.formSection}>
              <Smartphone size={36} className={styles.calcIcon} />
              <h2 className={styles.calcTitle}>Mobile Number Analyzer</h2>
              <p className={styles.calcDesc}>
                Your phone number is an active energetic channel you use every day. Calculate your mobile number's vibrational sum and check if its ending digits support your career and finances.
              </p>
              <form onSubmit={calculate} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="mobile-input" className={styles.label}>Enter Mobile Number</label>
                  <input type="text" id="mobile-input" required placeholder="e.g. 9876543210"
                    value={mobile} onChange={(e) => setMobile(e.target.value)} className={styles.input} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Analyze Mobile Number
                </button>
              </form>
            </div>

            <div className={styles.resultSection}>
              {result ? (
                <div className={styles.resultContainer}>
                  <div className={styles.mobileScoreBlock}>
                    <div className={styles.radialWrapper}>
                      <svg className={styles.radialSvg} viewBox="0 0 100 100">
                        <circle className={styles.radialBg} cx="50" cy="50" r="40" />
                        <circle className={styles.radialProgress} cx="50" cy="50" r="40"
                          style={{ strokeDashoffset: 251.2 - (251.2 * result.score) / 100 }} />
                      </svg>
                      <div className={styles.radialCenter}>
                        <span className={styles.radialPercent}>{result.score}%</span>
                        <span className={styles.radialLabel}>Luck Score</span>
                      </div>
                    </div>
                    <div className={styles.mobileSummary}>
                      <span className={styles.metaLabel}>Mobile Vibration (1–9)</span>
                      <h3 className={styles.resultTitle}>{result.details.label}</h3>
                      <span className={`${styles.luckBadge} ${result.score >= 70 ? styles.luckAuspicious : styles.luckNeutral}`}>
                        {result.score >= 70 ? 'Highly Auspicious' : 'Neutral / Mixed'}
                      </span>
                    </div>
                  </div>
                  <div className={styles.metaGrid}>
                    <div className={styles.metaItem}><strong>Digits Sum:</strong><span>{result.sum} → {result.reduced}</span></div>
                    <div className={styles.metaItem}>
                      <strong>Ending Digit:</strong>
                      <span>{result.lastDigit} ({[4, 8].includes(result.lastDigit) ? 'Caution' : 'Auspicious'})</span>
                    </div>
                  </div>
                  <div className={styles.detailsBlock}>
                    <h4>Vibrational Influence</h4>
                    <p className={styles.descText}>{result.details.desc}</p>
                    {[4, 8].includes(result.lastDigit) && (
                      <div className={styles.warningAlert}>
                        <AlertCircle size={16} />
                        <span>Ending in {result.lastDigit} can attract financial delays or unexpected blockages in mobile numerology.</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.actionsBlock}>
                    <Link href="/contact" className="btn-primary" style={{ flex: 1 }}>
                      Book Mobile Consultation <ArrowRight size={14} />
                    </Link>
                    <button onClick={() => { setMobile(''); setResult(null); }} className="btn-outline" style={{ padding: '0.75rem' }}>
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <Smartphone size={48} strokeWidth={1} />
                  <p>Enter your active phone number to calculate your numerology luck score and vibration type.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Lo Shu Grid Generator ────────────────────────────────────────────────────

function LoShuTool() {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState(null);
  const [hoveredPlane, setHoveredPlane] = useState(null);

  const GRID_LAYOUT = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
  const PLANES = [
    { name: 'Mental Plane (Thought)', numbers: [4, 9, 2], desc: 'Strong intellect, memory, and cognitive planning.' },
    { name: 'Emotional Plane (Heart)', numbers: [3, 5, 7], desc: 'Intense intuition, emotional depth, and empathy.' },
    { name: 'Practical Plane (Body)', numbers: [8, 1, 6], desc: 'Physical endurance, organisation, and material success.' },
    { name: 'Thought Plane (Growth)', numbers: [4, 3, 8], desc: 'Detailed planning, logical structures, and vision.' },
    { name: 'Will Power Plane', numbers: [9, 5, 1], desc: 'Determination, focus, courage, and grit.' },
    { name: 'Action Plane', numbers: [2, 7, 6], desc: 'Dynamic execution, speed, and adaptability.' },
    { name: 'Success Diagonal (Golden)', numbers: [4, 5, 6], desc: 'Favourable luck, financial growth, and all-round success.' },
    { name: 'Mystical Diagonal (Silver)', numbers: [2, 5, 8], desc: 'Deep spiritual connection, intuition, and healing ability.' },
  ];
  const REMEDIES = {
    1: 'Lack of independence. Remedy: Keep a red running horses image on the North wall.',
    2: 'Lack of emotional balance. Remedy: Place a rose quartz crystal in the South-West.',
    3: 'Lack of wisdom or growth. Remedy: Hang a green aventurine or plant bamboo in the East.',
    4: 'Lack of planning or organisation. Remedy: Wear a green tourmaline bracelet or place wooden items in North-East.',
    5: 'Lack of home stability. Remedy: Keep a yellow jasper crystal tree in the centre of the home.',
    6: 'Lack of helper support. Remedy: Wear a clear quartz or use silver accents in North-West.',
    7: 'Lack of research focus. Remedy: Use metal wind chimes on the West wall.',
    8: 'Lack of savings or patience. Remedy: Keep a black tourmaline gemstone.',
    9: 'Lack of fame or energy. Remedy: Light a red candle in the South or keep a copper item.',
  };

  const generate = (e) => {
    e.preventDefault();
    const [year, month, day] = dob.split('-');
    const driver = reduceToSingleOrMaster(getDigitsSum(day));
    const conductor = reduceToSingleOrMaster(getDigitsSum(day) + getDigitsSum(month) + getDigitsSum(year));
    const dobStr = `${day}${month}${year}${driver}${conductor}`.replace(/\D/g, '');
    const counts = {};
    for (const c of dobStr) counts[c] = (counts[c] || 0) + 1;
    const present = Object.keys(counts).map(Number);
    const activePlanes = PLANES.map((p) => {
      const cnt = p.numbers.filter((n) => present.includes(n)).length;
      return { ...p, presentCount: cnt, isComplete: cnt === 3 };
    });
    const missing = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((n) => !present.includes(n));
    setResult({ driver, conductor, counts, activePlanes, missing });
  };

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.calculatorCard}>
          <div className={styles.calcGrid}>
            <div className={styles.formSection}>
              <Grid size={36} className={styles.calcIcon} />
              <h2 className={styles.calcTitle}>Lo Shu Grid Generator</h2>
              <p className={styles.calcDesc}>
                The Lo Shu Grid is a 3×3 magic square used in Chinese numerology. Enter your date of birth to generate your grid, analyse completed planes, and receive Vastu remedies for missing numbers.
              </p>
              <form onSubmit={generate} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="grid-dob" className={styles.label}>Date of Birth</label>
                  <input type="date" id="grid-dob" required value={dob}
                    onChange={(e) => setDob(e.target.value)} className={styles.input} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Generate Lo Shu Grid
                </button>
              </form>
            </div>

            <div className={styles.resultSection}>
              {result ? (
                <div className={styles.resultContainer}>
                  <div className={styles.loshuFlex}>
                    <div className={styles.loshuGrid}>
                      {GRID_LAYOUT.map((row, rIdx) => (
                        <div key={rIdx} className={styles.loshuRow}>
                          {row.map((num) => {
                            const count = result.counts[num] || 0;
                            const hl = hoveredPlane?.numbers.includes(num);
                            return (
                              <div key={num} className={`${styles.loshuCell} ${count > 0 ? styles.loshuCellPresent : styles.loshuCellEmpty} ${hl ? styles.loshuCellHighlight : ''}`}>
                                <span className={styles.loshuWatermark}>{num}</span>
                                {count > 0 && (
                                  <div className={styles.loshuCellContent}>
                                    <span className={styles.loshuVal}>{num}</span>
                                    {count > 1 && <span className={styles.loshuCount}>×{count}</span>}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                    <div className={styles.loshuMeta}>
                      <div className={styles.metaItem}><strong>Driver:</strong><span>{result.driver}</span></div>
                      <div className={styles.metaItem}><strong>Conductor:</strong><span>{result.conductor}</span></div>
                    </div>
                  </div>
                  <div className={styles.breakdownBlock}>
                    <h4>Completed Planes (hover to highlight)</h4>
                    <div className={styles.planeList}>
                      {result.activePlanes.map((p, i) => (
                        <div key={i}
                          className={`${styles.planeCard} ${p.isComplete ? styles.planeCardComplete : styles.planeCardIncomplete}`}
                          onMouseEnter={() => setHoveredPlane(p)} onMouseLeave={() => setHoveredPlane(null)}>
                          <div className={styles.planeHeader}>
                            <strong>{p.name}</strong>
                            <span className={p.isComplete ? styles.planeStatusComplete : styles.planeStatusIncomplete}>
                              {p.isComplete ? 'Complete' : `${Math.round((p.presentCount / 3) * 100)}%`}
                            </span>
                          </div>
                          <p className={styles.planeDesc}>{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {result.missing.length > 0 && (
                    <div className={styles.remedyBlock}>
                      <h4>Missing Numbers &amp; Vastu Remedies</h4>
                      <div className={styles.remedyList}>
                        {result.missing.map((n) => (
                          <div key={n} className={styles.remedyItem}>
                            <span className={styles.remedyBadge}>Missing {n}</span>
                            <p className={styles.remedyText}>{REMEDIES[n]}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className={styles.actionsBlock}>
                    <Link href="/contact" className="btn-primary" style={{ flex: 1 }}>
                      Get Full Grid Consultation <ArrowRight size={14} />
                    </Link>
                    <button onClick={() => { setDob(''); setResult(null); }} className="btn-outline" style={{ padding: '0.75rem' }}>
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <Grid size={48} strokeWidth={1} />
                  <p>Enter your birth date to generate your interactive 3×3 Lo Shu Grid and analyse completed planes.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Business Name Numerology ─────────────────────────────────────────────────

function BusinessTool() {
  const [bizName, setBizName] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    if (!bizName.trim()) return;
    const chald = calcNameNumber(bizName.trim(), CHALDEAN_MAP);
    const pyth = calcNameNumber(bizName.trim(), PYTHAGOREAN_MAP);
    const primaryNum = chald.nameNumber;
    const details = BUSINESS_NUMBER_DETAILS[primaryNum > 9 ? reduceToSingleOrMaster(primaryNum) : primaryNum] || {};
    setResult({ name: bizName.trim(), chald, pyth, primaryNum, details });
  };

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.calculatorCard}>
          <div className={styles.calcGrid}>
            <div className={styles.formSection}>
              <Briefcase size={36} className={styles.calcIcon} />
              <h2 className={styles.calcTitle}>Business Name Numerology</h2>
              <p className={styles.calcDesc}>
                Your business name is its permanent vibrational identity. A misaligned name creates subtle friction in sales, partnerships, and brand perception. Check yours now.
              </p>
              <form onSubmit={calculate} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="biz-name" className={styles.label}>Business Name</label>
                  <input type="text" id="biz-name" required placeholder="e.g. Inner Insights"
                    value={bizName} onChange={(e) => setBizName(e.target.value)} className={styles.input} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Analyse Business Name
                </button>
              </form>
              <p className={styles.calcNote}>Analysis uses Chaldean numerology (primary) and Pythagorean (secondary) for comparison.</p>
            </div>

            <div className={styles.resultSection}>
              {result ? (
                <div className={styles.resultContainer}>
                  <div className={styles.resultHeader}>
                    <div className={styles.numberBadge}>{result.primaryNum}</div>
                    <div className={styles.resultHeaderMeta}>
                      <span className={styles.metaLabel}>Business Name Number (Chaldean)</span>
                      <h3 className={styles.resultTitle}>{result.details.title}</h3>
                    </div>
                  </div>
                  <div className={styles.metaGrid}>
                    <div className={styles.metaItem}><strong>Chaldean Sum:</strong><span>{result.chald.sum} → {result.chald.nameNumber}</span></div>
                    <div className={styles.metaItem}><strong>Pythagorean Sum:</strong><span>{result.pyth.sum} → {result.pyth.nameNumber}</span></div>
                    <div className={styles.metaItem}><strong>Ruling Planet:</strong><span>{result.details.planet}</span></div>
                  </div>

                  <div className={styles.scoreBarBlock}>
                    <div className={styles.scoreBarLabel}>
                      <span>Auspiciousness Score</span>
                      <strong>{result.details.score}%</strong>
                    </div>
                    <div className={styles.scoreBarTrack}>
                      <div className={styles.scoreBarFill} style={{ width: `${result.details.score}%`, backgroundColor: result.details.score >= 80 ? 'var(--accent-gold)' : result.details.score >= 65 ? '#7cb9e8' : '#e88' }} />
                    </div>
                  </div>

                  <div className={styles.detailsBlock}>
                    <h4>Business Energy</h4>
                    <p className={styles.traitsText}><strong>Best For:</strong> {result.details.bestFor}</p>
                    <p className={styles.descText}>{result.details.desc}</p>
                  </div>
                  <div className={styles.actionsBlock}>
                    <Link href="/contact" className="btn-primary" style={{ flex: 1 }}>
                      Get Professional Business Name Analysis <ArrowRight size={14} />
                    </Link>
                    <button onClick={() => { setBizName(''); setResult(null); }} className="btn-outline" style={{ padding: '0.75rem' }}>
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <Briefcase size={48} strokeWidth={1} />
                  <p>Enter your business name to see its numerological vibration, ruling planet, and auspiciousness score.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Marriage Compatibility ────────────────────────────────────────────────────

function CompatibilityTool() {
  const [dob1, setDob1] = useState('');
  const [dob2, setDob2] = useState('');
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const lp1 = calcLifePath(dob1);
    const lp2 = calcLifePath(dob2);
    const key = getCompatibilityKey(lp1, lp2);
    const compat = COMPATIBILITY_DATA[key] || { score: 72, label: 'Good Potential', desc: 'This pairing carries balanced energy with strong potential for growth when both partners communicate openly and respect each other\'s core nature.', strengths: 'Mutual respect, potential for growth', challenges: 'Different approaches to life may need conscious bridging' };
    setResult({ lp1, lp2, name1: name1 || 'Person 1', name2: name2 || 'Person 2', compat });
  };

  const scoreColor = (s) => s >= 85 ? '#4caf82' : s >= 70 ? 'var(--accent-gold)' : '#e88a5a';

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.calculatorCard}>
          <div className={styles.calcGrid}>
            <div className={styles.formSection}>
              <Heart size={36} className={styles.calcIcon} />
              <h2 className={styles.calcTitle}>Marriage Compatibility</h2>
              <p className={styles.calcDesc}>
                Compare two birth dates to discover your numerological compatibility for love, marriage, and long-term partnership. Based on Life Path Number analysis.
              </p>
              <form onSubmit={calculate} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="compat-name1" className={styles.label}>Your Name (optional)</label>
                  <input type="text" id="compat-name1" placeholder="e.g. Priya"
                    value={name1} onChange={(e) => setName1(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="compat-dob1" className={styles.label}>Your Date of Birth</label>
                  <input type="date" id="compat-dob1" required value={dob1}
                    onChange={(e) => setDob1(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="compat-name2" className={styles.label}>Partner&apos;s Name (optional)</label>
                  <input type="text" id="compat-name2" placeholder="e.g. Rahul"
                    value={name2} onChange={(e) => setName2(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="compat-dob2" className={styles.label}>Partner&apos;s Date of Birth</label>
                  <input type="date" id="compat-dob2" required value={dob2}
                    onChange={(e) => setDob2(e.target.value)} className={styles.input} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Check Compatibility
                </button>
              </form>
            </div>

            <div className={styles.resultSection}>
              {result ? (
                <div className={styles.resultContainer}>
                  <div className={styles.compatHeader}>
                    <div className={styles.compatPerson}>
                      <div className={styles.compatBadge} style={{ borderColor: scoreColor(result.compat.score) }}>{result.lp1}</div>
                      <span>{result.name1}</span>
                      <small>Life Path {result.lp1}</small>
                    </div>
                    <div className={styles.compatScore}>
                      <span className={styles.compatScoreNum} style={{ color: scoreColor(result.compat.score) }}>{result.compat.score}%</span>
                      <span className={styles.compatScoreLabel}>{result.compat.label}</span>
                    </div>
                    <div className={styles.compatPerson}>
                      <div className={styles.compatBadge} style={{ borderColor: scoreColor(result.compat.score) }}>{result.lp2}</div>
                      <span>{result.name2}</span>
                      <small>Life Path {result.lp2}</small>
                    </div>
                  </div>

                  <div className={styles.scoreBarBlock}>
                    <div className={styles.scoreBarLabel}><span>Compatibility Score</span><strong>{result.compat.score}%</strong></div>
                    <div className={styles.scoreBarTrack}>
                      <div className={styles.scoreBarFill} style={{ width: `${result.compat.score}%`, backgroundColor: scoreColor(result.compat.score) }} />
                    </div>
                  </div>

                  <div className={styles.detailsBlock}>
                    <p className={styles.descText}>{result.compat.desc}</p>
                    <div className={styles.compatTwoCol}>
                      <div className={styles.compatStrength}>
                        <CheckCircle size={16} color="#4caf82" />
                        <div>
                          <strong>Strengths</strong>
                          <p>{result.compat.strengths}</p>
                        </div>
                      </div>
                      <div className={styles.compatChallenge}>
                        <XCircle size={16} color="#e88a5a" />
                        <div>
                          <strong>Challenges</strong>
                          <p>{result.compat.challenges}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actionsBlock}>
                    <Link href="/contact" className="btn-primary" style={{ flex: 1 }}>
                      Book Compatibility Consultation <ArrowRight size={14} />
                    </Link>
                    <button onClick={() => { setDob1(''); setDob2(''); setName1(''); setName2(''); setResult(null); }} className="btn-outline" style={{ padding: '0.75rem' }}>
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <Heart size={48} strokeWidth={1} />
                  <p>Enter both birth dates to calculate your numerological compatibility score and relationship insights.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Personal Day & Year Calculator ───────────────────────────────────────────

function PersonalDayTool() {
  const [dob, setDob] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const td = targetDate || new Date().toISOString().slice(0, 10);
    const [tYear, tMonth, tDay] = td.split('-');
    const py = calcPersonalYear(dob, Number(tYear));
    const pm = calcPersonalMonth(py, Number(tMonth));
    const pd = calcPersonalDay(pm, Number(tDay));
    const pyDetails = PERSONAL_YEAR_DETAILS[py] || {};
    setResult({ py, pm, pd, pyDetails, targetDate: td });
  };

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.calculatorCard}>
          <div className={styles.calcGrid}>
            <div className={styles.formSection}>
              <Clock size={36} className={styles.calcIcon} />
              <h2 className={styles.calcTitle}>Personal Day & Year Calculator</h2>
              <p className={styles.calcDesc}>
                Every year, month, and day carries a unique numerological energy cycle. Knowing your Personal Year, Month, and Day helps you make decisions at the right time.
              </p>
              <form onSubmit={calculate} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="pd-dob" className={styles.label}>Your Date of Birth</label>
                  <input type="date" id="pd-dob" required value={dob}
                    onChange={(e) => setDob(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="pd-target" className={styles.label}>Date to Check (leave blank for today)</label>
                  <input type="date" id="pd-target" value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)} className={styles.input} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Calculate My Personal Cycles
                </button>
              </form>
            </div>

            <div className={styles.resultSection}>
              {result ? (
                <div className={styles.resultContainer}>
                  <div className={styles.cycleRow}>
                    <div className={styles.cycleBadge}>
                      <span className={styles.cycleBadgeNum}>{result.py}</span>
                      <span className={styles.cycleBadgeLabel}>Personal Year</span>
                    </div>
                    <div className={styles.cycleBadge}>
                      <span className={styles.cycleBadgeNum}>{result.pm}</span>
                      <span className={styles.cycleBadgeLabel}>Personal Month</span>
                    </div>
                    <div className={styles.cycleBadge} style={{ borderColor: 'var(--accent-gold)' }}>
                      <span className={styles.cycleBadgeNum} style={{ color: 'var(--accent-gold)' }}>{result.pd}</span>
                      <span className={styles.cycleBadgeLabel}>Personal Day</span>
                    </div>
                  </div>

                  <div className={styles.detailsBlock}>
                    <h4>Personal Year {result.py} — {result.pyDetails.title}</h4>
                    <p className={styles.traitsText}><strong>Theme:</strong> {result.pyDetails.theme}</p>
                    <p className={styles.descText}>{result.pyDetails.desc}</p>
                    <div className={styles.compatTwoCol}>
                      <div className={styles.compatStrength}>
                        <CheckCircle size={16} color="#4caf82" />
                        <div>
                          <strong>Focus on</strong>
                          <p>{result.pyDetails.doThis}</p>
                        </div>
                      </div>
                      <div className={styles.compatChallenge}>
                        <XCircle size={16} color="#e88a5a" />
                        <div>
                          <strong>Avoid</strong>
                          <p>{result.pyDetails.avoidThis}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actionsBlock}>
                    <Link href="/contact" className="btn-primary" style={{ flex: 1 }}>
                      Get Full Year Forecast <ArrowRight size={14} />
                    </Link>
                    <button onClick={() => { setDob(''); setTargetDate(''); setResult(null); }} className="btn-outline" style={{ padding: '0.75rem' }}>
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <Calendar size={48} strokeWidth={1} />
                  <p>Enter your birth date to discover your current Personal Year, Month, and Day numerological cycles.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Signature Analysis Info Page ─────────────────────────────────────────────

function SignatureTool() {
  const traits = [
    { label: 'Underlined signature', meaning: 'Self-support and inner confidence. Double underline = strong determination.' },
    { label: 'Large signature', meaning: 'Need for recognition and strong outward projection of confidence.' },
    { label: 'Small signature', meaning: 'Modesty, precision, or a more private, introverted nature.' },
    { label: 'Illegible signature', meaning: 'Desire for privacy, complex inner world, or fast executive thinking.' },
    { label: 'Upward-slanting', meaning: 'Optimism, ambition, and a positive, forward-looking outlook.' },
    { label: 'Downward-slanting', meaning: 'Fatigue, pessimism, or a current period of low energy.' },
    { label: 'Full stop at end', meaning: 'Desire for finality and control; strong personal boundaries.' },
    { label: 'Encircled signature', meaning: 'Self-protection; may indicate emotional defensiveness or introversion.' },
  ];

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.calculatorCard} style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ padding: '2.5rem', textAlign: 'center' }}>
            <Star size={48} className={styles.calcIcon} style={{ margin: '0 auto 1rem' }} />
            <h2 className={styles.calcTitle}>What Does Your Signature Reveal?</h2>
            <p className={styles.calcDesc} style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
              Your signature is your public brand — it encodes your self-image, ambition, confidence, and subconscious beliefs about your own worth. Unlike regular handwriting (which reveals your private self), your signature is the face you present to the world.
            </p>
          </div>

          <div style={{ padding: '0 2.5rem 2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Quick Signature Trait Guide
            </h3>
            <div className={styles.signatureTraitGrid}>
              {traits.map((t, i) => (
                <div key={i} className={styles.signatureTrait}>
                  <strong className={styles.signatureTraitLabel}>{t.label}</strong>
                  <p className={styles.signatureTraitMeaning}>{t.meaning}</p>
                </div>
              ))}
            </div>

            <div className={styles.signatureCta}>
              <h3>Get a Professional Signature Analysis</h3>
              <p>
                A full analysis covers 25+ graphological parameters including baseline, pressure, loops, speed, rhythm, margins, connections, and your signature&apos;s numerological value — delivered in a detailed written report.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="/contact" className="btn-primary">
                  Book a Signature Analysis <ArrowRight size={14} />
                </Link>
                <Link href="/services/signature-analysis" className="btn-outline">
                  Learn About the Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main Renderer ────────────────────────────────────────────────────────────

const TOOL_ICONS = {
  'life-path-calculator': Calculator,
  'name-numerology': PenTool,
  'mobile-number-analysis': Smartphone,
  'lo-shu-grid': Grid,
  'business-numerology': Briefcase,
  'marriage-compatibility': Heart,
  'personal-day-calculator': Calendar,
  'signature-analysis': Star,
};

export default function ToolRenderer({ slug, heading, subtitle }) {
  const Icon = TOOL_ICONS[slug] || Calculator;
  return (
    <>
      <ToolHero icon={Icon} heading={heading} subtitle={subtitle} />
      {slug === 'life-path-calculator' && <LifePathTool />}
      {slug === 'name-numerology' && <NameTool />}
      {slug === 'mobile-number-analysis' && <MobileTool />}
      {slug === 'lo-shu-grid' && <LoShuTool />}
      {slug === 'business-numerology' && <BusinessTool />}
      {slug === 'marriage-compatibility' && <CompatibilityTool />}
      {slug === 'personal-day-calculator' && <PersonalDayTool />}
      {slug === 'signature-analysis' && <SignatureTool />}
      <CtaBanner />
    </>
  );
}
