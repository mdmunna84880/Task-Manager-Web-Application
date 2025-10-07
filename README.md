# gZenith Flow – Day 1 Progress Report

## 📅 Date
**Day 1 – Frontend–Backend Integration Setup**

---

## 🎯 Objective
To establish a seamless connection between the **Next.js frontend** and the **Node.js + Express backend**, enabling dynamic retrieval and display of all tasks from the MongoDB database.

---

## ⚙️ Implementation Summary

### 1. Project Integration
- Initialized the **Next.js frontend** (`zenith-flow-frontend`) and connected it to the existing **backend API**.
- Verified successful API communication between frontend (`localhost:3000`) and backend (`localhost:5000`).

### 2. Task Display Interface
- Implemented a simple interface to **fetch and render all tasks** using `useState` and `useEffect`.
- Displayed the task list dynamically on the homepage with responsive layout using **Tailwind CSS**.

### 3. Bug Fix
- Encountered a **data-mapping bug** where the task ID was undefined.
- Root cause identified: MongoDB represents document identifiers as **`_id`** instead of `id`.
- Fixed the mapping, ensuring consistent data rendering across all task components.

### 4. UI Exploration
- Experimented with **Tailwind CSS gradient and clipping utilities** to enhance the visual appeal of text.
- Tested the following class combination:
  ```css
  bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent
