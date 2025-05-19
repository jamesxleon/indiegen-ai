# James - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my work, skills, and journey as a Kichwa-born builder of intelligent systems.

## 🚀 Features

- **Modern UI/UX** - Clean, responsive design with smooth animations
- **Performance Optimized** - Built with Next.js for optimal performance
- **Interactive Elements** - Engaging animations with Framer Motion
- **3D Background** - Custom Three.js particle effect background
- **Responsive Design** - Works on all device sizes
- **Accessible** - Built with accessibility in mind

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Type Safety**: TypeScript
- **Form Handling**: React Hook Form
- **Icons**: Lucide Icons
- **Linting & Formatting**: ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/indiegen-ai.git
   cd indiegen-ai
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Project Structure

```
indiegen-ai/
├── src/
│   ├── app/                  # Next.js 13+ app directory
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # Reusable components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Craft.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Roots.tsx
│   │   └── ThreeDust.tsx
│   └── config/
│       └── site.ts          # Site configuration and content
├── public/                   # Static files
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies and scripts
```

## 🎨 Customization

### Colors

You can customize the color scheme by editing the `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: "#f7f8f9",
        text: "#1b1b1b",
        neon: {
          cyan: "#00eaff",
          DEFAULT: "#00eaff",
        },
        inti: {
          gold: "#ffb600",
          DEFAULT: "#ffb600",
        },
        // ... other colors
      },
    },
  },
};
```

### Content

Update the content in `src/config/site.ts` to customize:
- Site metadata
- Navigation items
- Skills
- Projects
- Timeline events

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern web design trends
- Built with amazing open-source libraries
- Special thanks to the Next.js and React communities
