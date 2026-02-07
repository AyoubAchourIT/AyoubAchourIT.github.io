const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dict = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",

    hero_kicker: "AI • Data Science • Optimization • HPC • Quant Finance",
    hero_title: "Building reliable ML systems and math-driven solutions for real-world decisions.",
    hero_sub: "Engineering student (ISIMA) with strong applied math background (UCA). Interested in model validation, risk, and scalable ML.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Contact",
    hero_link_linkedin: "LinkedIn",
    hero_link_github: "GitHub",
    hero_link_cv: "CV (PDF)",
    hero_note: "Based in France • Open to internships / opportunities in AI, Quant, Model Risk / Validation",

    quick_title: "Quick profile",
    quick_1: "Focus: ML pipelines, optimization, time-series, risk/finance applications",
    quick_2: "Stack: Python, C++, SQL, scikit-learn, XGBoost, FastAPI",
    quick_3: "Tools: Git, Linux, Docker (basics), HPC/GPU exposure (CUDA/OpenMP)",
    quick_4: "Interests: Model validation, FICC, stochastic calculus, R/SAS",

    about_title: "About",
    about_p1: "I am an engineering student specializing in Data Science, Optimization and AI. I enjoy bridging mathematical modeling and practical ML engineering to deliver robust solutions.",
    about_p2: "My interests span scalable ML, optimization, and quantitative finance (risk, model validation, derivatives). I care about credibility: reproducible experiments, clean code, and clear evaluation.",

    skills_title: "Skills",
    skills_ai_title: "AI & Data Science",
    skills_ai_txt: "Supervised ML, feature engineering, model evaluation, imbalance handling, interpretability.",
    skills_opt_title: "Optimization",
    skills_opt_txt: "Convex optimization, ADMM/ISTA/FISTA, non-linear programming basics, OR/transport problems.",
    skills_hpc_title: "HPC & Software",
    skills_hpc_txt: "Performance mindset, parallel computing exposure, numerical linear algebra, APIs and deployment.",
    skills_fin_title: "Finance & Quant",
    skills_fin_txt: "Time-series forecasting interest, risk/validation mindset, stochastic calculus foundations.",

    exp_title: "Experience",
    exp1_title: "AI Engineer Intern — Fraud Detection (Cards)",
    exp1_meta: "Apr–Aug 2025 • Afsol (France)",
    exp1_b1: "Built end-to-end ML pipeline on 248k+ real transactions (data cleaning → features → training → evaluation).",
    exp1_b2: "Benchmarked models (RF, XGBoost/CatBoost) and deployed an API with FastAPI.",
    exp1_b3: "Focused on interpretability, monitoring-ready structure, and reproducibility.",

    exp2_title: "GPU Numerical Linear Algebra Project",
    exp2_meta: "Feb–Mar 2025 • Academic project",
    exp2_b1: "Implemented eigenvalue computations for many small matrices with CUDA (Householder + QL approach).",
    exp2_b2: "Explored performance trade-offs and GPU/CPU considerations.",

    proj_title: "Projects",
    p1_title: "Financial Time-Series Forecasting (Hackathon / Industry)",
    p1_txt: "Feature-based forecasting with technical indicators; exploring ARIMA vs deep learning baselines; multi-step horizon evaluation.",
    p2_title: "AI Tutor Agent (RAG + Energy Awareness)",
    p2_txt: "Document-grounded Q&A system with evaluation and energy estimation (CodeCarbon), focusing on performance vs sobriety.",
    p3_title: "Optimization Labs (Convex & Non-Linear)",
    p3_txt: "Hands-on implementations: LASSO via ADMM, ISTA/FISTA, SQP basics and constrained optimization exercises.",
    proj_note: "Tip: add links to repos/notebooks once you publish them (GitHub, papers, slides).",

    edu_title: "Education",
    edu1_title: "Engineering Degree — ISIMA (Clermont Auvergne INP)",
    edu1_meta: "Specialization: Data Science, Optimization & AI",
    edu1_txt: "Key topics: machine learning, optimization, numerical simulation, parallel computing exposure (CUDA/OpenMP).",
    edu2_title: "Applied Mathematics & Statistics — Université Clermont Auvergne (UCA)",
    edu2_meta: "Applied math foundations",
    edu2_txt: "Probability, statistics, stochastic processes, mathematical modeling; tools: R, SAS.",
    edu3_title: "CPGE (MPSI/MP) — Intensive Preparatory Classes",
    edu3_txt: "Strong background in mathematics and physics; rigorous problem-solving culture.",

    contact_title: "Contact",
    contact_txt: "Feel free to reach out for internships, research collaborations or quant/ML discussions.",
    contact_email: "Email me",
    contact_linkedin: "LinkedIn",
    contact_github: "GitHub"
  },

  fr: {
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_experience: "Expérience",
    nav_projects: "Projets",
    nav_education: "Formation",
    nav_contact: "Contact",

    hero_kicker: "IA • Data Science • Optimisation • HPC • Finance Quant",
    hero_title: "Construire des systèmes ML fiables et des solutions guidées par les maths pour des décisions réelles.",
    hero_sub: "Étudiant ingénieur (ISIMA) avec un solide bagage en maths appliquées (UCA). Intérêt : model validation, risk, ML scalable.",
    hero_cta_projects: "Voir les projets",
    hero_cta_contact: "Me contacter",
    hero_link_linkedin: "LinkedIn",
    hero_link_github: "GitHub",
    hero_link_cv: "CV (PDF)",
    hero_note: "Basé en France • Ouvert aux stages / opportunités en IA, Quant, Model Risk / Validation",

    quick_title: "Profil rapide",
    quick_1: "Focus : pipelines ML, optimisation, séries temporelles, applications finance/risque",
    quick_2: "Stack : Python, C++, SQL, scikit-learn, XGBoost, FastAPI",
    quick_3: "Outils : Git, Linux, Docker (bases), exposition HPC/GPU (CUDA/OpenMP)",
    quick_4: "Intérêts : model validation, FICC, calcul stochastique, R/SAS",

    about_title: "À propos",
    about_p1: "Étudiant ingénieur spécialisé en Data Science, Optimisation et IA. J’aime relier la modélisation mathématique et l’ingénierie ML pour délivrer des solutions robustes.",
    about_p2: "Mes intérêts couvrent le ML scalable, l’optimisation et la finance quantitative (risque, validation de modèles, dérivés). Je valorise la crédibilité : reproductibilité, code propre, évaluation claire.",

    skills_title: "Compétences",
    skills_ai_title: "IA & Data Science",
    skills_ai_txt: "ML supervisé, feature engineering, évaluation, déséquilibre de classes, interprétabilité.",
    skills_opt_title: "Optimisation",
    skills_opt_txt: "Optimisation convexe, ADMM/ISTA/FISTA, bases de non-linéaire, OR/transport.",
    skills_hpc_title: "HPC & Software",
    skills_hpc_txt: "Culture perf, parallélisme, algèbre linéaire numérique, APIs et déploiement.",
    skills_fin_title: "Finance & Quant",
    skills_fin_txt: "Intérêt séries temporelles, mindset risque/validation, bases calcul stochastique.",

    exp_title: "Expérience",
    exp1_title: "Stagiaire AI Engineer — Détection de fraude (cartes)",
    exp1_meta: "Avr–Août 2025 • Afsol (France)",
    exp1_b1: "Pipeline ML complet sur 248k+ transactions réelles (nettoyage → features → entraînement → évaluation).",
    exp1_b2: "Benchmark (RF, XGBoost/CatBoost) et déploiement API FastAPI.",
    exp1_b3: "Focus interprétabilité, structure monitorable, reproductibilité.",

    exp2_title: "Projet GPU — Algèbre linéaire numérique",
    exp2_meta: "Fév–Mar 2025 • Projet académique",
    exp2_b1: "Calculs de valeurs propres pour beaucoup de petites matrices en CUDA (Householder + QL).",
    exp2_b2: "Étude des compromis perf et aspects GPU/CPU.",

    proj_title: "Projets",
    p1_title: "Prédiction séries temporelles financières (Hackathon / Industrie)",
    p1_txt: "Forecasting par features avec indicateurs techniques; comparaison ARIMA vs deep learning; évaluation multi-horizon.",
    p2_title: "Agent IA tuteur (RAG + sobriété énergétique)",
    p2_txt: "Q&A ancré sur documents avec évaluation + estimation énergétique (CodeCarbon) : performance vs sobriété.",
    p3_title: "TP Optimisation (convexe & non-linéaire)",
    p3_txt: "Implémentations : LASSO via ADMM, ISTA/FISTA, bases SQP et contraintes.",
    proj_note: "Astuce : ajoute des liens vers tes repos/notebooks une fois publiés (GitHub, slides, etc.).",

    edu_title: "Formation",
    edu1_title: "Diplôme d’ingénieur — ISIMA (Clermont Auvergne INP)",
    edu1_meta: "Spécialisation : Data Science, Optimisation & IA",
    edu1_txt: "Thèmes : ML, optimisation, simulation numérique, exposition calcul parallèle (CUDA/OpenMP).",
    edu2_title: "Maths appliquées & Statistiques — UCA",
    edu2_meta: "Fondations maths appliquées",
    edu2_txt: "Probas, stats, processus stochastiques, modélisation; outils : R, SAS.",
    edu3_title: "CPGE (MPSI/MP) — Prépa",
    edu3_txt: "Base très solide en maths/physique; culture de résolution de problèmes.",

    contact_title: "Contact",
    contact_txt: "N’hésite pas à me contacter pour des stages, collaborations, ou discussions quant/ML.",
    contact_email: "M’envoyer un email",
    contact_linkedin: "LinkedIn",
    contact_github: "GitHub"
  }
};

let lang = "en";
const toggle = document.getElementById("langToggle");

function applyLang(l) {
  lang = l;
  if (toggle) toggle.textContent = l.toUpperCase();
  document.documentElement.lang = l;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[l] && dict[l][key]) el.textContent = dict[l][key];
  });
}

if (toggle) {
  toggle.addEventListener("click", () => {
    applyLang(lang === "en" ? "fr" : "en");
  });
}
// --- Tabs logic (clean, app-like) ---
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

function setActiveTab(targetId) {
  tabs.forEach(t => {
    const isActive = t.getAttribute("data-target") === targetId;
    t.classList.toggle("is-active", isActive);
    t.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  panels.forEach(p => {
    p.classList.toggle("is-active", p.id === targetId);
  });
}

tabs.forEach(t => {
  t.addEventListener("click", () => {
    setActiveTab(t.getAttribute("data-target"));
  });
});

// default
if (tabs.length && panels.length) setActiveTab("tab-about");

// default language
applyLang("en");

// ===== GRAAL PACK: reveal on scroll + nav active + card shine + subtle tilt =====

// 1) Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// 2) Nav active section highlight
const navLinks = document.querySelectorAll('.menu a[href^="#"]');
const sections = [...navLinks]
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const ioNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = "#" + entry.target.id;
    navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === id));
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 });

sections.forEach(s => ioNav.observe(s));

// 3) Card shine: track mouse position for gradient highlight
function bindShine(selector){
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", mx + "%");
      card.style.setProperty("--my", my + "%");
    });
  });
}
bindShine(".proof-item");
bindShine(".stack-grid div");
bindShine(".timeline div");

// 4) Subtle tilt for photo (premium, not gimmicky)
const tiltEl = document.querySelector(".tilt");
if (tiltEl && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  const max = 6; // degrees (keep subtle)
  tiltEl.addEventListener("mousemove", (e) => {
    const r = tiltEl.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) *  2 * max;
    tiltEl.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  tiltEl.addEventListener("mouseleave", () => {
    tiltEl.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
  });
}

