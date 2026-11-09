# Data Science Club — CHARUSAT

> **Live site:** [datascienceclub.charusat.ac.in](https://datascienceclub.charusat.ac.in)

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
│   └── legacy/                 # Archived drafts and old redirect stubs
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
│   ├── LogoWithoutText.png     # Club logo (favicon + navbar)
│   ├── AWS workshop/           # AWS Workshop photos
│   ├── Data Dialogues/         # Data Dialogues photos
│   ├── LLMs and RAG/           # LLMs & RAG Workshop photos
│   ├── Rajeev kanth event/     # Expert Session photos
│   ├── Trends in Computing Atul Kumar/
│   └── ...
│
├── CNAME                       # GitHub Pages custom domain config
├── LICENSE                     # MIT License
│
└── ...
```

---

## Path Conventions

| Location | CSS/JS/Image paths |
|---|---|
| Root (`/`) | `css/style.css`, `js/script.js`, `images/...` |
| `pages/` subfolder | `../css/style.css`, `../js/script.js`, `../images/...` |
| `events/` subfolder | `/css/style.css`, `/js/script.js`, `/images/...` (absolute) |

> **Note:** Event pages use absolute paths (`/css/`, `/js/`) to work correctly with the web server root.

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

- **No build step** — pure static HTML/CSS/JS, deploy by pushing to GitHub
- **GitHub Pages** with custom domain via `CNAME`
- Event nav links in all pages point to `/pages/events.html`
- Home page navbar links to `pages/events.html` (relative from root)
- The `#headings` ID was migrated to `.section-heading` class; both are styled in `css/style.css`
- Add every new event detail page directly under `events/` with one descriptive,
  lowercase camel-case filename (for example, `pythonWorkshop.html`).
- Keep event-specific posters, galleries, and reports together under a matching
  folder in `images/`; link those assets from the event page with root-relative
  paths such as `/images/python-workshop/...`.
- Keep the repository root limited to the home page, configuration, licensing,
  and documentation. Archived HTML stubs belong in `pages/legacy/`.
