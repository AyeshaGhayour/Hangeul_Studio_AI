
// ==========================================
// AI KOREAN WORK CHECKER
// ==========================================

// GET HTML ELEMENTS

const workImage = document.getElementById("workImage");
const imagePreview = document.getElementById("imagePreview");
const previewContainer = document.getElementById("imagePreviewContainer");
const removeImageBtn = document.getElementById("removeImageBtn");
const analyzeBtn = document.getElementById("aiAnalyzeBtn");
const feedback = document.getElementById("aiFeedback");

let uploadedImage = null;


// ==========================================
// IMAGE UPLOAD
// ==========================================

workImage.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    // CHECK FILE TYPE

    const allowedTypes = ["image/jpeg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
        feedback.textContent = "Please upload a JPG or PNG image.";
        this.value = "";
        return;
    }

    // CHECK FILE SIZE (10 MB)

    if (file.size > 10 * 1024 * 1024) {
        feedback.textContent = "Image size must be less than 10 MB.";
        this.value = "";
        return;
    }

    uploadedImage = file;

    // DISPLAY IMAGE PREVIEW

    const reader = new FileReader();

    reader.onload = function (event) {

        imagePreview.src = event.target.result;

        previewContainer.hidden = false;

        feedback.textContent =
            "Your Korean work is ready for AI checking! ✨";

    };

    reader.readAsDataURL(file);

});


// ==========================================
// REMOVE UPLOADED IMAGE
// ==========================================

removeImageBtn.addEventListener("click", function () {

    uploadedImage = null;

    workImage.value = "";

    imagePreview.src = "";

    previewContainer.hidden = true;

    feedback.textContent = "Image removed. Upload another image.";

});


// ==========================================
// INITIAL MESSAGE
// ==========================================

feedback.textContent =
    "Upload your Korean work to get started! ✨";

// ==========================================
// ANALYZE KOREAN WORK WITH GEMINI
// ==========================================

analyzeBtn.addEventListener("click", async function () {

    if (!uploadedImage) {
        feedback.textContent = "Please upload your Korean work first!";
        return;
    }

    const practiceType = document.getElementById("practiceType").value;

    const instructions = document.getElementById(
        "exerciseInstructions"
    ).value.trim();

    analyzeBtn.disabled = true;
    analyzeBtn.textContent = "Analyzing Your Work...";

    feedback.textContent =
        "✨ Gemini is checking your Korean work. Please wait...";

    try {

        const reader = new FileReader();

        const imageData = await new Promise((resolve, reject) => {

            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(
                new Error("Could not read the uploaded image.")
            );

            reader.readAsDataURL(uploadedImage);

        });

        const response = await fetch("/analyze-handwriting", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                image: imageData,
                practice_type: practiceType,
                instructions: instructions
            })

        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(
                result.error || "Could not start Korean work analysis."
            );
        }

        const interactionId = result.interaction_id;

        feedback.textContent =
            "✨ Gemini is reviewing your answers and preparing feedback...";

        let completed = false;
        let attempts = 0;

        while (!completed && attempts < 120) {

            await new Promise(resolve => setTimeout(resolve, 3000));

            const statusResponse = await fetch(
                `/handwriting-status/${interactionId}`
            );

            const statusResult = await statusResponse.json();

            if (!statusResponse.ok || !statusResult.success) {
                throw new Error(
                    statusResult.error || "Could not retrieve AI feedback."
                );
            }

            if (statusResult.status === "completed") {

                feedback.textContent = statusResult.feedback;
                completed = true;

            } else if (
                statusResult.status === "failed" ||
                statusResult.status === "cancelled"
            ) {

                throw new Error(
                    "Gemini could not complete the analysis."
                );

            }

            attempts++;

        }

        if (!completed) {
            throw new Error(
                "Analysis is taking too long. Please try again."
            );
        }

    } catch (error) {

        console.error("Korean Work Analysis Error:", error);

        feedback.textContent =
            error.message || "Unable to analyze your work.";

    } finally {

        analyzeBtn.disabled = false;
        analyzeBtn.textContent = "✨ Check My Work";

    }

});
