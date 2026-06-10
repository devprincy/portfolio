# Deva Princy J — Portfolio

Full-stack portfolio built with **React.js** (frontend) + **Node.js/Express** (backend).

## Project Structure

```
portfolio/
├── frontend/          # React app
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Home.jsx
│       │   ├── About.jsx
│       │   ├── Projects.jsx
│       │   ├── Studies.jsx
│       │   ├── Contact.jsx
│       │   └── Footer.jsx
│       ├── hooks/
│       │   └── useInView.js
│       ├── App.jsx
│       ├── index.js
│       └── index.css
└── backend/           # Express API
    ├── server.js
    ├── .env
    └── package.json
```

## Setup & Run

### 1. Backend

```bash
cd backend
npm install
```

Edit `.env` and add your Gmail App Password:
```
EMAIL_USER=devaprincy2005@gmail.com
EMAIL_PASS=your_gmail_app_password
RECEIVER_EMAIL=devaprincy2005@gmail.com
```

> To get Gmail App Password: Google Account → Security → 2-Step Verification → App Passwords

```bash
npm run dev    # development
npm start      # production
```

Backend runs on: `http://localhost:5000`

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

> The `"proxy": "http://localhost:5000"` in frontend/package.json automatically forwards `/api` calls to the backend.

## Deploy to Vercel

### Frontend
1. Push `frontend/` folder to GitHub
2. Import on [vercel.com](https://vercel.com) → it auto-detects React
3. Deploy!

### Backend
1. Push `backend/` folder to a separate GitHub repo (or subfolder)
2. Import on Vercel → add Environment Variables (EMAIL_USER, EMAIL_PASS, etc.)
3. Update frontend's API URL to point to the deployed backend

## Features
- Responsive design (mobile-friendly)
- Smooth scroll navigation
- Scroll-triggered fade-in animations
- Contact form with real email delivery (Nodemailer + Gmail)
- Auto-reply email to sender
- Phone click → WhatsApp / Call modal
- Email click → Gmail / Web Mail modal
