# Vittal J G — Developer Portfolio

> A recruiter-focused personal portfolio showcasing full-stack development, database engineering, and applied machine learning projects.

**Live Portfolio:** _Add the deployed portfolio URL here._

---

## Overview

This portfolio is the central showcase for my software development work, designed to give recruiters and hiring teams a single place to explore the applications I have built.

Instead of linking to each project separately from my resume, the portfolio acts as a project hub where visitors can:

- Learn about my technical background and development focus
- Explore my flagship **EazyShop E-Commerce Platform**
- Inspect the **AI House Price Estimator**
- Preview the **Library Management System**
- Browse project screenshots directly through interactive galleries
- Visit live deployments and source repositories
- Learn more about my technical interests, education, and experience

The visual system uses a modern **Bento Grid** layout with subtle motion, responsive behavior, and a project-first presentation.

---

## Featured Projects

### 🛒 EazyShop — E-Commerce Platform

My flagship full-stack project.

EazyShop is a database-backed e-commerce application built with a React frontend and Django REST backend. It covers the core shopping lifecycle alongside administrative functionality.

#### Key areas covered

- User authentication
- Product catalogue
- Product details
- Shopping cart
- Wishlist
- Checkout
- Address management
- Orders and order history
- Reviews
- Gift cards
- Payments
- User dashboard
- Admin product management
- Admin category management
- Admin order management
- Admin user management
- Admin review management
- Admin audit logs

The portfolio includes an **interactive 23-image gallery** so visitors can inspect the application before opening the live project.

**Live Project:**  
https://django-react-ecommerce-platform.vercel.app

**GitHub:**  
https://github.com/Vittal-17/django-react-ecommerce-platform

---

### 🤖 AI House Price Estimator

An end-to-end machine learning application that predicts California house prices through a web interface.

The project evolved from model experimentation into a complete deployed application with a tuned Random Forest model, REST API, React frontend, versioned releases, and cloud deployment.

#### Machine Learning

- California Housing dataset
- Linear Regression baseline
- Decision Tree Regression
- Random Forest Regression
- Model comparison using MAE, RMSE and R²
- GridSearchCV hyperparameter tuning
- 5-fold cross-validation
- Feature importance analysis
- Final tuned Random Forest model
- Compressed model artifact for deployment

#### Final model

- Algorithm: Random Forest Regression
- `n_estimators = 200`
- `min_samples_leaf = 2`
- `random_state = 42`
- R²: approximately **0.8062**
- MAE: approximately **0.3261**
- RMSE: approximately **0.5040**

#### Application

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

#### Deployment

- Frontend: Vercel
- Backend: Render
- Public Swagger documentation

**Live App:**  
https://aihouseprice.vercel.app

**API:**  
https://aihouseprice.onrender.com

**Swagger Docs:**  
https://aihouseprice.onrender.com/docs

**GitHub:**  
https://github.com/Vittal-17/ai-house-price-estimator

The portfolio includes a project gallery covering the main interface, dataset view, and prediction result.

---

### 📚 Library Management System

A database-backed library management application focused on managing the complete library workflow.

The project combines user-facing functionality with administrative workflows.

#### Key areas covered

- Authentication
- Book catalogue
- Book details
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

## Portfolio Features

### 🧩 Bento Grid Design

The site uses a responsive Bento Grid layout to give important content different visual weights and make the portfolio easy to scan.

The flagship e-commerce project receives the largest visual area, while the AI and LMS projects are presented alongside supporting profile, skills, journey, and contact sections.

### 🖼️ Project Screenshot Galleries

Each major project can be explored directly inside the portfolio.

Current galleries:

- EazyShop: **23 screenshots**
- AI House Price Estimator: **3 screenshots**
- Library Management System: **12 screenshots**

Gallery features include:

- Previous / next navigation
- Screenshot counter
- Screenshot captions
- Keyboard navigation
- Neighboring-image preloading
- Responsive controls

### ✨ Motion & Interaction

The interface uses restrained motion to create a premium feel without distracting from the projects.

Examples include:

- Scroll-reveal animations
- Staggered Bento card entrances
- Staggered “Beyond Code” hobby animations
- Project image hover effects
- Gallery transitions
- Button hover states
- Responsive mobile navigation

Reduced-motion support is also included.

### 📱 Responsive Design

The layout adapts across desktop, tablet, and mobile devices.

On smaller screens:

- Navigation collapses into a hamburger menu
- Bento cards stack into a single-column layout
- Gallery controls remain touch-friendly
- Captions remain readable without hover

---

## Beyond Code

The portfolio also includes a small personal section to show the person behind the projects.

Interests include:

- 🎮 Gaming
- 🏋️ Gym / training
- 🎧 Music
- 🎌 Anime
- 📖 Reading
- 🧠 Learning new things

---

## About Me

I'm Vittal J G, a BCA developer interested in building practical software across:

- Full-stack web development
- Backend development
- SQL and relational databases
- REST APIs
- Machine learning
- Software engineering

I enjoy learning by building complete systems—from database design and API development to frontend interfaces and deployment.

---

## Technical Stack

### Portfolio Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Responsive layout and interaction design

### Full-Stack Projects

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

### Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Random Forest
- GridSearchCV
- Joblib

### Tools & Workflow

- Git
- GitHub
- GitHub Releases
- Vercel
- Render
- Postman
- VS Code

---

## Project Philosophy

Each featured project demonstrates a different part of my engineering journey:

| Project | What it demonstrates |
|---|---|
| **EazyShop** | Full-stack engineering, database-backed application design, REST APIs and e-commerce workflows |
| **AI House Price Estimator** | Machine learning, model evaluation, API development and cloud deployment |
| **Library Management System** | Database design, business workflows, reporting and administration |
| **Portfolio Website** | Frontend design, responsive UX, JavaScript interactions and project presentation |

---

## Local Development

This portfolio is intentionally lightweight and does not require a frontend framework or build system.

### Requirements

- Modern web browser
- Optional local static server

### Run locally

You can open `index.html` directly in a browser, or use a simple static server such as VS Code Live Server.

---

## Project Structure

```text
Portfolio/
├── images/
│   ├── aihouseprice/
│   │   ├── home.png
│   │   ├── predicted_price.png
│   │   └── sample_data_set.png
│   │
│   ├── eazyshop/
│   │   ├── eazyshop_home.png
│   │   ├── home_loggedin.png
│   │   ├── products.png
│   │   ├── product_details.png
│   │   ├── cart.png
│   │   ├── wishlist.png
│   │   ├── checkout1.png
│   │   ├── checkout2.png
│   │   ├── rzp1.png
│   │   ├── rzp2.png
│   │   ├── order_success.png
│   │   ├── gift_card.png
│   │   ├── login.png
│   │   ├── register.png
│   │   ├── user_profile.png
│   │   ├── user_dashboard.png
│   │   ├── admin_products1.png
│   │   ├── admin_products2.png
│   │   ├── admin_categories.png
│   │   ├── admin_orders.png
│   │   ├── admin_users.png
│   │   ├── admin_reviews.png
│   │   └── admin_logs.png
│   │
│   ├── lms/
│   │   ├── home.png
│   │   ├── Login.png
│   │   ├── book_catalog1.png
│   │   ├── book_catalog2.png
│   │   ├── book_details1.png
│   │   ├── book_details2.png
│   │   ├── book_reservations.png
│   │   ├── borrowed_books.png
│   │   ├── fines.png
│   │   ├── admin_addnewbook.png
│   │   ├── admin_members.png
│   │   └── admin_reports.png
│   │
│   └── pfpisha.png
│
├── index.html
├── styles.css
├── package.json
└── README.md
```

---

## Deployment

This portfolio is a static site, so it can be deployed directly to platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

The portfolio itself does not require a backend server.

The individual projects use their own deployment infrastructure.

### Current project deployments

**EazyShop:**  
https://django-react-ecommerce-platform.vercel.app

**AI House Price Estimator frontend:**  
https://aihouseprice.vercel.app

**AI House Price Estimator API:**  
https://aihouseprice.onrender.com

**AI House Price Estimator Swagger:**  
https://aihouseprice.onrender.com/docs

---

## Future Improvements

Planned improvements include:

- Add a downloadable résumé
- Add dedicated project case-study pages
- Add richer project metrics and engineering highlights
- Add project-specific GitHub links wherever available
- Add richer screenshots and demo media
- Improve accessibility further
- Add a custom domain
- Add analytics after deployment
- Continue refining the Bento layout and micro-interactions

---

## Contact

**Vittal J G**

GitHub:  
https://github.com/Vittal-17

Instagram:  
https://www.instagram.com/it.is._v/

Based in Bengaluru, India.

---

## License

This portfolio is intended as a personal portfolio and project showcase.

The code can be used as a learning reference. Project screenshots, branding, personal information, and project-specific assets are personal/project-specific and should not be redistributed without permission.
