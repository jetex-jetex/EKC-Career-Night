# Data Engineering Career Night — GitHub Pages Site

A simple, mobile-friendly single-page site for high school students to explore data engineering as a career. Built with plain HTML, CSS, and minimal JavaScript — no build step required.

---

## Setup: Publish to GitHub Pages

### 1. Create the repository

1. Go to [github.com/new](https://github.com/new).
2. Name it something like `data-engineering-career` (or use your `username.github.io` repo for a user site).
3. Set it to **Public**.
4. Click **Create repository**.

### 2. Push the files

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/data-engineering-career.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Source**, select `Deploy from a branch`.
3. Choose the `main` branch and the `/ (root)` folder.
4. Click **Save**.

Your site will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/data-engineering-career/
```
(For a user site repo named `username.github.io`, it will be at `https://username.github.io/`.)

---

## Set YOUR_SITE_URL

Once the site is live, search `index.html` for `YOUR_SITE_URL` and replace all occurrences with your actual URL. There are three spots:

- `<meta property="og:url" content="YOUR_SITE_URL" />` (line ~9)
- Inside the About section paragraph (near the bottom)
- The `<small>YOUR_SITE_URL</small>` below the QR code image

---

## Add the QR Code

### Generate the QR code

1. Go to any free QR generator (search "free QR code generator").
2. Enter your GitHub Pages URL as the target.
3. Download the image as a PNG, at least **400×400 px** for print quality.

### Add it to the repo

1. Create an `assets/` folder in the repo root.
2. Save the image as `assets/qr-code.png`.
3. Commit and push.

The site will automatically display it in the About section. If the image is not present, a placeholder box is shown instead (no broken image icon).

---

## Editing Content

All content lives in `index.html`. Look for `<!-- EDIT: ... -->` comments to find each editable region:

| Comment | What to edit |
|---|---|
| `<!-- EDIT: Hero text -->` | Title, subtitle, intro sentence |
| `<!-- EDIT: What I Do section -->` | Day-in-the-life bullets and paragraph |
| `<!-- EDIT: Questions list -->` | Add, remove, or reword any question bullets |
| `<!-- EDIT: Interests section -->` | Interest categories and prompt |
| `<!-- EDIT: Activities section -->` | Dataset, pipeline steps, prompts |
| `<!-- EDIT: Pathways section -->` | High school steps, post-HS options, first jobs |
| `<!-- EDIT: Resources section -->` | External links list |
| `<!-- EDIT: About Me section -->` | YOUR_NAME, YOUR_TITLE, YOUR_LOCATION, bio, contact links |
| `<!-- EDIT: Footer text -->` | Footer copyright line |

### Contact links (About section)

The email, LinkedIn, and GitHub links are commented out by default. To enable one, remove the `<!--` and `-->` around it and fill in the value:

```html
<!-- Before (hidden): -->
<!-- <li><a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a></li> -->

<!-- After (visible): -->
<li><a href="mailto:emily@example.com">emily@example.com</a></li>
```

---

## File Structure

```
/
├── index.html       ← Main page (all sections)
├── styles.css       ← All styling, responsive layout
├── scripts.js       ← Smooth scrolling, hamburger menu
├── README.md        ← This file
└── assets/
    └── qr-code.png  ← Add this after generating (see above)
```

---

## Local Preview

Open `index.html` directly in a browser, or run a quick local server:

```bash
# Python 3
python3 -m http.server 8080
# Then visit http://localhost:8080
```
