# 🇰🇷 Hangeul Studio AI

### An Interactive Korean Language Learning Platform Powered by AI

Hangeul Studio AI is a web-based Korean language learning platform designed to make learning Hangul, Korean vocabulary, and writing more interactive and engaging.

The platform combines interactive learning activities, vocabulary games, progress tracking, and AI-powered handwriting feedback to create an enjoyable Korean learning experience.

---

## ✨ Features

### 1. Writing Studio
- Practice writing Korean characters.
- Interactive writing canvas.

### 2. Learn Hangul
- Learn Korean consonants and vowels.
- Practice syllable combinations.
- Explore the Korean alphabet step by step.

### 3. Korean Vocabulary
- Explore commonly used Korean words.
- Learn Korean vocabulary with English meanings and pronunciation.

### 4. AI Korean Handwriting Checker
- Upload handwritten Korean images.
- Receive AI-powered feedback.
- Analyze Hangul, vocabulary, and Korean sentences.

### 5. K-Word Quest — Smart Learning
- Picture-based vocabulary learning cards.
- Match Korean words with pictures.
- Listen to Korean pronunciations.
- Interactive picture and audio quizzes.
- 50-question vocabulary quiz.

### 6. Learning Progress Dashboard
- Track learning activities.
- Monitor vocabulary progress.
- View achievements and milestones.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend development |
| Flask | Web framework |
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |
| JavaScript | Interactive functionality |
| Gemini API | AI-powered handwriting feedback |
| Local Storage | Learning progress tracking |

---

## 📂 Project Structure

```text
Hangeul-Studio/
│
├── app.py
├── requirements.txt
├── .env
│
└── app/
    │
    ├── __init__.py
    │
    ├── routes/
    │   └── main.py
    │
    ├── templates/
    │   ├── home.html
    │   ├── studio.html
    │   ├── learn_hangul.html
    │   ├── consonants.html
    │   ├── vowels.html
    │   ├── syllables.html
    │   ├── vocabulary.html
    │   ├── ai_handwriting.html
    │   ├── smart_learning.html
    │   └── progress.html
    │
    └── static/
        │
        ├── css/
        │   ├── style.css
        │   ├── studio.css
        │   ├── learn_hangul.css
        │   ├── consonants.css
        │   ├── vowels.css
        │   ├── syllables.css
        │   ├── vocabulary.css
        │   ├── ai_handwriting.css
        │   ├── smart_learning.css
        │   └── progress.css
        │
        └── js/
            ├── canvas.js
            ├── consonants.js
            ├── vowels.js
            ├── syllables.js
            ├── vocabulary.js
            ├── vocabulary-data.js
            ├── ai_handwriting.js
            ├── smart_learning.js
            └── progress.js
```

---

## ⚙️ Installation and Setup

### Prerequisites
- Python 3.10 or later
- Git
- Gemini API key

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd Hangeul-Studio
```

### 3. Create a Virtual Environment

```bash
python -m venv .venv
```

### 4. Activate the Environment

Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

### 6. Configure Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Never upload your API key or `.env` file to GitHub.

### 7. Run the Application

```bash
python app.py
```

Open:

```text
http://127.0.0.1:5000/
```

---

## 🎯 Project Objectives

- Make Korean language learning accessible and interactive.
- Help beginners understand Hangul and Korean vocabulary.
- Encourage learning through games and visual activities.
- Explore Generative AI in educational applications.
- Provide AI-powered writing feedback.

---

## 🚀 Future Improvements

- More vocabulary categories.
- Additional interactive language games.
- Improved handwriting recognition.
- More pronunciation exercises.
- Advanced learning analytics.
- Personalized learning recommendations.

---

## 👩‍💻 Developer

Developed as a personal AI and web development portfolio project.

This project demonstrates practical skills in Python, Flask, frontend development, JavaScript, API integration, and AI-powered educational applications.

---

⭐ If you find this project interesting, feel free to explore and share your feedback!

**Happy Learning! 화이팅! 🇰🇷**