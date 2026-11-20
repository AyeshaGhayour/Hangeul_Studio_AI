
// ==========================================
// 1. KOREAN VOCABULARY + PHOTO DATA
// ==========================================

function photoImage(meaning) {

const animalImages = {
    "Cow": "https://cdn.pixabay.com/photo/2020/06/18/20/45/cow-5314896_640.jpg",
    "Pig": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=480",
    "Horse": "https://tse1.mm.bing.net/th/id/OIF.ne61LydwRPYkERVdM5ybEA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "Rabbit": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=480",
    "Bird": "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=480",
    "Fish":  "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyZmlzaF9hcXVhcml1bV93YXRlcl8xNjA3Mzc5LWltYWdlLWt5YmRwdmg2LmpwZw.jpg",
    "Ball": "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=480",
    "Dog": "https://images.unsplash.com/photo-1552053831-71594a27632d",
    "Cat": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
};
    if (animalImages[meaning]) {
        return animalImages[meaning];
    }

const imageIds = {

    // Everyday vocabulary
    "Bag": "photo-1553062407-98eeb64c6a62",
    "Apple": "photo-1560806887-1e4cd0b6cbd6",
    "Cat": "photo-1514888286974-6c03e2ca1dba",
    "Dog": "photo-1552053831-71594a27632d",
    "Tree": "photo-1448375240586-882707db888b",
    "Book": "photo-1544947950-fa07a98d237f",
    "Flower": "photo-1490750967868-88aa4486c946",
    "Car": "photo-1492144534655-ae79c964c9d7",
    "House": "photo-1510798831971-661eb04b3739",
    "Water": "photo-1530053969600-caed2596d242",

    // Nature
    "Sun": "photo-1500530855697-b586d89ba3ee",
    "Moon": "photo-1532693322450-2cb5c511067d",
    "Star": "photo-1462331940025-496dfbfc7564",
    "Cloud": "photo-1534088568595-a066f410bcda",
    "Rain": "photo-1519692933481-e162a57d6721",
    "Snow": "photo-1517299321609-52687d1bc55a",

    // Animals
    "Bird": "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=480&h=360&fit=crop",
    "Horse": "https://images.unsplash.com/photo-1534307675726-3b6c9c8b4a5a?w=480&h=360&fit=crop",
    "Cow": "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=480&h=360&fit=crop",
    "Pig": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=480&h=360&fit=crop",
    "Rabbit": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=480&h=360&fit=crop",
    // Food and drinks
    "Banana": "photo-1571771894821-ce9b6c11b08e",
    "Bread": "photo-1509440159596-0249088772ff",
    "Milk": "photo-1563636619-e9143da7973b",
    "Coffee": "photo-1509042239860-f550ce710b93",
    "Pizza": "photo-1579751626657-72bc17010498",
    "Rice": "photo-1516684732162-798a0062be99",
    "Egg": "photo-1518569656558-1f25e69d93d7",
    "Cake": "photo-1578985545062-69928b1d9587",

    // Technology and everyday objects
    "Mobile Phone": "photo-1511707171634-5f897ff02aa9",
    "Computer": "photo-1498050108023-c5249f4df085",
    "Clock": "photo-1508057198894-247b23fe5ade",
    "Key": "photo-1582139329536-e7284fece509",
    "Umbrella": "photo-1534274988757-a28bf1a57c17",
    "Shoes": "photo-1542291026-7eec264c27ff",
    "Hat": "photo-1521369909029-2afed882baee",
    "Shirt": "photo-1521572163474-6864f9cf17ab",
    "Ball": "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=480&h=360&fit=crop",
    // Transport
    "Bicycle": "photo-1485965120184-e220f721d03e",
    "Bus": "photo-1544620347-c4fd4a3d5957",
    "Train": "photo-1474487548417-781cb71495f3",
    "Airplane": "photo-1436491865332-7a61a109cc05",

    // Home and other objects
    "Door": "photo-1507473885765-e6ed057f782c",
    "Chair": "photo-1505693416388-ac5ce068fe85",
    "Desk": "photo-1497366754035-f200968a6e72",
    "Glasses": "photo-1511499767150-a48a237f0083",
    "Camera": "photo-1516035069371-29a1b244cc32",
    "Cup": "photo-1514228742587-6b1558fcca3d",
    "Heart": "photo-1516589178581-6cd7833ae3b2",
    "School": "photo-1580582932707-520aed937b7b"
};


    const id = imageIds[meaning];

    if (!id) {
        return `https://placehold.co/480x360/f8e8ed/713b4b?text=${encodeURIComponent(meaning)}`;
    }

    return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=480&q=80`;
}


// ==========================================
// 2. VOCABULARY
// ==========================================

const vocabulary = [

    { korean: "가방", pronunciation: "gabang", meaning: "Bag" },
    { korean: "사과", pronunciation: "sagwa", meaning: "Apple" },
    { korean: "고양이", pronunciation: "goyangi", meaning: "Cat" },
    { korean: "강아지", pronunciation: "gangaji", meaning: "Dog" },
    { korean: "나무", pronunciation: "namu", meaning: "Tree" },
    { korean: "책", pronunciation: "chaek", meaning: "Book" },
    { korean: "꽃", pronunciation: "kkot", meaning: "Flower" },
    { korean: "자동차", pronunciation: "jadongcha", meaning: "Car" },
    { korean: "집", pronunciation: "jip", meaning: "House" },
    { korean: "물", pronunciation: "mul", meaning: "Water" },

    { korean: "해", pronunciation: "hae", meaning: "Sun" },
    { korean: "달", pronunciation: "dal", meaning: "Moon" },
    { korean: "별", pronunciation: "byeol", meaning: "Star" },
    { korean: "구름", pronunciation: "gureum", meaning: "Cloud" },
    { korean: "비", pronunciation: "bi", meaning: "Rain" },
    { korean: "눈", pronunciation: "nun", meaning: "Snow" },
    { korean: "새", pronunciation: "sae", meaning: "Bird" },
    { korean: "물고기", pronunciation: "mulgogi", meaning: "Fish" },
    { korean: "토끼", pronunciation: "tokki", meaning: "Rabbit" },
    { korean: "말", pronunciation: "mal", meaning: "Horse" },

    { korean: "소", pronunciation: "so", meaning: "Cow" },
    { korean: "돼지", pronunciation: "dwaeji", meaning: "Pig" },
    { korean: "바나나", pronunciation: "banana", meaning: "Banana" },
    { korean: "빵", pronunciation: "ppang", meaning: "Bread" },
    { korean: "우유", pronunciation: "uyu", meaning: "Milk" },
    { korean: "커피", pronunciation: "keopi", meaning: "Coffee" },
    { korean: "피자", pronunciation: "pija", meaning: "Pizza" },
    { korean: "밥", pronunciation: "bap", meaning: "Rice" },
    { korean: "계란", pronunciation: "gyeran", meaning: "Egg" },
    { korean: "케이크", pronunciation: "keikeu", meaning: "Cake" },

    { korean: "휴대폰", pronunciation: "hyudaepon", meaning: "Mobile Phone" },
    { korean: "컴퓨터", pronunciation: "keompyuteo", meaning: "Computer" },
    { korean: "시계", pronunciation: "sigye", meaning: "Clock" },
    { korean: "열쇠", pronunciation: "yeolsoe", meaning: "Key" },
    { korean: "우산", pronunciation: "usan", meaning: "Umbrella" },
    { korean: "신발", pronunciation: "sinbal", meaning: "Shoes" },
    { korean: "모자", pronunciation: "moja", meaning: "Hat" },
    { korean: "셔츠", pronunciation: "syeocheu", meaning: "Shirt" },
    { korean: "공", pronunciation: "gong", meaning: "Ball" },
    { korean: "자전거", pronunciation: "jajeongeo", meaning: "Bicycle" },

    { korean: "버스", pronunciation: "beoseu", meaning: "Bus" },
    { korean: "기차", pronunciation: "gicha", meaning: "Train" },
    { korean: "비행기", pronunciation: "bihaenggi", meaning: "Airplane" },
    { korean: "문", pronunciation: "mun", meaning: "Door" },
    { korean: "의자", pronunciation: "uija", meaning: "Chair" },
    { korean: "책상", pronunciation: "chaeksang", meaning: "Desk" },
    { korean: "안경", pronunciation: "angyeong", meaning: "Glasses" },
    { korean: "카메라", pronunciation: "kamera", meaning: "Camera" },
    { korean: "컵", pronunciation: "keop", meaning: "Cup" },
    { korean: "하트", pronunciation: "hateu", meaning: "Heart" },
    { korean: "학교", pronunciation: "hakgyo", meaning: "School" }

];

vocabulary.forEach(item => {
    item.image = photoImage(item.meaning);
});


// ==========================================
// 3. PROGRESS TRACKING
// ==========================================

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

function saveLearningProgress() {
    localStorage.setItem(
        "koreanLearningProgress",
        JSON.stringify(learningProgress)
    );
}

function addActivity(message) {

    if (!Array.isArray(learningProgress.activity)) {
        learningProgress.activity = [];
    }

    learningProgress.activity.unshift(message);

    learningProgress.activity =
        learningProgress.activity.slice(0, 20);

    saveLearningProgress();
}

let learnedWords = new Set(
    JSON.parse(localStorage.getItem("koreanLearnedWords")) || []
);

function markWordLearned(item) {

    if (learnedWords.has(item.korean)) {
        return false;
    }

    learnedWords.add(item.korean);

    localStorage.setItem(
        "koreanLearnedWords",
        JSON.stringify([...learnedWords])
    );

    learningProgress.vocabularyLearned =
        Math.max(0, Number(learningProgress.vocabularyLearned) || 0) + 1;

    addActivity(
        `Learned Korean word: ${item.korean} (${item.meaning})`
    );

    return true;
}


// ==========================================
// 4. PAGE ELEMENTS
// ==========================================

const learningModes = document.querySelector(".learning-modes");
const learningArea = document.getElementById("learningArea");
const quizArea = document.getElementById("quizArea");

const startLearningBtn = document.getElementById("startLearningBtn");
const startQuizBtn = document.getElementById("startQuizBtn");

const learningCards = document.getElementById("learningCards");

const quizHeading = document.getElementById("quizHeading");
const quizDescription = document.getElementById("quizDescription");
const quizQuestion = document.getElementById("quizQuestion");
const quizPronunciation = document.getElementById("quizPronunciation");
const quizTypeLabel = document.getElementById("quizTypeLabel");

const playAudioBtn = document.getElementById("playAudioBtn");
const audioInstruction = document.getElementById("audioInstruction");

const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");

const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const quizResult = document.getElementById("quizResult");

const finalQuizScore = document.getElementById("finalQuizScore");
const finalQuizMessage = document.getElementById("finalQuizMessage");


// ==========================================
// 5. NAVIGATION
// ==========================================

startLearningBtn.addEventListener("click", () => {

    learningModes.hidden = true;
    quizArea.hidden = true;
    learningArea.hidden = false;

    displayLearningCards();

});

startQuizBtn.addEventListener("click", () => {
    startQuiz("mixed");
});

document.getElementById("backToModes").addEventListener("click", showModes);
document.getElementById("backFromQuiz").addEventListener("click", showModes);

function showModes() {

    learningModes.hidden = false;
    learningArea.hidden = true;
    quizArea.hidden = true;

    stopSpeech();

}


// ==========================================
// 6. KOREAN AUDIO
// ==========================================

function stopSpeech() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

}

function speakKorean(word) {

    if (!("speechSynthesis" in window)) {
        alert("Your browser does not support Korean audio.");
        return;
    }

    stopSpeech();

    const speech = new SpeechSynthesisUtterance(word);

    speech.lang = "ko-KR";
    speech.rate = 0.8;
    speech.pitch = 1;
    speech.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    const koreanVoice = voices.find(voice =>
        voice.lang.toLowerCase().startsWith("ko")
    );

    if (koreanVoice) {
        speech.voice = koreanVoice;
    }

    window.speechSynthesis.speak(speech);

}


// ==========================================
// 7. PICTURE LEARNING CARDS
// ==========================================

function displayLearningCards() {

    learningCards.innerHTML = "";

    vocabulary.forEach(item => {

        const card = document.createElement("div");
        card.className = "vocab-card";

        const image = document.createElement("img");

        image.src = item.image;
        image.alt = item.meaning;
        image.loading = "lazy";

        image.onerror = () => {
            image.alt = `${item.meaning} photo unavailable`;
            image.style.display = "none";
        };

        const info = document.createElement("div");
        info.className = "vocab-info";

        const korean = document.createElement("h3");
        korean.textContent = item.korean;

        const pronunciation = document.createElement("p");
        pronunciation.className = "pronunciation";
        pronunciation.textContent = item.pronunciation;

        const meaning = document.createElement("p");
        meaning.className = "meaning";
        meaning.textContent = item.meaning;

        const audioButton = document.createElement("button");

        audioButton.type = "button";
        audioButton.className = "audio-button";
        audioButton.textContent = "🔊 Listen";

        audioButton.addEventListener("click", () => {
            speakKorean(item.korean);
        });

        const learnButton = document.createElement("button");

        learnButton.type = "button";
        learnButton.className = "learn-word-button";

        function updateLearnButton() {

            if (learnedWords.has(item.korean)) {

                learnButton.textContent = "✓ Learned";
                learnButton.disabled = true;
                learnButton.classList.add("learned");

            } else {

                learnButton.textContent = "Mark as Learned";
                learnButton.disabled = false;
                learnButton.classList.remove("learned");

            }

        }

        learnButton.addEventListener("click", () => {

            const isNew = markWordLearned(item);

            if (isNew) {
                updateLearnButton();
            }

        });

        info.appendChild(korean);
        info.appendChild(pronunciation);
        info.appendChild(meaning);
        info.appendChild(audioButton);
        info.appendChild(learnButton);

        card.appendChild(image);
        card.appendChild(info);

        learningCards.appendChild(card);

        updateLearnButton();

    });

}


// ==========================================
// 8. QUIZ VARIABLES
// ==========================================

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let quizMode = "mixed";


// ==========================================
// 9. SHUFFLE FUNCTION
// ==========================================

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];

    }

    return shuffled;

}


// ==========================================
// 10. START MIXED QUIZ
// ==========================================

function startQuiz(mode) {

    quizMode = "mixed";

    const shuffledWords = shuffleArray(vocabulary);

    // Exactly 25 picture + 25 audio questions.
    const questionTypes = shuffleArray([
        ...Array(25).fill("picture"),
        ...Array(25).fill("audio")
    ]);

    quizQuestions = shuffledWords.map((item, index) => {

        return {
            ...item,
            questionType: questionTypes[index]
        };

    });

    currentQuestion = 0;
    score = 0;
    answered = false;

    learningModes.hidden = true;
    learningArea.hidden = true;
    quizArea.hidden = false;

    quizResult.hidden = true;

    quizHeading.textContent = "🎯 Take Quiz";

    quizDescription.textContent =
        "25 picture questions and 25 audio questions. They appear randomly!";

    displayQuestion();

}


// ==========================================
// 11. DISPLAY QUIZ QUESTION
// ==========================================

function displayQuestion() {

    stopSpeech();

    const question = quizQuestions[currentQuestion];

    document.getElementById("questionCounter").textContent =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;

    document.getElementById("quizScore").textContent =
        `⭐ Score: ${score}`;

    document.getElementById("quizProgressBar").style.width =
        `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

    quizFeedback.textContent = "";

    nextQuestionBtn.hidden = true;
    quizResult.hidden = true;

    answered = false;

    const isAudio = question.questionType === "audio";

    if (isAudio) {

        quizQuestion.textContent = "🔊 Listen carefully!";

        quizPronunciation.textContent =
            "Choose the picture you hear.";

        quizTypeLabel.textContent =
            "WHICH PICTURE MATCHES THE AUDIO?";

        playAudioBtn.hidden = false;
        audioInstruction.hidden = false;

        playAudioBtn.onclick = () => {
            speakKorean(question.korean);
        };

        // Automatic audio playback.
        setTimeout(() => {

            if (!answered && !quizArea.hidden) {
                speakKorean(question.korean);
            }

        }, 700);

    } else {

        quizQuestion.textContent = question.korean;
        quizPronunciation.textContent = question.pronunciation;

        quizTypeLabel.textContent =
            "FIND THE PICTURE FOR";

        playAudioBtn.hidden = true;
        audioInstruction.hidden = true;

        playAudioBtn.onclick = null;

    }

    // Create four picture choices.
    quizOptions.innerHTML = "";

    const wrongAnswers = shuffleArray(
        vocabulary.filter(item =>
            item.korean !== question.korean
        )
    ).slice(0, 3);

    const options = shuffleArray([
        question,
        ...wrongAnswers
    ]);

    options.forEach(item => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "picture-option";

        const image = document.createElement("img");

        image.src = item.image;
        image.alt = item.meaning;
        image.loading = "lazy";

        image.onerror = () => {
            image.alt = `${item.meaning} photo unavailable`;
            image.style.display = "none";
        };

        const label = document.createElement("span");
        label.textContent = item.meaning;

        button.appendChild(image);
        button.appendChild(label);

        button.addEventListener("click", () => {
            checkAnswer(button, item, question);
        });

        quizOptions.appendChild(button);

    });

}


// ==========================================
// 12. CHECK ANSWER
// ==========================================

function checkAnswer(selectedButton, selectedItem, correctItem) {

    if (answered) return;

    answered = true;

    stopSpeech();

    const options = document.querySelectorAll(".picture-option");

    options.forEach(button => {

        button.disabled = true;

        const label = button.querySelector("span").textContent;

        if (label === correctItem.meaning) {
            button.classList.add("correct");
        }

    });

    if (selectedItem.korean === correctItem.korean) {

        score++;

        quizFeedback.textContent =
            "🎉 Correct match! You're a Korean star!";

    } else {

        selectedButton.classList.add("incorrect");

        quizFeedback.textContent =
            `Not quite! ${correctItem.korean} (${correctItem.pronunciation}) means ${correctItem.meaning}.`;

    }

    document.getElementById("quizScore").textContent =
        `⭐ Score: ${score}`;

    nextQuestionBtn.hidden = false;

    nextQuestionBtn.textContent =
        currentQuestion === quizQuestions.length - 1
            ? "See My Results 🏆"
            : "Next Question →";

}


// ==========================================
// 13. NEXT QUESTION
// ==========================================

nextQuestionBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        displayQuestion();

    } else {

        showResults();

    }

});


// ==========================================
// 14. FINAL RESULTS
// ==========================================

function showResults() {

    stopSpeech();

    quizOptions.innerHTML = "";

    quizQuestion.textContent = "Quest Completed!";
    quizPronunciation.textContent = "";

    quizTypeLabel.textContent = "YOUR FINAL RESULT";

    playAudioBtn.hidden = true;
    audioInstruction.hidden = true;
    nextQuestionBtn.hidden = true;

    quizFeedback.textContent = "";

    quizResult.hidden = false;

    finalQuizScore.textContent =
        `${score} / ${quizQuestions.length}`;

    const percentage =
        (score / quizQuestions.length) * 100;

    if (percentage === 100) {

        finalQuizMessage.textContent =
            "PERFECT! You're a Korean Word Master! 🌟";

    } else if (percentage >= 80) {

        finalQuizMessage.textContent =
            "Amazing work! Your Korean vocabulary is growing! 💗";

    } else if (percentage >= 60) {

        finalQuizMessage.textContent =
            "Great effort! Keep practicing and improving! ✨";

    } else {

        finalQuizMessage.textContent =
            "Keep practicing. Every question makes you better! 💪";

    }

    addActivity(
        `Completed K-Word Quest: ${score}/${quizQuestions.length} correct`
    );

}


// ==========================================
// 15. PLAY AGAIN
// ==========================================

document.getElementById("retryQuiz").addEventListener("click", () => {

    startQuiz("mixed");

});


// ==========================================
// 16. LOAD KOREAN VOICES
// ==========================================

if ("speechSynthesis" in window) {

    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };

    window.speechSynthesis.getVoices();

}
