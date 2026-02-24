# PRD: Data Engineering Career Mini-Site (GitHub Pages)

## 1. Overview

**Goal**  
Create a simple, mobile-friendly GitHub Pages website that high school students can open via QR code during/after a career exploration event to learn about data engineering, see resources, and contact me.

**Primary outcomes**

- One static site hosted on GitHub Pages under my GitHub account.
- One QR code image that links to the site URL, to be printed on handouts and slides.

---

## 2. Target Users and Constraints

**Users**

- High school students (9–12th grade), mixed tech exposure.
- Counselors/teachers who might share the link later.

**Constraints & Requirements**

- Must load fast on school Wi‑Fi and student phones (Android + iOS).
- No login, no backend, no tracking beyond basic GitHub Pages analytics.
- Plain HTML/CSS/JS or a very light static framework; no heavy build step required.
- Content must be easily editable by me directly in the repo (Markdown/HTML).

---

## 3. Site Structure and Sections

**Overall structure:**  
Single-page site (`index.html`) with a sticky top navigation that scrolls to sections via anchors.

### 3.1 Sections (in order)

#### 1) Hero / Welcome

- Title: `Data Engineering: Turning Data Into Decisions`
- Subtitle: `Resources and questions for exploring a career in data engineering.`
- One brief intro sentence in friendly language.
- Prominent button that scrolls to “What I Do” section (anchor link).

#### 2) What I Do (Day in the Life)

- 3–4 bullets describing the role:
  - Check data pipelines and dashboards.
  - Build and improve data pipelines with code (e.g., SQL, Python).
  - Work with teams to understand the data they need.
- One short paragraph explaining “What is a data engineer?” in student‑friendly language.

#### 3) Questions You Can Ask Me

Break into four subsections, each with 4–6 bullets. These should be directly editable text.

- **About the job**
  - What does a typical day look like for you?
  - What kind of problems do you solve?
  - Who uses the data you prepare (managers, data scientists, apps, customers)?
  - What is something cool or surprising you’ve done with data?
  - What’s your favorite part of being a data engineer?
  - What’s the most challenging part of your job?

- **About skills and tools**
  - What programming languages or tools do you use most often?
  - How much math do you actually use day to day?
  - What non-technical skills are important in your job (communication, teamwork, writing)?
  - If I want to start now, what should I learn first?

- **About school and education**
  - What did you study in college or training?
  - Which high school classes helped you the most?
  - If I don’t want to go straight to a 4-year college, what other paths are there?
  - What do you wish you had known about this career when you were my age?

- **About lifestyle and work-life balance**
  - What does your work schedule look like?
  - Is your job stressful? In what way?
  - Can you work remotely?
  - How do you keep learning new things without getting overwhelmed?

#### 4) Connect Data Engineering to Your Interests

- Short intro sentence:  
  “Pick something you like and think about how data might be used behind the scenes.”
- Bulleted list:
  - Sports (stats, performance, fantasy leagues)
  - Music or streaming (recommendation systems, playlists)
  - Social media (feeds, trends, followers)
  - Gaming (matchmaking, leaderboards, in‑game economy)
  - Money/finance (budgeting apps, fraud detection)
- Prompt below list:  
  “Ask: ‘How is data engineering used in [my interest]?’”

#### 5) Mini Activities (On Your Own or With Me)

- **Activity 1: From messy data to answers**
  - Short description of a tiny dataset: students, hours on TikTok, hours studied, test scores.
  - 3–4 question bullets:
    - Who studied the most?
    - Who spent the most time on TikTok?
    - Who seems to have the highest test score?
    - Does more study time seem to help scores?

- **Activity 2: Design a data pipeline**
  - Describe a simple pipeline:
    - App → Collect data → Store data → Clean & organize → Dashboard/App feature
  - Prompt:  
    “Draw your own version of this pipeline for your favorite app or game.”

#### 6) Pathways From High School to Data Engineering

- **In High School**
  - Take math (especially algebra and statistics).
  - Take any computer science classes if available.
  - Get comfortable with spreadsheets (Google Sheets, Excel).
  - Do small personal projects (track spending, game stats, social media usage, etc.).

- **After High School**
  - 4‑year degree in CS, data-related fields, or similar.
  - Community college + transfer.
  - Tech bootcamps.
  - Self-study plus projects.

- **First Jobs That Can Lead to Data Engineering**
  - Data analyst.
  - Junior developer.
  - Support/operations roles working with data tools.
  - Any role where you work closely with data and databases.

#### 7) Try This Later (Resources & Ideas)

- Suggestions (no specific brands required; can add links later):
  - Search for free “SQL for beginners” tutorials.
  - Search for free “Python for data” tutorials.
  - Use a spreadsheet to track something in your life for a week and make a chart.
- Area where we can add 3–5 external links later as simple list items.

#### 8) About Me & Contact

- Variables/placeholders:
  - `YOUR_NAME`
  - `YOUR_TITLE` (e.g., Data Engineer)
  - `YOUR_LOCATION`
- Brief 2–3 sentence bio in student-friendly language (Claude can generate from placeholders).
- Optional links:
  - `YOUR_EMAIL`
  - `YOUR_LINKEDIN_URL`
  - `YOUR_GITHUB_URL`
- All contact fields should be easy to omit or comment out.

---

## 4. Content & Tone Guidelines

- Reading level: approximately 8th–10th grade.
- Tone: encouraging, curious, practical.
- Avoid jargon; if a term is used (e.g., “pipeline”), include a short explanation.
- Prefer short paragraphs and bullet lists over long blocks of text.

---

## 5. Visual Design & UX

**General**

- Simple, clean, responsive single-column layout.
- Works well on mobile first; test visually at a narrow phone width.
- Use a light background and high-contrast text.
- Sans-serif font (system fonts are fine).

**Navigation**

- Sticky top navigation with anchor links to sections:
  - “What I Do”
  - “Questions”
  - “Activities”
  - “Pathways”
  - “Resources”
  - “About”
- On mobile, nav can collapse into a basic hamburger or scrollable horizontal list.

**Visual Elements**

- Minimal icons/illustrations (optional): simple shapes, emojis, or SVGs.
- For the pipeline section, create a simple diagram using CSS (boxes/arrows) rather than image files.
- Ensure good spacing between sections for easy scanning on mobile.

---

## 6. Technical Implementation

**Hosting**

- Use GitHub Pages with a public repository.
- Either:
  - `username.github.io` (user site), or
  - `username.github.io/data-engineering-career` (project site).
- Static files only; no server-side code.

**Stack**

- HTML + CSS + minimal JavaScript.
- No build step required (no frameworks or bundlers unless trivial to maintain).

**File Structure**

- `index.html` — main page with all sections.
- `styles.css` — styling, responsive layout.
- `scripts.js` (optional) — for minor UX enhancements like smooth scrolling.
- `assets/`
  - `qr-code.png` — QR image (I will add this once generated).
  - Any additional images if needed.

---

## 7. QR Code Requirement

**Purpose**

- Students scan a printed QR code at my table or on handouts to open the site on their phones.

**Requirements**

- The site should assume a final URL placeholder: `YOUR_SITE_URL`.
- Claude should:
  - Clearly indicate where to insert the final URL in the code (for meta tags, copy section, etc.).
  - Provide brief instructions in a README on how I can generate a QR code image (e.g., using any online QR generator or a simple script) and save it as `assets/qr-code.png`.
- On the site itself:
  - Include a small section (e.g., near the bottom or About section) that displays the QR image with alt text: “QR code link to this website.”
  - Include text like: “You can scan this later from any printed handout.”

---

## 8. Editing and Maintenance Requirements

Claude should:

- Add comments in `index.html` indicating editable sections, e.g.:
  - `<!-- EDIT: Hero text -->`
  - `<!-- EDIT: Questions list -->`
  - `<!-- EDIT: About Me section -->`
- Keep all copy in `index.html` (or a single template file) so I can quickly update questions, activities, and links.
- Avoid complicated templates/partials.

---

## 9. Non-Functional Requirements

- Lightweight: page should load quickly even on average mobile connections.
- Accessible:
  - Reasonable font size.
  - High color contrast.
  - Alt text for any images (including QR code).
- Tested visually on:
  - Mobile (narrow viewport).
  - Desktop (standard laptop width).

---

## 10. Deliverables for Claude

Claude should produce:

1. **Repo structure description** in text form.
2. **`index.html`** with:
   - All sections described above.
   - Placeholder content where needed (`YOUR_NAME`, `YOUR_SITE_URL`, etc.).
   - HTML comments marking editable regions.
3. **`styles.css`** with:
   - Responsive layout rules.
   - Styles for hero, navigation, sections, and pipeline diagram.
4. **Optional `scripts.js`** with:
   - Smooth scrolling for nav anchor links.
   - Any simple non-essential enhancements.
5. **Short README** with:
   - Steps to create the GitHub repo.
   - How to enable GitHub Pages.
   - Where to set `YOUR_SITE_URL`.
   - How and where to add `assets/qr-code.png`.

---

## 11. Instruction to Claude

Using this PRD, please:

- Generate the full `index.html`, `styles.css`, optional `scripts.js`, and a `README.md` suitable for a GitHub Pages site.
- Use clear placeholder values (`YOUR_NAME`, `YOUR_SITE_URL`, etc.) where appropriate.
- Ensure the output is ready to paste into a new repository and publish via GitHub Pages.
