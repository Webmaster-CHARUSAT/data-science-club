# Data Science Club — CHARUSAT

> **Live site:** [datascienceclub.charusat.ac.in](https://datascienceclub.charusat.ac.in)

This is the static website for the Data Science Club at CHARUSAT. It is
hosted on GitHub Pages and does not require a build step.

---

## Folder Structure

```
data-science-club/
├── index.html                  # Home page (main entry point)
│
├── pages/                      # Full-page subpages
│   ├── events.html             # Events listing (upcoming + completed)
│   ├── course.html             # Courses page
│   ├── projects.html           # Projects page
│   └── legacy/                 # Unused archived drafts and old redirects
│
├── events/                     # Individual event detail pages
│   ├── awsWorkshop.html        # AWS Machine Learning Workshop
│   ├── dataDialogues.html      # Data Dialogues event
│   ├── expertSession.html      # Expert Session (Rajeev Kanth)
│   ├── llmsandrag.html         # LLMs & RAG Workshop
│   ├── shapingCareer.html      # Shaping Career event
│   ├── trendsInComputing.html  # Trends in Computing event
│   └── README.md               # Event page naming and asset conventions
│
├── css/
│   ├── style.css               # Main stylesheet
│   ├── particlestyle.css       # Particle background styles
│   ├── newEvent.css            # Event detail page styles
│   └── comingsoon.css          # Coming soon page styles
│
├── js/
│   ├── script.js               # Main JS (navbar, slick carousel, scroll)
│   ├── event.js                # Event page JS (popup gallery)
│   └── teams.js                # Team member data injection
│
├── vendors/
│   ├── particles.js            # Particle.js library
│   └── app.js                  # Particle config
│
├── images/                     # All site images
│   ├── club logo/              # Club logo (favicon + navbar)
│   ├── faculty image/          # Faculty coordinator portraits
│   ├── team/Previous team/     # Previous team portraits
│   ├── events/                 # Event posters, photos, and reports
│   └── site/                   # Shared site illustrations
│
├── CNAME                       # GitHub Pages custom domain config
├── LICENSE                     # MIT License
└── README.md                  # Project documentation
```

The repository root intentionally contains only the home page, configuration,
licensing, and documentation. Do not add feature pages or event pages to the
root.

---

## Path Conventions

| Location | CSS/JS/Image paths |
|---|---|
| Root (`/`) | `css/style.css`, `js/script.js`, `images/...` |
| `pages/` subfolder | `../css/style.css`, `../js/script.js`, `../images/...` |
| `events/` subfolder | `/css/style.css`, `/js/script.js`, `/images/...` (absolute) |

> **Note:** Event pages use root-relative paths (`/css/`, `/js/`, and
> `/images/`) so they work correctly when hosted from the site root.

---

## Key Dependencies

| Library | Version | CDN |
|---|---|---|
| Bootstrap | 5.1.3 | jsdelivr |
| jQuery | 3.4.1 | Google APIs |
| Slick Carousel | 1.9.0 | cdnjs |
| Unicons | 4.0.0 | iconscout |
| Font Awesome | 4.5.0 | maxcdn |
| Particles.js | local | `vendors/` |

---

## Development Notes

- **No build step:** this is a static HTML/CSS/JavaScript site.
- **Deployment:** push changes to the GitHub Pages branch.
- **Custom domain:** configured through `CNAME`.
- **Canonical navigation:** use `/pages/events.html`, `/pages/course.html`,
  and `/pages/projects.html`.
- **Legacy pages:** files in `pages/legacy/` are not used by the active site.
  They are retained only as historical references and old redirect stubs.
  Do not link to them or add new files there.

## Running locally

Because the site uses root-relative paths such as `/css/` and `/images/`, run
it through a local web server instead of opening `index.html` directly.

### Option 1: Python

1. Open a terminal in the repository root.
2. Start a local server:

   ```bash
   python -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in a browser.
4. Stop the server with `Ctrl+C`.

If `python` is not recognized on Windows, try:

```bash
py -m http.server 8000
```

### Option 2: VS Code Live Server

1. Install the **Live Server** extension in VS Code.
2. Open the repository folder in VS Code.
3. Right-click `index.html` and select **Open with Live Server**.
4. The site will open in your browser with a local address, usually
   `http://127.0.0.1:5500`.

## Adding an event

1. Create one descriptive, lowercase camel-case detail page directly under
   `events/`, such as `pythonWorkshop.html`.
2. Create a matching folder under `images/events/` for the event poster,
   gallery, and report, such as `images/events/python-workshop/`.
3. Use root-relative asset paths such as
   `/images/events/python-workshop/python-workshop-poster.png`.
4. Add the event card and link to `pages/events.html`.
5. Keep only one canonical detail page for each event; do not create numbered
   or alternate copies.
