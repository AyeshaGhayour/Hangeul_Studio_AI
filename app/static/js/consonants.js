
// ==========================================
// HANGEUL STUDIO AI - KOREAN CONSONANTS
// ==========================================

const consonantData = {
    "ㄱ": { name: "기역 (Giyeok)", sound: "g / k", word: "가방", meaning: "Bag" },
    "ㄴ": { name: "니은 (Nieun)", sound: "n", word: "나무", meaning: "Tree" },
    "ㄷ": { name: "디귿 (Digeut)", sound: "d / t", word: "다리", meaning: "Leg / Bridge" },
    "ㄹ": { name: "리을 (Rieul)", sound: "r / l", word: "라면", meaning: "Instant noodles" },
    "ㅁ": { name: "미음 (Mieum)", sound: "m", word: "모자", meaning: "Hat" },
    "ㅂ": { name: "비읍 (Bieup)", sound: "b / p", word: "바다", meaning: "Sea" },
    "ㅅ": { name: "시옷 (Siot)", sound: "s", word: "사과", meaning: "Apple" },
    "ㅇ": { name: "이응 (Ieung)", sound: "silent / ng", word: "아이", meaning: "Child" },
    "ㅈ": { name: "지읒 (Jieut)", sound: "j", word: "자동차", meaning: "Car" },
    "ㅊ": { name: "치읓 (Chieut)", sound: "ch", word: "치즈", meaning: "Cheese" },
    "ㅋ": { name: "키읔 (Kieuk)", sound: "k", word: "코", meaning: "Nose" },
    "ㅌ": { name: "티읕 (Tieut)", sound: "t", word: "토마토", meaning: "Tomato" },
    "ㅍ": { name: "피읖 (Pieup)", sound: "p", word: "피자", meaning: "Pizza" },
    "ㅎ": { name: "히읗 (Hieut)", sound: "h", word: "하늘", meaning: "Sky" },
    "ㄲ": { name: "쌍기역 (Ssanggiyeok)", sound: "kk", word: "까치", meaning: "Magpie" },
    "ㄸ": { name: "쌍디귿 (Ssangdigeut)", sound: "tt", word: "딸기", meaning: "Strawberry" },
    "ㅃ": { name: "쌍비읍 (Ssangbieup)", sound: "pp", word: "빵", meaning: "Bread" },
    "ㅆ": { name: "쌍시옷 (Ssangsiot)", sound: "ss", word: "쓰다", meaning: "To write / To be bitter" },
    "ㅉ": { name: "쌍지읒 (Ssangjieut)", sound: "jj", word: "짜다", meaning: "To be salty" }
};


// ==========================================
// HTML ELEMENTS
// ==========================================

const cards = document.querySelectorAll(".consonant-card");

const detailCharacter = document.getElementById("detailCharacter");
const detailName = document.getElementById("detailName");
const detailSound = document.getElementById("detailSound");
const detailWord = document.getElementById("detailWord");
const detailMeaning = document.getElementById("detailMeaning");


// ==========================================
// SAVE CONSONANT PROGRESS
// ==========================================

function saveConsonantProgress(character) {

    let learningProgress = JSON.parse(
        localStorage.getItem("koreanLearningProgress")
    ) || {
        hangulLearned: 0,
        vocabularyLearned: 0,
        writingSessions: 0,
        achievements: [],
        activity: []
    };

    const learnedConsonants = JSON.parse(
        localStorage.getItem("learnedKoreanConsonants")
    ) || [];

    if (!learnedConsonants.includes(character)) {

        learnedConsonants.push(character);

        localStorage.setItem(
            "learnedKoreanConsonants",
            JSON.stringify(learnedConsonants)
        );

        const learnedVowels = JSON.parse(
            localStorage.getItem("learnedKoreanVowels")
        ) || [];

        learningProgress.hangulLearned =
            learnedVowels.length + learnedConsonants.length;

        learningProgress.activity.unshift(
            "Practiced Korean consonant: " + character
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
// DISPLAY SELECTED CONSONANT
// ==========================================

cards.forEach(card => {

    card.addEventListener("click", () => {

        const character = card.dataset.character;
        const data = consonantData[character];

        if (!data) return;

        detailCharacter.textContent = character;
        detailName.textContent = data.name;
        detailSound.textContent = `Pronunciation: ${data.sound}`;
        detailWord.textContent = data.word;
        detailMeaning.textContent = `Meaning: ${data.meaning}`;

        document.querySelectorAll(".consonant-card").forEach(item => {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        // Record unique consonant practice
        saveConsonantProgress(character);

        document.getElementById("consonantDetails")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    });

});


// ==========================================
// KOREAN PRONUNCIATION AUDIO
// ==========================================

const playButton = document.getElementById("playPronunciation");

playButton.addEventListener("click", () => {

    const character = detailCharacter.textContent;
    const data = consonantData[character];

    if (!data) return;

    if (!("speechSynthesis" in window)) {
        alert("Audio pronunciation is not supported by this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const koreanName = data.name.split(" (")[0];

    const speech = new SpeechSynthesisUtterance(
        `${koreanName}. ${data.word}.`
    );

    speech.lang = "ko-KR";
    speech.rate = 0.8;
    speech.pitch = 1;

    const voices = speechSynthesis.getVoices();

    const koreanVoice = voices.find(voice =>
        voice.lang.toLowerCase().startsWith("ko")
    );

    if (koreanVoice) {
        speech.voice = koreanVoice;
    }

    speechSynthesis.speak(speech);

});
