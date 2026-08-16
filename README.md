# Dr. Jens Kohl - Personal Portfolio & Academic Webpage

A modern, responsive, and dynamic personal portfolio website for **Dr. Jens Kohl**, showcasing professional experience, academic publications, cloud & GenAI engineering projects, and research contributions.

Hosted on GitHub Pages at: [https://jenskohl.github.io/JensWebPage/](https://jenskohl.github.io/JensWebPage/)

---

## 📖 Content & Features

The site serves as a central hub for professional and academic presence:

- **Profile Sidebar**: Quick introduction, contact details, social/academic links (LinkedIn, GitHub, Google Scholar, Credly), and a privacy-friendly live visitor impression counter.
- **About Me**: In-depth personal bio and technical background rendered dynamically from Markdown (`public/docs/aboutMe.md`).
- **Selected Projects**: Showcase of key projects spanning LLM-based agent testing, cloud incident root-cause analysis, Generative AI toolkits, enterprise cloud governance & migration, and automotive embedded systems.
- **Publications**: List of academic papers, peer-reviewed conference publications, and articles rendered dynamically from Markdown (`public/docs/Publications.md`).
- **Resume**: Professional timeline, roles, and milestones.
- **Contact & Socials**: Direct links to communication channels and platforms.
- **Legal & Privacy (Impressum / Datenschutz)**: GDPR-compliant privacy disclosures and provider legal information.

---

## 🛠️ Technology Stack & Frameworks

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 7](https://vite.dev/) with `@vitejs/plugin-react`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` and `@tailwindcss/typography`
- **Markdown Processing**: [React Markdown](https://github.com/remarkjs/react-markdown) for dynamic, component-styled markdown rendering
- **Icons & Visuals**: [FontAwesome](https://fontawesome.com/) (`@fortawesome/react-fontawesome`) and [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Linting & Code Quality**: [ESLint](https://eslint.org/) & [Biome](https://biomejs.dev/)
- **Analytics & Tracking**: [CounterAPI](https://counterapi.dev/) (privacy-friendly visitor count) and `react-ga4`
- **Deployment**: [gh-pages](https://github.com/tschaub/gh-pages) for automated GitHub Pages hosting

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/JensKohl/JensWebPage.git

# Navigate to project root
cd JensWebPage

# Install dependencies
npm install
```

---

## 💻 Development Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles TypeScript (`tsc -b`) and bundles the application for production into `dist/` |
| `npm run preview` | Locally previews the production build from `dist/` |
| `npm run lint` | Runs ESLint across the codebase |
| `npm run deploy` | Runs `predeploy` (builds the project) and publishes the `dist/` folder to GitHub Pages |

---

## 📦 Deployment to GitHub Pages

The project is configured with `base: "/JensWebPage/"` in `vite.config.ts`. To deploy updates to GitHub Pages, run:

```bash
npm run deploy
```

This will automatically trigger `npm run build` and push the generated `dist/` directory to the `gh-pages` branch.
