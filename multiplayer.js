// ================= متغيرات الاتصال متعدد اللاعبين (Multiplayer Variables) =================
let myPeer = null;
let myPeerId = null;
let roomCode = null;
let isHost = false;
let hostConn = null;       // اتصال الضيف بالمضيف
let guestConns = {};      // اتصالات المضيف بالضيوف { peerId: connection }
let myPlayerName = '';
let myPlayerAvatar = '';

// معرف عام لتجنب التداخل مع غرف PeerJS الأخرى في العالم
const PEER_NAMESPACE = 'salsabeel-race-room-';

// ================= تهيئة وتوليد الاتصال =================

// فتح أو ربط الغرفة
function createNewRoom() {
    initAudio();
    myPlayerName = document.getElementById('create-player-name').value.trim();
    myPlayerAvatar = selectedSetupAvatars['create'] || 'bunny';
    
    if (!myPlayerName) return alert('برجاء كتابة اسمك أولاً!');
    
    // تصفية مصفوفة اللاعبين السابقة لتجنب دخول أسماء قديمة
    gamePlayers = [];
    
    // تعطيل الزر مؤقتاً لتجنب النقرات المتعددة ولحين نجاح الاتصال
    const btn = document.querySelector('button[onclick="createNewRoom()"]');
    if (btn) {
        btn.disabled = true;
        btn.innerText = 'جاري إنشاء الغرفة... ⏳';
    }
    
    // توليد رمز غرفة عشوائي مكون من 4 أرقام
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    roomCode = randomCode;
    isHost = true;
    
    setupPeer(true);
}

function joinExistingRoom() {
    initAudio();
    myPlayerName = document.getElementById('join-player-name').value.trim();
    myPlayerAvatar = selectedSetupAvatars['join'] || 'bunny';
    const code = document.getElementById('join-room-id').value.trim();
    
    if (!myPlayerName) return alert('برجاء كتابة اسمك أولاً!');
    if (!code || code.length !== 4 || isNaN(code)) return alert('برجاء كتابة رمز غرفة صحيح مكون من 4 أرقام!');
    
    // تصفية مصفوفة اللاعبين السابقة
    gamePlayers = [];
    
    // تعطيل الزر مؤقتاً لتجنب النقرات المتعددة
    const btn = document.querySelector('button[onclick="joinExistingRoom()"]');
    if (btn) {
        btn.disabled = true;
        btn.innerText = 'جاري الانضمام للسباق... ⏳';
    }
    
    roomCode = code;
    isHost = false;
    
    setupPeer(false);
}

function setupPeer(asHost) {
    if (myPeer) {
        myPeer.destroy();
    }
    
    const peerIdToRegister = asHost ? (PEER_NAMESPACE + roomCode) : null;
    
    // استخدام خوادم STUN من جوجل لضمان نجاح الاتصال وتجاوز جدران الحماية
    myPeer = new Peer(peerIdToRegister, {
        debug: 1,
        secure: true,
        config: {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' },
                { urls: 'stun:stun3.l.google.com:19302' },
                { urls: 'stun:stun4.l.google.com:19302' }
            ]
        }
    });
    
    myPeer.on('open', (id) => {
        myPeerId = id;
        
        // إعادة تهيئة وتفعيل الأزرار
        const createBtn = document.querySelector('button[onclick="createNewRoom()"]');
        if (createBtn) {
            createBtn.disabled = false;
            createBtn.innerText = 'إنشاء الغرفة 🏠';
        }
        const joinBtn = document.querySelector('button[onclick="joinExistingRoom()"]');
        if (joinBtn) {
            joinBtn.disabled = false;
            joinBtn.innerText = 'انضمام للسباق 🏁';
        }
        
        if (asHost) {
            // كـمضيف، نعرض رمز الغرفة ونفتح شاشة اللوبي الآن بعد نجاح التسجيل على الخادم
            document.getElementById('lobby-room-id-display').innerText = roomCode;
            document.getElementById('btn-start-online-game').style.display = 'block';
            document.getElementById('lobby-wait-msg').style.display = 'block';
            
            // إظهار اختيار حزمة الأسئلة للمضيف في اللوبي إذا كنا في المستوى الثالث
            if (currentGameLevel === 3) {
                document.getElementById('lobby-quiz-set-selection-group').style.display = 'block';
            } else {
                document.getElementById('lobby-quiz-set-selection-group').style.display = 'none';
            }
            
            showScreen('screen-lobby');
            updateLobbyPlayersList([]);
        } else {
            // كضيف، نقوم بالاتصال بالمضيف مباشرة
            document.getElementById('lobby-room-id-display').innerText = roomCode;
            document.getElementById('btn-start-online-game').style.display = 'none';
            document.getElementById('lobby-wait-msg').style.display = 'block';
            
            showScreen('screen-lobby');
            updateLobbyPlayersList([]);
            
            connectToHost();
        }
    });
    
    myPeer.on('error', (err) => {
        console.error('PeerJS Error:', err);
        
        // إعادة تهيئة وتفعيل الأزرار في حالة حدوث خطأ
        const createBtn = document.querySelector('button[onclick="createNewRoom()"]');
        if (createBtn) {
            createBtn.disabled = false;
            createBtn.innerText = 'إنشاء الغرفة 🏠';
        }
        const joinBtn = document.querySelector('button[onclick="joinExistingRoom()"]');
        if (joinBtn) {
            joinBtn.disabled = false;
            joinBtn.innerText = 'انضمام للسباق 🏁';
        }
        
        if (err.type === 'unavailable-id') {
            alert('رمز الغرفة هذا مستخدم حالياً! يرجى المحاولة مرة أخرى لإنشاء رمز جديد.');
            showScreen('screen-setup-online');
        } else if (err.type === 'peer-unavailable') {
            alert('لم يتم العثور على الغرفة! تأكد من أن منشئ الغرفة متصل بالإنترنت وبدأ الغرفة فعلياً، وأن رمز الغرفة مكتوب بشكل صحيح.');
            showScreen('screen-setup-online');
        } else if (err.type === 'network') {
            alert('خطأ في الشبكة! يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً.');
            showScreen('screen-setup-online');
        } else {
            alert('حدث خطأ في الاتصال: ' + err.message);
            showScreen('screen-setup-online');
        }
    });
    
    if (asHost) {
        // الاستماع لاتصالات الضيوف
        guestConns = {};
        myPeer.on('connection', (conn) => {
            handleIncomingConnection(conn);
        });
    }
}

// ================= منطق المضيف (Host Logic) =================

function handleIncomingConnection(conn) {
    conn.on('open', () => {
        // المضيف يستقبل بيانات الضيف
        guestConns[conn.peer] = conn;
        
        conn.on('data', (data) => {
            handleDataFromGuest(conn.peer, data);
        });
        
        conn.on('close', () => {
            delete guestConns[conn.peer];
            // إزالة اللاعب من القائمة وإعادة البث
            removePlayerOnDisconnect(conn.peer);
        });
    });
}

function removePlayerOnDisconnect(peerId) {
    // إزالة اللاعب
    gamePlayers = gamePlayers.filter(p => p.id !== peerId);
    broadcastLobbyState();
}

function handleDataFromGuest(peerId, data) {
    console.log('Host received data:', data);
    if (!data || !data.type) return;
    
    if (data.type === 'join_request') {
        // فحص ما إذا كان اللاعب موجوداً بالفعل بالمعرف لتحديث بياناته فقط دون إضافة مكرر
        let existingPlayer = gamePlayers.find(p => p.id === peerId);
        
        if (existingPlayer) {
            // تحديث الاسم والرمز التعبيري فقط دون تغيير أي شيء آخر
            existingPlayer.name = data.name;
            existingPlayer.avatar = data.avatar;
            existingPlayer.color = AVATARS[data.avatar].color;
        } else {
            // فحص هل الاسم مكرر أو الشخصية مأخوذة
            let finalName = data.name;
            if (gamePlayers.some(p => p.name === finalName) || finalName === myPlayerName) {
                finalName = finalName + ' (2)';
            }
            
            const newPlayer = {
                id: peerId,
                name: finalName,
                avatar: data.avatar,
                color: AVATARS[data.avatar].color,
                position: 0,
                score: 0,
                answered: false,
                lastAnswerCorrect: false
            };
            
            gamePlayers.push(newPlayer);
        }
        broadcastLobbyState();
    }
    
    if (data.type === 'dice_roll_event') {
        // عندما يرمي ضيف النرد، يبث المضيف الرقم للجميع لتشغيله
        broadcastToAll({
            type: 'dice_roll_sync',
            value: data.value,
            playerIdx: activePlayerIndex
        });
        
        // المضيف يحتاج أيضاً إلى تشغيل الحركة وتحديث حالة اللعبة محلياً وبث النتيجة
        syncDiceRollAnimation(data.value, activePlayerIndex);
    }
    
    if (data.type === 'answer_submitted') {
        handleGuestAnswer(peerId, data.isCorrect, data.score);
    }
}

function broadcastToAll(msg) {
    Object.values(guestConns).forEach(conn => {
        if (conn.open) {
            conn.send(msg);
        }
    });
}

function broadcastLobbyState() {
    // المضيف يجمع قائمة اللاعبين كاملة بما فيها نفسه
    const allPlayers = [
        { id: myPeerId, name: myPlayerName, avatar: myPlayerAvatar, isHost: true }
    ];
    
    gamePlayers.forEach(p => {
        if (p.id !== myPeerId) {
            allPlayers.push({ id: p.id, name: p.name, avatar: p.avatar, isHost: false });
        }
    });
    
    updateLobbyPlayersList(allPlayers);
    
    broadcastToAll({
        type: 'lobby_update',
        players: allPlayers
    });
}

// تحديث عرض قائمة اللاعبين في اللوبي
function updateLobbyPlayersList(players) {
    const container = document.getElementById('lobby-players-list');
    container.innerHTML = '';
    
    // إذا كنت المضيف وقائمة اللاعبين خالية، أضف نفسك أولاً
    if (players.length === 0) {
        players = [{ id: myPeerId, name: myPlayerName, avatar: myPlayerAvatar, isHost: true }];
    }
    
    players.forEach(p => {
        const row = document.createElement('div');
        row.className = `lobby-player-row ${p.isHost ? 'is-host' : ''}`;
        row.innerHTML = `
            <div class="mini-avatar">${AVATARS[p.avatar].svg}</div>
            <div class="player-name">${p.name}</div>
            <span class="player-status-badge ${p.isHost ? 'host' : 'ready'}">
                ${p.isHost ? 'المضيف' : 'جاهز'}
            </span>
        `;
        container.appendChild(row);
    });
}

// بدء السباق أونلاين
function startOnlineGame() {
    // تصفية وحفظ اللاعبين الضيوف الذين انضموا للوبي بالفعل
    const guests = gamePlayers.filter(p => p.id !== myPeerId);
    
    // تجهيز قائمة لاعبي السباق مع المضيف في البداية
    gamePlayers = [
        {
            id: myPeerId,
            name: myPlayerName,
            avatar: myPlayerAvatar,
            color: AVATARS[myPlayerAvatar].color,
            position: 0,
            score: 0,
            answered: false,
            lastAnswerCorrect: false
        },
        ...guests
    ];
    
    broadcastToAll({
        type: 'start_game_sync',
        players: gamePlayers,
        level: currentGameLevel,
        selectedSetId: document.getElementById('lobby-online-quiz-set').value
    });
    
    // تشغيل محلي
    activePlayerIndex = 0;
    setupGameBoardUI();
    showScreen('screen-game-board');
    
    if (currentGameLevel === 3) {
        // بدء سباق الأسئلة
        setTimeout(startOnlineQuizRace, 1500);
    }
}

// ================= منطق الضيف (Guest Logic) =================

function connectToHost() {
    const hostPeerId = PEER_NAMESPACE + roomCode;
    hostConn = myPeer.connect(hostPeerId);
    
    hostConn.on('open', () => {
        // إرسال طلب انضمام بالاسم والشخصية المحددة
        hostConn.send({
            type: 'join_request',
            name: myPlayerName,
            avatar: myPlayerAvatar
        });
        
        hostConn.on('data', (data) => {
            handleDataFromHost(data);
        });
        
        hostConn.on('close', () => {
            alert('تم قطع الاتصال بالمضيف أو تم إغلاق الغرفة.');
            showScreen('screen-main-menu');
        });
    });
}

function handleDataFromHost(data) {
    console.log('Guest received data:', data);
    if (!data || !data.type) return;
    
    if (data.type === 'lobby_update') {
        updateLobbyPlayersList(data.players);
    }
    
    if (data.type === 'start_game_sync') {
        gamePlayers = data.players;
        currentGameLevel = data.level;
        activeSetId = data.selectedSetId;
        
        setupGameBoardUI();
        showScreen('screen-game-board');
    }
    
    if (data.type === 'dice_roll_sync') {
        // مزامنة رمية النرد
        activePlayerIndex = data.playerIdx;
        
        // تشغيل الحركة فقط للضيوف الآخرين، وليس للاعب الذي رمى النرد بالفعل محلياً
        const rollingPlayer = gamePlayers[data.playerIdx];
        if (rollingPlayer && rollingPlayer.id !== myPeerId) {
            syncDiceRollAnimation(data.value, data.playerIdx);
        }
    }
    
    if (data.type === 'game_state_sync') {
        gamePlayers = data.players;
        activePlayerIndex = data.activeIdx;
        
        // تحديث جميع المواقع والواجهة
        gamePlayers.forEach(p => {
            movePlayerOnVisualPath(p.id, p.position);
        });
        updateActivePlayerTurnDisplay();
    }
    
    if (data.type === 'next_question_sync') {
        showOnlineQuestionToGuest(data.question, data.options, data.timeLimit);
    }
    
    if (data.type === 'round_results_sync') {
        showQuizRoundResults(data.players, data.results);
    }
    
    if (data.type === 'game_over_sync') {
        const winner = gamePlayers.find(p => p.id === data.winnerId);
        if (winner) announceWinner(winner);
    }
    
    if (data.type === 'reset_game_sync') {
        gamePlayers = data.players;
        // إزالة لمعان الفوز
        gamePlayers.forEach(p => {
            const wrap = document.getElementById(`avatar-wrap-${p.id}`);
            if (wrap) wrap.classList.remove('winner-glow');
        });
        activePlayerIndex = 0;
        setupGameBoardUI();
        showScreen('screen-game-board');
    }
}

// ضيف يرسل حركة نرد
function sendDiceRollToPeers(val) {
    if (isHost) {
        broadcastToAll({
            type: 'dice_roll_sync',
            value: val,
            playerIdx: activePlayerIndex
        });
    } else {
        hostConn.send({
            type: 'dice_roll_event',
            value: val
        });
    }
}

// مزامنة حركة النرد البصرية لجميع اللاعبين
function syncDiceRollAnimation(val, playerIdx) {
    if (isDiceRolling) return;
    
    const rollingIdx = playerIdx !== undefined ? playerIdx : activePlayerIndex;
    
    isDiceRolling = true;
    playRollSound();
    
    const dice = document.getElementById('dice-element');
    dice.classList.add('rolling');
    
    setTimeout(() => {
        dice.classList.remove('rolling');
        applyDiceRotation(val);
        
        setTimeout(() => {
            isDiceRolling = false;
            // تحريك اللاعب بناءً على الرقم والمؤشر المحدد
            advancePlayerByIdx(rollingIdx, val);
        }, 300);
    }, 600);
}

// بث تحديثات لوحة المضيف لجميع الهواتف
function broadcastGameState() {
    broadcastToAll({
        type: 'game_state_sync',
        players: gamePlayers,
        activeIdx: activePlayerIndex
    });
    // تشغيل محلي للمضيف أيضاً
    updateActivePlayerTurnDisplay();
}

// ================= محرك سباق الأسئلة أونلاين (Level 3 Engine) =================
let currentQuizQuestion = null;
let currentQuestionIndex = 0;
let quizTimerId = null;
let secondsRemaining = 12;
const TOTAL_QUESTION_TIME = 12;
let questionStartTime = 0;
let hasAnsweredCurrentQuestion = false;

// إعداد وبدء جولة سباق جديدة (Host Only)
function startOnlineQuizRace() {
    currentQuestionIndex = 0;
    
    // تصفير النقاط والمسافات
    gamePlayers.forEach(p => {
        p.position = 0;
        p.score = 0;
    });
    
    sendNextQuestionToAll();
}

function sendNextQuestionToAll() {
    hasAnsweredCurrentQuestion = false;
    // استدعاء الأسئلة من الحزمة المحددة
    const questions = questionSets[activeSetId]?.questions || DEFAULT_QUESTIONS;
    
    if (questions.length === 0) {
        alert('حزمة الأسئلة فارغة! تم استخدام الأسئلة الافتراضية.');
        activeSetId = 'default_set';
    }
    
    const activeQuestions = questionSets[activeSetId]?.questions || DEFAULT_QUESTIONS;
    
    // إذا انتهت الأسئلة، نعيد تدويرها من الأول
    if (currentQuestionIndex >= activeQuestions.length) {
        currentQuestionIndex = 0;
    }
    
    currentQuizQuestion = activeQuestions[currentQuestionIndex];
    currentQuestionIndex++;
    
    // إعداد حالة إجابة اللاعبين لدى المضيف
    gamePlayers.forEach(p => {
        p.answered = false;
        p.lastAnswerCorrect = false;
    });
    
    broadcastToAll({
        type: 'next_question_sync',
        question: currentQuizQuestion.question,
        options: currentQuizQuestion.options,
        timeLimit: TOTAL_QUESTION_TIME
    });
    
    // تشغيل محلي للمضيف
    showOnlineQuestionToGuest(currentQuizQuestion.question, currentQuizQuestion.options, TOTAL_QUESTION_TIME);
}

// عرض السؤال على الشاشة وتفعيل العداد
function showOnlineQuestionToGuest(qText, qOpts, duration) {
    hasAnsweredCurrentQuestion = false;
    document.getElementById('quiz-question-text').innerText = qText;
    
    // تعبئة الخيارات الأربعة
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`opt-${i}`);
        btn.innerText = qOpts[i];
        btn.className = 'quiz-option-btn'; // استعادة النمط
        btn.style.pointerEvents = 'auto';
    }
    
    // تشغيل العداد التنازلي البصري
    secondsRemaining = duration;
    questionStartTime = Date.now();
    
    const fill = document.getElementById('quiz-timer-fill');
    fill.style.width = '100%';
    fill.style.backgroundColor = '#f59e0b';
    
    if (quizTimerId) clearInterval(quizTimerId);
    
    quizTimerId = setInterval(() => {
        const elapsed = (Date.now() - questionStartTime) / 1000;
        const remaining = Math.max(0, duration - elapsed);
        
        fill.style.width = `${(remaining / duration) * 100}%`;
        
        if (remaining <= 4) {
            fill.style.backgroundColor = '#ef4444'; // لون أحمر متأخر
        }
        
        if (remaining <= 0) {
            clearInterval(quizTimerId);
            // انتهاء الوقت بدون إجابة
            if (!hasAnsweredCurrentQuestion) {
                autoSubmitWrongAnswer();
            }
        }
    }, 100);
}

// إرسال الإجابة المختارة
function submitAnswer(optIdx) {
    if (hasAnsweredCurrentQuestion) return;
    hasAnsweredCurrentQuestion = true;
    
    // إيقاف العداد المحلي
    clearInterval(quizTimerId);
    
    // تعطيل الأزرار الأخرى
    for (let i = 0; i < 4; i++) {
        document.getElementById(`opt-${i}`).style.pointerEvents = 'none';
    }
    
    // حساب الوقت المستغرق
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    const timeLeft = Math.max(0, TOTAL_QUESTION_TIME - timeTaken);
    
    // تحديد الصحة بناءً على السؤال النشط
    // المضيف يقارن محلياً، والضيف ينتظر النتيجة ولكن يرسل إجابته
    
    let isCorrect = false;
    if (isHost) {
        isCorrect = (optIdx === currentQuizQuestion.correct);
    } else {
        // الضيف لا يعرف الإجابة الصحيحة برمجياً لمنع الغش، المضيف سيتحقق منها ويرسل الرد
    }
    
    // حساب النقاط بناءً على السرعة
    // إجابة صحيحة تمنح نقاط سرعة: 100 + (الوقت المتبقي * 10)
    const score = isHost 
        ? (isCorrect ? Math.floor(100 + (timeLeft * 10)) : 0)
        : optIdx; // الضيف يرسل رقم خياره، والمضيف سيقوم بالتحقق وحساب النقاط
        
    // عرض تمهيدي محلي للمستخدم باللون الرمادي حتى رد المضيف
    document.getElementById(`opt-${optIdx}`).classList.add('disabled');
    
    if (isHost) {
        handleGuestAnswer(myPeerId, isCorrect, score, optIdx);
    } else {
        // الضيف يرسل خياره للمضيف ليحسبه
        hostConn.send({
            type: 'answer_submitted',
            isCorrect: false, // لا تهم هنا
            score: optIdx    // استغلال الحقل لإرسال مؤشر الخيار
        });
    }
}

function autoSubmitWrongAnswer() {
    hasAnsweredCurrentQuestion = true;
    for (let i = 0; i < 4; i++) {
        document.getElementById(`opt-${i}`).style.pointerEvents = 'none';
    }
    
    if (isHost) {
        handleGuestAnswer(myPeerId, false, 0, -1);
    } else {
        hostConn.send({
            type: 'answer_submitted',
            isCorrect: false,
            score: -1 // لم يجب
        });
    }
}

// معالجة المضيف لإجابات الضيوف والمضيف نفسه
function handleGuestAnswer(peerId, isCorrect, scoreData, optIdx = -1) {
    if (!isHost) return;
    
    const player = gamePlayers.find(p => p.id === peerId);
    if (!player) return;
    
    player.answered = true;
    
    // إذا كان من ضيف، نقوم بفحص الخيار المختار
    if (peerId !== myPeerId) {
        const selectedOpt = scoreData; // تم تمرير index الخيار هنا
        const isOptCorrect = (selectedOpt === currentQuizQuestion.correct);
        
        player.lastAnswerCorrect = isOptCorrect;
        player.selectedOpt = selectedOpt;
        
        if (isOptCorrect) {
            // حساب نقاط السرعة
            const timeTaken = (Date.now() - questionStartTime) / 1000;
            const timeLeft = Math.max(0, TOTAL_QUESTION_TIME - timeTaken);
            player.score = Math.floor(100 + (timeLeft * 10));
        } else {
            player.score = 0;
        }
    } else {
        // للمضيف نفسه
        player.lastAnswerCorrect = isCorrect;
        player.score = scoreData;
        player.selectedOpt = optIdx;
    }
    
    // التحقق هل أجاب الجميع؟
    const allAnswered = gamePlayers.every(p => p.answered);
    if (allAnswered) {
        processQuizRoundResults();
    }
}

// معالجة وحساب نتائج الجولة وبثها
function processQuizRoundResults() {
    clearInterval(quizTimerId);
    
    const roundResults = {};
    let gameOver = false;
    let winnerId = null;
    
    gamePlayers.forEach(p => {
        let stepsMoved = 0;
        if (p.lastAnswerCorrect) {
            // إجابة صحيحة: تقدم 1 خطوة أساسية، وتفوق السرعة (نقاط > 160) يمنح 2 خطوة
            stepsMoved = p.score >= 170 ? 2 : 1;
        }
        
        p.position = Math.min(p.position + stepsMoved, totalBoardSteps);
        
        roundResults[p.id] = {
            isCorrect: p.lastAnswerCorrect,
            stepsMoved: stepsMoved,
            correctAnswerIdx: currentQuizQuestion.correct,
            selectedOpt: p.selectedOpt
        };
        
        if (p.position >= totalBoardSteps) {
            gameOver = true;
            winnerId = p.id;
        }
    });
    
    // بث النتائج
    broadcastToAll({
        type: 'round_results_sync',
        players: gamePlayers,
        results: roundResults
    });
    
    // عرض محلي للمضيف
    showQuizRoundResults(gamePlayers, roundResults);
    
    // الانتقال للخطوة التالية
    setTimeout(() => {
        if (gameOver) {
            broadcastToAll({
                type: 'game_over_sync',
                winnerId: winnerId
            });
            const winner = gamePlayers.find(p => p.id === winnerId);
            announceWinner(winner);
        } else {
            // السؤال التالي
            sendNextQuestionToAll();
        }
    }, 4000); // 4 ثواني لمشاهدة الحركة ومعرفة الإجابة الصحيحة
}

// عرض النتائج بصرياً وتلوين الخيارات
function showQuizRoundResults(updatedPlayers, results) {
    const myResult = results[myPeerId];
    const correctIdx = myResult ? myResult.correctAnswerIdx : 0;
    const mySelectedIdx = myResult ? myResult.selectedOpt : -1;
    
    // تلوين الخيارات (الأخضر للصحيح، الأحمر للخاطئ المختار)
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`opt-${i}`);
        if (i === correctIdx) {
            btn.classList.add('correct');
        } else if (i === mySelectedIdx && !myResult.isCorrect) {
            btn.classList.add('wrong');
        } else {
            btn.classList.add('disabled');
        }
    }
    
    // تشغيل الصوت التفاعلي المناسب
    if (myResult) {
        if (myResult.isCorrect) {
            playCorrectSound();
        } else {
            playWrongSound();
        }
    }
    
    // تحديث مواضع اللاعبين والمسارات
    gamePlayers = updatedPlayers;
    gamePlayers.forEach(p => {
        movePlayerOnVisualPath(p.id, p.position);
    });
}

// خروج المضيف وإعادة تصفير اللعبة
function resetOnlineGame() {
    gamePlayers.forEach(p => {
        p.position = 0;
        p.score = 0;
        p.answered = false;
        p.lastAnswerCorrect = false;
        
        const wrap = document.getElementById(`avatar-wrap-${p.id}`);
        if (wrap) wrap.classList.remove('winner-glow');
    });
    
    broadcastToAll({
        type: 'reset_game_sync',
        players: gamePlayers
    });
    
    setupGameBoardUI();
    showScreen('screen-game-board');
    
    if (currentGameLevel === 3) {
        setTimeout(startOnlineQuizRace, 1500);
    }
}

// مغادرة الغرفة وإغلاق الاتصالات
function leaveLobby() {
    if (myPeer) {
        myPeer.destroy();
        myPeer = null;
    }
    
    hostConn = null;
    guestConns = {};
    isHost = false;
    showScreen('screen-main-menu');
}
