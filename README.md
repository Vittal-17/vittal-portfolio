# Vittal J G — Full-Stack Engineer Portfolio

> A recruiter-focused personal portfolio showcasing production web applications, AI systems, applied machine learning, and database-backed software projects.

**Live Portfolio:** https://vittal-dev.vercel.app/

---

## Overview

This portfolio is the central showcase for my software engineering work, designed to give recruiters and hiring teams a clear view of the systems I build.

The portfolio presents my work by **engineering depth**—from document-grounded AI retrieval systems and production full-stack applications to applied machine learning and database-backed workflow software.

Visitors can:

- Learn about my engineering background and current focus
- Explore **CYPHR**, a document-grounded RAG platform
- Inspect the **EazyShop** production full-stack commerce platform
- Explore the **AI House Price Estimator**
- Preview the **Library Management System**
- Browse interactive project screenshot galleries
- Visit live deployments, API documentation, and source repositories
- Access my résumé directly

The site uses a responsive **Bento Grid** layout, restrained motion, interactive galleries, and accessibility improvements to create a project-first recruiter experience.

---

# Featured Projects

## 🧠 CYPHR — Document-Grounded RAG Platform

### Flagship · AI Systems

CYPHR is a retrieval-augmented chat platform designed to answer questions **strictly from documents uploaded by the user**.

PDF documents are extracted, chunked, embedded, and indexed for vector retrieval. Answers are grounded in the uploaded knowledge base and include source provenance, including the relevant source file and page.

### Engineering Highlights

#### Document ingestion
- PDF upload workflow
- Text extraction
- Chunked document passages
- Embedded passages for semantic retrieval

#### Retrieval
- MongoDB Atlas Vector Search
- `$vectorSearch`
- Jina Embeddings v3
- Document-grounded semantic retrieval

#### AI models
- Six configurable LLM providers
- Runtime model/provider selection
- Retrieval-augmented answer generation

#### Security
- Google OAuth
- Per-user tenant isolation
- CSRF protection
- Origin validation
- Tiered rate limits

### Quality
- **125 automated tests**
- Security and regression coverage
- Current release: **v0.1.0**

### Stack
- FastAPI
- React
- MongoDB Atlas
- Vector Search
- RAG
- Jina Embeddings

### Screenshot Gallery

The portfolio includes a **14-image gallery** covering both dark and light themes:

- Grounded answers with citations
- Indexed-document workspace
- Knowledge base and PDF ingestion
- Empty document states
- Login and registration
- Backend wake-up/loading states

**Live Project:** https://cyphr-rag.vercel.app/

**GitHub:** https://github.com/Vittal-17/CYPHR-RAG

> Note: The backend may sleep when idle, so the first request can take a moment while it wakes up.

---

## 🛒 EazyShop — Production Full-Stack Commerce Platform

### Production Full-Stack

EazyShop is a database-backed **Django REST + React** commerce platform covering the complete shopping lifecycle alongside administrative workflows.

### Customer functionality
- Authentication
- Product catalogue
- Product details
- Shopping cart
- Wishlist
- Checkout
- Payments
- Address management
- Orders and order history
- Reviews
- Gift cards
- User dashboard

### Administration
- Product management
- Category management
- Order management
- User management
- Review management
- Audit logging

The portfolio includes an **interactive 23-image gallery** so visitors can inspect the application before opening the live project.

**Live Project:** https://django-react-ecommerce-platform.vercel.app/

**GitHub:** https://github.com/Vittal-17/django-react-ecommerce-platform

---

## 🤖 AI House Price Estimator

### Applied Machine Learning

An end-to-end machine learning application that predicts California house prices through a web interface.

The project evolved from model experimentation into a complete deployed system with model evaluation, hyperparameter tuning, a REST API, a React frontend, and cloud deployment.

### Machine Learning
- California Housing dataset
- Linear Regression baseline
- Decision Tree Regression
- Random Forest Regression
- Model comparison using MAE, RMSE, and R²
- GridSearchCV hyperparameter tuning
- 5-fold cross-validation
- Feature importance analysis
- Final tuned Random Forest model

### Final Model
- Algorithm: Random Forest Regression
- `n_estimators = 200`
- `min_samples_leaf = 2`
- `random_state = 42`
- R²: approximately **0.8062**
- MAE: approximately **0.3261**
- RMSE: approximately **0.5040**

### Application
- React + Vite frontend
- Tailwind CSS
- FastAPI backend
- Axios API communication
- Animated prediction result
- Demo mode
- Prediction history
- Toast notifications
- Responsive UI
- Swagger API documentation

**Live App:** https://aihouseprice.vercel.app/

**API:** https://aihouseprice.onrender.com/

**Swagger Docs:** https://aihouseprice.onrender.com/docs

**GitHub:** https://github.com/Vittal-17/ai-house-price-estimator

---

## 📚 Library Management System

### Full-Stack Application

A database-backed library management application focused on managing the complete library workflow.

### Key Areas
- Authentication
- Book catalogue and details
- Reservations
- Borrowed books
- Fines and overdue tracking
- Member management
- Adding new books
- Administrative reports
- Database-backed management workflows

The portfolio includes a **12-image gallery** showing the current application state.

**Status:** In development
**Deployment:** Coming soon

---

# Portfolio Features

## 🧩 Engineering-First Bento Grid

The site uses a responsive Bento Grid layout to give projects different visual weights based on engineering depth.

The portfolio is structured around:

1. **CYPHR** — Retrieval engineering and AI systems
2. **EazyShop** — Production full-stack commerce
3. **AI House Price Estimator** — Applied machine learning
4. **Library Management System** — Database-backed application workflows

Supporting cards provide a quick profile, technical focus, skills, development journey, and personal interests.

---

## 🖼️ Interactive Project Galleries

### Current galleries
- CYPHR: **14 screenshots**
- EazyShop: **23 screenshots**
- AI House Price Estimator: **3 screenshots**
- Library Management System: **12 screenshots**

### Gallery features
- Previous and next navigation
- Screenshot counters
- Contextual captions
- Keyboard navigation
- Neighboring-image preloading
- Responsive controls
- Accessible live announcements for screenshot changes
- Descriptive image alt text
- Dark/light theme labels for CYPHR screenshots

---

## ♿ Accessibility

The portfolio includes:

- Skip-to-content navigation
- Keyboard-accessible galleries
- Left and right arrow-key screenshot navigation
- Escape-key support for the mobile menu
- Accessible mobile navigation state
- Live regions for gallery changes
- Improved image descriptions
- Reduced-motion support

---

## ✨ Motion & Interaction

The interface uses restrained motion without distracting from the projects.

- Scroll-reveal animations
- Staggered Bento card entrances
- Project image hover effects
- Gallery transitions
- Button hover states
- Responsive mobile navigation
- Reduced-motion support

---

# At a Glance

| | |
|---|---|
| **Role** | Full-Stack Engineer |
| **Location** | Bengaluru, India |
| **Focus** | Full-stack systems + AI |
| **Education** | BCA — Computer Applications |

---

# Beyond Code

- 🎮 Gaming
- 🏋️ Gym / training
- 🎧 Music
- 🎌 Anime
- 📖 Reading
- 🧠 Always learning

---

# About Me

I'm **Vittal J G**, a Full-Stack Engineer focused on building complete software systems.

> **Database → API → Interface → Deployment**

My work spans:

- Production full-stack web applications
- Backend systems and REST APIs
- SQL and database-backed workflows
- Document-grounded AI systems
- Retrieval-augmented generation
- Applied machine learning
- Cloud deployment and production workflows

I learn best by building complete systems rather than isolated demos—from database design and backend APIs to frontend interfaces, security, testing, and deployment.

---

# Technical Stack

## Portfolio
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts

## Full-Stack Engineering
- Python
- Django
- Django REST Framework
- React
- FastAPI
- REST APIs
- MySQL
- PostgreSQL
- SQL
- Tailwind CSS

## AI & Retrieval Systems
- Retrieval-Augmented Generation (RAG)
- MongoDB Atlas
- Vector Search
- Jina Embeddings
- LLM integrations
- Document ingestion pipelines

## Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- Random Forest
- GridSearchCV
- Joblib

## Tools & Workflow
- Git
- GitHub
- Vercel
- Render
- Postman
- VS Code

---

# Project Philosophy

| Project | What it demonstrates |
|---|---|
| **CYPHR** | Retrieval engineering, RAG architecture, vector search, document ingestion, AI integrations, security, and automated testing |
| **EazyShop** | Production full-stack engineering, database-backed design, REST APIs, payments, administration, and audit workflows |
| **AI House Price Estimator** | Applied machine learning, model evaluation, API development, frontend integration, and cloud deployment |
| **Library Management System** | Database design, business workflows, reporting, and administration |
| **Portfolio Website** | Frontend engineering, responsive UX, accessibility, JavaScript interactions, and project presentation |

---

# Local Development

This portfolio is intentionally lightweight and does not require a frontend framework or build system.

## Requirements
- Modern web browser
- Optional local static server

## Run Locally

```bash
git clone https://github.com/Vittal-17/vittal-portfolio.git
cd vittal-portfolio
```

Open `index.html` directly in a browser, or use a local static server such as VS Code Live Server.

---

# Project Structure

```text
vittal-portfolio/
├── images/
│   ├── cyphr/
│   │   ├── dark/
│   │   └── light/
│   ├── aihouseprice/
│   ├── eazyshop/
│   ├── lms/
│   └── pfpisha.png
├── index.html
├── styles.css
├── package.json
└── README.md
```

---

# Deployment

This portfolio is a static website and can be deployed directly to:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

The portfolio itself does not require a backend server.

## Current Deployments

**Portfolio:** https://vittal-dev.vercel.app/

**CYPHR:** https://cyphr-rag.vercel.app/

**EazyShop:** https://django-react-ecommerce-platform.vercel.app/

**AI House Price Estimator Frontend:** https://aihouseprice.vercel.app/

**AI House Price Estimator API:** https://aihouseprice.onrender.com/

**AI House Price Estimator Swagger:** https://aihouseprice.onrender.com/docs

---

# Contact

**Vittal J G**

**Email:** vitthaljg@gmail.com

**GitHub:** https://github.com/Vittal-17

**Instagram:** https://www.instagram.com/it.is._v/

**Location:** Bengaluru, India

**Résumé:** Available directly from the live portfolio.

---

# License

This repository contains my personal portfolio and project showcase.

The code may be used as a learning reference. Personal information, project screenshots, branding, and project-specific assets should not be redistributed or represented as your own without permission.
