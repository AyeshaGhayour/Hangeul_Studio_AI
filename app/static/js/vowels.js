
// ==========================================
// HANGEUL STUDIO AI - KOREAN VOWELS
// ==========================================

const vowelData = {
    "ㅏ": { name: "아 (a)", sound: "a", word: "아이", meaning: "Child" },
    "ㅑ": { name: "야 (ya)", sound: "ya", word: "야구", meaning: "Baseball" },
    "ㅓ": { name: "어 (eo)", sound: "eo", word: "어머니", meaning: "Mother" },
    "ㅕ": { name: "여 (yeo)", sound: "yeo", word: "여자", meaning: "Woman" },
    "ㅗ": { name: "오 (o)", sound: "o", word: "오이", meaning: "Cucumber" },
    "ㅛ": { name: "요 (yo)", sound: "yo", word: "요리", meaning: "Cooking" },
    "ㅜ": { name: "우 (u)", sound: "u", word: "우유", meaning: "Milk" },
    "ㅠ": { name: "유 (yu)", sound: "yu", word: "유리", meaning: "Glass" },
    "ㅡ": { name: "으 (eu)", sound: "eu", word: "음악", meaning: "Music" },
    "ㅣ": { name: "이 (i)", sound: "i", word: "이름", meaning: "Name" },

    "ㅐ": { name: "애 (ae)", sound: "ae", word: "애기", meaning: "Baby (informal)" },
    "ㅒ": { name: "얘 (yae)", sound: "yae", word: "얘기", meaning: "Story / Conversation" },
    "ㅔ": { name: "에 (e)", sound: "e", word: "에너지", meaning: "Energy" },
    "ㅖ": { name: "예 (ye)", sound: "ye", word: "예의", meaning: "Manners" },
    "ㅘ": { name: "와 (wa)", sound: "wa", word: "과자", meaning: "Snack" },
    "ㅙ": { name: "왜 (wae)", sound: "wae", word: "왜", meaning: "Why" },
    "ㅚ": { name: "외 (oe)", sound: "oe", word: "외국", meaning: "Foreign country" },
    "ㅝ": { name: "워 (wo)", sound: "wo", word: "월요일", meaning: "Monday" },
    "ㅞ": { name: "웨 (we)", sound: "we", word: "웨딩", meaning: "Wedding" },
    "ㅟ": { name: "위 (wi)", sound: "wi", word: "위", meaning: "Above / Stomach" },
    "ㅢ": { name: "의 (ui)", sound: "ui", word: "의자", meaning: "Chair" }
};


// ==========================================
// HTML ELEMENTS
// ==========================================

const vowelCards = document.querySelectorAll(".vowel-card");

const detailVowel = document.getElementById("detailVowel");
const vowelName = document.getElementById("vowelName");
const vowelSound = document.getElementById("vowelSound");
const vowelWord = document.getElementById("vowelWord");
const vowelMeaning = document.getElementById("vowelMeaning");

const playVowelButton = document.getElementById("playVowel");


// ==========================================
// SAVE HANGUL PROGRESS
// ==========================================

function saveVowelProgress(character) {

    let learningProgress = JSON.parse(
        localStorage.getItem("koreanLearningProgress")
    ) || {
        hangulLearned: 0,
        vocabularyLearned: 0,
        writingSessions: 0,
        achievements: [],
        activity: []
    };

    const learnedVowels = JSON.parse(
        localStorage.getItem("learnedKoreanVowels")
    ) || [];

    if (!learnedVowels.includes(character)) {

        learnedVowels.push(character);

        localStorage.setItem(
            "learnedKoreanVowels",
            JSON.stringify(learnedVowels)
        );

        // Combine vowels and consonants for dashboard count
        const learnedConsonants = JSON.parse(
            localStorage.getItem("learnedKoreanConsonants")
        ) || [];

        learningProgress.hangulLearned =
            learnedVowels.length + learnedConsonants.length;

        learningProgress.activity.unshift(
            "Practiced Korean vowel: " + character
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
// DISPLAY SELECTED VOWEL
// ==========================================

vowelCards.forEach(card => {

    card.addEventListener("click", () => {

        const character = card.dataset.vowel;
        const data = vowelData[character];

        if (!data) return;

        detailVowel.textContent = character;
        vowelName.textContent = data.name;
        vowelSound.textContent = `Romanization: ${data.sound}`;
        vowelWord.textContent = data.word;
        vowelMeaning.textContent = `Meaning: ${data.meaning}`;

        vowelCards.forEach(item => {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        // Record unique vowel practice
        saveVowelProgress(character);

        document.getElementById("vowelDetails")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    });

});


// ==========================================
// KOREAN PRONUNCIATION AUDIO
// ==========================================

playVowelButton.addEventListener("click", () => {

    const character = detailVowel.textContent;
    const data = vowelData[character];

    if (!data) return;

    if (!("speechSynthesis" in window)) {
        alert("Audio pronunciation is not supported by this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
        `${data.name.split(" (")[0]}. ${data.word}.`
    );

    speech.lang = "ko-KR";
    speech.rate = 0.8;
    speech.pitch = 1;

    const koreanVoice = speechSynthesis.getVoices().find(voice =>
        voice.lang.toLowerCase().startsWith("ko")
    );

    if (koreanVoice) {
        speech.voice = koreanVoice;
    }

    speechSynthesis.speak(speech);

});
