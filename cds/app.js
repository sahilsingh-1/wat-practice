// ==================== WORD BANK ====================
const WORD_BANK = [
  "Leader","Duty","Discipline","Responsibility","Courage","Confidence","Team","Honesty","Integrity","Respect",
  "Success","Failure","Fear","Problem","Solution","Hardwork","Goal","Motivation","Learning","Knowledge",
  "Death","Pain","Loss","Enemy","War","Accident","Mistake","Guilt","Anger","Stress",
  "Friend","Family","Mother","Father","Society","Help","Support","Love","Care","Trust",
  "Dark","Light","Night","Road","Book","Game","Money","Power","Luck","Freedom",
  "Nation","Army","Soldier","Patriot","Sacrifice","Service","Valor","Honor","Mission","Strategy",
  "Combat","Battle","Victory","Defeat","Peace","Unity","Justice","Law","Order","Command",
  "Loyalty","Obedience","Training","Fitness","Strength","Willpower","Endurance","Speed","Agility","Focus",
  "Ambition","Vision","Purpose","Passion","Dedication","Perseverance","Patience","Determination","Initiative","Innovation",
  "Compassion","Kindness","Empathy","Humility","Gratitude","Forgiveness","Generosity","Sacrifice","Devotion","Faith",
  "Risk","Adventure","Challenge","Opportunity","Change","Growth","Progress","Achievement","Excellence","Perfection",
  "Danger","Weapon","Shield","Guard","Protect","Attack","Defend","Retreat","Advance","Conquer",
  "Water","Fire","Storm","Mountain","River","Ocean","Sky","Star","Earth","Wind",
  "Village","City","Country","Border","Map","Flag","Uniform","Medal","Rank","Promotion",
  "Weapon","Ammunition","Bomb","Missile","Tank","Aircraft","Ship","Submarine","Radar","Signal",
  "Health","Injury","Hospital","Doctor","Medicine","Recovery","Endure","Survive","Rescue","Save",
  "Tears","Smile","Hope","Despair","Regret","Pride","Shame","Joy","Sorrow","Emotion",
  "Blood","Sweat","Toil","Sacrifice","Struggle","Fight","Resist","Surrender","Escape","Chase",
  "Order","Chaos","Silence","Noise","Darkness","Dawn","Dusk","Midnight","Sunrise","Sunset",
  "Time","Memory","Future","Past","Present","Dream","Reality","Truth","Lie","Secret",
  "Rank","Officer","General","Captain","Major","Colonel","Sergeant","Cadet","Recruit","Veteran",
  "Rifle","Sword","Knife","Pistol","Grenade","Cannon","Fortress","Bunker","Trench","Camp",
  "Intelligence","Spy","Sabotage","Ambush","Guerrilla","Sniper","Scout","Recon","Patrol","March",
  "Award","Certificate","Trophy","Recognition","Reward","Punishment","Consequence","Accountability","Ethics","Moral",
  "Inspiration","Role Model","Mentor","Guide","Teacher","Student","Learner","Practice","Habit","Routine"
];

// Remove duplicates and get unique words
const ALL_WORDS = [...new Set(WORD_BANK)];

// ==================== MODEL ANSWERS ====================
const WAT_ANSWERS = {
  "Leader":"A leader inspires others by example and courage.",
  "Duty":"I always put duty before personal comfort.",
  "Discipline":"Discipline is the bridge between goals and achievement.",
  "Responsibility":"I own every task assigned to me fully.",
  "Courage":"Courage is acting despite fear for a just cause.",
  "Confidence":"Confidence grows with every challenge overcome.",
  "Team":"A strong team achieves what individuals cannot.",
  "Honesty":"Honesty builds trust that no rank can replace.",
  "Integrity":"I maintain integrity even when no one is watching.",
  "Respect":"I respect every person regardless of their rank.",
  "Success":"Success comes to those who persist through failure.",
  "Failure":"Failure is a lesson that shapes a stronger tomorrow.",
  "Fear":"Fear is overcome by preparation and mental toughness.",
  "Problem":"Every problem has a solution waiting to be found.",
  "Solution":"I focus on solutions, not problems.",
  "Hardwork":"Hard work is the only shortcut to lasting success.",
  "Goal":"Clear goals give direction to every action I take.",
  "Motivation":"My motivation is to serve the nation with honour.",
  "Learning":"I treat every experience as a chance to learn.",
  "Knowledge":"Knowledge combined with action creates progress.",
  "Death":"I am prepared to sacrifice my life for my country.",
  "Pain":"Pain is temporary; pride in service lasts forever.",
  "Loss":"Every loss teaches resilience and the will to rise again.",
  "Enemy":"I face the enemy with calm resolve and tactical clarity.",
  "War":"War is a last resort to protect peace and sovereignty.",
  "Accident":"Quick thinking and training minimise accident casualties.",
  "Mistake":"I acknowledge my mistakes and work hard not to repeat them.",
  "Guilt":"Guilt drives me to correct my wrongs and do better.",
  "Anger":"I channel anger into focused determination.",
  "Stress":"Stress is managed through discipline and physical fitness.",
  "Friend":"A true friend stands by you in your darkest hour.",
  "Family":"My family's sacrifices inspire me to serve with pride.",
  "Mother":"My mother's strength is the foundation of my courage.",
  "Father":"My father taught me that integrity is non-negotiable.",
  "Society":"I serve society by protecting its peace and freedoms.",
  "Help":"I never hesitate to help a fellow soldier in need.",
  "Support":"Team support is the backbone of every successful mission.",
  "Love":"My love for the nation drives me to give my best.",
  "Care":"I care for my team as I would for my own family.",
  "Trust":"Trust is built through consistent and honest action.",
  "Dark":"In the darkest moments, training and faith guide me forward.",
  "Light":"A single act of courage can light the way for many.",
  "Night":"Night operations demand heightened awareness and calm.",
  "Road":"Every difficult road leads to a stronger version of myself.",
  "Book":"Books expand the mind beyond the boundaries of experience.",
  "Game":"Life is not a game, but strategy makes every task winnable.",
  "Money":"Money is a tool; honour is the true measure of worth.",
  "Power":"True power lies in the ability to protect the weak.",
  "Luck":"Luck favours those who are thoroughly prepared.",
  "Freedom":"Freedom is worth every sacrifice made to defend it.",
  "Nation":"I am willing to give everything for my nation.",
  "Army":"The army taught me that brotherhood transcends all barriers.",
  "Soldier":"A soldier's greatest weapon is an indomitable spirit.",
  "Patriot":"A true patriot serves silently without seeking recognition.",
  "Sacrifice":"Sacrifice is the highest expression of love for one's country.",
  "Service":"Service to the nation is both my duty and my privilege.",
  "Valor":"Valor in battle springs from deep conviction and training.",
  "Honor":"Honor, once lost, is almost impossible to regain.",
  "Mission":"Every mission demands total commitment and clear focus.",
  "Strategy":"Good strategy saves lives and secures victory.",
  "Combat":"Combat readiness is built through relentless daily training.",
  "Battle":"Every battle, big or small, is won in the mind first.",
  "Victory":"Victory is the result of preparation meeting opportunity.",
  "Defeat":"Defeat is not the end; it is the beginning of a comeback.",
  "Peace":"True peace is earned through strength and vigilance.",
  "Unity":"Unity among soldiers is our greatest strategic advantage.",
  "Justice":"Justice must be swift, fair, and without prejudice.",
  "Loyalty":"Loyalty to my country comes before all personal interests.",
  "Strength":"Mental strength is as vital as physical power.",
  "Willpower":"Willpower is the muscle I train every single day.",
  "Endurance":"Endurance is what separates good soldiers from great ones.",
  "Ambition":"Ambition fuelled by purpose drives extraordinary results.",
  "Vision":"A clear vision helps me lead even in uncertain terrain.",
  "Dedication":"Dedication to duty defines the character of a true officer.",
  "Patience":"Patience during hardship is a mark of true leadership.",
  "Determination":"My determination grows stronger with every obstacle I face.",
  "Initiative":"I take initiative because waiting costs lives in the field.",
  "Compassion":"Compassion for civilians is the hallmark of a professional army.",
  "Risk":"Calculated risk-taking is essential in dynamic situations.",
  "Challenge":"Every challenge is an opportunity to demonstrate my capability.",
  "Danger":"I train relentlessly so that danger becomes manageable.",
  "Hope":"Hope keeps the team fighting when circumstances are grim.",
  "Pride":"I wear my uniform with pride and the deepest humility.",
  "Truth":"Truth is the foundation of genuine leadership.",
  "Time":"Time in a mission is as precious as ammunition.",
  "Intelligence":"Good intelligence saves countless lives on the battlefield."
};

// ==================== STATE ====================
let sessionWords = [];
let currentWordIndex = 0;
let timerInterval = null;
let timeLeft = 15;
let isPaused = false;
let isFocusMode = false;
let isCountdownMode = false;
let customWords = [];   // words loaded from uploaded file
let sessionHistory = JSON.parse(localStorage.getItem('wat_history') || '[]');

// ==================== NAVIGATION ====================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) { el.classList.add('active'); el.scrollTop = 0; }
}

// ==================== HOME ====================
function updateHomeStats() {
  document.getElementById('stat-sessions-val').textContent = sessionHistory.length;
  if (sessionHistory.length === 0) {
    document.getElementById('stat-best-val').textContent = '—';
    document.getElementById('stat-avg-val').textContent = '—';
  } else {
    const scores = sessionHistory.map(s => s.score);
    document.getElementById('stat-best-val').textContent = Math.max(...scores);
    document.getElementById('stat-avg-val').textContent = Math.round(scores.reduce((a,b)=>a+b,0)/scores.length);
  }
}

// ==================== FILE & MANUAL UPLOAD ====================
function parseWordList(text) {
  const raw = text.split(/[\n\r,\t]+/);
  const parsed = [];
  raw.forEach(line => {
    // Remove leading numbers like "1." "1)" "1:"
    const cleaned = line.replace(/^\s*\d+[.):\-\s]+/, '').trim();
    // Remove trailing _1 _2 style suffixes
    const word = cleaned.replace(/_\d+$/, '').trim();
    if (word.length > 1 && word.length < 40 && /^[A-Za-z\s]+$/.test(word)) {
      parsed.push(word);
    }
  });
  return [...new Set(parsed.map(w => w.trim()).filter(Boolean))];
}

function handleWordFileUpload(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const unique = parseWordList(e.target.result);
    if (unique.length < 5) {
      alert('Could not find enough valid words in the file. Please check the format.');
      return;
    }
    customWords = unique;
    const badge = document.getElementById('upload-badge');
    badge.textContent = `✓ ${unique.length} words loaded from file`;
    badge.classList.add('loaded');
    document.getElementById('btn-clear-upload').style.display = 'inline-flex';
  };
  reader.readAsText(file);
}

function handleManualWordInput() {
  const text = document.getElementById('manual-words-input').value;
  const unique = parseWordList(text);
  if (unique.length < 5) {
    alert('Please enter at least 5 valid words.');
    return;
  }
  customWords = unique;
  const badge = document.getElementById('upload-badge');
  badge.textContent = `✓ ${unique.length} words loaded manually`;
  badge.classList.add('loaded');
  document.getElementById('btn-clear-upload').style.display = 'inline-flex';
}

function switchUploadMode(mode) {
  const modeFile = document.getElementById('mode-file-content');
  const modeManual = document.getElementById('mode-manual-content');
  const btnFile = document.getElementById('tab-btn-file');
  const btnManual = document.getElementById('tab-btn-manual');

  if (mode === 'file') {
    modeFile.style.display = 'block';
    modeManual.style.display = 'none';
    btnFile.classList.add('active');
    btnManual.classList.remove('active');
  } else {
    modeFile.style.display = 'none';
    modeManual.style.display = 'block';
    btnFile.classList.remove('active');
    btnManual.classList.add('active');
  }
}

function clearUpload() {
  customWords = [];
  document.getElementById('word-file-input').value = '';
  const badge = document.getElementById('upload-badge');
  badge.textContent = 'No file loaded — using default word bank';
  badge.classList.remove('loaded');
  document.getElementById('btn-clear-upload').style.display = 'none';
}

// ==================== SESSION ====================
function startSession() {
  // Use custom words if uploaded, otherwise default bank
  const pool = customWords.length >= 5 ? customWords : ALL_WORDS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  sessionWords = shuffled.slice(0, Math.min(60, shuffled.length));
  currentWordIndex = 0;
  isPaused = false;
  showScreen('session');
  startCountdown();
}

function startCountdown() {
  const overlay = document.getElementById('countdown-overlay');
  const number = document.getElementById('countdown-number');
  overlay.classList.remove('hidden');
  isCountdownMode = true;
  
  let count = 5;
  number.textContent = count;
  number.style.fontSize = '8rem';
  
  const intv = setInterval(() => {
    count--;
    if (count > 0) {
      number.textContent = count;
    } else if (count === 0) {
      number.textContent = "START!";
      number.style.fontSize = '5rem';
    } else {
      clearInterval(intv);
      overlay.classList.add('hidden');
      isCountdownMode = false;
      loadWord(0);
    }
  }, 1000);
}

function loadWord(idx) {
  if (idx >= sessionWords.length) { endSession(); return; }
  currentWordIndex = idx;
  const word = sessionWords[idx];
  const total = sessionWords.length;
  const progress = (idx / total) * 100;

  document.getElementById('word-text').textContent = word.toUpperCase();
  document.getElementById('word-number').textContent = '#' + String(idx + 1).padStart(2, '0');
  document.getElementById('hud-word-num').textContent = (idx + 1) + ' / ' + total;
  document.getElementById('session-progress-fill').style.width = progress + '%';
  document.getElementById('focus-word').textContent = word.toUpperCase();

  // Reanimate word card
  const card = document.getElementById('word-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = '';

  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  updateTimerUI(15);
  timerInterval = setInterval(() => {
    if (isPaused) return;
    timeLeft--;
    updateTimerUI(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextWord();
    }
  }, 1000);
}

function updateTimerUI(t) {
  const el = document.getElementById('timer-val');
  const prog = document.getElementById('timer-progress');
  const circ = 339.29;
  const offset = circ - (t / 15) * circ;
  prog.style.strokeDashoffset = offset;
  el.textContent = t;
  document.getElementById('focus-timer').textContent = t;

  // Remove all state classes
  prog.classList.remove('warn','danger');
  el.classList.remove('warn','danger');

  if (t <= 5) {
    prog.classList.add('danger'); el.classList.add('danger');
  } else if (t <= 8) {
    prog.classList.add('warn'); el.classList.add('warn');
  }
}

function nextWord() {
  loadWord(currentWordIndex + 1);
}

function pauseSession() {
  if (isCountdownMode) return;
  isPaused = true;
  document.getElementById('pause-modal').classList.remove('hidden');
}

function resumeSession() {
  isPaused = false;
  document.getElementById('pause-modal').classList.add('hidden');
}

function endSession() {
  clearInterval(timerInterval);
  buildReviewScreen();
  showScreen('review');
}

// ==================== FOCUS MODE ====================
function enterFocusMode() {
  if (isCountdownMode) return;
  isFocusMode = true;
  document.getElementById('focus-overlay').classList.remove('hidden');
  document.getElementById('focus-word').textContent = document.getElementById('word-text').textContent;
}

function exitFocusMode() {
  isFocusMode = false;
  document.getElementById('focus-overlay').classList.add('hidden');
}

// ==================== REVIEW ====================
function buildReviewScreen() {
  const grid = document.getElementById('review-grid');
  grid.innerHTML = '';
  sessionWords.forEach((word, i) => {
    const div = document.createElement('div');
    div.className = 'review-word';
    div.dataset.idx = i;
    div.innerHTML = `<span class="word-idx">${String(i+1).padStart(2,'0')}</span>${word}`;
    div.addEventListener('click', () => toggleAttempted(div));
    grid.appendChild(div);
  });
  updateReviewStats();
}

function toggleAttempted(el) {
  el.classList.toggle('attempted');
  updateReviewStats();
}

function updateReviewStats() {
  const attempted = document.querySelectorAll('.review-word.attempted').length;
  const skipped = 60 - attempted;
  const pct = Math.round((attempted / 60) * 100);
  document.getElementById('rs-attempted').textContent = attempted;
  document.getElementById('rs-skipped').textContent = skipped;
  document.getElementById('rs-percent').textContent = pct + '%';
}

function selectAll() {
  document.querySelectorAll('.review-word').forEach(el => el.classList.add('attempted'));
  updateReviewStats();
}

function submitReview() {
  const attempted = document.querySelectorAll('.review-word.attempted').length;
  const pct = Math.round((attempted / 60) * 100);
  const entry = {
    date: new Date().toISOString(),
    score: attempted,
    total: 60,
    percent: pct,
    words: sessionWords,
    attempted: [...document.querySelectorAll('.review-word.attempted')].map(e => parseInt(e.dataset.idx))
  };
  sessionHistory.push(entry);
  localStorage.setItem('wat_history', JSON.stringify(sessionHistory));
  buildAnalysisScreen(entry);
  showScreen('analysis');
}

// ==================== ANALYSIS ====================
function buildAnalysisScreen(entry) {
  const { score, total, percent, words, attempted } = entry;

  // Score circle
  document.getElementById('score-big').textContent = score;
  document.getElementById('score-pct').textContent = percent + '%';
  const circ = 534;
  const offset = circ - (score / total) * circ;
  setTimeout(() => {
    document.getElementById('score-arc').style.strokeDashoffset = offset;
  }, 300);

  // Grade
  let grade, label, color;
  if (percent >= 90) { grade='A+'; label='Outstanding!'; color='#2ed573'; }
  else if (percent >= 80) { grade='A'; label='Excellent'; color='#2ed573'; }
  else if (percent >= 70) { grade='B+'; label='Very Good'; color='#d4af37'; }
  else if (percent >= 60) { grade='B'; label='Good'; color='#d4af37'; }
  else if (percent >= 50) { grade='C'; label='Average'; color='#ffa502'; }
  else { grade='D'; label='Keep Practicing'; color='#ff4757'; }

  document.getElementById('grade-letter').textContent = grade;
  document.getElementById('grade-letter').style.color = color;
  document.getElementById('grade-label').textContent = label;

  // Comparison
  const compSection = document.getElementById('comparison-section');
  const compBars = document.getElementById('comparison-bars');
  compBars.innerHTML = '';

  if (sessionHistory.length > 1) {
    compSection.style.display = '';
    const prev = sessionHistory[sessionHistory.length - 2];
    const diff = score - prev.score;
    const items = [
      { label: 'Previous', val: prev.score, color: '#8899aa' },
      { label: 'Current', val: score, color: color }
    ];
    items.forEach(item => {
      const pct = (item.val / 60) * 100;
      compBars.innerHTML += `
        <div class="comp-bar-wrap">
          <span class="comp-bar-label">${item.label}</span>
          <div class="comp-bar-track"><div class="comp-bar-fill" style="width:0%;background:${item.color}" data-pct="${pct}"></div></div>
          <span class="comp-bar-val">${item.val}/60</span>
        </div>`;
    });
    setTimeout(() => {
      document.querySelectorAll('.comp-bar-fill').forEach(el => {
        el.style.width = el.dataset.pct + '%';
      });
    }, 400);

    // diff note
    const note = document.createElement('p');
    note.style.cssText = 'margin-top:12px;font-size:.9rem;text-align:center;';
    note.style.color = diff >= 0 ? '#2ed573' : '#ff4757';
    note.textContent = diff === 0 ? 'Same as last session.' : (diff > 0 ? `▲ +${diff} words better than last session!` : `▼ ${Math.abs(diff)} words fewer than last session.`);
    compBars.appendChild(note);
  } else {
    compSection.style.display = 'none';
  }

  // Trend Chart
  drawTrendChart();

  // Breakdown
  const grid = document.getElementById('breakdown-grid');
  grid.innerHTML = '';
  words.forEach((w, i) => {
    const done = attempted.includes(i);
    grid.innerHTML += `<div class="bd-word ${done?'done':'skip'}">${done?'✓':''} ${w}</div>`;
  });
}

function drawTrendChart() {
  const canvas = document.getElementById('trend-chart');
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth || 700;
  const H = 180;
  canvas.width = W;
  canvas.height = H;
  ctx.clearRect(0, 0, W, H);

  const data = sessionHistory.slice(-10).map(s => s.score);
  if (data.length < 1) return;

  const pad = { top: 20, right: 20, bottom: 30, left: 40 };
  const cw = W - pad.left - pad.right;
  const ch = H - pad.top - pad.bottom;
  const maxVal = 60;

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  [0,20,40,60].forEach(v => {
    const y = pad.top + ch - (v / maxVal) * ch;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke();
    ctx.fillStyle = 'rgba(136,153,170,0.8)';
    ctx.font = '10px Orbitron, monospace';
    ctx.fillText(v, 4, y + 4);
  });

  if (data.length === 1) {
    const x = pad.left + cw / 2;
    const y = pad.top + ch - (data[0] / maxVal) * ch;
    ctx.fillStyle = '#d4af37';
    ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI*2); ctx.fill();
    return;
  }

  const pts = data.map((v, i) => ({
    x: pad.left + (i / (data.length - 1)) * cw,
    y: pad.top + ch - (v / maxVal) * ch
  }));

  // Area fill
  const grad = ctx.createLinearGradient(0, pad.top, 0, H - pad.bottom);
  grad.addColorStop(0, 'rgba(212,175,55,0.3)');
  grad.addColorStop(1, 'rgba(212,175,55,0)');
  ctx.beginPath();
  ctx.moveTo(pts[0].x, H - pad.bottom);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length-1].x, H - pad.bottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.stroke();

  // Dots
  pts.forEach((p, i) => {
    ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, Math.PI*2);
    ctx.fillStyle = '#d4af37'; ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 10px Exo2, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data[i], p.x, p.y - 10);
  });

  // X labels
  ctx.fillStyle = 'rgba(136,153,170,0.8)'; ctx.font = '9px monospace'; ctx.textAlign = 'center';
  pts.forEach((p, i) => {
    ctx.fillText(`S${sessionHistory.length - data.length + i + 1}`, p.x, H - 6);
  });
}

// ==================== HISTORY ====================
function buildHistoryScreen() {
  const list = document.getElementById('history-list');
  if (sessionHistory.length === 0) {
    list.innerHTML = '<p class="history-empty">No sessions yet. Start your first WAT session!</p>';
    return;
  }
  list.innerHTML = [...sessionHistory].reverse().map((s, i) => {
    const d = new Date(s.date);
    const dateStr = d.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
    const timeStr = d.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
    return `<div class="history-item">
      <div>
        <div class="hi-date">${dateStr} · ${timeStr}</div>
        <div style="font-size:.8rem;color:var(--text-dim);margin-top:4px;">${getGrade(s.percent)} · ${getGradeLabel(s.percent)}</div>
      </div>
      <div style="text-align:right">
        <div class="hi-score">${s.score}/60</div>
        <div class="hi-pct">${s.percent}%</div>
      </div>
    </div>`;
  }).join('');
}

function getGrade(pct) {
  if (pct>=90) return 'A+'; if (pct>=80) return 'A';
  if (pct>=70) return 'B+'; if (pct>=60) return 'B';
  if (pct>=50) return 'C'; return 'D';
}
function getGradeLabel(pct) {
  if (pct>=90) return 'Outstanding'; if (pct>=80) return 'Excellent';
  if (pct>=70) return 'Very Good'; if (pct>=60) return 'Good';
  if (pct>=50) return 'Average'; return 'Keep Practicing';
}

// ==================== PARTICLES ====================
function initParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    const size = Math.random() * 3 + 1;
    dot.style.cssText = `
      position:absolute;
      width:${size}px;height:${size}px;
      border-radius:50%;
      background:rgba(212,175,55,${Math.random()*0.3+0.05});
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      animation:float-particle ${Math.random()*20+15}s linear infinite;
      animation-delay:-${Math.random()*20}s;
    `;
    container.appendChild(dot);
  }
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float-particle {
      0%{transform:translateY(0) translateX(0);opacity:0}
      10%{opacity:1}
      90%{opacity:1}
      100%{transform:translateY(-100vh) translateX(${Math.random()>0.5?'':'-'}50px);opacity:0}
    }
  `;
  document.head.appendChild(style);
}

// ==================== ANSWERS SECTION ====================
function buildAnswersSection(words) {
  const grid = document.getElementById('answers-grid');
  if (!grid) return;
  grid.innerHTML = '';
  words.forEach((word, i) => {
    const answer = WAT_ANSWERS[word] || WAT_ANSWERS[word.toLowerCase()] ||
      `"${word}" evokes a sense of purpose, strength, and dedication to duty.`;
    grid.innerHTML += `
      <div class="answer-card">
        <div class="answer-word">
          <span class="answer-idx">${String(i+1).padStart(2,'0')}</span>
          <span class="answer-wordtext">${word}</span>
        </div>
        <p class="answer-text">${answer}</p>
      </div>`;
  });
}

// ==================== TABS ====================
function switchTab(tabId) {
  document.querySelectorAll('.analysis-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.analysis-tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById('tab-' + tabId).classList.add('active');
  if (tabId === 'answers' && sessionWords.length) buildAnswersSection(sessionWords);
}

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  updateHomeStats();

  // File upload
  const fileInput = document.getElementById('word-file-input');
  const dropzone = document.getElementById('upload-dropzone');

  fileInput.addEventListener('change', e => handleWordFileUpload(e.target.files[0]));
  document.getElementById('btn-clear-upload').addEventListener('click', clearUpload);

  dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.classList.add('drag-over'); });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
  dropzone.addEventListener('drop', e => {
    e.preventDefault(); dropzone.classList.remove('drag-over');
    handleWordFileUpload(e.dataTransfer.files[0]);
  });
  dropzone.addEventListener('click', () => fileInput.click());

  // Mode switching
  document.getElementById('tab-btn-file').addEventListener('click', () => switchUploadMode('file'));
  document.getElementById('tab-btn-manual').addEventListener('click', () => switchUploadMode('manual'));
  document.getElementById('btn-save-manual').addEventListener('click', handleManualWordInput);

  document.getElementById('btn-start').addEventListener('click', startSession);
  document.getElementById('btn-history').addEventListener('click', () => {
    buildHistoryScreen();
    showScreen('history');
  });
  document.getElementById('btn-back-history').addEventListener('click', () => showScreen('home'));

  document.getElementById('btn-pause').addEventListener('click', pauseSession);
  document.getElementById('btn-resume').addEventListener('click', resumeSession);
  document.getElementById('btn-quit').addEventListener('click', pauseSession);
  document.getElementById('btn-quit-confirm').addEventListener('click', () => {
    clearInterval(timerInterval);
    document.getElementById('pause-modal').classList.add('hidden');
    // Trim to words seen so far (include current word), then go to review
    sessionWords = sessionWords.slice(0, currentWordIndex + 1);
    buildReviewScreen();
    showScreen('review');
  });

  document.getElementById('btn-discard-session').addEventListener('click', () => {
    clearInterval(timerInterval);
    document.getElementById('pause-modal').classList.add('hidden');
    showScreen('home');
    updateHomeStats();
  });

  document.getElementById('btn-next').addEventListener('click', () => {
    if (isCountdownMode) return;
    clearInterval(timerInterval);
    nextWord();
  });

  document.getElementById('btn-focus').addEventListener('click', enterFocusMode);
  document.getElementById('focus-overlay').addEventListener('click', exitFocusMode);

  document.getElementById('btn-select-all').addEventListener('click', selectAll);
  document.getElementById('btn-submit-review').addEventListener('click', submitReview);

  // Analysis tabs
  document.querySelectorAll('.analysis-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  document.getElementById('btn-new-session').addEventListener('click', () => {
    updateHomeStats();
    switchTab('results'); // reset tab
    showScreen('home');
  });
  document.getElementById('btn-view-history').addEventListener('click', () => {
    buildHistoryScreen();
    showScreen('history');
  });

  document.addEventListener('keydown', e => {
    if (isCountdownMode) return;
    if (e.key === 'Escape' && isFocusMode) exitFocusMode();
    if (e.key === 'Escape' && !isFocusMode && !isPaused && document.getElementById('screen-session').classList.contains('active')) pauseSession();
    if ((e.key === 'ArrowRight' || e.key === ' ') && document.getElementById('screen-session').classList.contains('active') && !isPaused && !isFocusMode) {
      e.preventDefault();
      clearInterval(timerInterval);
      nextWord();
    }
    if (e.key === 'f' && document.getElementById('screen-session').classList.contains('active') && !isFocusMode) enterFocusMode();
  });
});
