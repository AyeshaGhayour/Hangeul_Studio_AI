
// ==========================================
// 1. HANGUL SYLLABLE DATA
// ==========================================

const initials = [
    "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ",
    "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ",
    "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
];

const vowels = [
    "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ",
    "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ",
    "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"
];

const finals = [
    "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ",
    "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ",
    "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ",
    "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
];


// ==========================================
// 2. BEGINNER KOREAN-ENGLISH DICTIONARY
// ==========================================

const koreanDictionary = {

    // Pronouns
    "나": "I / Me (informal)",
    "나는": "I (topic-marked)",
    "내가": "I / I am the one who",
    "너": "You (informal)",
    "너는": "You (topic-marked)",
    "우리": "We / Us / Our",
    "저": "I / Me (polite)",
    "저는": "I (polite, topic-marked)",
    "그": "He / That person",
    "그녀": "She",
    "이것": "This thing",
    "그것": "That thing",

    // People and family
    "사람": "Person",
    "학생": "Student",
    "선생님": "Teacher",
    "의사": "Doctor",
    "친구": "Friend",
    "가족": "Family",
    "엄마": "Mom",
    "아빠": "Dad",
    "아버지": "Father",
    "어머니": "Mother",
    "형": "Older brother (used by a male)",
    "언니": "Older sister (used by a female)",
    "동생": "Younger sibling",
    "아이": "Child",
    "여자": "Woman / Girl",
    "남자": "Man / Boy",

    // Places
    "학교": "School",
    "집": "House / Home",
    "회사": "Company / Workplace",
    "병원": "Hospital",
    "도서관": "Library",
    "한국": "Korea",
    "한국어": "Korean language",
    "방": "Room",
    "교실": "Classroom",
    "가게": "Shop / Store",

    // Everyday objects
    "책": "Book",
    "책상": "Desk",
    "의자": "Chair",
    "연필": "Pencil",
    "가방": "Bag",
    "휴대폰": "Mobile phone",
    "컴퓨터": "Computer",
    "문": "Door",
    "시계": "Clock / Watch",
    "옷": "Clothes",

    // Food and drinks
    "물": "Water",
    "밥": "Rice / Meal",
    "음식": "Food",
    "김치": "Kimchi",
    "커피": "Coffee",
    "우유": "Milk",
    "빵": "Bread",
    "사과": "Apple",
    "과일": "Fruit",
    "고기": "Meat",
    "차": "Tea / Car (depending on context)",

    // Animals
    "고양이": "Cat",
    "강아지": "Puppy / Dog",
    "개": "Dog",
    "새": "Bird",
    "동물": "Animal",

    // Time and everyday words
    "오늘": "Today",
    "내일": "Tomorrow",
    "어제": "Yesterday",
    "지금": "Now",
    "아침": "Morning / Breakfast",
    "저녁": "Evening / Dinner",
    "시간": "Time / Hour",
    "날씨": "Weather",
    "이름": "Name",

    // Feelings and descriptions
    "사랑": "Love",
    "행복": "Happiness",
    "친절해요": "Kind / Friendly",
    "좋아요": "Good / I like it",
    "예뻐요": "Pretty / Beautiful",
    "귀여워요": "Cute",
    "맛있어요": "Delicious",
    "재미있어요": "Interesting / Fun",
    "아파요": "It hurts / I am sick",
    "바빠요": "Busy",
    "괜찮아요": "It's okay / I'm fine",

    // Common verbs and expressions
    "먹어요": "Eat",
    "마셔요": "Drink",
    "가요": "Go",
    "와요": "Come",
    "봐요": "See / Watch",
    "읽어요": "Read",
    "써요": "Write",
    "자요": "Sleep",
    "해요": "Do",
    "공부": "Study",
    "공부해요": "Study / I study",
    "일해요": "Work",
    "만나요": "Meet",
    "좋아해요": "Like",
    "사랑해요": "I love you",
    "알아요": "Know",
    "몰라요": "Don't know",
    "있어요": "Exist / Have",
    "없어요": "Do not exist / Do not have",

    // Greetings and polite expressions
    "안녕": "Hello / Goodbye (informal)",
    "안녕하세요": "Hello (polite)",
    "안녕히 가세요": "Goodbye (to someone leaving)",
    "안녕히 계세요": "Goodbye (to someone staying)",
    "감사합니다": "Thank you",
    "고마워요": "Thank you (friendly, polite)",
    "죄송합니다": "I'm sorry (formal)",
    "미안해요": "I'm sorry",
    "네": "Yes",
    "아니요": "No",
    "주세요": "Please give me",
    "잠시만요": "Just a moment, please",

    // Complete sentences
    "나는 학생이에요": "I am a student (informal topic form)",
    "저는 학생이에요": "I am a student (polite topic form)",
    "저는 선생님이에요": "I am a teacher",
    "저는 의사예요": "I am a doctor",
    "저는 한국어를 공부해요": "I study Korean",
    "저는 물을 마셔요": "I drink water",
    "저는 밥을 먹어요": "I eat a meal",
    "나는 물을 마셔요": "I drink water",
    "나는 밥을 먹어요": "I eat a meal",
    "이름이 뭐예요": "What is your name?",
    "만나서 반가워요": "Nice to meet you",
    "잘 지내요": "I'm doing well"
};


// ==========================================
// 3. HANGUL COMPOSITION
// ==========================================

function composeSyllable(initial, vowel, final = "") {

    const initialIndex = initials.indexOf(initial);
    const vowelIndex = vowels.indexOf(vowel);
    const finalIndex = finals.indexOf(final);

    if (
        initialIndex === -1 ||
        vowelIndex === -1 ||
        finalIndex === -1
    ) {
        return "";
    }

    return String.fromCharCode(
        0xAC00 +
        initialIndex * 21 * 28 +
        vowelIndex * 28 +
        finalIndex
    );
}


// ==========================================
// 4. ROMANIZATION DATA
// ==========================================

const initialRomanization = {
    "ㄱ": "g", "ㄲ": "kk", "ㄴ": "n",
    "ㄷ": "d", "ㄸ": "tt", "ㄹ": "r",
    "ㅁ": "m", "ㅂ": "b", "ㅃ": "pp",
    "ㅅ": "s", "ㅆ": "ss", "ㅇ": "",
    "ㅈ": "j", "ㅉ": "jj", "ㅊ": "ch",
    "ㅋ": "k", "ㅌ": "t", "ㅍ": "p",
    "ㅎ": "h"
};

const vowelRomanization = {
    "ㅏ": "a", "ㅐ": "ae", "ㅑ": "ya",
    "ㅒ": "yae", "ㅓ": "eo", "ㅔ": "e",
    "ㅕ": "yeo", "ㅖ": "ye", "ㅗ": "o",
    "ㅘ": "wa", "ㅙ": "wae", "ㅚ": "oe",
    "ㅛ": "yo", "ㅜ": "u", "ㅝ": "wo",
    "ㅞ": "we", "ㅟ": "wi", "ㅠ": "yu",
    "ㅡ": "eu", "ㅢ": "ui", "ㅣ": "i"
};

const finalRomanization = {
    "": "", "ㄱ": "k", "ㄲ": "k", "ㄳ": "k",
    "ㄴ": "n", "ㄵ": "n", "ㄶ": "n",
    "ㄷ": "t", "ㄹ": "l", "ㄺ": "k",
    "ㄻ": "m", "ㄼ": "l", "ㄽ": "l",
    "ㄾ": "l", "ㄿ": "p", "ㅀ": "l",
    "ㅁ": "m", "ㅂ": "p", "ㅄ": "p",
    "ㅅ": "t", "ㅆ": "t", "ㅇ": "ng",
    "ㅈ": "t", "ㅊ": "t", "ㅋ": "k",
    "ㅌ": "t", "ㅍ": "p", "ㅎ": "t"
};


// Romanize one complete Hangul syllable

function romanizeSyllable(character) {

    const code = character.charCodeAt(0);

    if (code < 0xAC00 || code > 0xD7A3) {
        return character;
    }

    const syllableIndex = code - 0xAC00;

    const initialIndex = Math.floor(
        syllableIndex / (21 * 28)
    );

    const vowelIndex = Math.floor(
        (syllableIndex % (21 * 28)) / 28
    );

    const finalIndex = syllableIndex % 28;

    return (
        initialRomanization[initials[initialIndex]] +
        vowelRomanization[vowels[vowelIndex]] +
        finalRomanization[finals[finalIndex]]
    );
}


// Romanize complete words and sentences

function romanizeText(text) {

    return Array.from(text)
        .map(character => romanizeSyllable(character))
        .join("");
}


// ==========================================
// 5. KOREAN PRONUNCIATION
// ==========================================

function speakKorean(text) {

    if (!("speechSynthesis" in window)) {
        alert("Your browser does not support speech.");
        return;
    }

    if (!text.trim()) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "ko-KR";
    utterance.rate = 0.8;
    utterance.pitch = 1;

    const voices = speechSynthesis.getVoices();

    const koreanVoice = voices.find(voice =>
        voice.lang.toLowerCase().startsWith("ko")
    );

    if (koreanVoice) {
        utterance.voice = koreanVoice;
    }

    speechSynthesis.speak(utterance);
}


// ==========================================
// 6. SAVE SYLLABLE LEARNING PROGRESS
// ==========================================

function saveSyllableProgress(syllable) {

    let learningProgress = JSON.parse(
        localStorage.getItem("koreanLearningProgress")
    ) || {
        hangulLearned: 0,
        vocabularyLearned: 0,
        writingSessions: 0,
        syllablesLearned: 0,
        achievements: [],
        activity: []
    };

    const learnedSyllables = JSON.parse(
        localStorage.getItem("learnedKoreanSyllables")
    ) || [];

    // Count only unique syllables

    if (!learnedSyllables.includes(syllable)) {

        learnedSyllables.push(syllable);

        localStorage.setItem(
            "learnedKoreanSyllables",
            JSON.stringify(learnedSyllables)
        );

        learningProgress.syllablesLearned =
            learnedSyllables.length;

        learningProgress.activity.unshift(
            "Built a new Korean syllable: " + syllable
        );

        learningProgress.activity =
            learningProgress.activity.slice(0, 10);

        localStorage.setItem(
            "koreanLearningProgress",
            JSON.stringify(learningProgress)
        );
    }
}


// ==========================================
// 7. SINGLE SYLLABLE BUILDER
// ==========================================

const consonantGrid = document.getElementById("consonantGrid");
const vowelGrid = document.getElementById("vowelGrid");
const finalGrid = document.getElementById("finalGrid");

const builtSyllable = document.getElementById("builtSyllable");

const syllableRomanization =
    document.getElementById("syllableRomanization");

const playSyllable = document.getElementById("playSyllable");

let selectedInitial = "ㄱ";
let selectedVowel = "ㅏ";
let selectedFinal = "";


function updateSingleBuilder() {

    const syllable = composeSyllable(
        selectedInitial,
        selectedVowel,
        selectedFinal
    );

    if (builtSyllable) {
        builtSyllable.textContent = syllable || "가";
    }

    if (syllableRomanization) {
        syllableRomanization.textContent =
            romanizeText(syllable);
    }
}


function setupSelectionGrid(grid, attribute, callback) {

    if (!grid) return;

    grid.addEventListener("click", event => {

        const item = event.target.closest(
            `[data-${attribute}]`
        );

        if (!item || !grid.contains(item)) return;

        grid.querySelectorAll("button").forEach(button => {
            button.classList.remove("selected");
        });

        item.classList.add("selected");

        callback(item.dataset[attribute]);

        updateSingleBuilder();
    });
}


setupSelectionGrid(
    consonantGrid,
    "consonant",
    value => selectedInitial = value
);

setupSelectionGrid(
    vowelGrid,
    "vowel",
    value => selectedVowel = value
);

setupSelectionGrid(
    finalGrid,
    "final",
    value => selectedFinal = value
);


if (playSyllable) {

    playSyllable.addEventListener("click", () => {

        if (builtSyllable) {
            speakKorean(builtSyllable.textContent);
        }

    });

}

updateSingleBuilder();


// ==========================================
// 8. WORD & SENTENCE BUILDER
// ==========================================

const wordInitial = document.getElementById("wordInitial");
const wordVowel = document.getElementById("wordVowel");
const wordFinal = document.getElementById("wordFinal");

const wordPreview = document.getElementById("wordPreview");

const addSyllable = document.getElementById("addSyllable");

const wordOutput = document.getElementById("wordOutput");
const wordMeaning = document.getElementById("wordMeaning");

const wordRomanization =
    document.getElementById("wordRomanization");

const wordBreakdown = document.getElementById("wordBreakdown");

const removeSyllable = document.getElementById("removeSyllable");
const addSpace = document.getElementById("addSpace");
const clearWord = document.getElementById("clearWord");
const playWord = document.getElementById("playWord");

let wordParts = [];


// Get currently selected syllable

function getCurrentWordSyllable() {

    if (!wordInitial || !wordVowel || !wordFinal) {
        return "";
    }

    return composeSyllable(
        wordInitial.value,
        wordVowel.value,
        wordFinal.value
    );
}


// Update syllable preview

function updateWordPreview() {

    if (wordPreview) {
        wordPreview.textContent = getCurrentWordSyllable();
    }
}


// ==========================================
// 9. SMART PARTICLE RECOGNITION
// ==========================================

const koreanParticles = {

    "에서": "Location / Action particle",
    "으로": "By / Through / Toward",
    "에게": "To someone",
    "한테": "To someone",
    "은": "Topic particle",
    "는": "Topic particle",
    "이": "Subject particle",
    "가": "Subject particle",
    "을": "Object particle",
    "를": "Object particle",
    "에": "At / To",
    "도": "Also / Too",
    "와": "And / With",
    "과": "And / With",
    "의": "Possessive particle",
    "로": "By / Through / Toward"
};


// Find the meaning of a complete phrase

function getWordMeaning(text) {

    const cleanedText = text.trim();

    if (!cleanedText) {
        return "Meaning will appear here.";
    }

    if (koreanDictionary[cleanedText]) {
        return koreanDictionary[cleanedText];
    }

    return "Word-by-word meanings are shown below.";
}


// Break sentences into words and particles

function breakDownKorean(text) {

    const results = [];
    const words = text.trim().split(/\s+/);

    words.forEach(word => {

        if (!word) return;

        // Prefer separating particles when the base is known.

        const particleEndings = Object.keys(koreanParticles)
            .sort((a, b) => b.length - a.length);

        let matched = false;

        for (const particle of particleEndings) {

            if (!word.endsWith(particle)) continue;

            const base = word.slice(0, -particle.length);

            if (base && koreanDictionary[base]) {

                results.push({
                    korean: base,
                    meaning: koreanDictionary[base],
                    romanization: romanizeText(base)
                });

                results.push({
                    korean: particle,
                    meaning: koreanParticles[particle],
                    romanization: romanizeText(particle)
                });

                matched = true;
                break;
            }
        }

        if (matched) return;

        // Exact dictionary match

        if (koreanDictionary[word]) {

            results.push({
                korean: word,
                meaning: koreanDictionary[word],
                romanization: romanizeText(word)
            });

            return;
        }

        // Unknown word

        results.push({
            korean: word,
            meaning: "Meaning not available yet",
            romanization: romanizeText(word)
        });

    });

    return results;
}


// ==========================================
// 10. DISPLAY WORD-BY-WORD BREAKDOWN
// ==========================================

function updateWordBreakdown(text) {

    if (!wordBreakdown) return;

    wordBreakdown.replaceChildren();

    if (!text.trim()) return;

    const parts = breakDownKorean(text);

    parts.forEach(part => {

        const card = document.createElement("div");
        card.className = "breakdown-item";

        const korean = document.createElement("div");
        korean.className = "breakdown-korean";
        korean.textContent = part.korean;

        const meaning = document.createElement("div");
        meaning.className = "breakdown-meaning";
        meaning.textContent = part.meaning;

        const romanization = document.createElement("div");
        romanization.className = "breakdown-romanization";
        romanization.textContent = part.romanization;

        card.appendChild(korean);
        card.appendChild(meaning);
        card.appendChild(romanization);

        wordBreakdown.appendChild(card);

    });
}


// ==========================================
// 11. UPDATE COMPLETE KOREAN TEXT
// ==========================================

function updateWordOutput() {

    const completeWord = wordParts.join("");

    if (wordOutput) {

        wordOutput.textContent =
            completeWord || "Start adding syllables...";

        wordOutput.classList.toggle(
            "empty",
            !completeWord
        );
    }

    // Complete text romanization

    if (wordRomanization) {

        wordRomanization.textContent =
            completeWord
                ? romanizeText(completeWord)
                : "Romanization will appear here.";
    }

    // English meaning

    if (wordMeaning) {
        wordMeaning.textContent =
            getWordMeaning(completeWord);
    }

    // Word-by-word breakdown

    updateWordBreakdown(completeWord);
}


// ==========================================
// 12. WORD BUILDER EVENT LISTENERS
// ==========================================

// Listen for selection changes

if (wordInitial && wordVowel && wordFinal) {

    [wordInitial, wordVowel, wordFinal].forEach(select => {
        select.addEventListener("change", updateWordPreview);
    });

    updateWordPreview();
}


// Add syllable

if (addSyllable) {

    addSyllable.addEventListener("click", () => {

        const syllable = getCurrentWordSyllable();

        if (!syllable) return;

        wordParts.push(syllable);

        // Save unique syllable progress
        saveSyllableProgress(syllable);

        updateWordOutput();

    });

}


// Remove last syllable or space

if (removeSyllable) {

    removeSyllable.addEventListener("click", () => {

        if (wordParts.length === 0) return;

        wordParts.pop();

        updateWordOutput();

    });

}


// Add space between words

if (addSpace) {

    addSpace.addEventListener("click", () => {

        if (wordParts.length === 0) return;

        if (wordParts[wordParts.length - 1] !== " ") {

            wordParts.push(" ");

            updateWordOutput();

        }

    });

}


// Clear everything

if (clearWord) {

    clearWord.addEventListener("click", () => {

        wordParts = [];

        updateWordOutput();

    });

}


// Speak complete Korean text

if (playWord) {

    playWord.addEventListener("click", () => {

        const completeWord = wordParts.join("").trim();

        if (completeWord) {
            speakKorean(completeWord);
        }

    });

}


// ==========================================
// 13. INITIAL DISPLAY
// ==========================================

updateWordOutput();
