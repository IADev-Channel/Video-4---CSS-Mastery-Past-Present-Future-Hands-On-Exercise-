CSS Mastery — Past, Present & Future (Hands-On Exercise)

A practical companion to my video on the past, present, and future of CSS. Build a clean, responsive UI using @layer, @container, CSS variables, media queries, a touch of vanilla JS, and semantic HTML5.

✨ What you’ll practice

@layer for sane cascade & specificity control

@container for component-level responsiveness

CSS Variables (design tokens for color/spacing/typography)

Media queries (when they still make sense)

Very basic JavaScript for small UX enhancements

HTML5 elements for clean, accessible structure

📹 Related videos

Video 2 – HTML5 from Scratch: https://youtu.be/FGSbFQVd1k0

Video 3 – SEO & Accessibility: https://youtu.be/FGSbFQVd1k0

🚀 Quick start
# clone
git clone https://github.com/IADev-Channel/css-exercise.git
cd css-exercise

# open
# just open index.html in your browser or use any static server:
npx serve .

🗂 Structure
```
/index.html
/assets/
  css/
    home.css
  images/
    alaska.jpg
    mount-fuji.jpg
    queenstown-newzealand.jpg
    sachseln-ow-switzerland.jpg
  js/
    script.js        # tiny vanilla JS
```

🌐 Browser support

Modern evergreen browsers.

Uses @container; include fallbacks or guard with @supports (container-type: inline-size) if targeting older browsers.

📝 License

MIT — use it in your projects or adapt freely.