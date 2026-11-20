
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

// ==========================================
// 1. DRAWING SETTINGS
// ==========================================

let currentTool = "pen";
let brushColor = "#713b4b";
let brushSize = 5;
let opacity = 1;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let history = [];
let historyIndex = -1;
let guideVisible = true;
// ==========================================
// WRITING PRACTICE TRACKING
// ==========================================

let hasDrawnInCurrentPractice = false;

const completePracticeBtn = document.getElementById("completePractice");
const writingStatus = document.getElementById("writingStatus");

// ==========================================
// 2. CANVAS RESIZING
// ==========================================

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const savedImage = canvas.width > 0 ? canvas.toDataURL() : null;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (savedImage) {
        const img = new Image();

        img.onload = () => {
            ctx.drawImage(img, 0, 0, rect.width, rect.height);
            saveState();
        };

        img.src = savedImage;
    } else {
        saveState();
    }
}

function getPosition(event) {
    const rect = canvas.getBoundingClientRect();

    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

// ==========================================
// 3. UNDO / REDO HISTORY
// ==========================================

function saveState() {
    if (historyIndex < history.length - 1) {
        history = history.slice(0, historyIndex + 1);
    }

    history.push(canvas.toDataURL());

    if (history.length > 30) {
        history.shift();
    }

    historyIndex = history.length - 1;
}

function restoreState(index) {
    if (index < 0 || index >= history.length) return;

    const img = new Image();

    img.onload = () => {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);
        ctx.drawImage(img, 0, 0, rect.width, rect.height);
    };

    img.src = history[index];
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        restoreState(historyIndex);
    }
}

function redo() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        restoreState(historyIndex);
    }
}

// ==========================================
// 4. DRAWING TOOLS AND CURSORS
// ==========================================

function updateCursor() {
    canvas.classList.remove(
        "cursor-pen",
        "cursor-pencil",
        "cursor-marker",
        "cursor-calligraphy",
        "cursor-highlighter",
        "cursor-eraser"
    );

    canvas.classList.add(`cursor-${currentTool}`);
}

document.querySelectorAll(".tool").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tool").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        currentTool = button.dataset.tool;
        updateCursor();
    });
});

updateCursor();

document.getElementById("brushSize").addEventListener("input", event => {
    brushSize = Number(event.target.value);
    document.getElementById("sizeValue").textContent = brushSize;
});

document.getElementById("opacity").addEventListener("input", event => {
    opacity = Number(event.target.value) / 100;
    document.getElementById("opacityValue").textContent = event.target.value;
});

document.getElementById("colorPicker").addEventListener("input", event => {
    brushColor = event.target.value;
});

function configureBrush() {
    ctx.globalAlpha = opacity;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (currentTool === "pen") {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize;

    } else if (currentTool === "pencil") {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = Math.max(1, brushSize * 0.55);
        ctx.globalAlpha = opacity * 0.65;

    } else if (currentTool === "marker") {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize * 2;

    } else if (currentTool === "calligraphy") {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize * 0.75;

    } else if (currentTool === "highlighter") {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize * 3;
        ctx.globalAlpha = opacity * 0.25;

    } else if (currentTool === "eraser") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = brushSize * 3;
        ctx.globalAlpha = 1;
    }
}

function startDrawing(event) {
    event.preventDefault();

    isDrawing = true;
    canvas.setPointerCapture(event.pointerId);

    const position = getPosition(event);
    lastX = position.x;
    lastY = position.y;

    configureBrush();

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
}

function draw(event) {
    if (!isDrawing) return;

    event.preventDefault();

    const position = getPosition(event);
    configureBrush();

    if (currentTool === "calligraphy") {
        const distance = Math.hypot(
            position.x - lastX,
            position.y - lastY
        );

        ctx.lineWidth = Math.max(
            1,
            brushSize * (1 + Math.min(distance / 20, 1))
        );
    }

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(position.x, position.y);
    ctx.stroke();
    hasDrawnInCurrentPractice = true;

    lastX = position.x;
    lastY = position.y;
}

function stopDrawing() {
    if (!isDrawing) return;

    isDrawing = false;
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.closePath();

    saveState();
}

canvas.addEventListener("pointerdown", startDrawing);
canvas.addEventListener("pointermove", draw);
canvas.addEventListener("pointerup", stopDrawing);
canvas.addEventListener("pointercancel", stopDrawing);
canvas.addEventListener("lostpointercapture", stopDrawing);

// ==========================================
// 5. CANVAS ACTIONS
// ==========================================

document.getElementById("undoBtn").addEventListener("click", undo);
document.getElementById("redoBtn").addEventListener("click", redo);

document.getElementById("clearBtn").addEventListener("click", () => {
    if (!confirm("Clear your entire canvas?")) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    saveState();
});

document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");

    link.download = "hangeul-practice.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});

// ==========================================
// 6. HANGUL LESSON DATA
// ==========================================

const characterSelect = document.getElementById("characterSelect");
const traceGuide = document.getElementById("traceGuide");
const characterReading = document.getElementById("characterReading");
const lessonCharacter = document.getElementById("lessonCharacter");
const lessonReading = document.getElementById("lessonReading");
const lessonDescription = document.getElementById("lessonDescription");
const totalStrokes = document.getElementById("totalStrokes");
const writingTip = document.getElementById("writingTip");

const hangulLessons = {
    "가": {
        reading: "ga",
        description: "A Korean syllable combining ㄱ and ㅏ.",
        tip: "Write ㄱ in one stroke, followed by ㅏ in two strokes.",
        paths: [
            "M55 45 H145 V95",
            "M155 65 V155",
            "M155 105 H190"
        ]
    },

    "나": {
        reading: "na",
        description: "A Korean syllable combining ㄴ and ㅏ.",
        tip: "Write ㄴ in one stroke, followed by ㅏ in two strokes.",
        paths: [
            "M65 45 V125 H135",
            "M145 65 V155",
            "M145 105 H180"
        ]
    },

    "다": {
        reading: "da",
        description: "A Korean syllable combining ㄷ and ㅏ.",
        tip: "Write ㄷ in three strokes, then ㅏ in two strokes.",
        paths: [
            "M55 45 H140",
            "M55 45 V125",
            "M55 125 H140",
            "M150 65 V155",
            "M150 105 H185"
        ]
    },

    "라": {
        reading: "ra",
        description: "A Korean syllable combining ㄹ and ㅏ.",
        tip: "Write ㄹ in five strokes, then ㅏ in two strokes.",
        paths: [
            "M50 45 H125",
            "M125 45 V80",
            "M125 80 H65",
            "M65 80 V115",
            "M65 115 H125 V145",
            "M145 65 V155",
            "M145 105 H185"
        ]
    },

    "마": {
        reading: "ma",
        description: "A Korean syllable combining ㅁ and ㅏ.",
        tip: "Write ㅁ in three strokes, then ㅏ in two strokes.",
        paths: [
            "M55 45 H125",
            "M55 45 V125",
            "M55 125 H125 V45",
            "M145 65 V155",
            "M145 105 H185"
        ]
    },

    "바": {
        reading: "ba",
        description: "A Korean syllable combining ㅂ and ㅏ.",
        tip: "Write ㅂ in four strokes, then ㅏ in two strokes.",
        paths: [
            "M55 45 H125",
            "M55 45 V125",
            "M125 45 V125",
            "M55 85 H125",
            "M145 65 V155",
            "M145 105 H185"
        ]
    },

    "사": {
        reading: "sa",
        description: "A Korean syllable combining ㅅ and ㅏ.",
        tip: "Write ㅅ in two strokes, then ㅏ in two strokes.",
        paths: [
            "M55 55 L95 115",
            "M135 55 L95 115",
            "M150 65 V155",
            "M150 105 H185"
        ]
    },

    "아": {
        reading: "a",
        description: "A Korean syllable combining ㅇ and ㅏ.",
        tip: "Write ㅇ in one circular stroke, followed by ㅏ in two strokes.",
        paths: [
            "M90 50 A35 35 0 1 0 90 120 A35 35 0 1 0 90 50",
            "M145 65 V155",
            "M145 105 H185"
        ]
    },

    "자": {
        reading: "ja",
        description: "A Korean syllable combining ㅈ and ㅏ.",
        tip: "Write ㅈ in three strokes, then ㅏ in two strokes.",
        paths: [
            "M55 45 H135",
            "M55 65 L95 105",
            "M135 65 L95 105",
            "M150 65 V155",
            "M150 105 H185"
        ]
    },

    "하": {
        reading: "ha",
        description: "A Korean syllable combining ㅎ and ㅏ.",
        tip: "Write ㅎ in three strokes, then ㅏ in two strokes.",
        paths: [
            "M55 45 H135",
            "M95 45 V75",
            "M65 100 A30 30 0 1 0 125 100 A30 30 0 1 0 65 100",
            "M150 65 V155",
            "M150 105 H185"
        ]
    }
};

// ==========================================
// 7. STROKE ORDER ELEMENTS
// ==========================================

const strokeContainer = document.getElementById("strokeContainer");
const strokeNumbers = document.getElementById("strokeNumbers");
const strokeCounter = document.getElementById("strokeCounter");

const nextStrokeBtn = document.getElementById("nextStroke");
const prevStrokeBtn = document.getElementById("prevStroke");
const resetStrokesBtn = document.getElementById("resetStrokes");
const playAnimationBtn = document.getElementById("playAnimation");

let strokePaths = [];
let currentStroke = 0;
let animationRunning = false;

// ==========================================
// 8. STROKE NUMBER POSITIONS
// ==========================================

function getStrokeStart(path) {
    const length = path.getTotalLength();
    return path.getPointAtLength(0);
}


function renderStrokeNumbers() {
    if (!strokeNumbers) return;

    strokeNumbers.innerHTML = "";

    strokePaths.forEach((path, index) => {
        const start = path.getPointAtLength(0);
        const length = path.getTotalLength();

        const end = path.getPointAtLength(
            Math.min(22, length)
        );

        // Number at the beginning of the stroke
        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        circle.setAttribute("cx", start.x);
        circle.setAttribute("cy", start.y);
        circle.setAttribute("r", "9");
        circle.setAttribute("class", "stroke-number");

        const number = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );

        number.setAttribute("x", start.x);
        number.setAttribute("y", start.y);
        number.setAttribute("class", "stroke-number-text");
        number.textContent = index + 1;

        // Direction arrow
        const arrow = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

        arrow.setAttribute("x1", start.x);
        arrow.setAttribute("y1", start.y);
        arrow.setAttribute("x2", end.x);
        arrow.setAttribute("y2", end.y);
        arrow.setAttribute("class", "stroke-arrow");
        arrow.setAttribute("marker-end", "url(#arrowHead)");

        // Add elements to SVG
        strokeNumbers.appendChild(arrow);
        strokeNumbers.appendChild(circle);
        strokeNumbers.appendChild(number);
    });
}

// ==========================================
// 9. GENERATE CHARACTER STROKES
// ==========================================

function renderStrokePaths(character) {
    const lesson = hangulLessons[character];

    if (!lesson || !strokeContainer) return;

    strokeContainer.innerHTML = lesson.paths.map(path => `
        <path class="stroke-path" d="${path}"></path>
    `).join("");

    strokePaths = Array.from(
        strokeContainer.querySelectorAll(".stroke-path")
    );

    currentStroke = 0;

    renderStrokeNumbers();
    updateStrokeDisplay();
}

// ==========================================
// 10. UPDATE STROKE DISPLAY
// ==========================================


function updateStrokeDisplay() {
    strokePaths.forEach((path, index) => {
        path.classList.remove("active", "completed");

        if (index < currentStroke) {
            path.classList.add("completed");
        }

        if (index === currentStroke) {
            path.classList.add("active");
        }
    });

    // Update stroke numbers and arrows
    if (strokeNumbers) {
        const circles = strokeNumbers.querySelectorAll(".stroke-number");
        const numbers = strokeNumbers.querySelectorAll(".stroke-number-text");
        const arrows = strokeNumbers.querySelectorAll(".stroke-arrow");

        circles.forEach((circle, index) => {
            circle.classList.remove("active", "completed");

            if (index < currentStroke) {
                circle.classList.add("completed");
            } else if (index === currentStroke) {
                circle.classList.add("active");
            }
        });

        numbers.forEach((number, index) => {
            number.classList.remove("active", "completed");

            if (index < currentStroke) {
                number.classList.add("completed");
            } else if (index === currentStroke) {
                number.classList.add("active");
            }
        });

        arrows.forEach((arrow, index) => {
            arrow.classList.remove("active", "completed");

            if (index < currentStroke) {
                arrow.classList.add("completed");
            } else if (index === currentStroke) {
                arrow.classList.add("active");
            }
        });
    }

    // Update counter
    if (strokeCounter) {
        strokeCounter.textContent =
            currentStroke === strokePaths.length
                ? `Completed ${strokePaths.length} / ${strokePaths.length}`
                : `Stroke ${currentStroke + 1} / ${strokePaths.length}`;
    }
}


// ==========================================
// 11. UPDATE HANGUL LESSON
// ==========================================

function updateHangulLesson() {
    if (!characterSelect || animationRunning) return;

    const character = characterSelect.value;
    const lesson = hangulLessons[character];

    if (!lesson) return;

    traceGuide.textContent = character;
    characterReading.textContent = lesson.reading;
    lessonCharacter.textContent = character;
    lessonReading.textContent = lesson.reading;
    lessonDescription.textContent = lesson.description;
    totalStrokes.textContent = lesson.paths.length;
    writingTip.textContent = lesson.tip;

    renderStrokePaths(character);
}

characterSelect.addEventListener("change", updateHangulLesson);
characterSelect.addEventListener("change", () => {
    hasDrawnInCurrentPractice = false;
    writingStatus.textContent = "";
});
// ==========================================
// 12. STROKE NAVIGATION
// ==========================================

nextStrokeBtn.addEventListener("click", () => {
    if (animationRunning) return;

    if (currentStroke < strokePaths.length) {
        currentStroke++;
        updateStrokeDisplay();
    }
});

prevStrokeBtn.addEventListener("click", () => {
    if (animationRunning) return;

    if (currentStroke > 0) {
        currentStroke--;
        updateStrokeDisplay();
    }
});

resetStrokesBtn.addEventListener("click", () => {
    if (animationRunning) return;

    currentStroke = 0;

    strokePaths.forEach(path => {
        path.style.transition = "none";
        path.style.strokeDasharray = "";
        path.style.strokeDashoffset = "";
    });

    updateStrokeDisplay();
});

// ==========================================
// 13. PLAY STROKE ANIMATION
// ==========================================


playAnimationBtn.addEventListener("click", async () => {
    if (animationRunning || !strokePaths.length) return;

    animationRunning = true;

    playAnimationBtn.disabled = true;
    playAnimationBtn.textContent = "Playing...";
    characterSelect.disabled = true;
    nextStrokeBtn.disabled = true;
    prevStrokeBtn.disabled = true;
    resetStrokesBtn.disabled = true;

    try {
        currentStroke = 0;

        // Prepare all strokes for animation
        strokePaths.forEach(path => {
            const length = path.getTotalLength();

            path.style.transition = "none";
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        });

        updateStrokeDisplay();

        // Allow browser to apply initial styles
        await new Promise(resolve => requestAnimationFrame(resolve));

        for (let i = 0; i < strokePaths.length; i++) {
            const path = strokePaths[i];
            const length = path.getTotalLength();

            currentStroke = i;
            updateStrokeDisplay();

            path.style.transition = "none";
            path.style.strokeDashoffset = length;

            await new Promise(resolve => requestAnimationFrame(resolve));

            // Draw the current stroke
            path.style.transition = "stroke-dashoffset 1.5s ease-in-out";
            path.style.strokeDashoffset = "0";

            await new Promise(resolve => setTimeout(resolve, 1600));
        }

        // Mark the entire lesson as completed
        currentStroke = strokePaths.length;
        updateStrokeDisplay();

    } catch (error) {
        console.error("Stroke animation error:", error);

    } finally {
        animationRunning = false;

        playAnimationBtn.disabled = false;
        playAnimationBtn.textContent = "▶ Play Animation";
        characterSelect.disabled = false;
        nextStrokeBtn.disabled = false;
        prevStrokeBtn.disabled = false;
        resetStrokesBtn.disabled = false;
    }
});


// ==========================================
// 14. SHOW / HIDE TRACING GUIDE
// ==========================================

const toggleGuideBtn = document.getElementById("toggleGuide");

toggleGuideBtn.addEventListener("click", () => {
    guideVisible = !guideVisible;

    traceGuide.style.display = guideVisible ? "flex" : "none";

    toggleGuideBtn.textContent = guideVisible
        ? "Hide Guide"
        : "Show Guide";
});

// ==========================================
// 15. INITIALIZE EVERYTHING
// ==========================================

updateHangulLesson();

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
completePracticeBtn.addEventListener("click", () => {

    if (!hasDrawnInCurrentPractice) {
        writingStatus.textContent =
            "Draw the character first, then complete your practice.";
        return;
    }

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

    learningProgress.writingSessions =
        (learningProgress.writingSessions || 0) + 1;

    learningProgress.activity = learningProgress.activity || [];

    learningProgress.activity.unshift(
        "Completed Korean writing practice: " + characterSelect.value
    );

    learningProgress.activity =
        learningProgress.activity.slice(0, 10);

    localStorage.setItem(
        "koreanLearningProgress",
        JSON.stringify(learningProgress)
    );

    hasDrawnInCurrentPractice = false;

    writingStatus.textContent =
        "Practice completed successfully! 🎉";
});
// ==========================================
// GEMINI AI HANDWRITING ANALYSIS
// ==========================================

const analyzeWritingBtn = document.getElementById("analyzeWritingBtn");
const aiFeedback = document.getElementById("aiFeedback");
analyzeWritingBtn.addEventListener("click", async () => {

    const selectedCharacter = characterSelect.value;

    if (!hasDrawnInCurrentPractice) {
        aiFeedback.textContent = "Please draw a character first!";
        return;
    }

    aiFeedback.textContent = "✨ Analyzing your handwriting...";

    const image = canvas.toDataURL("image/png");

    try {
        const response = await fetch("/analyze-handwriting", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image: image,
                character: selectedCharacter
            })
        });

        const result = await response.json();

        if (result.success) {
            aiFeedback.textContent = result.feedback;
        } else {
            aiFeedback.textContent = result.error || "Analysis failed.";
        }

    } catch (error) {
        console.error("AI Analysis Error:", error);
        aiFeedback.textContent = "Unable to connect. Please try again.";
    }
});