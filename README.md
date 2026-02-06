# 🔬 MaterialMatch – AI-Powered Material Discovery Platform

MaterialMatch is a modern web application that enables users to discover and explore materials based on desired properties using an AI-powered conversational interface. It is designed with a clean, modular frontend architecture and focuses on usability, scalability, and real-world applicability in material science research.

---

## 🚀 Features

- **AI-powered conversational interface** for material discovery
- Chat-based material query system
- Dashboard to track previous searches and activity
- Precise material suggestions based on user input
- Modern, responsive UI using Tailwind CSS
- Reusable and modular React components

---

## 🛠️ Tech Stack

| Technology           | Purpose                                |
| -------------------- | -------------------------------------- |
| **React (Vite)**     | Frontend framework and fast build tool |
| **JavaScript (JSX)** | UI logic and component structure       |
| **Tailwind CSS**     | Utility-first styling                  |
| **Lucide React**     | Icon library                           |
| **Node.js & npm**    | Dependency management                  |
| **Vite**             | Development server & bundler           |

---

## 📂 Project Structure

```text

src/
├── components/
│   ├── Generator/
│   │   ├── ChatMessage.jsx
│   │   ├── MaterialCard.jsx
│   │   └── QueryInput.jsx
│   └── ui/
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       └── badge.jsx
├── pages/
│   ├── Landing.jsx
│   ├── Generator.jsx
│   └── Dashboard.jsx
├── entities/
│   └── all.js
├── integrations/
│   └── Core.js
├── api/
├── utils/
├── App.jsx
├── main.jsx
└── index.css

```

## 🧠 Application Flow

1. User lands on the **Home page**
2. Clicks **Start Discovering**
3. Navigates to **Material Generator**
4. Enters material requirements in natural language
5. Query is processed via the AI integration layer
6. Results are displayed as structured material cards
7. User activity is reflected in the **Dashboard**

---

## 🧩 Key Design Concepts

### ✅ Component-Based Architecture

- Each UI element is a reusable React component
- Improves readability, scalability, and maintainability

### ✅ Separation of Concerns

- UI logic, data models, and AI integrations are clearly separated
- AI logic is abstracted from UI components

### ✅ State Management with Hooks

- `useState` for dynamic UI updates
- `useEffect` for side effects
- `useRef` for DOM interaction (auto-scroll in chat)

---

## 📸 Pages Overview

### 🏠 Landing Page

- Introduction to MaterialMatch
- Highlights features and use-cases
- Call-to-action buttons

### 🧪 Generator Page

- Conversational AI interface
- Query input with suggestions
- Displays material results dynamically

### 📊 Dashboard Page

- Displays user statistics
- Recent searches overview
- Entry point for new searches

**Author**: Agrim Karmakar<br>
**Institution**: Vellore Institute of Technology, Bhopal  
**Date**: 1-12-2026  
**Version**: 1.0
