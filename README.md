# Student Speaking Assessment Report Page

## Overview

This project is a **Student Speaking Assessment Report Page** created as part of a Full Stack Development assignment.  
It is a **functional prototype** inspired by platforms like SpeechAce / IELTS speaking score reports.

The implementation focuses only on the **top section of the report**, which includes:
- **Summary of Scores**
- **Descriptive Feedback**

The section **“Per question transcript and feedback”** is **not implemented**, as it is not required for this assignment.

---

## Features

### Summary of Scores
- Overall Score (out of 9)
- Skill-wise Scores:
  - Pronunciation
  - Fluency
  - Vocabulary
  - Grammar

### Graphical Representation
- Visual display of scores using:
  - Progress bars / Chart
- All scores are in the range **0 to 9**

### Descriptive Feedback (Dynamic)
Feedback is generated automatically based on score ranges:

| ≥ 8  Excellent performance with strong control 
| 6 – 7  Good performance with minor inaccuracies 
| < 6  Needs improvement

Feedback updates automatically when score values change.

---

### Feedback Logic

Feedback is generated using simple conditional logic:

if (score >= 8) {
  feedback = "Excellent performance with strong control.";
} else if (score >= 6) {
  feedback = "Good performance with minor inaccuracies.";
} else {
  feedback = "Needs improvement.";
}

## 🛠️ Tech Stack

- React + Vite
- Tailwind css

Backend:
- JSON file or in-memory object as data source

---

## How to Run the Project

- git clone https://github.com/Sayan-01/gema_assignment.git
- npm i
- npm run dev
- http://localhost:5173

## 📹 Demo Video

<video width="1919" height="1039" alt="demo video" src="https://github.com/user-attachments/assets/af4a42a9-dd72-4682-ac3c-33a5bf4995b9" />


## 🖼️ Demo Image

<img width="1919" height="1039" alt="Screenshot 2025-12-27 180636" src="https://github.com/user-attachments/assets/61704100-1406-462d-97d2-5cb83bda9eec" />

