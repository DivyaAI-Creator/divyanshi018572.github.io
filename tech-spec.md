# Tech Spec — Divyanshi Singh Portfolio

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.0 | UI framework |
| react-dom | ^18.3.0 | DOM renderer |
| typescript | ^5.6.0 | Type safety |
| vite | ^7.2.4 | Build tool |
| tailwindcss | ^3.4.19 | Utility CSS |
| @fontsource/inter | ^5.1.0 | Display/body font |
| @fontsource/jetbrains-mono | ^5.1.0 | Code/mono font |
| gsap | ^3.12.0 | Animations, scroll triggers, timelines |
| three | ^0.170.0 | Hero neural network canvas |
| @types/three | ^0.170.0 | Three.js types |
| lucide-react | ^0.460.0 | Icon library |
| clsx | ^2.1.0 | Conditional class joining |
| tailwind-merge | ^2.5.0 | Tailwind class deduplication |

## Component Inventory

### Layout

| Component | Source | Notes |
|-----------|--------|-------|
| Navigation | Custom | Fixed header with scroll-aware background transition |
| Footer | Custom | Simple footer with links and status badge |
| SectionWrapper | Custom | Reusable scroll-trigger animation wrapper using GSAP ScrollTrigger |

### Sections (page-level)

| Section | Description |
|---------|-------------|
| HeroSection | Full-viewport hero with Three.js neural canvas, name, stats, CTAs |
| AboutSection | Two-column: bio text + quick info grid |
| SkillsSection | Tabbed skill categories with animated proficiency bars |
| ProjectsSection | Filterable 2-column project card grid |
| ExperienceSection | Vertical timeline with experience cards |
| EducationSection | 3-card horizontal education row |
| CertificationsSection | 2-column certification cards |
| ContactSection | Two-column: contact info + form |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| SectionLabel | Custom | All sections — "SECTION NAME" with colored line prefix |
| StatBadge | Custom | Hero stats row |
| SkillCard | Custom | Skills grid — name + progress bar + tool tags |
| ProjectCard | Custom | Projects grid — image + title + desc + tags + links |
| ExperienceCard | Custom | Timeline items |
| EducationCard | Custom | Education row |
| CertificationCard | Custom | Certifications grid |
| SocialIcon | Custom | Nav, Contact, Footer — circular icon button |
| GradientText | Custom | Hero name — text-gradient clip |
| NeuralCanvas | Custom | Hero background — Three.js particle network |

### Hooks

| Hook | Purpose |
|------|---------|
| useScrollReveal | GSAP ScrollTrigger setup for fade-up entrance animations |
| useReducedMotion | Detect `prefers-reduced-motion` for accessibility |
| useMobileMenu | Mobile nav open/close state |

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Hero neural network canvas | Three.js | Raw Three.js: BufferGeometry points, custom shader material for glowing nodes, line segments for connections within threshold, mouse raycaster for attraction force. Drift via per-node velocity in render loop. | **High** |
| Hero text split reveal | GSAP | SplitType or manual span splitting, staggered `gsap.from` with `y: 30, opacity: 0, duration: 0.8, stagger: 0.03` | **Medium** |
| Page load sequence | GSAP | `gsap.timeline()` orchestrating nav → name → subtitle → stats → CTAs with calculated delays | **Medium** |
| Section scroll reveals | GSAP ScrollTrigger | `useScrollReveal` hook: `ScrollTrigger.create({ trigger, start: "top 80%" })` + `gsap.from(el, { y: 40, opacity: 0, duration: 0.8 })` | **Low** |
| Skill proficiency bars | GSAP ScrollTrigger | `gsap.from(bar, { scaleX: 0, duration: 1, ease: "power2.out" })` triggered on card visibility | **Low** |
| Timeline draw + stagger | GSAP ScrollTrigger | SVG line `scaleY: 0 → 1` + dot `scale: 0 → 1` + card `x: -30 → 0` with `stagger: 0.3` | **Medium** |
| Card hover transitions | CSS | `transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)` — transform + box-shadow + border | **Low** |
| Scroll indicator bounce | CSS | `@keyframes bounce { 0%,100% { translateY(0) } 50% { translateY(8px) } }` | **Low** |
| Filter tab content swap | GSAP | `gsap.to(cards, { opacity: 0, duration: 0.2, onComplete: swapData })` then `gsap.from(newCards, { y: 20, opacity: 0, stagger: 0.05 })` | **Medium** |
| Button glow | CSS | `box-shadow: 0 0 20px rgba(99,102,241,0.3)` on hover with `transition: all 0.3s` | **Low** |
| Nav background transition | CSS + JS | Scroll listener toggles `scrolled` class at hero bottom; CSS `transition: background 0.3s, backdrop-filter 0.3s` | **Low** |
| Mobile menu slide | CSS | `transform: translateX(100%) → translateX(0)` with `transition: transform 0.3s ease-out` | **Low** |
| Form submission states | React state | `useState` for loading/success/error; conditional rendering with CSS transitions | **Low** |
| Social icon hover | CSS | `transition: background 0.2s, color 0.2s` + hover color change | **Low** |
| Footer status pulse | CSS | `@keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.5 } }` on green dot | **Low** |

## State & Logic

### Project Filtering
- `useState<FilterCategory>`: "All" | "GenAI & LLMs" | "ML & AI" | "Data Analytics" | "NLP"
- Filter function: `projects.filter(p => active === "All" || p.category === active)`
- On change: animate out current → swap data → animate in new

### Skills Tab Switching
- `useState<SkillCategory>`: same pattern as projects
- Proficiency bar animation re-triggers on tab switch via `key` prop change

### Mobile Menu
- `useState<boolean>` for open/close
- Body scroll lock when open: `document.body.style.overflow = "hidden"`

### Contact Form
- `useState` for: name, email, subject, message, status ("idle" | "submitting" | "success" | "error")
- No backend — form uses mailto: link or Formspree (client-side only, can use `formspree.io` endpoint if desired, otherwise just mailto fallback)

### Scroll-Triggered Nav Background
- `useState<boolean>` for `scrolled`
- `useEffect` with scroll listener: `window.scrollY > window.innerHeight * 0.8` → set `scrolled`
- Apply `bg-[#0A0E17]/90 backdrop-blur-xl` class when scrolled

## Other Decisions

### Raw Three.js over React Three Fiber
The hero neural network is a single self-contained canvas with custom particle logic, mouse interaction, and connection rendering. Raw Three.js in a `useEffect` hook provides full control without R3F's declarative overhead. The canvas is isolated in `NeuralCanvas.tsx`.

### GSAP over Framer Motion
GSAP is chosen for: (1) ScrollTrigger for scroll-driven animations, (2) timeline sequencing for the page load, (3) more control over stagger and easing for the split-text effect. Framer Motion's `whileInView` is simpler but less precise for the orchestrated load sequence.

### No Backend
This is a static portfolio. Contact form uses a `mailto:` link or simple Formspree integration. No API routes needed.

### Image Strategy
Project card images are generated AI visuals. Use `object-fit: cover` in the card image area. Implement lazy loading with `loading="lazy"` and a dark placeholder background.

### shadcn/ui Usage
Minimal use of shadcn/ui components — this is a highly custom portfolio. Only `Button` and `Badge` variants may be used if they fit; otherwise custom components for full design control.
