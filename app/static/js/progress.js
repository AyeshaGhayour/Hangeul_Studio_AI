
// ==========================================
// LOAD SAVED LEARNING PROGRESS
// ==========================================

const learningProgress = JSON.parse(
    localStorage.getItem("koreanLearningProgress")
) || {
    hangulLearned: 0,
    vocabularyLearned: 0,
    writingSessions: 0,
    syllablesLearned: 0,
    achievements: [],
    activity: []
};


// ==========================================
// DISPLAY STATISTICS
// ==========================================

function updateProgressDashboard() {

    document.getElementById("hangulProgress").textContent =
        learningProgress.hangulLearned || 0;

    document.getElementById("vocabularyProgress").textContent =
        learningProgress.vocabularyLearned || 0;

    document.getElementById("writingProgress").textContent =
        learningProgress.writingSessions || 0;

    document.getElementById("syllablesProgress").textContent =
        learningProgress.syllablesLearned || 0;

    document.getElementById("achievementProgress").textContent =
        learningProgress.achievements.length;

    // Overall progress
    const hangulPercentage =
        (learningProgress.hangulLearned / 40) * 100;

    const vocabularyPercentage =
        (learningProgress.vocabularyLearned / 50) * 100;

    const writingPercentage =
        (learningProgress.writingSessions / 10) * 100;

    const overall =
        (hangulPercentage + vocabularyPercentage + writingPercentage) / 3;

    const finalPercentage = Math.min(
        Math.round(overall),
        100
    );

    document.getElementById("overallPercentage").textContent =
        finalPercentage + "%";

    document.getElementById("overallBar").style.width =
        finalPercentage + "%";
}


// ==========================================
// DISPLAY ACHIEVEMENTS
// ==========================================

function updateAchievements() {


const achievements = [
    {
        id: "firstHangul",
        title: "First Steps",
        condition: learningProgress.hangulLearned >= 1
    },
    {
        id: "firstWords",
        title: "Word Collector",
        condition: learningProgress.vocabularyLearned >= 10
    },
    {
        id: "writingStar",
        title: "Practice Star",
        condition: learningProgress.writingSessions >= 5
    },
    {
        id: "dedicatedLearner",
        title: "Dedicated Learner",
        condition: learningProgress.vocabularyLearned >= 50
    },
    {
        id: "syllableMaster",
        title: "Syllable Builder",
        condition: learningProgress.syllablesLearned >= 10
    },
    {
        id: "vocabularyExpert",
        title: "Vocabulary Expert",
        condition: learningProgress.vocabularyLearned >= 25
    },
    {
        id: "hangulMaster",
        title: "Hangul Master",
        condition: learningProgress.hangulLearned >= 40
    },
    {
        id: "writingChampion",
        title: "Writing Champion",
        condition: learningProgress.writingSessions >= 10
    },
    {
        id: "writingLegend",
        title: "Writing Legend",
        condition: learningProgress.writingSessions >= 25
    },
    {
        id: "wordMaster",
        title: "Word Master",
        condition: learningProgress.vocabularyLearned >= 100
    },
    {
        id: "syllableChampion",
        title: "Syllable Champion",
        condition: learningProgress.syllablesLearned >= 25
    },
    {
        id: "koreanScholar",
        title: "Korean Scholar",
        condition:
            learningProgress.hangulLearned >= 40 &&
            learningProgress.vocabularyLearned >= 100 &&
            learningProgress.writingSessions >= 25
    }
];


    const grid = document.getElementById("achievementGrid");

    grid.innerHTML = "";

    achievements.forEach(achievement => {

        const unlocked = achievement.condition;
        const card = document.createElement("div");

        card.className = unlocked
            ? "achievement-card"
            : "achievement-card locked";

        card.innerHTML = `
            <span>${unlocked ? "🏆" : "🔒"}</span>
            <h3>${achievement.title}</h3>
            <p>${unlocked ? "Achievement unlocked!" : "Keep learning to unlock this achievement."}</p>
        `;

        grid.appendChild(card);

    });

    learningProgress.achievements = achievements
        .filter(item => item.condition)
        .map(item => item.id);

    saveProgress();
}


// ==========================================
// DISPLAY LEARNING ACTIVITY
// ==========================================

function updateActivity() {

    const activityList = document.getElementById("activityList");

    if (learningProgress.activity.length === 0) {

        activityList.innerHTML = `
            <p class="empty-activity">
                Your learning activity will appear here.
            </p>
        `;

        return;
    }

    activityList.innerHTML = "";

    learningProgress.activity.forEach(activity => {

        const item = document.createElement("p");

        item.textContent = "✦ " + activity;

        item.style.padding = "12px 0";
        item.style.borderBottom = "1px solid #f0e3e7";

        activityList.appendChild(item);

    });

}


// ==========================================
// SAVE PROGRESS
// ==========================================

function saveProgress() {

    localStorage.setItem(
        "koreanLearningProgress",
        JSON.stringify(learningProgress)
    );

}


// ==========================================
// INITIALIZE DASHBOARD
// ==========================================

updateProgressDashboard();
updateAchievements();
updateActivity();
