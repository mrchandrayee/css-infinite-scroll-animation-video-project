# CSS Infinite Scroll Animation — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-infinite-scroll-animation-video-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the supplied 11.1-second screen recording (720 × 1280).

## What appears in the video
- Heading: **CSS Infinite Scroll Animation**
- A horizontal strip of landscape image cards continuously scrolling from right to left
- CSS editor showing the `.scroll-container`, `.scroll-content`, `.item`, `.item img`, hover pause, hover scale and `@keyframes scroll-left` rules
- The cards are wide landscape thumbnails with rounded corners and subtle shadows

## Readable CSS transcribed from the screen

```css
.scroll-container {
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
  position: relative;
}

.scroll-content {
  display: flex;
  gap: 24px;
  animation: scroll-left 30s linear infinite;
}

.item {
  flex-shrink: 0;
  width: 150px;
  aspect-ratio: 2 / 1;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.scroll-container:hover .scroll-content {
  animation-play-state: paused;
}

.item:hover {
  transform: scale(1.04);
  border-color: rgba(255, 255, 255, 0.2);
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

The visible declarations, values and keyframe positions above are transcribed from the recording. The CSS animation duration is 30 seconds as shown in the editor.

## Included behavior
- Seamless leftward infinite marquee by duplicating the image sequence
- Pause animation while hovering over the scroll container
- Slight scale-up and border highlight on hovered cards
- Local bundled SVG landscape artwork; no remote image dependency
- Responsive layout and copy-CSS control

## Run
Extract the ZIP and open `index.html` in a modern browser. No dependencies, installation or build command required.

## Files
- `index.html`
- `style.css`
- `script.js`
- `assets/coast.svg`
- `assets/mountain.svg`
- `assets/desert.svg`
- `assets/forest.svg`
- `assets/city.svg`

## Source fidelity
The CSS declarations shown above are directly transcribed where legible. The video does not show the complete HTML markup, exact original image assets or every initial CSS declaration. The markup and supporting presentation styles are reconstructed to reproduce the visible effect. The supplied SVGs are local replacement illustrations, not original photos from the recording.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
