// ================= شخصيات اللعبة الكرتونية اللطيفة (Cute Avatar SVGs) =================
const AVATARS = {
    bunny: {
        name: 'الأرنب القافز 🐰',
        color: '#f43f5e',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="38" cy="25" rx="10" ry="25" fill="#f43f5e" transform="rotate(-10 38 25)" />
            <ellipse cx="38" cy="25" rx="5" ry="18" fill="#ffe4e6" transform="rotate(-10 38 25)" />
            <ellipse cx="62" cy="25" rx="10" ry="25" fill="#f43f5e" transform="rotate(10 62 25)" />
            <ellipse cx="62" cy="25" rx="5" ry="18" fill="#ffe4e6" transform="rotate(10 62 25)" />
            <circle cx="50" cy="60" r="28" fill="#f43f5e" />
            <circle cx="50" cy="60" r="24" fill="#fb7185" />
            <circle cx="40" cy="55" r="4.5" fill="#0f172a" />
            <circle cx="40" cy="53" r="1.5" fill="#ffffff" />
            <circle cx="60" cy="55" r="4.5" fill="#0f172a" />
            <circle cx="60" cy="53" r="1.5" fill="#ffffff" />
            <polygon points="50,62 46,59 54,59" fill="#fda4af" />
            <path d="M 46 66 Q 50 70 54 66" stroke="#0f172a" stroke-width="2.5" fill="none" />
            <circle cx="34" cy="62" r="3" fill="#fecdd3" />
            <circle cx="66" cy="62" r="3" fill="#fecdd3" />
        </svg>`
    },
    rocket: {
        name: 'الصاروخ السريع 🚀',
        color: '#3b82f6',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 85 Q 40 98 50 100 Q 60 98 50 85" fill="#f59e0b" />
            <path d="M 50 85 Q 45 92 50 95 Q 55 92 50 85" fill="#ef4444" />
            <path d="M 30 75 Q 15 80 25 60 Z" fill="#3b82f6" />
            <path d="M 70 75 Q 85 80 75 60 Z" fill="#3b82f6" />
            <path d="M 50 10 Q 30 45 30 75 L 70 75 Q 70 45 50 10 Z" fill="#f1f5f9" />
            <path d="M 50 10 Q 40 45 30 75 L 50 75 Z" fill="#cbd5e1" />
            <path d="M 50 10 Q 37 30 35 35 L 65 35 Q 63 30 50 10 Z" fill="#ef4444" />
            <circle cx="50" cy="48" r="10" fill="#38bdf8" stroke="#cbd5e1" stroke-width="3" />
            <circle cx="47" cy="45" r="3" fill="#ffffff" />
        </svg>`
    },
    frog: {
        name: 'الضفدع الضاحك 🐸',
        color: '#22c55e',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="12" fill="#22c55e" />
            <circle cx="35" cy="35" r="9" fill="#ffffff" />
            <circle cx="35" cy="35" r="4.5" fill="#000000" />
            <circle cx="65" cy="35" r="12" fill="#22c55e" />
            <circle cx="65" cy="35" r="9" fill="#ffffff" />
            <circle cx="65" cy="35" r="4.5" fill="#000000" />
            <ellipse cx="50" cy="62" rx="35" ry="26" fill="#22c55e" />
            <ellipse cx="50" cy="62" rx="30" ry="21" fill="#4ade80" />
            <path d="M 32 60 Q 50 78 68 60" stroke="#15803d" stroke-width="4.5" stroke-linecap="round" fill="none" />
            <circle cx="28" cy="58" r="4" fill="#f87171" />
            <circle cx="72" cy="58" r="4" fill="#f87171" />
        </svg>`
    },
    car: {
        name: 'السيارة الرياضية 🚗',
        color: '#eab308',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="60" height="8" rx="3" fill="#ea580c" />
            <rect x="30" y="38" width="8" height="12" fill="#d97706" />
            <rect x="62" y="38" width="8" height="12" fill="#d97706" />
            <circle cx="30" cy="72" r="15" fill="#1e293b" />
            <circle cx="30" cy="72" r="6" fill="#e2e8f0" />
            <circle cx="70" cy="72" r="15" fill="#1e293b" />
            <circle cx="70" cy="72" r="6" fill="#e2e8f0" />
            <path d="M 15 65 L 15 50 Q 30 50 40 40 L 75 45 Q 85 55 85 65 Z" fill="#eab308" />
            <path d="M 52 45 L 68 45 L 63 52 L 48 52 Z" fill="#38bdf8" />
            <rect x="35" y="55" width="30" height="5" fill="#ffffff" />
            <text x="50" y="66" font-family="sans-serif" font-size="12" font-weight="900" fill="#1e293b" text-anchor="middle">7</text>
        </svg>`
    },
    duck: {
        name: 'البطة المرحة 🦆',
        color: '#a855f7',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="45" cy="65" rx="28" ry="20" fill="#facc15" />
            <circle cx="68" cy="42" r="18" fill="#facc15" />
            <path d="M 82 40 Q 94 44 82 48 Z" fill="#f97316" />
            <circle cx="72" cy="38" r="2.5" fill="#000000" />
            <circle cx="74" cy="37" r="1" fill="#ffffff" />
            <ellipse cx="40" cy="65" rx="14" ry="10" fill="#eab308" transform="rotate(-10 40 65)" />
            <circle cx="68" cy="46" r="2.5" fill="#f87171" />
        </svg>`
    }
};

// ================= نظام توليد الأصوات التفاعلية (Web Audio Synth) =================
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playRollSound() {
    try {
        initAudio();
        const startTime = audioCtx.currentTime;
        for (let i = 0; i < 12; i++) {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(120 + Math.random() * 220, startTime + i * 0.05);
            gain.gain.setValueAtTime(0.08, startTime + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.005, startTime + i * 0.05 + 0.04);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(startTime + i * 0.05);
            osc.stop(startTime + i * 0.05 + 0.04);
        }
    } catch (e) { console.log("Audio Error:", e); }
}

function playJumpSound() {
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(580, audioCtx.currentTime + 0.22);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.22);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.23);
    } catch (e) { console.log("Audio Error:", e); }
}

function playCorrectSound() {
    try {
        initAudio();
        const now = audioCtx.currentTime;
        const playChime = (freq, time, duration) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, time);
            gain.gain.setValueAtTime(0.1, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(time);
            osc.stop(time + duration);
        };
        playChime(523.25, now, 0.12); // C5
        playChime(659.25, now + 0.1, 0.25); // E5
    } catch (e) { console.log("Audio Error:", e); }
}

function playWrongSound() {
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(90, audioCtx.currentTime + 0.35);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.36);
    } catch (e) { console.log("Audio Error:", e); }
}

function playWinSound() {
    try {
        initAudio();
        const now = audioCtx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.1);
            gain.gain.setValueAtTime(0.08, now + idx * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + idx * 0.1);
            osc.stop(now + idx * 0.1 + 0.36);
        });
    } catch (e) { console.log("Audio Error:", e); }
}

// ================= الأسئلة الافتراضية وحفظها (Question Manager) =================
const DEFAULT_QUESTIONS = [
    { question: "كم التفاحات الكلي: 5 🍎 + 3 🍎 = ؟", options: ["8 تفاحات", "7 تفاحات", "9 تفاحات", "6 تفاحات"], correct: 0 },
    { question: "أي حيوان هو ملك الغابة المبهج 🦁؟", options: ["الأسد", "النمر", "الفيل", "الغزال"], correct: 0 },
    { question: "مع يوسف 12 🍌، أكل منها 4 🍌. كم متبقي معه؟", options: ["8 موزات", "6 موزات", "10 موزات", "4 موزات"], correct: 0 },
    { question: "ما هو لون السماء في اليوم المشمس الجميل ☀️؟", options: ["الأزرق 💙", "الأحمر ❤️", "الأخضر 💚", "الأصفر 💛"], correct: 0 },
    { question: "كم عدد أرجل العنكبوت المشاكس 🕷️؟", options: ["8 أرجل", "6 أرجل", "10 أرجل", "4 أرجل"], correct: 0 },
    { question: "كم عدد النجوم: ⭐️⭐️⭐️ + ⭐️⭐️⭐️ + ⭐️⭐️⭐️ = ؟", options: ["9 نجوم", "6 نجوم", "12 نجمة", "5 نجوم"], correct: 0 },
    { question: "أي طائر من هؤلاء لا يستطيع الطيران 🐧؟", options: ["البطريق", "العصفور", "الصقر", "الحمامة"], correct: 0 },
    { question: "من أين نحصل على الحليب اللذيذ المفيد 🥛؟", options: ["البقرة 🐄", "القطة 🐈", "الأسد 🦁", "الديك 🐓"], correct: 0 }
];

let questionSets = {};
let activeSetId = null;

function loadQuestionSets() {
    const saved = localStorage.getItem('race_game_question_sets');
    if (saved) {
        questionSets = JSON.parse(saved);
    } else {
        // إنشاء حزمة افتراضية للمستخدم أول مرة
        questionSets = {
            'default_set': {
                name: 'أسئلة عامة وحساب للأطفال 🎒',
                questions: DEFAULT_QUESTIONS
            }
        };
        saveQuestionSetsToStorage();
    }
    renderSavedQuestionSets();
    updateQuizSetDropdown();
}

function saveQuestionSetsToStorage() {
    localStorage.setItem('race_game_question_sets', JSON.stringify(questionSets));
}

function renderSavedQuestionSets() {
    const listEl = document.getElementById('saved-sets-list');
    listEl.innerHTML = '';
    
    Object.keys(questionSets).forEach(id => {
        const set = questionSets[id];
        const isSelected = activeSetId === id;
        
        const row = document.createElement('div');
        row.className = `saved-set-row ${isSelected ? 'active-set' : ''}`;
        row.innerHTML = `
            <div class="set-info">
                <div class="set-name">${set.name}</div>
                <div class="set-count">${set.questions.length} سؤال</div>
            </div>
            <div class="set-actions">
                <button class="btn-set-select" onclick="openQuestionSet('${id}')">تعديل ⚙️</button>
                ${id !== 'default_set' ? `<button class="btn-delete-icon" onclick="deleteQuestionSet('${id}', event)">❌</button>` : ''}
            </div>
        `;
        listEl.appendChild(row);
    });
}

function createNewQuestionSet() {
    const nameInput = document.getElementById('new-set-name');
    const name = nameInput.value.trim();
    if (!name) return alert('برجاء كتابة اسم لحزمة الأسئلة!');
    
    const id = 'set_' + Date.now();
    questionSets[id] = {
        name: name,
        questions: []
    };
    
    saveQuestionSetsToStorage();
    nameInput.value = '';
    renderSavedQuestionSets();
    openQuestionSet(id);
    updateQuizSetDropdown();
}

function openQuestionSet(id) {
    activeSetId = id;
    renderSavedQuestionSets();
    
    const section = document.getElementById('active-set-section');
    section.style.display = 'block';
    
    const title = document.getElementById('active-set-title');
    title.innerText = `الحزمة النشطة: ${questionSets[id].name}`;
    
    renderActiveSetQuestions();
}

function deleteQuestionSet(id, event) {
    event.stopPropagation();
    if (confirm('هل أنت متأكد من حذف هذه الحزمة بالكامل؟')) {
        delete questionSets[id];
        if (activeSetId === id) {
            activeSetId = null;
            document.getElementById('active-set-section').style.display = 'none';
        }
        saveQuestionSetsToStorage();
        renderSavedQuestionSets();
        updateQuizSetDropdown();
    }
}

function addQuestionToActiveSet() {
    if (!activeSetId) return;
    
    const qText = document.getElementById('q-text').value.trim();
    const opt0 = document.getElementById('q-opt-0').value.trim();
    const opt1 = document.getElementById('q-opt-1').value.trim();
    const opt2 = document.getElementById('q-opt-2').value.trim();
    const opt3 = document.getElementById('q-opt-3').value.trim();
    const correctIdx = parseInt(document.getElementById('q-correct-idx').value);
    
    if (!qText || !opt0 || !opt1 || !opt2 || !opt3) {
        return alert('يرجى ملء نص السؤال وجميع الخيارات الأربعة!');
    }
    
    const newQ = {
        question: qText,
        options: [opt0, opt1, opt2, opt3],
        correct: correctIdx
    };
    
    questionSets[activeSetId].questions.push(newQ);
    saveQuestionSetsToStorage();
    
    // تفريغ المدخلات
    document.getElementById('q-text').value = '';
    document.getElementById('q-opt-0').value = '';
    document.getElementById('q-opt-1').value = '';
    document.getElementById('q-opt-2').value = '';
    document.getElementById('q-opt-3').value = '';
    
    renderActiveSetQuestions();
    renderSavedQuestionSets();
}

function renderActiveSetQuestions() {
    const listEl = document.getElementById('active-set-questions-list');
    listEl.innerHTML = '';
    
    if (!activeSetId) return;
    const questions = questionSets[activeSetId].questions;
    
    questions.forEach((q, idx) => {
        const item = document.createElement('div');
        item.className = 'question-list-item';
        item.innerHTML = `
            <div class="q-item-info">
                <div class="q-item-text">${idx + 1}. ${q.question}</div>
                <div class="q-item-ans">الإجابة: ${q.options[q.correct]}</div>
            </div>
            <button class="btn-delete-icon" onclick="deleteQuestion(${idx})">🗑️</button>
        `;
        listEl.appendChild(item);
    });
}

function deleteQuestion(idx) {
    if (!activeSetId) return;
    questionSets[activeSetId].questions.splice(idx, 1);
    saveQuestionSetsToStorage();
    renderActiveSetQuestions();
    renderSavedQuestionSets();
}

function updateQuizSetDropdown() {
    const select1 = document.getElementById('online-quiz-set');
    const select2 = document.getElementById('lobby-online-quiz-set');
    
    const populate = (select) => {
        if (!select) return;
        select.innerHTML = '';
        Object.keys(questionSets).forEach(id => {
            const option = document.createElement('option');
            option.value = id;
            option.text = questionSets[id].name;
            select.appendChild(option);
        });
    };
    
    populate(select1);
    populate(select2);
}

// ================= التنقل بين الشاشات (Screen Navigation) =================
function showScreen(screenId) {
    document.querySelectorAll('.game-screen, .game-screen-full').forEach(screen => {
        screen.classList.remove('active');
    });
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
    }
    
    // إذا خرجنا من اللعبة، نوقف الاحتفالات بالفوز
    if (screenId !== 'screen-game-board' && screenId !== 'screen-game-over') {
        stopConfetti();
    }
    
    // إذا خرجنا إلى القائمة الرئيسية من لعبة أونلاين، نقوم بتنظيف الاتصال وتصفير الغرفة تلقائياً
    if (screenId === 'screen-main-menu' && !isLocalGame) {
        if (typeof leaveLobby === 'function') {
            leaveLobby();
        }
    }
}

// ================= متغيرات اللعبة وحالتها العامة =================
let currentGameLevel = 1; // 1, 2, 3
let gamePlayers = [];     // [{ id, name, avatar, color, position, score }]
let activePlayerIndex = 0;
let totalBoardSteps = 30; // عدد الخطوات الكلي لخط النهاية
let isLocalGame = true;
let isDiceRolling = false;
let finalDiceValue = 1;

// ================= اختيار المستوى المناسب =================
function selectLevel(level) {
    initAudio();
    currentGameLevel = level;
    
    if (level === 1) {
        isLocalGame = true;
        showScreen('screen-setup-local');
        adjustLocalPlayerInputs();
    } else {
        isLocalGame = false;
        // إعداد شاشة الأونلاين
        document.getElementById('online-setup-title').innerText = level === 2 ? '⚡ المستوى الثاني (سباق أدوار)' : '💡 المستوى الثالث (سباق أسئلة)';
        document.getElementById('quiz-set-selection-group').style.display = level === 3 ? 'block' : 'none';
        
        showScreen('screen-setup-online');
        switchOnlineTab('create');
        renderAvatarGrid('create-avatar-grid', 'create');
        renderAvatarGrid('join-avatar-grid', 'join');
    }
}

// ================= إعداد واجهة اختيار الشخصيات =================
let selectedSetupAvatars = {}; // { playerIndex: avatarKey }

function renderAvatarGrid(containerId, mode, playerIdx = 0) {
    const grid = document.getElementById(containerId);
    grid.innerHTML = '';
    
    Object.keys(AVATARS).forEach(key => {
        const av = AVATARS[key];
        const isSelected = mode === 'local' 
            ? selectedSetupAvatars[playerIdx] === key 
            : selectedSetupAvatars[mode] === key;
            
        const opt = document.createElement('div');
        opt.className = `avatar-option ${isSelected ? 'selected' : ''}`;
        opt.innerHTML = av.svg;
        opt.onclick = () => {
            if (mode === 'local') {
                selectedSetupAvatars[playerIdx] = key;
                renderAvatarGrid(containerId, 'local', playerIdx);
            } else {
                selectedSetupAvatars[mode] = key;
                renderAvatarGrid(containerId, mode);
            }
        };
        grid.appendChild(opt);
    });
}

// تعديل حقول اللاعبين للمستوى الأول
function adjustLocalPlayerInputs() {
    const count = parseInt(document.getElementById('local-player-count').value);
    const container = document.getElementById('local-players-list');
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        if (!selectedSetupAvatars[i]) {
            // اختيار شخصية تلقائية غير مكررة قدر الإمكان
            const keys = Object.keys(AVATARS);
            selectedSetupAvatars[i] = keys[i % keys.length];
        }
        
        const row = document.createElement('div');
        row.className = 'player-input-row';
        row.id = `local-player-setup-${i}`;
        
        row.innerHTML = `
            <div class="player-input-header">
                <span class="player-label">اللاعب ${i + 1}</span>
            </div>
            <div class="form-group">
                <input type="text" id="local-player-name-${i}" placeholder="اكتب اسم اللاعب..." value="بطل ${i + 1}">
            </div>
            <div class="avatar-selection-container">
                <label>اختر بطل السباق الخاص بك:</label>
                <div class="avatar-grid" id="local-avatar-grid-${i}"></div>
            </div>
        `;
        container.appendChild(row);
        renderAvatarGrid(`local-avatar-grid-${i}`, 'local', i);
    }
}

// شاشة الأونلاين - التبديل بين إنشاء وانضمام
let activeOnlineTab = 'create';
function switchOnlineTab(tab) {
    activeOnlineTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    if (tab === 'create') {
        document.querySelector('.tab-btn[onclick*="create"]').classList.add('active');
        document.getElementById('tab-create-room').classList.add('active');
        if (!selectedSetupAvatars['create']) selectedSetupAvatars['create'] = 'bunny';
        renderAvatarGrid('create-avatar-grid', 'create');
    } else {
        document.querySelector('.tab-btn[onclick*="join"]').classList.add('active');
        document.getElementById('tab-join-room').classList.add('active');
        if (!selectedSetupAvatars['join']) selectedSetupAvatars['join'] = 'bunny';
        renderAvatarGrid('join-avatar-grid', 'join');
    }
}

// ================= بدء اللعبة المحلية (Level 1) =================
function startLocalGame() {
    const count = parseInt(document.getElementById('local-player-count').value);
    gamePlayers = [];
    
    for (let i = 0; i < count; i++) {
        const name = document.getElementById(`local-player-name-${i}`).value.trim() || `بطل ${i + 1}`;
        const avKey = selectedSetupAvatars[i] || 'bunny';
        
        gamePlayers.push({
            id: 'local_' + i,
            name: name,
            avatar: avKey,
            color: AVATARS[avKey].color,
            position: 0
        });
    }
    
    activePlayerIndex = 0;
    setupGameBoardUI();
    showScreen('screen-game-board');
}

// ================= إعداد وتصميم لوحة اللعب الكبيرة =================
function setupGameBoardUI() {
    const badge = document.getElementById('board-level-badge');
    if (currentGameLevel === 1) {
        badge.innerText = '📱 المستوى الأول';
        badge.style.backgroundColor = '#f0f9ff';
        badge.style.color = '#0284c7';
        document.getElementById('quiz-section-container').style.display = 'none';
        document.getElementById('game-controls-bar').style.display = 'flex';
    } else if (currentGameLevel === 2) {
        badge.innerText = '⚡ المستوى الثاني';
        badge.style.backgroundColor = '#f0fdf4';
        badge.style.color = '#22c55e';
        document.getElementById('quiz-section-container').style.display = 'none';
        document.getElementById('game-controls-bar').style.display = 'flex';
    } else {
        badge.innerText = '💡 المستوى الثالث';
        badge.style.backgroundColor = '#faf5ff';
        badge.style.color = '#a855f7';
        document.getElementById('quiz-section-container').style.display = 'flex';
        document.getElementById('game-controls-bar').style.display = 'none'; // لا نرد هنا، الأسئلة تقود الحركة
    }
    
    // إنشاء المسارات الجرافيكية (Race Tracks Area)
    const tracksArea = document.getElementById('race-tracks-area');
    tracksArea.innerHTML = `
        <div class="finish-line-banner">🏁 خـط النـهـايـة 🏆</div>
        <div class="start-line-banner">البداية</div>
    `;
    
    // تحديد الحجم المناسب للماركر والصورة بناءً على عدد اللاعبين لتفادي التداخل
    let markerSize = 48;
    let avatarSize = 40;
    let fontSize = 0.65;
    
    if (gamePlayers.length === 4) {
        markerSize = 42;
        avatarSize = 34;
    } else if (gamePlayers.length === 5) {
        markerSize = 36;
        avatarSize = 28;
        fontSize = 0.55;
    } else if (gamePlayers.length >= 6) {
        markerSize = 32;
        avatarSize = 24;
        fontSize = 0.5;
    }
    
    gamePlayers.forEach((player, idx) => {
        const lane = document.createElement('div');
        lane.className = 'race-lane';
        lane.innerHTML = `
            <div class="lane-svg-container">
                <svg viewBox="0 0 100 1000" preserveAspectRatio="none">
                    <!-- مسار الخلفية الرمادي العريض -->
                    <path class="lane-path lane-path-bg" d="M 50,950 C 15,800 85,650 50,500 C 15,350 85,200 50,50" />
                    <!-- مسار التقدم الملون التفاعلي -->
                    <path id="path-fill-${player.id}" class="lane-path lane-path-fill" d="M 50,950 C 15,800 85,650 50,500 C 15,350 85,200 50,50" stroke="${player.color}" />
                </svg>
            </div>
            <!-- عنصر اللاعب المتحرك -->
            <div id="marker-${player.id}" class="board-player-marker" style="width: ${markerSize}px; height: ${markerSize}px;">
                <div class="marker-avatar-wrapper" id="avatar-wrap-${player.id}" style="width: ${avatarSize}px; height: ${avatarSize}px;">
                    ${AVATARS[player.avatar].svg}
                </div>
                <div class="marker-name-tag" style="font-size: ${fontSize}rem; max-width: ${markerSize + 15}px;">${player.name}</div>
            </div>
        `;
        tracksArea.appendChild(lane);
    });
    
    // محاذاة البداية لجميع اللاعبين
    setTimeout(() => {
        gamePlayers.forEach(p => movePlayerOnVisualPath(p.id, 0));
        updateActivePlayerTurnDisplay();
    }, 100);
}

// تحريك بطل المتسابق بصرياً بمحاذاة مسار الـ SVG المتعرج
function movePlayerOnVisualPath(playerId, step) {
    const pathFill = document.getElementById(`path-fill-${playerId}`);
    const marker = document.getElementById(`marker-${playerId}`);
    
    if (!pathFill || !marker) return;
    
    const totalLength = pathFill.getTotalLength();
    // تحويل النسبة المئوية للموضع الحالي
    const percent = Math.min(step / totalBoardSteps, 1);
    
    // إحداثيات النقطة الحالية على المسار المتعرج
    const pt = pathFill.getPointAtLength(percent * totalLength);
    
    // إيجاد الحجم الفعلي للـ SVG لتحويل النسب المئوية لبكسل
    const svgContainer = pathFill.closest('.lane-svg-container');
    const rect = svgContainer.getBoundingClientRect();
    
    const px = (pt.x / 100) * rect.width;
    const py = (pt.y / 1000) * rect.height;
    
    marker.style.left = `${px}px`;
    marker.style.top = `${py}px`;
    
    // رسم خط التقدم الملون
    pathFill.style.strokeDasharray = `${totalLength}`;
    pathFill.style.strokeDashoffset = `${totalLength - (percent * totalLength)}`;
}

// تحديث عرض اسم ودور اللاعب النشط (للمستوى 1 و 2)
function updateActivePlayerTurnDisplay() {
    const activePlayer = gamePlayers[activePlayerIndex];
    if (!activePlayer) return;
    
    // تفعيل المؤثر البصري للشخصية النشطة
    gamePlayers.forEach(p => {
        const wrap = document.getElementById(`avatar-wrap-${p.id}`);
        if (wrap) {
            if (p.id === activePlayer.id) {
                wrap.classList.add('active-player-token');
            } else {
                wrap.classList.remove('active-player-token');
            }
        }
    });

    document.getElementById('active-player-avatar').innerHTML = AVATARS[activePlayer.avatar].svg;
    
    if (isLocalGame) {
        document.getElementById('active-player-name-display').innerText = `دور: ${activePlayer.name}`;
        document.getElementById('game-status-message').innerText = `حان دور البطل: ${activePlayer.name} 🎲`;
        enableDiceButton(true);
    } else {
        // في الأونلاين
        if (activePlayer.id === myPeerId) {
            document.getElementById('active-player-name-display').innerText = `دورك أنت!`;
            document.getElementById('game-status-message').innerText = `دورك الآن! ارمِ النرد بسرعة 🎲`;
            enableDiceButton(true);
        } else {
            document.getElementById('active-player-name-display').innerText = `دور: ${activePlayer.name}`;
            document.getElementById('game-status-message').innerText = `في انتظار البطل ${activePlayer.name} ليرمي النرد...`;
            enableDiceButton(false);
        }
    }
}

function enableDiceButton(enabled) {
    const dice = document.getElementById('dice-element');
    const btn = document.getElementById('btn-roll-dice');
    if (enabled) {
        dice.style.pointerEvents = 'auto';
        btn.disabled = false;
        btn.style.opacity = '1';
    } else {
        dice.style.pointerEvents = 'none';
        btn.disabled = true;
        btn.style.opacity = '0.5';
    }
}

// ================= منطق رمي النرد التفاعلي =================
function rollDice() {
    if (isDiceRolling) return;
    
    const rollingIdx = activePlayerIndex;
    
    isDiceRolling = true;
    playRollSound();
    
    const dice = document.getElementById('dice-element');
    dice.classList.add('rolling');
    
    // توليد رقم عشوائي
    finalDiceValue = Math.floor(Math.random() * 6) + 1;
    
    // إذا كان أونلاين، نقوم بإرسال رمية النرد لبقية الأجهزة فوراً قبل انتهاء الأنيميشن
    if (!isLocalGame && gamePlayers[activePlayerIndex].id === myPeerId) {
        sendDiceRollToPeers(finalDiceValue);
    }
    
    setTimeout(() => {
        dice.classList.remove('rolling');
        
        // تطبيق الدوران المقابل للقيمة
        applyDiceRotation(finalDiceValue);
        
        setTimeout(() => {
            isDiceRolling = false;
            advancePlayerByIdx(rollingIdx, finalDiceValue);
        }, 300); // وقت انتظار بعد التوقف للاستقرار البصري
        
    }, 600); // مدة الدوران العشوائي للنرد
}

function applyDiceRotation(val) {
    const dice = document.getElementById('dice-element');
    let rx = 0, ry = 0;
    
    switch(val) {
        case 1: rx = 0; ry = 0; break;
        case 6: rx = 0; ry = 180; break;
        case 2: rx = 0; ry = -90; break;
        case 5: rx = 0; ry = 90; break;
        case 3: rx = -90; ry = 0; break;
        case 4: rx = 90; ry = 0; break;
    }
    
    dice.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
}

// تحريك لاعب محدد بناءً على مؤشره
function advancePlayerByIdx(playerIdx, steps) {
    const player = gamePlayers[playerIdx];
    if (!player) return;
    
    playJumpSound();
    
    player.position = Math.min(player.position + steps, totalBoardSteps);
    movePlayerOnVisualPath(player.id, player.position);
    
    document.getElementById('game-status-message').innerText = `تقدم البطل ${player.name} بمقدار ${steps} خطوة!`;
    
    // فحص الفوز
    if (player.position >= totalBoardSteps) {
        announceWinner(player);
        return;
    }
    
    // انتقال الدور للاعب التالي
    if (isLocalGame) {
        activePlayerIndex = (activePlayerIndex + 1) % gamePlayers.length;
        setTimeout(updateActivePlayerTurnDisplay, 1000);
    } else {
        // في الأونلاين المضيف هو من يحدد ويوجه الدور التالي ومزامنة البيانات
        if (isHost) {
            activePlayerIndex = (playerIdx + 1) % gamePlayers.length;
            setTimeout(() => {
                broadcastGameState();
            }, 1000);
        }
    }
}

// تحريك اللاعب النشط للأمام
function advanceActivePlayer(steps) {
    advancePlayerByIdx(activePlayerIndex, steps);
}

// ================= إعلان الفائز والاحتفال بالـ Confetti =================
function announceWinner(winner) {
    playWinSound();
    
    // تشغيل القصاصات
    startConfetti();
    
    document.getElementById('winner-name-display').innerText = winner.name;
    document.getElementById('winner-avatar-display').innerHTML = AVATARS[winner.avatar].svg;
    
    // لمعان الفائز
    const marker = document.getElementById(`avatar-wrap-${winner.id}`);
    if (marker) marker.classList.add('winner-glow');
    
    setTimeout(() => {
        showScreen('screen-game-over');
    }, 1500);
}

function restartGame() {
    stopConfetti();
    if (isLocalGame) {
        gamePlayers.forEach(p => {
            p.position = 0;
            const wrap = document.getElementById(`avatar-wrap-${p.id}`);
            if (wrap) wrap.classList.remove('winner-glow');
        });
        activePlayerIndex = 0;
        setupGameBoardUI();
        showScreen('screen-game-board');
    } else {
        // في الأونلاين، المضيف يعيد التهيئة
        if (isHost) {
            resetOnlineGame();
        }
    }
}

function confirmExitGame() {
    if (confirm('هل أنت متأكد من الخروج وإنهاء السباق الحالي؟')) {
        if (!isLocalGame) {
            leaveLobby();
        }
        showScreen('screen-main-menu');
    }
}

// ================= محرك أوراق الزينة المتساقطة (Confetti Particle System) =================
let confettiActive = false;
let confettiAnimId = null;

function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colors = ['#f43f5e', '#3b82f6', '#22c55e', '#eab308', '#a855f7', '#06b6d4', '#f59e0b'];
    const particles = [];
    
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }
    
    confettiActive = true;
    
    function draw() {
        if (!confettiActive) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, idx) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            p.tilt = Math.sin(p.tiltAngle - idx/3) * 15;
            
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r/2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/2);
            ctx.stroke();
            
            // إعادة التدوير من الأعلى
            if (p.y > canvas.height) {
                particles[idx] = {
                    x: Math.random() * canvas.width,
                    y: -20,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngleIncremental: p.tiltAngleIncremental,
                    tiltAngle: p.tiltAngle
                };
            }
        });
        
        confettiAnimId = requestAnimationFrame(draw);
    }
    
    draw();
    
    // ملائمة الحجم عند تدوير الهاتف أو تكبير الشاشة
    window.addEventListener('resize', resizeCanvas);
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

function stopConfetti() {
    confettiActive = false;
    if (confettiAnimId) {
        cancelAnimationFrame(confettiAnimId);
        confettiAnimId = null;
    }
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// تفاعل تحجيم الشاشة لمسارات السباق
window.addEventListener('resize', () => {
    if (document.getElementById('screen-game-board').classList.contains('active')) {
        gamePlayers.forEach(p => movePlayerOnVisualPath(p.id, p.position));
    }
});

// تهيئة إدارة الأسئلة عند فتح الصفحة
window.addEventListener('DOMContentLoaded', () => {
    loadQuestionSets();
});
