# 🌍 WeCoded 2026: Breaking Barriers Through Perspective

A high-performance, interactive 3D web experience built for the **[2026 WeCoded Gender Equity Challenge](https://dev.to/challenges/wecoded-2026)**. This project utilizes immersive technology to dismantle professional stereotypes, demonstrating that talent, intellect, and courage have no gender.

<img width="1680" height="814" alt="Screenshot 2026-03-27 at 6 19 27 PM" src="https://github.com/user-attachments/assets/fef4ef0e-610f-4132-be58-62468c59335e" />


## 🚀 The Vision

The "Gender Equity" project is an interactive gallery of 10 essential professions. By placing male and female avatars side-by-side in identical professional gear—ranging from **Software Engineering** to **Firefighting**—the application visually reinforces that professional capability is a universal human trait.

Each profession features a detailed narrative and historical icons (both male and female) who pioneered their respective fields, bridging the gap between historical legacy and future potential.

---

## 🛠️ Tech Stack

This project leverages a "production-ready" modern web stack for maximum performance and visual fidelity:

- **Framework:** [Next.js 16.2](https://nextjs.org/) (App Router)
- **3D Engine:** [Three.js](https://threejs.org/) via [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## ✨ Key Features

### 1\. Immersive 3D Visualization

Using **Three.js**, the app renders high-quality male and female avatars. Users can interact with the scene, observing how professional identity is uniform regardless of gender.

### 2\. Interactive Profession Meta-Data

A curated list of 10 professions (Doctor, Engineer, Pilot, etc.) provides:

- **Empowering Descriptions:** Focused on skill, grit, and intellect.
- **Historical Context:** Spotlighting male and female trail-blazers like **Ada Lovelace** and **Alan Turing**.

### 3\. Fluid UI/UX

Integrated with **Framer Motion** for seamless transitions between profession data and **Lucide React** for a clean, modern interface.

### 4\. Scalable Architecture

Built with **Redux Toolkit** to manage global states (like the currently selected profession/outfit) and **TypeScript** for robust, error-free development.

---

## 📂 Project Structure

```text
├── public/                 # Static assets (3D .glb models, textures, branding)
├── src/
│   ├── app/                # Next.js App Router (Layouts and Main Entry)
│   ├── components/         # React components (UI & R3F Canvas logic)
│   ├── constants/          # Global constants and configuration strings
│   ├── contexts/           # React Contexts for local state/theme management
│   ├── json/               # Profession metadata and descriptive content
│   ├── pages/              # (If applicable) Legacy routes or specific API routes
│   ├── store/              # Redux Toolkit (Slices, Store configuration)
│   └── types/              # TypeScript interfaces and type definitions
├── next.config.ts          # next configuration
├── tsconfig.json           # ts configuration
└── package.json            # Project dependencies and scripts
```

---

## ⚙️ Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

---

## 📖 Featured Professions

The application showcases 10 diverse fields where professional excellence is defined by skill and dedication, not gender.

| Profession            | Key Highlight                                                        | Male & Female Pioneers                      |
| :-------------------- | :------------------------------------------------------------------- | :------------------------------------------ |
| **Journalist**        | Investigating complex issues and shaping the public narrative.       | James Baldwin & Nellie Bly                  |
| **Farmer**            | Mastering agricultural science and global food security.             | George Washington Carver & Karen Washington |
| **Firefighter**       | Bravery, rapid response, and specialized technical rescue.           | Patrick Hardison & Molly Williams           |
| **Software Engineer** | Architecture of digital systems and logical problem-solving.         | Alan Turing & Ada Lovelace                  |
| **Mechanic**          | Technical mastery of machinery and precision engineering.            | Henry Ford & Patrice Banks                  |
| **Nurse**             | Clinical expertise and advanced medical patient advocacy.            | James Derham & Florence Nightingale         |
| **Pilot**             | Technical precision and navigation of complex flight systems.        | Charles Lindbergh & Amelia Earhart          |
| **Police Officer**    | Public safety through de-escalation and high emotional intelligence. | August Vollmer & Alice Stebbins Wells       |
| **Retail Sales**      | Interpersonal communication and global business operations.          | Marshall Field & Madam C.J. Walker          |
| **Doctor**            | Leadership in medical science and the rigorous art of healing.       | Dr. Jonas Salk & Dr. Elizabeth Blackwell    |

---

## 🤝 Contribution

This project was developed for the **2026 WeCoded Challenge**. Feedback and suggestions to improve the 3D models or expand the profession list are welcome\!

**Designed & Developed by UsmanDevCraft**

---
