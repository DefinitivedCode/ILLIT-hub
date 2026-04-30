/* =============================================
   ILLIT HUB — script.js  v2
   ============================================= */

// ─────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = themeToggle.querySelector('.theme-icon');

if (localStorage.getItem('illit-theme') === 'dark') {
  document.body.classList.add('dark');
  themeIcon.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeIcon.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('illit-theme', isDark ? 'dark' : 'light');
});
document.addEventListener('keydown', e => {
  if (e.key === 'd' && !e.target.matches('input, textarea')) themeToggle.click();
});

// ─────────────────────────────────────────────
// MOBILE NAV
// ─────────────────────────────────────────────
const navBurger = document.getElementById('navBurger');
const navLinks  = document.getElementById('navLinks');
if (navBurger && navLinks) {
  navBurger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navBurger.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
  });
  navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ─────────────────────────────────────────────
// MEMBER DATA 
// ─────────────────────────────────────────────
const MEMBERS = {
  yunah: {
    name: 'Yunah',   kr: '유나 · Noh Yunah (노윤아)',
    role: 'Lead Vocalist · Lead Dancer',
    fallback: '유나',
    colour: { from: '#93c5fd', to: '#60a5fa' },
    tags: ['Jan 15, 2004', '🇰🇷 Korean', 'Capricorn', 'ENTP'],
    facts: [
      { icon: '🏋️', text: '<strong>Training:</strong> ~6 years — the longest of any ILLIT member.' },
      { icon: '✍️', text: '<strong>Songwriter:</strong> Co-wrote "Do the Dance" with LE SSERAFIM\'s Huh Yunjin.' },
      { icon: '🎤', text: '<strong>Collab:</strong> Featured on "See U Tonight" with Minju for Kylie Cantrall\'s debut EP <em>B.O.Y</em> (2025).' },
      { icon: '🐆', text: '<strong>Emoji:</strong> 🐆 Cheetah. Favourite food: anything, except spicy food.' },
      { icon: '💬', text: '<strong>Motto:</strong> "Time heals all wounds."' },
      { icon: '🎬', text: '<strong>Loves:</strong> Historical films, especially Korean history. Can imitate Crayon Shin-chan\'s voice.' },
    ],
  },
  minju: {
    name: 'Minju',   kr: '민주 · Park Minju (박민주)',
    role: 'Main Vocalist · Main Rapper · Visual',
    fallback: '민주',
    colour: { from: '#c4b5fd', to: '#a78bfa' },
    tags: ['May 11, 2004', '🇰🇷 Korean', 'Taurus', 'ISTJ'],
    facts: [
      { icon: '🎓', text: '<strong>Former trainee:</strong> YG Entertainment — close friends with BABYMONSTER members from those days.' },
      { icon: '📺', text: '<strong>Music Bank MC:</strong> Hosted KBS Music Bank from October 2024 to January 2026.' },
      { icon: '🎤', text: '<strong>Collab:</strong> Featured on "See U Tonight" with Yunah for Kylie Cantrall\'s debut EP <em>B.O.Y</em> (2025).' },
      { icon: '🐰', text: '<strong>Nickname:</strong> "Dumpling" (round cheeks) · Emoji: 🐰 Bunny.' },
      { icon: '🎻', text: '<strong>Hidden talent:</strong> Plays the violin.' },
      { icon: '🎵', text: '<strong>Inspiration:</strong> Looks up to DPR Ian as a musical role model.' },
    ],
  },
  moka: {
    name: 'Moka',    kr: '모카 · Kim Moka (김목화)',
    role: 'Lead Dancer · Lead Rapper',
    fallback: '茂果',
    colour: { from: '#6ee7b7', to: '#34d399' },
    tags: ['Jul 6, 2004', '🇯🇵 Japanese', 'Cancer', 'INFP'],
    facts: [
      { icon: '💛', text: '<strong>Health hiatus:</strong> On April 20, 2026, Belift Lab announced Moka is taking a temporary break to focus on recovery. Sending her lots of love 🫶' },
      { icon: '🏢', text: '<strong>Training:</strong> HYBE Japan; attended Dance School Bridge.' },
      { icon: '👩‍👧', text: '<strong>Nickname:</strong> "Mother" of the group — known for her warmth and care.' },
      { icon: '💅', text: '<strong>Role model:</strong> BLACKPINK\'s Jennie. Her mother introduced her to K-pop via BIGBANG.' },
      { icon: '🐱', text: 'Loves cats — if she could have a pet, it would be a cat. Also loves movies.' },
      { icon: '💬', text: '<strong>Motto:</strong> "Even if it\'s hard now, if I work hard, better days will come."' },
    ],
  },
  wonhee: {
    name: 'Wonhee',  kr: '원희 · Lee Wonhee (이원희)',
    role: 'Lead Vocalist · Center · Face of the Group',
    fallback: '원희',
    colour: { from: '#f9a8d4', to: '#f472b6' },
    tags: ['Jun 26, 2007', '🇰🇷 Korean', 'Cancer', 'ISFP'],
    facts: [
      { icon: '🚌', text: 'Discovered by a HYBE scout at a <strong>bus terminal</strong> — she almost thought it was suspicious!' },
      { icon: '🏆', text: 'Placed <strong>1st on R U Next?</strong> with only 2 months of training before the show.' },
      { icon: '⭐', text: 'Known as ILLIT\'s "vocal fairy" for her soft yet powerful voice.' },
      { icon: '🏸', text: '<strong>Sporty:</strong> Was the head of her school\'s sports department. Loves badminton.' },
      { icon: '🎤', text: '<strong>Fave karaoke song:</strong> "Into the New World" by Girls\' Generation.' },
      { icon: '🎨', text: '<strong>Fave colours:</strong> Sky blue and ivory. Loves making keychains.' },
    ],
  },
  iroha: {
    name: 'Iroha',   kr: '이로하 · Hokazono Iroha (外園 いろは)',
    role: 'Main Dancer · Maknae (Youngest)',
    fallback: 'いろは',
    colour: { from: '#fde68a', to: '#fbbf24' },
    tags: ['Feb 4, 2008', '🇯🇵 Japanese', 'Aquarius', 'INFJ'],
    facts: [
      { icon: '💃', text: 'Has been <strong>dancing since age 3</strong>. Former JYP Entertainment trainee — one of the most experienced performers in ILLIT.' },
      { icon: '👶', text: 'Maknae (youngest) of ILLIT at 158 cm — but her stage presence commands every room.' },
      { icon: '🌸', text: 'Selected by both the production team AND fan votes on R U Next?.' },
      { icon: '👔', text: '<strong>Unexpected hobby:</strong> Ironing clothes 🧺.' },
      { icon: '🎌', text: 'Close friends with members of NiziU. Born in Tokyo, Japan.' },
      { icon: '🌟', text: 'Born in Tokyo and raised between Japan and Korea — her bilingual fluency makes her a key bridge for ILLIT\'s Japanese promotions.' },
    ],
  },
};

// ─────────────────────────────────────────────
// MEMBER CARD COLOURS + CLICK → MODAL
// ─────────────────────────────────────────────
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');

function openModal(key) {
  const m = MEMBERS[key];
  if (!m) return;

  // Fill modal
  document.getElementById('modalRole').textContent = m.role;
  document.getElementById('modalName').textContent = m.name;
  document.getElementById('modalKr').textContent   = m.kr;

  const img     = document.getElementById('modalImg');
  const imgFall = document.getElementById('modalImgFallback');
  img.src          = `assets/${key}.jpg`;
  img.alt          = m.name;
  img.style.display = 'block';
  imgFall.style.display = 'none';
  imgFall.textContent   = m.fallback;
  imgFall.style.background = `linear-gradient(135deg, ${m.colour.from}44, ${m.colour.to}88)`;
  imgFall.style.color       = m.colour.to;

  // Image wrap gradient
  document.querySelector('.modal-img-wrap').style.background =
    `linear-gradient(135deg, ${m.colour.from}44, ${m.colour.to}66)`;

  // Tags
  const tagsEl = document.getElementById('modalTags');
  tagsEl.innerHTML = m.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // Facts
  const factsEl = document.getElementById('modalFacts');
  factsEl.innerHTML = m.facts.map(f =>
    `<div class="fact-row">
       <span class="fact-icon">${f.icon}</span>
       <span class="fact-text">${f.text}</span>
     </div>`
  ).join('');

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.member-card').forEach(card => {
  const key     = card.dataset.member;
  const colours = MEMBERS[key]?.colour;
  const fallback = card.querySelector('.member-img-fallback');

  if (colours && fallback) {
    fallback.style.background = `linear-gradient(135deg, ${colours.from}44, ${colours.to}88)`;
    fallback.style.color = colours.to;
  }

  card.addEventListener('click', () => openModal(key));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(key); });

  card.addEventListener('mouseenter', () => {
    if (colours) {
      card.style.borderColor = colours.from;
      card.style.boxShadow   = `0 20px 48px ${colours.from}44`;
    }
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = '';
    card.style.boxShadow   = '';
  });
});

// ─────────────────────────────────────────────
// SHARE BUTTON on member cards
// ─────────────────────────────────────────────
const SHARE_ICON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

const shareToast = document.getElementById('shareToast');
let toastTimer;

// Initialise all share buttons with the SVG icon
document.querySelectorAll('.member-share-btn').forEach(btn => { btn.innerHTML = SHARE_ICON; });

function showToast(msg) {
  shareToast.textContent = msg;
  shareToast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => shareToast.classList.remove('show'), 2500);
}

document.querySelectorAll('.member-share-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation(); // don't open modal
    const key = btn.dataset.share;
    const m   = MEMBERS[key];
    if (!m) return;

    const text =
`✦ ILLIT · ${m.name} (${m.kr.split('·')[0].trim()})
Role: ${m.role}
Born: ${m.tags[0]} · ${m.tags[1]}

${m.facts[0].text.replace(/<[^>]+>/g, '')}
${m.facts[1].text.replace(/<[^>]+>/g, '')}

#ILLIT #${m.name} #GLLIT
🌸 illit-hub`;

    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add('copied');
      btn.innerHTML = '&#10003;';
      showToast(`✦ ${m.name}'s card copied to clipboard!`);
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = SHARE_ICON;
      }, 2000);
    }).catch(() => {
      showToast('Could not copy — try selecting text manually');
    });
  });
});

// ─────────────────────────────────────────────
// SCHEDULE DATA  (real, researched)
// All events with date: new Date(YYYY, M-1, D)
// ─────────────────────────────────────────────
const SCHEDULE = [
  // — Past milestones —
  { date: new Date(2024, 2, 25),  label: 'DEBUT — SUPER REAL ME',              sub: 'Global album release + showcase · "Magnetic"',           tag: 'Release',   type: 'release'   },
  { date: new Date(2024, 9, 21),  label: 'I\'ll Like You — Release',            sub: '2nd Mini Album · "Cherish (My Love)"',                   tag: 'Release',   type: 'release'   },
  { date: new Date(2024, 10, 22), label: '"Baby It\'s Both" feat. Ava Max',     sub: 'English version of "Tick-Tack"',                         tag: 'Single',    type: 'release'   },
  { date: new Date(2024, 10, 30), label: 'Melon Music Awards 2024',             sub: 'Seoul — Best New Artist win 🏆',                         tag: 'Award',     type: 'award'     },
  { date: new Date(2024, 11, 8),  label: 'MAMA Awards 2024',                    sub: 'Los Angeles, USA',                                       tag: 'Award',     type: 'award'     },
  { date: new Date(2025, 1, 14),  label: '"Almond Chocolate" — JP Release',     sub: 'First original Japanese song (OST)',                     tag: 'Release',   type: 'release'   },
  { date: new Date(2025, 2, 25),  label: 'ILLIT 1st Anniversary ✦',             sub: 'One year since debut!',                                  tag: 'Milestone', type: 'milestone' },
  { date: new Date(2025, 5, 16),  label: 'bomb — Release',                      sub: '3rd Mini Album · "Do the Dance"',                       tag: 'Release',   type: 'release'   },
  { date: new Date(2025, 8, 1),   label: 'Japanese Debut — Toki Yo Tomare',     sub: 'First Japanese maxi single',                            tag: 'Release',   type: 'release'   },
  { date: new Date(2025, 10, 24), label: 'Not Cute Anymore — Release',          sub: '1st Single Album',                                      tag: 'Release',   type: 'release'   },
  { date: new Date(2025, 10, 28), label: 'MAMA Awards 2025 — Chapter 1',        sub: 'Kai Tak Stadium, Hong Kong · Fans\' Choice Female Top 10 🏆', tag: 'Award', type: 'award'  },
  { date: new Date(2025, 10, 29), label: 'MAMA Awards 2025 — Chapter 2',        sub: 'Kai Tak Stadium, Hong Kong',                            tag: 'Award',     type: 'award'     },
  { date: new Date(2025, 11, 20), label: 'Melon Music Awards 2025',             sub: 'Gocheok Sky Dome, Seoul · Best Performance – Female 🏆', tag: 'Award',   type: 'award'     },
  { date: new Date(2026, 0, 13),  label: '"Sunday Morning" — Release',          sub: 'JP single / anime OP ("Torture Princess" S2)',          tag: 'Release',   type: 'release'   },
  { date: new Date(2026, 2, 14),  label: 'PRESS START Tour — Seoul Night 1',    sub: 'Ticketlink Live Arena, Seoul (SOLD OUT)',                tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 2, 15),  label: 'PRESS START Tour — Seoul Night 2',    sub: 'Ticketlink Live Arena, Seoul (SOLD OUT) · MAMIHLAPINATAPAI announced!', tag: 'Concert', type: 'concert' },
  { date: new Date(2026, 2, 25),  label: 'ILLIT 2nd Anniversary ✦',             sub: 'Two years since debut! 🌸',                             tag: 'Milestone', type: 'milestone' },
  { date: new Date(2026, 3, 6),   label: '"Bubee" — JP Digital Single',         sub: 'Anime theme for Magical Sisters LuluttoLilly',          tag: 'Release',   type: 'release'   },
  { date: new Date(2026, 3, 30),  label: 'MAMIHLAPINATAPAI — Release',          sub: '4th Mini Album · "It\'s Me"',                           tag: 'Release',   type: 'release'   },
  // — Tour + events —
  { date: new Date(2026, 5, 6),   label: 'Weverse Con Festival 2026 — Day 1',   sub: 'KSPO Dome & 88 Lawn Field, Olympic Park, Seoul',        tag: 'Festival',  type: 'concert'   },
  { date: new Date(2026, 5, 7),   label: 'Weverse Con Festival 2026 — Day 2',   sub: 'KSPO Dome & 88 Lawn Field, Olympic Park, Seoul',        tag: 'Festival',  type: 'concert'   },
  { date: new Date(2026, 5, 13),  label: 'PRESS START Tour — Aichi Night 1',    sub: 'Japan leg of PRESS START tour',                         tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 5, 14),  label: 'PRESS START Tour — Aichi Night 2',    sub: 'Japan leg of PRESS START tour',                         tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 5, 20),  label: 'PRESS START Tour — Osaka Night 1',    sub: 'Japan leg of PRESS START tour',                         tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 5, 21),  label: 'PRESS START Tour — Osaka Night 2',    sub: 'Japan leg of PRESS START tour',                         tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 5, 29),  label: 'PRESS START Tour — Fukuoka Night 1',  sub: 'Japan leg of PRESS START tour',                         tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 5, 30),  label: 'PRESS START Tour — Fukuoka Night 2',  sub: 'Japan leg of PRESS START tour',                         tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 6, 18),  label: 'PRESS START Tour — Hyogo Night 1',    sub: 'Japan leg of PRESS START tour',                         tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 6, 19),  label: 'PRESS START Tour — Hyogo Night 2',    sub: 'Japan leg of PRESS START tour',                         tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 6, 23),  label: 'PRESS START Tour — Tokyo Night 1',    sub: 'Toyota Arena Tokyo',                                    tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 6, 25),  label: 'PRESS START Tour — Tokyo Night 2',    sub: 'Toyota Arena Tokyo',                                    tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 6, 26),  label: 'PRESS START Tour — Tokyo Night 3',    sub: 'Toyota Arena Tokyo',                                    tag: 'Concert',   type: 'concert'   },
  { date: new Date(2026, 7, 22),  label: 'PRESS START Tour — Hong Kong (FINALE)', sub: 'Tour finale — Hong Kong',                            tag: 'Concert',   type: 'concert'   },
];

// Tag class map
const TAG_CLASS = {
  Release:   '',
  Single:    '',
  Award:     'award',
  Milestone: 'milestone',
  Concert:   'concert',
  NEW:       'new-release',
  upcoming:  'upcoming-tag',
};

function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth()    === b.getMonth()    &&
         a.getDate()     === b.getDate();
}

// ─────────────────────────────────────────────
// SCHEDULE — tabbed, with grouped tour nights
// ─────────────────────────────────────────────

// Group consecutive events that share the same base label
// e.g. "PRESS START♥︎ Tour — Tokyo, Japan Night 1/2/3" → one card
function groupEvents(events) {
  const groups = [];
  for (const ev of events) {
    // Strip trailing "Night N" to get a base label for grouping
    const baseLabel = ev.label.replace(/\s+Night\s+\d+$/i, '').trim();
    const last = groups[groups.length - 1];
    if (last && last.baseLabel === baseLabel && last.type === ev.type) {
      last.dates.push(ev.date);
    } else {
      groups.push({ ...ev, baseLabel, dates: [ev.date] });
    }
  }
  return groups;
}

function buildSchedule() {
  const list  = document.getElementById('scheduleList');
  const today = new Date();
  today.setHours(0,0,0,0);

  const todayEvents = SCHEDULE.filter(e => sameDay(e.date, today));

  const upcomingRaw = SCHEDULE
    .filter(e => { const d = new Date(e.date); d.setHours(0,0,0,0); return d >= today; })
    .sort((a,b) => a.date - b.date);

  const pastRaw = SCHEDULE
    .filter(e => { const d = new Date(e.date); d.setHours(0,0,0,0); return d < today && !sameDay(e.date, today); })
    .sort((a,b) => b.date - a.date);

  // Update tab counts (count grouped, not raw)
  const upcomingGrouped = groupEvents(upcomingRaw.filter(e => !sameDay(e.date, today)));
  const pastGrouped     = groupEvents(pastRaw);
  document.getElementById('upcomingCount').textContent = upcomingGrouped.length + (todayEvents.length ? 1 : 0);
  document.getElementById('pastCount').textContent     = pastGrouped.length;

  function renderTab(tab) {
    list.innerHTML = '';

    if (tab === 'upcoming') {
      // Today banner
      if (todayEvents.length > 0) {
        todayEvents.forEach(ev => list.appendChild(makeItem(ev, 'today-item')));
      } else {
        const noEvent = document.createElement('div');
        noEvent.className = 'schedule-item no-event';
        noEvent.innerHTML = `
          <div class="sched-date">
            <span class="sched-month">TODAY</span>
            <span class="sched-day" style="font-size:1.4rem">🌸</span>
          </div>
          <div class="sched-info">
            <h4>No scheduled event today</h4>
            <p>Check back soon — follow Weverse for surprise drops!</p>
            <span class="sched-tag">No Event</span>
          </div>`;
        list.appendChild(noEvent);
      }

      if (upcomingGrouped.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'schedule-item no-event';
        empty.innerHTML = `<div class="sched-info" style="padding:0.5rem 0">
          <h4>No upcoming events right now</h4>
          <p>Follow Weverse for announcements 🔔</p></div>`;
        list.appendChild(empty);
      } else {
        upcomingGrouped.forEach(ev => list.appendChild(makeGroupedItem(ev, 'upcoming')));
      }

    } else {
      pastGrouped.forEach(ev => list.appendChild(makeGroupedItem(ev, 'past')));
    }

    const link = document.createElement('div');
    link.className = 'schedule-item link-row';
    link.innerHTML = `<a href="https://weverse.io/illit" target="_blank" rel="noopener" class="official-link">
      🔗 Follow ILLIT on Weverse for live updates →</a>`;
    list.appendChild(link);
  }

  let activeTab = 'upcoming';
  renderTab(activeTab);

  document.querySelectorAll('.sched-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sched-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      renderTab(activeTab);
    });
  });
}

// Single-date item (for "today" items)
function makeItem(ev, extraClass) {
  const el     = document.createElement('div');
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const mon    = months[ev.date.getMonth()];
  const day    = ev.date.getDate();
  const year   = ev.date.getFullYear();
  const tagCls = TAG_CLASS[ev.tag] || '';
  el.className = `schedule-item ${extraClass}`;
  el.innerHTML = `
    <div class="sched-date">
      <span class="sched-month">${mon}</span>
      <span class="sched-day">${day}</span>
      <span class="sched-year">${year}</span>
    </div>
    <div class="sched-info">
      <h4>${ev.label}</h4>
      <p>${ev.sub}</p>
      <span class="sched-tag ${tagCls}">${ev.tag}</span>
    </div>`;
  return el;
}

// Grouped item — shows all nights as pills if multi-night
function makeGroupedItem(ev, extraClass) {
  const today  = new Date(); today.setHours(0,0,0,0);
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const tagCls = TAG_CLASS[ev.tag] || '';
  const el     = document.createElement('div');

  if (ev.dates.length === 1) {
    // Single date — same as before
    const d = ev.dates[0];
    el.className = `schedule-item ${extraClass}`;
    el.innerHTML = `
      <div class="sched-date">
        <span class="sched-month">${months[d.getMonth()]}</span>
        <span class="sched-day">${d.getDate()}</span>
        <span class="sched-year">${d.getFullYear()}</span>
      </div>
      <div class="sched-info">
        <h4>${ev.baseLabel}</h4>
        <p>${ev.sub}</p>
        <span class="sched-tag ${tagCls}">${ev.tag}</span>
      </div>`;
    return el;
  }

  // Multi-night — grouped card
  el.className = `schedule-item tour-group ${extraClass}`;

  // Use first date for the main date display
  const first = ev.dates[0];
  const last  = ev.dates[ev.dates.length - 1];

  // Night pills
  const nightPills = ev.dates.map((d, i) => {
    const isPast  = d < today && !sameDay(d, today);
    const isToday = sameDay(d, today);
    const cls     = isToday ? 'today-night' : isPast ? 'past-night' : '';
    const label   = `Night ${i + 1} — ${months[d.getMonth()]} ${d.getDate()}`;
    return `<span class="night-pill ${cls}">${label}</span>`;
  }).join('');

  el.innerHTML = `
    <div class="tour-group-header">
      <div class="sched-date">
        <span class="sched-month">${months[first.getMonth()]}</span>
        <span class="sched-day">${first.getDate()}–${last.getDate()}</span>
        <span class="sched-year">${first.getFullYear()}</span>
      </div>
      <div class="sched-info">
        <h4>${ev.baseLabel}</h4>
        <p>${ev.sub} · <strong>${ev.dates.length} nights</strong></p>
        <span class="sched-tag ${tagCls}">${ev.tag}</span>
      </div>
    </div>
    <div class="tour-nights">${nightPills}</div>`;
  return el;
}

buildSchedule();

// ─────────────────────────────────────────────
// LIVE COUNTDOWN in schedule note
// ─────────────────────────────────────────────
function updateCountdown() {
  const debut    = new Date('2024-03-25T00:00:00');
  const now      = new Date();
  let nextAnniv  = new Date(now.getFullYear(), 2, 25);
  if (nextAnniv <= now) nextAnniv.setFullYear(nextAnniv.getFullYear() + 1);

  const diff       = nextAnniv - now;
  const days       = Math.floor(diff / 86400000);
  const hours      = Math.floor((diff % 86400000) / 3600000);
  const mins       = Math.floor((diff % 3600000)  / 60000);
  const sinceDebut = Math.floor((now - debut) / 86400000);

  const el = document.getElementById('scheduleNote');
  if (el) el.innerHTML =
    `📡 Sourced from official HYBE / Weverse · ` +
    `<strong style="color:var(--pink)">${sinceDebut} days</strong> since debut · ` +
    `Next anniversary in <strong style="color:var(--pink)">${days}d ${hours}h ${mins}m</strong>`;
}
updateCountdown();
setInterval(updateCountdown, 60000);

// ─────────────────────────────────────────────
// FOOTER DATE
// ─────────────────────────────────────────────
const footerDate = document.getElementById('footerDate');
if (footerDate) {
  footerDate.textContent = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ─────────────────────────────────────────────
// FADE-IN ON SCROLL
// ─────────────────────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.08 }
);
document.querySelectorAll('.member-card, .disco-card, .fandom-card').forEach((el, i) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s, border-color 0.3s ease, box-shadow 0.3s ease`;
  observer.observe(el);
});

// ─────────────────────────────────────────────
// ACTIVE NAV SCROLL SPY
// ─────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-links a');
const scrollSpy = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--pink)' : '';
      });
    }
  }),
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach(s => scrollSpy.observe(s));

// ─────────────────────────────────────────────
// DISCO CARD expand on click
// ─────────────────────────────────────────────
document.querySelectorAll('.disco-card').forEach(card => {
  card.addEventListener('click', () => {
    const isExp = card.dataset.expanded === 'true';
    card.dataset.expanded = String(!isExp);
  });
});

// ─────────────────────────────────────────────
// PARALLAX hero blobs (desktop only)
// ─────────────────────────────────────────────
if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelectorAll('.blob').forEach((b, i) => {
      b.style.transform = `translate(${x * (i+1) * 0.4}px, ${y * (i+1) * 0.4}px)`;
    });
  });
}

console.log(`
✦ ILLIT HUB v2 ✦
Fan tracker for GLLIT 🌸
Press 'D' to toggle dark mode
`);
