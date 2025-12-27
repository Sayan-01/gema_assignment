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
