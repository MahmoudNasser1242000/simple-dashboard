# 🛒 Product Dashboard

A sleek and interactive product dashboard built with **Next.js**, powered by **Sanity CMS**, and enhanced with **Redux Toolkit** and **Chart.js** for state management and visual insights.

## ✨ Overview

This dashboard allows users to:

- 🧾 **View** a list of products fetched from Sanity CMS.
- 🔍 **Filter** by:
  - Category
  - Price range
  - Title (search)
- 📊 **Visualize prices** with dynamic bar charts.
- 🌗 **Toggle themes** (Dark/Light).
- 🧠 **Manage state** globally using Redux Toolkit.

---

## ⚙️ Tech Stack

| Technology        | Purpose                             |
| -------------     | ----------------------------------- |
| **Next.js**       | React framework for SSR & routing   |
| **TypeScript**    | Type safety and better DX           |
| **Tailwind CSS**  | Utility-first styling               |
| **Redux Toolkit** | State management                    |
| **Sanity CMS**    | Backend for products                |
| **Chart.js**      | Product price visualization         |
| **HTML/CSS/JS**   | Web fundamentals                    |
| **shadcn/ui**     | Modern UI components with Radix UI  |
| **Clerk**         | Authentication & user management    |
---

## 📂 Project Structure
src/ ├── app/ # Next.js App directory ├── components/ # Reusable UI components ├── redux/ # Redux slices & store ├── types/ # TypeScript interfaces & types ├── styles/ # Global styles (Tailwind config) └── utils/ # Utility functions (optional)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/MahmoudNasser1242000/simple-dashboard
cd simple-dashboard

npm install
# or
yarn install

# =======================
# Clerk Authentication
# =======================
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_SIGN_IN_URL=/sign-in
CLERK_SIGN_UP_URL=/sign-up
CLERK_AFTER_SIGN_IN_URL=/dashboard
CLERK_AFTER_SIGN_UP_URL=/dashboard

# =======================
# Sanity CMS
# =======================
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token

npm run dev
# or
yarn dev