# 🎨 Cookiebaits' Viral YouTube Thumbnail Maker Pro

**[👉 CLICK HERE TO USE THE APP LIVE 👈](https://cookiebaits.github.io/CCvidcompressthumbnail)**

---

A purely client-side, browser-based web application to quickly design and export high-conversion, viral-style YouTube thumbnails. No login, no server, and completely free to use.

## ✨ Features

- **AI Background Removal:** Runs `@imgly/background-removal` directly in the browser using WebAssembly. Cut out subjects from backgrounds with zero server-side processing!
- **Dynamic Layer Management:** Upload multiple foreground images, add text, and easily bring layers to the front or send them to the back.
- **Viral Text Presets:** Emulate high-CTR YouTube trends with 3D text (MrBeast style), Classic Impact, Neon Glow, and Cyber Glitch presets.
- **Filters & Overlays:** Apply background-only filters (Blur, Deep Fried, Grayscale) and add engaging overlays like "REC" camcorder UIs, vignettes, and Anime speed lines.
- **Responsive Workspace:** The 1280x720 canvas mathematically scales to fit your monitor perfectly while you edit, ensuring maximum workspace efficiency.
- **Pixel-Perfect Export:** Uses `html2canvas` to temporarily strip scaling and export a crisp, YouTube-ready 1280x720 PNG image.

## 🚀 How to Host on GitHub Pages (Free)

Since this app uses zero backend code, it is perfect for GitHub Pages!

1. **Upload Code:** Upload `index.html`, `style.css`, and `script.js` to your repository.
2. **Go to Settings:** Click the **Settings** tab in your repository.
3. **Navigate to Pages:** On the left-hand menu, click **Pages**.
4. **Enable Pages:** Under "Build and deployment", set the **Source** branch to `main` (or `master`) and click **Save**.
5. **Wait 1-2 minutes:** GitHub will build your site. Once done, it will be live at the link at the top of this README!

## 🛠️ How to Use the App

1. **Set Background:** Upload an image to act as the base layer. Apply a filter like "Blur" to make foreground elements pop.
2. **Add Foreground/Subject:** Upload a picture of a face or object. Click the image so it highlights with a dashed cyan border, then click **🪄 Remove BG**. *(Note: The first time you click this, it takes a few seconds to download the AI model into your browser cache).*
3. **Add Hook Text:** Type a short, punchy phrase, select a style, and click **+ Add Text**.
4. **Arrange:** Drag items around. Use the **Move to Front** and **Move to Back** buttons to fix overlapping. 
5. **Download:** Click **Download Thumbnail** to instantly save the 16:9 `.png` file to your computer.

## 💻 Tech Stack
- HTML5 / CSS3 / Vanilla JavaScript
- [html2canvas](https://html2canvas.hertzen.com/) - For rendering the DOM elements into a downloadable image.
- [Imgly Background Removal](https://github.com/imgly/background-removal-js) - Client-side AI image segmentation.

---
*Created for open-source thumbnail generation.*
