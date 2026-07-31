# Viral YouTube Thumbnail Maker

A client-side, browser-based web application to quickly design and export high-conversion YouTube thumbnails. 

## Defining the Scope

**Objective:**
To provide a lightweight, no-login-required tool for content creators to generate "viral-style" thumbnails directly in the browser.

**Core Features (In Scope):**
- **Background Support:** Upload local images to a strict 16:9 (1280x720) canvas.
- **Dynamic Text Generation:** Add multiple text layers with presets emulating high-CTR YouTube trends (e.g., MrBeast Yellow 3D, Classic Impact).
- **Free-form Positioning:** Drag-and-drop text anywhere on the canvas.
- **Overlay Frames:** Toggleable visual hooks (Camcorder REC UI, Vignette, Viral Borders).
- **Local Export:** Export the final composite at exact 720p resolution using `html2canvas` without server processing.

**Out of Scope (Future Considerations):**
- Advanced image masking or background removal.
- Cloud saving or user authentication.
- Video generation.

## Running Locally
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. No build tools or backend required.
