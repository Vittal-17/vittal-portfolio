export type GalleryItem = {
  src: string;
  label: string;
  theme?: "Light" | "Dark";
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "github" | "api" | "docs";
};

export type Metric = { label: string; value: string };

export type Project = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge?: string;
  status?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  metrics?: Metric[];
  links: ProjectLink[];
  gallery: GalleryItem[];
};

const cyphrShots = [
  ["1_registration_page", "Registration"],
  ["2_login_page", "Login"],
  ["3_auth_loader", "Backend wake-up / auth loader"],
  ["4_first_chat", "Empty workspace"],
  ["5_knowledge_base", "Knowledge base & PDF ingestion"],
  ["6_chat_response", "Grounded answer with citations"],
  ["7_new_chat", "New chat session"],
] as const;

const cyphrGallery: GalleryItem[] = [
  ...cyphrShots.map(([f, label]) => ({ src: `/images/cyphr/light/${f}.png`, label, theme: "Light" as const })),
  ...cyphrShots.map(([f, label]) => ({ src: `/images/cyphr/dark/${f}.png`, label, theme: "Dark" as const })),
];

const eazyshopGallery: GalleryItem[] = [
  ["eazyshop_home", "Storefront home"],
  ["home_loggedin", "Home — signed in"],
  ["products", "Product catalogue"],
  ["product_details", "Product details"],
  ["cart", "Shopping cart"],
  ["wishlist", "Wishlist"],
  ["checkout1", "Checkout — shipping"],
  ["checkout2", "Checkout — review"],
  ["rzp1", "Razorpay payment"],
  ["rzp2", "Payment confirmation"],
  ["order_success", "Order success"],
  ["gift_card", "Gift cards"],
  ["user_dashboard", "User dashboard"],
  ["user_profile", "User profile"],
  ["login", "Login"],
  ["register", "Register"],
  ["admin_products1", "Admin — products"],
  ["admin_products2", "Admin — product edit"],
  ["admin_categories", "Admin — categories"],
  ["admin_orders", "Admin — orders"],
  ["admin_users", "Admin — users"],
  ["admin_reviews", "Admin — reviews"],
  ["admin_logs", "Admin — audit logs"],
].map(([f, label]) => ({ src: `/images/eazyshop/${f}.png`, label }));

const aiHouseGallery: GalleryItem[] = [
  ["home", "Estimator home"],
  ["sample_data_set", "Sample dataset"],
  ["predicted_price", "Predicted price"],
].map(([f, label]) => ({ src: `/images/aihouseprice/${f}.png`, label }));

const kryptonGallery: GalleryItem[] = [
  ["01_hero_homepage", "Hero"],
  ["02_engineering_capability_system_online", "Engineering capability"],
  ["03_services_ai_rag_systems", "Services — AI & RAG"],
  ["04_services_workflow_automation", "Services — workflow automation"],
  ["05_work_rag_semantic_architecture", "Work — RAG architecture"],
  ["06_work_rag_context_resolved", "Work — context resolved"],
  ["07_work_cards_automation_dashboard", "Work — automation dashboard"],
  ["08_manifesto_technology_decisions", "Manifesto — technology decisions"],
  ["09_manifesto_engineering_first", "Manifesto — engineering first"],
  ["10_manifesto_built_around_problem", "Manifesto — built around the problem"],
  ["11_manifesto_production_minded", "Manifesto — production-minded"],
  ["12_process_how_we_build", "Process — how we build"],
  ["13_process_step_01_discover", "Process — discover"],
  ["14_process_step_02_architect", "Process — architect"],
  ["15_process_step_03_make_it_real", "Process — make it real"],
  ["16_process_step_04_validate", "Process — validate"],
  ["17_process_step_05_ship", "Process — ship"],
  ["18_tech_stack_radar", "Tech stack radar"],
  ["19_tech_machine_makes_no_choices", "Tech — philosophy"],
  ["20_tech_before_it_is_a_system", "Tech — systems thinking"],
  ["21_contact_what_should_we_build", "Contact"],
  ["22_footer_end_of_system", "Footer"],
].map(([f, label]) => ({ src: `/images/krypton/${f}.png`, label }));

const lmsGallery: GalleryItem[] = [
  ["home", "Home"],
  ["Login", "Login"],
  ["book_catalog1", "Book catalogue"],
  ["book_catalog2", "Catalogue — browse"],
  ["book_details1", "Book details"],
  ["book_details2", "Book details — availability"],
  ["book_reservations", "Reservations"],
  ["borrowed_books", "Borrowed books"],
  ["fines", "Fines & overdue"],
  ["admin_members", "Admin — members"],
  ["admin_addnewbook", "Admin — add book"],
  ["admin_reports", "Admin — reports"],
].map(([f, label]) => ({ src: `/images/lms/${f}.png`, label }));

export const PROJECTS: Project[] = [
  {
    id: "cyphr",
    name: "CYPHR",
    tagline: "Document-grounded RAG platform",
    category: "AI Systems",
    badge: "Flagship",
    summary:
      "A retrieval-augmented chat platform that answers strictly from documents the user uploads. PDFs are extracted, chunked, embedded and indexed for vector retrieval, so every answer is grounded in the knowledge base and cites its source file and page.",
    highlights: [
      "MongoDB Atlas Vector Search with $vectorSearch over Jina Embeddings v3",
      "Six configurable LLM providers with runtime model selection",
      "Google OAuth, per-user tenant isolation, CSRF & origin validation",
      "Tiered rate limits and 125 automated security / regression tests",
    ],
    stack: ["FastAPI", "React", "MongoDB Atlas", "Vector Search", "RAG", "Jina Embeddings"],
    metrics: [
      { label: "Automated tests", value: "125" },
      { label: "Release", value: "v0.1.0" },
      { label: "LLM providers", value: "6" },
    ],
    links: [
      { label: "Live", href: "https://cyphr-rag.vercel.app/", kind: "live" },
      { label: "GitHub", href: "https://github.com/Vittal-17/CYPHR-RAG", kind: "github" },
    ],
    gallery: cyphrGallery,
  },
  {
    id: "eazyshop",
    name: "EazyShop",
    tagline: "Production full-stack commerce platform",
    category: "Full-Stack",
    summary:
      "A database-backed Django REST + React commerce platform covering the complete shopping lifecycle alongside administrative workflows — from catalogue and cart to payments, orders and audit logging.",
    highlights: [
      "Catalogue, cart, wishlist, checkout, payments, orders, reviews & gift cards",
      "Razorpay payment flow with order confirmation and history",
      "Admin suite: products, categories, orders, users and review management",
      "Audit logging across administrative actions",
    ],
    stack: ["Django", "Django REST", "React", "PostgreSQL", "Razorpay"],
    metrics: [
      { label: "Screens", value: "23" },
      { label: "Surfaces", value: "Store + Admin" },
    ],
    links: [
      { label: "Live", href: "https://django-react-ecommerce-platform.vercel.app/", kind: "live" },
      { label: "GitHub", href: "https://github.com/Vittal-17/django-react-ecommerce-platform", kind: "github" },
    ],
    gallery: eazyshopGallery,
  },
  {
    id: "krypton",
    name: "KRYPTON",
    tagline: "Production agency site — motion & systems design",
    category: "Design Engineering",
    summary:
      "A high-craft Next.js 16 agency site built around a systems-design narrative: cinematic GSAP + Lenis motion, a WebGL tech-stack radar, and a process story that moves from discovery to ship.",
    highlights: [
      "Cinematic scroll choreography with GSAP ScrollTrigger and Lenis",
      "WebGL visuals rendered with OGL for a lightweight footprint",
      "Narrative sections: capability, services, work, manifesto, process",
      "Production-minded, motion-first marketing experience",
    ],
    stack: ["Next.js 16", "React 19", "GSAP", "Lenis", "OGL", "Tailwind v4"],
    metrics: [
      { label: "Screens", value: "22" },
      { label: "Process steps", value: "5" },
    ],
    links: [
      { label: "Live", href: "https://krypton-site.vercel.app/", kind: "live" },
      { label: "GitHub", href: "https://github.com/Vittal-17/Krypton", kind: "github" },
    ],
    gallery: kryptonGallery,
  },
  {
    id: "aihouseprice",
    name: "AI House Price Estimator",
    tagline: "End-to-end applied machine learning",
    category: "Machine Learning",
    summary:
      "An end-to-end ML application that predicts California house prices through a web interface — evolving from model experimentation into a deployed system with a REST API, React frontend and cloud hosting.",
    highlights: [
      "Linear, Decision Tree and Random Forest regression compared on MAE / RMSE / R²",
      "GridSearchCV hyperparameter tuning with 5-fold cross-validation",
      "Feature-importance analysis and a final tuned Random Forest",
      "FastAPI backend, React + Vite frontend, Swagger API docs",
    ],
    stack: ["FastAPI", "React", "Vite", "scikit-learn", "Pandas", "NumPy"],
    metrics: [
      { label: "R²", value: "0.806" },
      { label: "MAE", value: "0.326" },
      { label: "RMSE", value: "0.504" },
    ],
    links: [
      { label: "Live", href: "https://aihouseprice.vercel.app/", kind: "live" },
      { label: "API", href: "https://aihouseprice.onrender.com/", kind: "api" },
      { label: "Swagger", href: "https://aihouseprice.onrender.com/docs", kind: "docs" },
      { label: "GitHub", href: "https://github.com/Vittal-17/ai-house-price-estimator", kind: "github" },
    ],
    gallery: aiHouseGallery,
  },
  {
    id: "lms",
    name: "Library Management System",
    tagline: "Database-backed library workflow",
    category: "Full-Stack",
    status: "In development",
    summary:
      "A database-backed application for the complete library workflow — catalogue, reservations, borrowing, fines and overdue tracking, member management and administrative reporting.",
    highlights: [
      "Book catalogue, details and availability",
      "Reservations, borrowed books and fines / overdue tracking",
      "Member management and new-book intake",
      "Administrative reports over library activity",
    ],
    stack: ["React", "REST API", "Relational DB"],
    links: [],
    gallery: lmsGallery,
  },
];
