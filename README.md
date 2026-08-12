# Karunesh - Next.js Portfolio Website

A modern, fast, and visually appealing developer portfolio built with **Next.js (App Router)**, **React**, and **Vanilla CSS**. Designed with glassmorphism aesthetics, dark mode palette, smooth micro-animations, and full responsive design. Optimized for zero-config deployment on **Vercel**.

## Features

- 🚀 **Next.js App Router**: Built with modern Next.js project structure (`src/app/`).
- 💎 **Modern Dark Glassmorphism UI**: Custom CSS design system with gradient highlights, blur panels, and smooth scroll.
- 📱 **Fully Responsive**: Adapts seamlessly to Desktop, Tablet, and Mobile screens.
- ⚡ **Vercel Ready**: Ready for deployment with zero extra configuration needed.
- 🎨 **Interactive Tech Stack**: Category-based filtering for frontend, backend, database, and DevOps skills.
- 📁 **Projects Showcase**: Highlight featured projects with live links and source code buttons.
- ✉️ **Contact Form**: Built-in interactive contact section with user feedback states.

---

## Getting Started

### 1. Local Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 2. Build for Production

Validate the production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## ☁️ Deploying to Vercel

### Option A: Via Vercel CLI

1. Install Vercel CLI globally (if not installed):
   ```bash
   npm i -g vercel
   ```
2. Deploy directly from your workspace:
   ```bash
   vercel
   ```

### Option B: Via GitHub Integration

1. Push this project repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Next.js portfolio"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect Next.js and build your site instantly!
