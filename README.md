# 🚀 Alex Morgan — Developer Portfolio

A modern, premium dark-theme developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **Dark theme** with blue gradient accents
- **Framer Motion** animations — fade-ins, stagger, scroll reveals, hover effects
- **Glassmorphism** UI cards with subtle borders and glows
- **Fully responsive** — mobile-first design
- **Smooth scrolling** navigation with active link highlighting
- **Loading screen** animation
- **Scroll-to-top** button
- **Toast notifications** on form submit
- **Contact form** with validation

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Loader.js
│   │   ├── Toast.js
│   │   ├── ScrollToTop.js
│   │   └── SectionHeader.js
│   ├── hooks/
│   │   └── useInView.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🛠️ Setup & Run

### Prerequisites
- Node.js v16+ and npm installed

### Installation

```bash
# 1. Navigate to the portfolio folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

---

## 🎨 Customization

### Update your info
Edit the data arrays inside each component:

| Component | What to update |
|-----------|---------------|
| `Hero.js` | Name, title, tagline, social links |
| `About.js` | Bio, stats, traits |
| `Education.js` | Degrees, institutions, years |
| `Experience.js` | Companies, roles, achievements |
| `Skills.js` | Skills and proficiency levels |
| `Contact.js` | Contact info |
| `Footer.js` | Email, social links |

### Change colors
Edit `tailwind.config.js` to update the color palette.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | Core framework |
| framer-motion | ^11.0.0 | Animations |
| react-icons | ^5.0.0 | Icon library |
| tailwindcss | (via CRA) | Styling |

---

## 📄 License

MIT — free to use for personal and commercial projects.
