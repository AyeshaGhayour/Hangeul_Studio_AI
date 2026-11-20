
from flask import Blueprint, render_template, request, jsonify
from dotenv import load_dotenv
import os
import base64
from google import genai
from google.genai import types

load_dotenv()

main = Blueprint("main", __name__)

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


# ==========================================
# MAIN WEBSITE ROUTES
# ==========================================

@main.route("/")
def home():
    return render_template("home.html")


@main.route("/studio")
def studio():
    return render_template("studio.html")


# Module 2: Learn Hangul

@main.route("/learn-hangul")
def learn_hangul():
    return render_template("learn_hangul.html")


# Module 2: Korean Consonants

@main.route("/consonants")
def consonants():
    return render_template("consonants.html")


# Module 2: Korean Vowels

@main.route("/vowels")
def vowels():
    return render_template("vowels.html")


@main.route("/syllables")
def syllables():
    return render_template("syllables.html")


@main.route("/vocabulary")
def vocabulary():
    return render_template("vocabulary.html")


@main.route("/progress")
def progress():
    return render_template("progress.html")

@main.route("/smart-learning")
def smart_learning():
    return render_template("smart_learning.html")

@main.route("/ai-handwriting")
def ai_handwriting():
    return render_template("ai_handwriting.html")


# ==========================================
# AI KOREAN WORK ANALYSIS
# ==========================================

@main.route("/analyze-handwriting", methods=["POST"])
def analyze_handwriting():

    try:

        data = request.get_json()

        if not data or not data.get("image"):
            return jsonify({
                "success": False,
                "error": "Please upload an image."
            }), 400

        image = data["image"]
        practice_type = data.get("practice_type", "hangul")
        instructions = data.get("instructions", "").strip()

        # CHECK PRACTICE TYPE

        if practice_type not in ["hangul", "sentences"]:
            return jsonify({
                "success": False,
                "error": "Invalid practice type."
            }), 400

        # EXTRACT IMAGE DATA AND MIME TYPE

        if "," not in image:
            return jsonify({
                "success": False,
                "error": "Invalid image format."
            }), 400

        image_header, image_data = image.split(",", 1)

        if "image/png" in image_header:
            mime_type = "image/png"

        elif "image/jpeg" in image_header:
            mime_type = "image/jpeg"

        else:
            return jsonify({
                "success": False,
                "error": "Only JPG and PNG images are supported."
            }), 400

        # SELECT EVALUATION TASK

        if practice_type == "hangul":

            task = """
            Evaluate this Korean Hangul and vocabulary practice.

            Check:

            1. Korean character recognition.
            2. Correct spelling of Korean words.
            3. Correct vocabulary usage.
            4. Character formation, if handwritten.
            5. Readability of the submitted work.
            6. Accuracy of answers, if questions are provided.
            7. Mistakes and their corrections.
            """

        else:

            task = """
            Evaluate this Korean sentence-building exercise.

            Check:

            1. Korean grammar and sentence structure.
            2. Correct use of particles (은/는, 이/가, 을/를, etc.).
            3. Verb and adjective conjugation.
            4. Vocabulary selection.
            5. Word order and natural Korean expressions.
            6. Spelling and spacing.
            7. Corrected versions of incorrect sentences.
            """

        # ==========================================
        # BUILD IMPROVED GEMINI PROMPT
        # ==========================================

        prompt = f"""
        You are a professional, experienced and friendly
        Korean language teacher.

        Carefully analyze the uploaded photograph of a student's
        completed Korean work.

        EXERCISE TYPE:
        {practice_type}

        EXERCISE INSTRUCTIONS:
        {instructions if instructions else "No additional instructions provided."}

        EVALUATION TASK:
        {task}


        ==========================================
        IMPORTANT EVALUATION RULES
        ==========================================

        1. FIRST IDENTIFY THE IMAGE TYPE

        Determine whether the uploaded image contains:

        - Printed Korean text.
        - Digitally typed Korean text.
        - Handwritten Korean text.
        - A mixture of these.

        Never describe printed or digital text as handwriting.

        2. READ THE IMAGE CAREFULLY

        - Transcribe visible Korean words and sentences accurately.
        - Preserve the original Korean spelling.
        - Do not invent missing or unreadable words.
        - Mention any unclear sections.

        3. CHECK KOREAN ACCURACY

        Evaluate:

        - Hangul character recognition.
        - Korean spelling.
        - Vocabulary and meanings.
        - Grammar and particles.
        - Verb and adjective conjugation.
        - Sentence structure and word order.
        - Korean spacing and natural expressions.

        Only evaluate areas relevant to the exercise.

        4. DO NOT ASSUME EVERY ANSWER IS CORRECT

        A Korean word can be a valid vocabulary word
        but still be an incorrect answer to a particular question.

        Compare answers with the exercise instructions
        and questions whenever possible.

        5. WHEN NO QUESTIONS OR ANSWER KEY ARE PROVIDED

        If the image contains only a vocabulary list:

        - Check the spelling of each visible word.
        - Provide its English meaning.
        - Identify spelling errors or unclear words.
        - Explain vocabulary that may have multiple meanings.
        - Do not invent exercise questions.
        - Do not pretend to know the intended answers.
        - Do not award examination marks without a grading basis.

        6. HANDWRITING EVALUATION

        Only evaluate handwriting when the image actually
        contains handwritten work.

        Do not penalize handwriting style unnecessarily.

        7. FAIR SCORING

        - Never automatically award 100/100.
        - Give a score out of 100 only when sufficient
          information is available for fair evaluation.
        - If the original questions or grading criteria
          are missing, write:

          "Score: Not enough information to grade."

        - Explain why a score cannot be determined.
        - Never invent marks or deductions.

        8. BE HONEST

        If the image is blank, unrelated, unclear,
        or contains insufficient Korean work,
        explain the limitation instead of guessing.


        ==========================================
        RESPONSE FORMAT
        ==========================================

        1. IMAGE TYPE

        Identify whether the submitted work is printed,
        digitally typed, or handwritten.

        2. TRANSCRIBED WORK

        List the Korean words or sentences you can read.

        Include English meanings for vocabulary where useful.

        3. EVALUATION

        Explain the spelling, vocabulary, grammar,
        and accuracy of the submitted work.

        4. MISTAKES AND CORRECTIONS

        Show:

        Student's answer:
        Correct answer:
        Explanation:

        If no mistakes are found, say so.

        5. SCORE

        Provide an estimated score out of 100 only
        when fair grading is possible.

        Otherwise explain why scoring is not possible.

        6. IMPROVEMENT SUGGESTIONS

        Give practical suggestions for improving Korean.

        7. TEACHER'S FEEDBACK

        End with short, friendly and constructive feedback.

        Explain everything in simple English.

        This is educational feedback, not formal examination grading.

        Be accurate, specific, fair and honest.
        Never exaggerate the student's performance.
        """

        # ==========================================
        # START GEMINI BACKGROUND ANALYSIS
        # ==========================================

        print("Starting Gemini Korean work analysis...")

        interaction = client.interactions.create(
            model="gemini-3.5-flash-lite",
            input=[
                {
                    "type": "image",
                    "data": image_data,
                    "mime_type": mime_type
                },
                {
                    "type": "text",
                    "text": prompt
                }
            ],
            background=True
        )

        print("Gemini task started:", interaction.id)

        return jsonify({
            "success": True,
            "interaction_id": interaction.id,
            "status": interaction.status
        })

    except Exception as e:

        print("Gemini Analysis Error:", str(e))

        return jsonify({
            "success": False,
            "error": "Unable to start Korean work analysis."
        }), 500


# ==========================================
# CHECK GEMINI ANALYSIS STATUS
# ==========================================

@main.route("/handwriting-status/<interaction_id>")
def handwriting_status(interaction_id):

    try:

        result = client.interactions.get(id=interaction_id)

        print("Gemini interaction status:", result.status)

        if result.status == "completed":

            return jsonify({
                "success": True,
                "status": "completed",
                "feedback": result.output_text
            })

        if result.status in ["failed", "cancelled"]:

            print("GEMINI FAILURE DETAILS:", result.errors)

            return jsonify({
                "success": False,
                "status": result.status,
                "error": "Gemini could not complete the analysis."
            })

        return jsonify({
            "success": True,
            "status": result.status
        })

    except Exception as e:

        print("Gemini Status Error:", str(e))

        return jsonify({
            "success": False,
            "error": "Unable to check analysis status."
        }), 500
