# SDA Building Services

Professional, premium condominium and facility maintenance services platform designed for absolute reliability. This repository is optimized for complete, seamless synchronization and automated workflows between **Google AI Studio**, **GitHub**, and **Vercel**.

---

## 🚀 Easy Sync & Deployment Architecture

This project is built using a decoupled architecture powered by **React 19**, **Vite**, and **TypeScript** with complete offline-fallback support. It is tailor-made to be fully compatible with major sandboxes and production environments alike:

1. **Google AI Studio Sync:** Run your iterative AI instructions safely.
2. **GitHub Repository:** The gold standard source of truth for your version control.
3. **Vercel Hosting:** Absolute fast CDN hosting for instant client preview and enterprise production.

---

## 🛠️ Local Development & Quick Start

Get a running instance locally on your machine in seconds:

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd aura-quiet-living
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the local Dev Server:**
   ```bash
   npm run dev
   ```
   Your app will be available on: `http://localhost:3000`

---

## 🌌 Deploying to Vercel

Deployment on Vercel is fully automated and takes less than a minute:

1. Go to your **[Vercel Dashboard](https://vercel.com/)** and click **"Add New"** -> **"Project"**.
2. Import this synchronized **GitHub repository**.
3. Under **Framework Preset**, Vercel will automatically identify this as **Vite** or **Other**. If configured, ensure:
   - **Build Command:** `npm run build` or `vite build`
   - **Output Directory:** `dist`
4. Add any Environment Variables required in the "Environment Variables" section:
   - `GEMINI_API_KEY` (Your Google AI Studio Gemini API Key for chatbot services)
5. Click **"Deploy"**!

---

## 💎 Features Built for Seamless Compatibility

- **SPA Routing Fix (`vercel.json`):** Includes custom URL redirection rules that prevent subpage 404s when users refresh pages or trigger nested navigation.
- **Vite Asset Guarding (`/public/src`):** Automatically copies absolute file paths (`/src/assets/images/...`) into `/public/src/assets/images/...`. During a production build (`npm run build`), Vite deploys them verbatim, ensuring images inside TSX cards never break in production.
- **Gemini Assistant Fallback:** The chatbot has robust error handling if no `API_KEY` or `GEMINI_API_KEY` variable is provided.
