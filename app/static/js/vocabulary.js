
// ==========================================
// ELEMENTS
// ==========================================

const flashcard = document.getElementById("flashcard");
const koreanWord = document.getElementById("koreanWord");
const romanization = document.getElementById("romanization");
const revealButton = document.getElementById("revealButton");
const englishMeaning = document.getElementById("englishMeaning");
const wordExample = document.getElementById("wordExample");
const exampleMeaning = document.getElementById("exampleMeaning");

const previousButton = document.getElementById("previousCard");
const nextButton = document.getElementById("nextCard");
const cardCounter = document.getElementById("cardCounter");

const searchInput = document.getElementById("vocabularySearch");
const categoryButtons = document.querySelectorAll(".category-filters button");

const playButton = document.getElementById("playPronunciation");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");


// ==========================================
// STATE
// ==========================================

let currentIndex = 0;
let selectedCategory = "all";
let filteredWords = vocabularyWords;
let isRevealed = false;


// ==========================================
// SAVE VOCABULARY LEARNING PROGRESS
// ==========================================

function saveVocabularyProgress(word) {

    let learningProgress = JSON.parse(
        localStorage.getItem("koreanLearningProgress")
    ) || {
        hangulLearned: 0,
        vocabularyLearned: 0,
        writingSessions: 0,
        achievements: [],
        activity: []
    };

    const learnedWords = JSON.parse(
        localStorage.getItem("learnedKoreanWords")
    ) || [];

    // Count each Korean word only once

    if (!learnedWords.includes(word.korean)) {

        learnedWords.push(word.korean);

        localStorage.setItem(
            "learnedKoreanWords",
            JSON.stringify(learnedWords)
        );

        learningProgress.vocabularyLearned = learnedWords.length;

        learningProgress.activity.unshift(
            "Learned the Korean word: " + word.korean
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
// DISPLAY VOCABULARY CARD
// ==========================================

function displayCard() {

    if (filteredWords.length === 0) {

        koreanWord.textContent = "No words found";
        romanization.textContent = "";
        englishMeaning.textContent = "";
        wordExample.textContent = "";
        exampleMeaning.textContent = "";

        revealButton.style.display = "none";
        playButton.style.display = "none";

        cardCounter.textContent = "0 / 0";
        progressText.textContent = "No vocabulary available";
        progressFill.style.width = "0%";

        previousButton.disabled = true;
        nextButton.disabled = true;

        return;
    }

    const word = filteredWords[currentIndex];

    koreanWord.textContent = word.korean;
    romanization.textContent = word.romanization;

    englishMeaning.textContent = word.meaning;
    wordExample.textContent = word.example;
    exampleMeaning.textContent = word.exampleMeaning;

    englishMeaning.style.display = "none";
    wordExample.style.display = "none";
    exampleMeaning.style.display = "none";

    revealButton.style.display = "inline-block";
    playButton.style.display = "inline-block";

    isRevealed = false;
    revealButton.textContent = "Reveal Meaning";

    cardCounter.textContent =
        `${currentIndex + 1} / ${filteredWords.length}`;

    progressText.textContent =
        `Word ${currentIndex + 1} of ${filteredWords.length}`;

    const progress =
        ((currentIndex + 1) / filteredWords.length) * 100;

    progressFill.style.width = `${progress}%`;

    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === filteredWords.length - 1;
}


// ==========================================
// REVEAL MEANING
// ==========================================

revealButton.addEventListener("click", function () {

    if (filteredWords.length === 0) return;

    if (!isRevealed) {

        englishMeaning.style.display = "block";
        wordExample.style.display = "block";
        exampleMeaning.style.display = "block";

        revealButton.textContent = "Hide Meaning";

        isRevealed = true;

        // Record this word as learned
        saveVocabularyProgress(filteredWords[currentIndex]);

    } else {

        englishMeaning.style.display = "none";
        wordExample.style.display = "none";
        exampleMeaning.style.display = "none";

        revealButton.textContent = "Reveal Meaning";

        isRevealed = false;
    }
});


// ==========================================
// NEXT CARD
// ==========================================

nextButton.addEventListener("click", function () {

    if (currentIndex < filteredWords.length - 1) {

        currentIndex++;
        displayCard();
    }
});


// ==========================================
// PREVIOUS CARD
// ==========================================

previousButton.addEventListener("click", function () {

    if (currentIndex > 0) {

        currentIndex--;
        displayCard();
    }
});


// ==========================================
// CATEGORY FILTER
// ==========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        selectedCategory = this.dataset.category.toLowerCase();

        filterVocabulary();
    });
});


// ==========================================
// SEARCH VOCABULARY
// ==========================================

searchInput.addEventListener("input", filterVocabulary);


// ==========================================
// FILTER VOCABULARY
// ==========================================

function filterVocabulary() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    filteredWords = vocabularyWords.filter(word => {

        const matchesCategory =
            selectedCategory === "all" ||
            word.category.toLowerCase() === selectedCategory;

        const matchesSearch =
            word.korean.toLowerCase().includes(searchTerm) ||
            word.romanization.toLowerCase().includes(searchTerm) ||
            word.meaning.toLowerCase().includes(searchTerm) ||
            word.example.toLowerCase().includes(searchTerm) ||
            word.exampleMeaning.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    currentIndex = 0;

    displayCard();
}


// ==========================================
// KOREAN PRONUNCIATION AUDIO
// ==========================================

playButton.addEventListener("click", function () {

    if (filteredWords.length === 0) return;

    const word = filteredWords[currentIndex];

    if (!("speechSynthesis" in window)) {

        alert("Sorry! Audio pronunciation is not supported in this browser.");
        return;
    }

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(word.korean);

    speech.lang = "ko-KR";
    speech.rate = 0.85;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
});


// ==========================================
// INITIALIZE
// ==========================================

displayCard();
