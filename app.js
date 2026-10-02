const names = [
  ["الرَّحْمَنُ", "Ar-Rahman", "The Most Compassionate"], ["الرَّحِيمُ", "Ar-Raheem", "The Most Merciful"], ["الْمَلِكُ", "Al-Malik", "The King"], ["الْقُدُّوسُ", "Al-Quddus", "The Most Holy"], ["السَّلَامُ", "As-Salam", "The Source of Peace"], ["الْمُؤْمِنُ", "Al-Mu'min", "The Giver of Security"], ["الْمُهَيْمِنُ", "Al-Muhaymin", "The Guardian"], ["الْعَزِيزُ", "Al-Aziz", "The Almighty"], ["الْجَبَّارُ", "Al-Jabbar", "The Restorer"], ["الْمُتَكَبِّرُ", "Al-Mutakabbir", "The Supreme"], ["الْخَالِقُ", "Al-Khaliq", "The Creator"], ["الْبَارِئُ", "Al-Bari", "The Originator"], ["الْمُصَوِّرُ", "Al-Musawwir", "The Fashioner"], ["الْغَفَّارُ", "Al-Ghaffar", "The Constant Forgiver"], ["الْقَهَّارُ", "Al-Qahhar", "The All-Prevailing"], ["الْوَهَّابُ", "Al-Wahhab", "The Bestower"], ["الرَّزَّاقُ", "Ar-Razzaq", "The Provider"], ["الْفَتَّاحُ", "Al-Fattah", "The Opener"], ["اَلْعَلِيْمُ", "Al-Alim", "The All-Knowing"], ["الْقَابِضُ", "Al-Qabid", "The Withholder"], ["الْبَاسِطُ", "Al-Basit", "The Expander"], ["الْخَافِضُ", "Al-Khafid", "The Abaser"], ["الرَّافِعُ", "Ar-Rafi", "The Exalter"], ["الْمُعِزُّ", "Al-Mu'izz", "The Giver of Honor"], ["المُذِلُّ", "Al-Mudhill", "The Humiliator"], ["السَّمِيعُ", "As-Sami", "The All-Hearing"], ["الْبَصِيرُ", "Al-Basir", "The All-Seeing"], ["الْحَكَمُ", "Al-Hakam", "The Judge"], ["الْعَدْلُ", "Al-Adl", "The Utterly Just"], ["اللَّطِيفُ", "Al-Latif", "The Most Gentle"], ["الْخَبِيرُ", "Al-Khabir", "The All-Aware"], ["الْحَلِيمُ", "Al-Halim", "The Most Forbearing"], ["الْعَظِيمُ", "Al-Azim", "The Magnificent"], ["الْغَفُورُ", "Al-Ghafur", "The Most Forgiving"], ["الشَّكُورُ", "Ash-Shakur", "The Most Appreciative"], ["الْعَلِيُّ", "Al-Ali", "The Most High"], ["الْكَبِيرُ", "Al-Kabir", "The Greatest"], ["الْحَفِيظُ", "Al-Hafiz", "The Preserver"], ["المُقيِت", "Al-Muqit", "The Sustainer"], ["الْحسِيبُ", "Al-Hasib", "The Reckoner"], ["الْجَلِيلُ", "Al-Jalil", "The Majestic"], ["الْكَرِيمُ", "Al-Karim", "The Most Generous"], ["الرَّقِيبُ", "Ar-Raqib", "The Watchful"], ["الْمُجِيبُ", "Al-Mujib", "The Responsive"], ["الْوَاسِعُ", "Al-Wasi", "The All-Encompassing"], ["الْحَكِيمُ", "Al-Hakim", "The Perfectly Wise"], ["الْوَدُودُ", "Al-Wadud", "The Most Loving"], ["الْمَجِيدُ", "Al-Majid", "The Most Glorious"], ["الْبَاعِثُ", "Al-Ba'ith", "The Resurrector"], ["الشَّهِيدُ", "Ash-Shahid", "The Witness"], ["الْحَقُّ", "Al-Haqq", "The Truth"], ["الْوَكِيلُ", "Al-Wakil", "The Trustee"], ["الْقَوِيُّ", "Al-Qawiyy", "The All-Strong"], ["الْمَتِينُ", "Al-Matin", "The Firm"], ["الْوَلِيُّ", "Al-Waliyy", "The Protecting Friend"], ["الْحَمِيدُ", "Al-Hamid", "The Praiseworthy"], ["الْمُحْصِي", "Al-Muhsi", "The Counter"], ["الْمُبْدِئُ", "Al-Mubdi", "The Originator"], ["الْمُعِيدُ", "Al-Mu'id", "The Restorer"], ["الْمُحْيِي", "Al-Muhyi", "The Giver of Life"], ["اَلْمُمِيتُ", "Al-Mumit", "The Bringer of Death"], ["الْحَيُّ", "Al-Hayy", "The Ever-Living"], ["الْقَيُّومُ", "Al-Qayyum", "The Self-Subsisting"], ["الْوَاجِدُ", "Al-Wajid", "The Finder"], ["الْمَاجِدُ", "Al-Majid", "The Noble"], ["الْواحِدُ", "Al-Wahid", "The One"], ["اَلاَحَدُ", "Al-Ahad", "The Unique One"], ["الصَّمَدُ", "As-Samad", "The Eternal Refuge"], ["الْقَادِرُ", "Al-Qadir", "The All-Powerful"], ["الْمُقْتَدِرُ", "Al-Muqtadir", "The Determiner"], ["الْمُقَدِّمُ", "Al-Muqaddim", "The Expediter"], ["الْمُؤَخِّرُ", "Al-Mu'akhkhir", "The Delayer"], ["الأوَّلُ", "Al-Awwal", "Al-Awwal", "The First"], ["الآخِرُ", "Al-Akhir", "The Last"], ["الظَّاهِرُ", "Az-Zahir", "The Manifest"], ["الْبَاطِنُ", "Al-Batin", "The Hidden"], ["الْوَالِي", "Al-Wali", "The Governor"], ["الْمُتَعَالِي", "Al-Muta'ali", "The Most Exalted"], ["الْبَرُّ", "Al-Barr", "The Source of Goodness"], ["التَّوَابُ", "At-Tawwab", "The Accepter of Repentance"], ["الْمُنْتَقِمُ", "Al-Muntaqim", "The Justly Retributing"], ["العَفُوُّ", "Al-Afuww", "The Pardoner"], ["الرَّؤُوفُ", "Ar-Ra'uf", "The Most Kind"], ["مَالِكُ الْمُلْكِ", "Malik-ul-Mulk", "Owner of All Sovereignty"], ["ذُوالْجَلَالِ وَالإكْرَامِ", "Dhul-Jalali wal-Ikram", "Lord of Majesty and Honor"], ["الْمُقْسِطُ", "Al-Muqsit", "The Equitable"], ["الْجَامِعُ", "Al-Jami", "The Gatherer"], ["الْغَنِيُّ", "Al-Ghaniyy", "The Self-Sufficient"], ["الْمُغْنِي", "Al-Mughni", "The Enricher"], ["اَلْمَانِعُ", "Al-Mani", "The Withholder"], ["الضَّارَ", "Ad-Darr", "The Distresser"], ["النَّافِعُ", "An-Nafi", "The Benefactor"], ["النُّورُ", "An-Nur", "The Light"], ["الْهَادِي", "Al-Hadi", "The Guide"], ["الْبَدِيعُ", "Al-Badi", "The Incomparable Originator"], ["الْبَاقِي", "Al-Baqi", "The Everlasting"], ["الْوَارِثُ", "Al-Warith", "The Inheritor"], ["الرَّشِيدُ", "Ar-Rashid", "The Guide to the Right Path"], ["الصَّبُورُ", "As-Sabur", "The Most Patient"]
];

const storageKey = "allah-names-tracker-v1";
const themeKey = "allah-names-theme-v1";
const themes = ["default", "dark", "pink"];
const themeDetails = { default: { icon: "☀️", label: "Default theme. Switch to dark theme." }, dark: { icon: "🌙", label: "Dark theme. Switch to pink cats theme." }, pink: { icon: "🐱", label: "Pink cats theme. Switch to default theme." } };
const todayKey = new Date().toISOString().slice(0, 10);
const state = JSON.parse(localStorage.getItem(storageKey)) || { goal: 3, completed: {}, daily: {}, flashcards: {} };
state.daily[todayKey] ||= [];
state.flashcards ||= {};

const list = document.querySelector("#names-list");
const search = document.querySelector("#search");
const goalInput = document.querySelector("#goal");
const goalText = document.querySelector("#goal-text");
const todayText = document.querySelector("#today-count");
const totalText = document.querySelector("#total-count");
const progressBar = document.querySelector("#progress-bar");
const quizQuestion = document.querySelector("#quiz-question");
const options = document.querySelector("#quiz-options");
const quizResult = document.querySelector("#quiz-result");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const flashcard = document.querySelector("#flashcard");
const flashcardHint = document.querySelector("#flashcard-hint");
const flashcardNumber = document.querySelector("#flashcard-number");
const flashcardArabic = document.querySelector("#flashcard-arabic");
const flashcardName = document.querySelector("#flashcard-name");
const flashcardAnswer = document.querySelector("#flashcard-answer");
const flashcardCount = document.querySelector("#flashcard-count");
const flashcardStatus = document.querySelector("#flashcard-status");
let flashcardOrder = names.map((_, index) => index);
let flashcardPosition = 0;
let isFlashcardRevealed = false;

goalInput.value = state.goal;
function save() { localStorage.setItem(storageKey, JSON.stringify(state)); }
function learnedToday() { return state.daily[todayKey].length; }
function learnedTotal() { return Object.keys(state.completed).length; }
function applyTheme(theme) { document.body.dataset.theme = theme === "default" ? "" : theme; themeIcon.textContent = themeDetails[theme].icon; themeToggle.setAttribute("aria-label", themeDetails[theme].label); themeToggle.title = themeDetails[theme].label; localStorage.setItem(themeKey, theme); }
function cycleTheme() { const currentTheme = localStorage.getItem(themeKey) || "default"; applyTheme(themes[(themes.indexOf(currentTheme) + 1) % themes.length]); }
function renderStats() { const today = learnedToday(); goalText.textContent = `${today} of ${state.goal} names completed`; todayText.textContent = today; totalText.textContent = `${learnedTotal()} / 99`; progressBar.style.width = `${Math.min(100, (today / Math.max(1, state.goal)) * 100)}%`; }
function renderNames(filter = "") { const term = filter.toLowerCase().trim(); list.innerHTML = ""; names.forEach(([arabic, transliteration, meaning], index) => { if (term && !`${arabic} ${transliteration} ${meaning}`.toLowerCase().includes(term)) return; const checked = Boolean(state.completed[index]); const card = document.createElement("article"); card.className = `name-card ${checked ? "learned" : ""}`; card.innerHTML = `<div class="name-number">${index + 1} of 99</div><div class="arabic">${arabic}</div><div class="transliteration">${transliteration}</div><div class="meaning">${meaning}</div><label class="check-row"><input type="checkbox" data-index="${index}" ${checked ? "checked" : ""}> Learned today</label>`; list.appendChild(card); }); }
function setLearned(index, checked) { if (checked) { state.completed[index] = true; if (!state.daily[todayKey].includes(index)) state.daily[todayKey].push(index); } else { delete state.completed[index]; state.daily[todayKey] = state.daily[todayKey].filter(item => item !== index); } save(); renderStats(); renderNames(search.value); }
function shuffle(values) { return [...values].sort(() => Math.random() - 0.5); }
function renderFlashcard() { const index = flashcardOrder[flashcardPosition]; const [arabic, transliteration, meaning] = names[index]; flashcardArabic.textContent = arabic; flashcardName.textContent = transliteration; flashcardAnswer.textContent = meaning; flashcardAnswer.hidden = !isFlashcardRevealed; flashcardHint.textContent = isFlashcardRevealed ? "Meaning revealed · tap to hide" : "Tap to reveal meaning"; flashcard.setAttribute("aria-label", `${transliteration}. ${isFlashcardRevealed ? `Meaning: ${meaning}. Tap to hide meaning.` : "Tap to reveal meaning."}`); flashcardNumber.textContent = `${flashcardPosition + 1} of ${names.length}`; flashcardCount.textContent = `${flashcardPosition + 1} of ${names.length}`; const known = Object.values(state.flashcards).filter(status => status === "known").length; const review = Object.values(state.flashcards).filter(status => status === "review").length; flashcardStatus.textContent = `Marked known: ${known} · Review again: ${review}`; }
function moveFlashcard(step) { flashcardPosition = (flashcardPosition + step + flashcardOrder.length) % flashcardOrder.length; isFlashcardRevealed = false; renderFlashcard(); }
function markFlashcard(status) { state.flashcards[flashcardOrder[flashcardPosition]] = status; save(); moveFlashcard(1); }
function newQuestion() { const answerIndex = Math.floor(Math.random() * names.length); const answer = names[answerIndex]; const distractors = shuffle(names.filter((_, index) => index !== answerIndex)).slice(0, 3); quizQuestion.textContent = `Which name means “${answer[2]}”?`; options.innerHTML = ""; shuffle([answer, ...distractors]).forEach(option => { const button = document.createElement("button"); button.className = "option"; button.textContent = option[1]; button.addEventListener("click", () => { if (option[1] === answer[1]) { quizResult.textContent = "Correct. Well done!"; quizResult.style.color = "var(--accent)"; } else { quizResult.textContent = `Not quite. The answer is ${answer[1]}.`; quizResult.style.color = "#a44032"; } }); options.appendChild(button); }); }

list.addEventListener("change", event => { if (event.target.matches("input[type=checkbox]")) setLearned(Number(event.target.dataset.index), event.target.checked); });
search.addEventListener("input", event => renderNames(event.target.value));
themeToggle.addEventListener("click", cycleTheme);
document.querySelector("#save-goal").addEventListener("click", () => { state.goal = Math.max(1, Number(goalInput.value) || 1); goalInput.value = state.goal; save(); renderStats(); });
document.querySelector("#reset-today").addEventListener("click", () => { state.daily[todayKey].forEach(index => delete state.completed[index]); state.daily[todayKey] = []; save(); renderStats(); renderNames(search.value); });
flashcard.addEventListener("click", () => { isFlashcardRevealed = !isFlashcardRevealed; renderFlashcard(); });
document.querySelector("#previous-card").addEventListener("click", () => moveFlashcard(-1));
document.querySelector("#next-card").addEventListener("click", () => moveFlashcard(1));
document.querySelector("#shuffle-cards").addEventListener("click", () => { flashcardOrder = shuffle(flashcardOrder); flashcardPosition = 0; isFlashcardRevealed = false; renderFlashcard(); });
document.querySelector("#know-card").addEventListener("click", () => markFlashcard("known"));
document.querySelector("#review-card").addEventListener("click", () => markFlashcard("review"));
applyTheme(localStorage.getItem(themeKey) || "default");
document.querySelector("#next-question").addEventListener("click", () => { quizResult.textContent = ""; newQuestion(); });
renderStats(); renderNames(); renderFlashcard(); newQuestion();
