
const KEY = "mn_portfolio_v2";
const THEME_KEY = "mn_portfolio_theme";
const OWNER_USERNAME = atob("TVdBUw==");
const OWNER_PASSWORD = atob("U2ltb25AMDAxIQ==");

/* ---------------------------------------------------------
   Default data helpers
   --------------------------------------------------------- */

const sk = (n, c, p) => ({
  n,
  c,
  p,
  pub: 1
});

const pr = (title, cat, status, desc, tech) => ({
  title,
  cat,
  status,
  desc,
  tech,
  problem: "Sample/demo content: describe the problem this project addresses.",
  objectives: "Describe the objectives.",
  solution: "Describe your approach and solution.",
  results: "Describe the results and lessons learned.",
  github: "",
  live: "",
  img: "",
  pub: 1
});

const sv = (t, d, i) => ({
  t,
  d,
  i,
  f: "Feature one, Feature two, Feature three",
  pub: 1
});

/* ---------------------------------------------------------
   Default portfolio data
   --------------------------------------------------------- */

const DEFAULTS = {
  settings: {
    site: "SIMON MWANGI NDUA",
    tag: "AI Governance & Risk Management",
    accent: "#f5b335",
    seo: "SIMON MWANGI NDUA | AI Governance & Risk Management",
    pass: OWNER_PASSWORD,
    footer: "© 2026 SIMON MWANGI NDUA. All rights reserved."
  },

  hero: {
    kicker: "PORTFOLIO",
    t1: "AI Governance &",
    t2: "Responsible Innovation",
    sub:
      "Helping organisations design, govern and scale AI systems with trust, accountability, compliance and measurable business value.",
    b1: "Explore Services",
    b2: "Why Governance Matters",
    img: ""
  },

  entails: {
    title: "AI Governance in Practice",
    intro:
      "Effective AI governance is the operational framework that helps organisations build intelligent systems responsibly, manage risk early, meet regulatory expectations and maintain human accountability throughout the AI lifecycle.",

    cards: [
      {
        title: "AI Policy & Operating Model",
        icon: "⚖️",
        text:
          "Clear governance structures, decision rights and policies that define who owns AI risk and accountability.",
        pub: 1
      },
      {
        title: "AI Risk & Controls",
        icon: "🎯",
        text:
          "Identifying, scoring and prioritising AI risks across model development, deployment, use and oversight.",
        pub: 1
      },
      {
        title: "Responsible AI Review",
        icon: "🤝",
        text:
          "Practical review of fairness, explainability, transparency, human oversight and societal impact.",
        pub: 1
      },
      {
        title: "Data Privacy & Security",
        icon: "🔒",
        text:
          "Protecting data, models and decision processes with governance controls that support trust and resilience.",
        pub: 1
      },
      {
        title: "Model Lifecycle Governance",
        icon: "🧭",
        text:
          "From design and validation to monitoring and retirement, establishing controls across the AI lifecycle.",
        pub: 1
      },
      {
        title: "Assurance & Compliance",
        icon: "📡",
        text:
          "Continuous monitoring, internal assurance and alignment with recognised frameworks, regulations and governance expectations.",
        pub: 1
      }
    ]
  },

  about: {
    title: "About Simon",
    intro: "I help organisations translate AI ambition into practical governance, resilient risk controls and defensible decision-making.",
    bio:
      "SIMON MWANGI NDUA works at the intersection of AI governance, risk management and responsible innovation. He supports organisations to understand where AI adds value, where it creates exposure, and how to implement proportionate controls that are credible, measurable and aligned to business realities. His work focuses on building confidence in AI adoption without slowing innovation unnecessarily.",
    interests:
      "AI governance, AI risk, compliance strategy, responsible AI, data protection, digital trust",
    img: ""
  },

  contact: {
    email: "you@example.com",
    location: "Kenya",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/"
  },

  skills: [
    sk("AI Governance", "AI Governance", 75),
    sk("AI Risk Management", "AI Governance", 70),
    sk("Responsible AI", "AI Governance", 70),
    sk("AI Ethics", "AI Governance", 65),
    sk("AI Policy", "AI Governance", 65),
    sk("Compliance", "AI Governance", 65),

    sk("Risk Assessment", "Risk & Security", 75),
    sk("Data Privacy", "Risk & Security", 70),
    sk("Cybersecurity", "Risk & Security", 65),
    sk("Risk Mitigation", "Risk & Security", 70),
    sk("Security Controls", "Risk & Security", 65),
    sk("Audit & Compliance", "Risk & Security", 65)
  ],

  projects: [
    pr(
      "AI Governance Maturity Assessment",
      "AI Governance",
      "Completed",
      "A structured review of organisational AI governance maturity, accountability structures and control design for responsible deployment.",
      "Governance Frameworks, Risk Assessment, Stakeholder Mapping"
    ),

    pr(
      "AI Risk Controls Design",
      "Risk Management",
      "Completed",
      "Development of a practical control framework to address model risk, data risk, privacy risk and operational oversight across AI use cases.",
      "Control Design, Policy Review, Risk Register"
    ),

    pr(
      "LLM Use Case Risk Review",
      "Responsible AI",
      "In Progress",
      "Assessment of an enterprise AI assistant covering privacy, safety, human oversight, explainability and ongoing monitoring obligations.",
      "AI Use Case Review, Privacy, Compliance"
    ),

    pr(
      "AI Vendor Due Diligence",
      "Governance & Compliance",
      "Planning",
      "Evaluation of third-party AI providers and embedded tools to assess risk, contractual obligations and operational accountability.",
      "Vendor Assessment, Contract Review, Control Mapping"
    ),

    pr(
      "Responsible AI Policy Blueprint",
      "Policy & Strategy",
      "Completed",
      "Creation of a practical AI policy framework for operational adoption, governance decisions and compliance readiness.",
      "Policy Design, Governance Roadmap, Risk Appetite"
    ),

    pr(
      "AI Assurance & Monitoring Program",
      "Monitoring & Assurance",
      "Planning",
      "Design of an assurance loop to continuously monitor model behaviour, performance drift, controls and governance effectiveness.",
      "Monitoring, Audit, Reporting"
    )
  ],

  experience: [
    {
      org: "Organisation name",
      role: "Your position",
      date: "2024 – Present",
      text:
        "Sample entry: replace with your real experience from owner mode.",
      skills: "Risk assessment, Python",
      pub: 1
    }
  ],

  services: [
    sv(
      "AI Governance Assessment",
      "Assess your current AI governance maturity, role clarity, policy coverage and accountability structures.",
      "⚖️"
    ),
    sv(
      "AI Risk & Controls Design",
      "Identify, score and prioritise AI risks and build practical control measures for your operating environment.",
      "🎯"
    ),
    sv(
      "Responsible AI Review",
      "Review fairness, transparency, human oversight, explainability and broader societal impact of AI use cases.",
      "🤝"
    ),
    sv(
      "AI Policy & Operating Model",
      "Develop practical AI policies, governance processes and decision frameworks that support scale and accountability.",
      "📋"
    ),
    sv(
      "Privacy, Security & Compliance Review",
      "Evaluate adherence to data protection requirements, security obligations and governance expectations across AI systems.",
      "🔒"
    ),
    sv(
      "AI Vendor Due Diligence",
      "Assess third-party AI tools, platform providers and embedded solutions for security, contractual and governance risk.",
      "🧾"
    ),
    sv(
      "AI Monitoring & Assurance",
      "Design oversight mechanisms to monitor model performance, detect drift, review controls and report governance outcomes.",
      "📡"
    ),
    sv(
      "AI Governance Advisory",
      "Provide ongoing strategic advisory support to mature your AI governance program, build trust and reduce operational risk.",
      "🧭"
    )
  ]
};

/* ---------------------------------------------------------
   Utility functions
   --------------------------------------------------------- */

function cloneDefaults() {
  return JSON.parse(JSON.stringify(DEFAULTS));
}

function safeUrl(value) {
  if (!value) return "";

  try {
    const url = new URL(value, window.location.origin);

    if (
      url.protocol === "http:" ||
      url.protocol === "https:" ||
      url.protocol === "mailto:"
    ) {
      return url.href;
    }

    return "";
  } catch {
    return "";
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function loadSavedData() {
  try {
    const saved = localStorage.getItem(KEY);

    if (!saved) {
      return cloneDefaults();
    }

    const parsed = JSON.parse(saved);

    return {
      ...cloneDefaults(),
      ...parsed,
      settings: {
        ...cloneDefaults().settings,
        ...(parsed.settings || {})
      }
    };
  } catch (error) {
    console.error("Could not load portfolio data:", error);
    return cloneDefaults();
  }
}

let D = loadSavedData();

/* ---------------------------------------------------------
   Save data
   --------------------------------------------------------- */

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(D));
    return true;
  } catch (error) {
    console.error("Could not save portfolio data:", error);

    alert(
      "The portfolio could not be saved. Your browser storage may be full."
    );

    return false;
  }
}

/* ---------------------------------------------------------
   Owner state
   --------------------------------------------------------- */

function isOwner() {
  return sessionStorage.getItem("mn_owner") === "1";
}

function setOwner(value) {
  if (value) {
    sessionStorage.setItem("mn_owner", "1");
  } else {
    sessionStorage.removeItem("mn_owner");
  }
}

/* ---------------------------------------------------------
   Main render
   --------------------------------------------------------- */

function render() {
  const root = document.getElementById("root");

  if (!root) return;

  applyTheme(getStoredTheme());

  document.documentElement.style.setProperty(
    "--accent",
    D.settings.accent || "#f5b335"
  );

  document.title =
    D.settings.seo ||
    "SIMON MWANGI NDUA | Governance, Risk & Compliance";

  root.innerHTML = `
    ${renderNavbar()}
    ${renderHero()}
    ${renderConsultancyHighlights()}
    ${renderEntails()}
    ${renderAbout()}
    ${renderSkills()}
    ${renderProjects()}
    ${renderExperience()}
    ${renderServices()}
    ${renderContact()}
    ${renderFooter()}
  `;

  updateOwnerMode();
  bindContentEditing();
}

/* ---------------------------------------------------------
   Navbar
   --------------------------------------------------------- */

function renderNavbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#home">
          ${escapeHtml(D.settings.site)}
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            ${navLink("Home", "home")}
            ${navLink("About", "about")}
            ${navLink("Skills", "skills")}
            ${navLink("Projects", "projects")}
            ${navLink("Experience", "experience")}
            ${navLink("Services", "services")}
            ${navLink("Contact", "contact")}
            <li class="nav-item ms-lg-2">
              <button
                type="button"
                class="btn btn-sm btn-gold"
                id="ownerLogin"
              >
                Admin login
              </button>
            </li>
            <li class="nav-item ms-lg-2">
              <button
                type="button"
                class="btn btn-sm btn-ghost"
                id="themeToggleNav"
                aria-label="Toggle theme"
              >
                Switch to light mode
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function navLink(label, target) {
  return `
    <li class="nav-item">
      <a class="nav-link" href="#${target}">
        ${label}
      </a>
    </li>
  `;
}

/* ---------------------------------------------------------
   Hero
   --------------------------------------------------------- */

function renderHero() {
  return `
    <section id="home" class="hero">
      <div class="container">
        <div class="row align-items-center g-5">

          <div class="col-lg-7">
            <div
              class="kicker mb-3"
              data-p="hero.kicker"
            >${escapeHtml(D.hero.kicker)}</div>

            <h1>
              <span data-p="hero.t1">
                ${escapeHtml(D.hero.t1)}
              </span>
              <br>
              <span
                class="gold"
                data-p="hero.t2"
              >
                ${escapeHtml(D.hero.t2)}
              </span>
            </h1>

            <p
              class="lead mut mt-4"
              data-p="hero.sub"
            >
              ${escapeHtml(D.hero.sub)}
            </p>

            <div class="d-flex flex-wrap gap-3 mt-4">
              <a
                href="#projects"
                class="btn btn-gold px-4"
              >
                <span data-p="hero.b1">
                  ${escapeHtml(D.hero.b1)}
                </span>
              </a>

              <a
                href="#entails"
                class="btn btn-ghost px-4"
              >
                <span data-p="hero.b2">
                  ${escapeHtml(D.hero.b2)}
                </span>
              </a>
            </div>

            <div class="hero-metrics mt-5">
              <div class="metric-box">
                <strong>AI Governance</strong>
                <span>Policy, accountability and oversight</span>
              </div>
              <div class="metric-box">
                <strong>Risk Controls</strong>
                <span>Assessment, mitigation and monitoring</span>
              </div>
              <div class="metric-box">
                <strong>Responsible AI</strong>
                <span>Trust, fairness and compliance</span>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-panel">
              <div class="hero-panel-header">
                <span class="status-pill">AI Governance Advisory</span>
              </div>
              <h3>Build AI with confidence and control.</h3>
              <ul>
                <li>Governance model design</li>
                <li>Risk and control assessments</li>
                <li>Responsible AI frameworks</li>
                <li>Assurance and compliance readiness</li>
              </ul>
              <div class="hero-panel-footer">
                <span>Strategic advisory</span>
                <span>Practical implementation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderConsultancyHighlights() {
  return `
    <section class="consultancy-strip">
      <div class="container">
        <div class="row align-items-center text-center text-lg-start">
          <div class="col-lg-5 mb-4 mb-lg-0">
            <div class="kicker mb-2">WHY CLIENTS CHOOSE US</div>
            <h2 class="mb-0">AI governance that supports growth, trust and accountability.</h2>
          </div>

          <div class="col-lg-7">
            <div class="row g-3">
              <div class="col-md-4">
                <div class="benefit-card">
                  <div class="benefit-icon">01</div>
                  <h3>Strategic clarity</h3>
                  <p>Translate AI ambition into practical governance structures and clear decision rights.</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="benefit-card">
                  <div class="benefit-icon">02</div>
                  <h3>Risk control</h3>
                  <p>Reduce operational, compliance and reputational exposure before it becomes a business issue.</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="benefit-card">
                  <div class="benefit-icon">03</div>
                  <h3>Operational assurance</h3>
                  <p>Establish monitoring, guardrails and accountability for sustainable AI adoption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   AI Governance Entails
   --------------------------------------------------------- */

function renderEntails() {
  const cards = (D.entails.cards || [])
    .map((card, index) => {
      if (!isOwner() && !card.pub) return "";

      return `
        <div class="col-md-6 col-lg-4">
          <div
            class="cardx ${card.pub ? "" : "hide"}"
            data-index="${index}"
          >
            ${ownerControls("entails", index)}

            <div
              class="ico"
              data-p="entails.cards.${index}.icon"
            >
              ${escapeHtml(card.icon)}
            </div>

            <h3
              class="h5"
              data-p="entails.cards.${index}.title"
            >
              ${escapeHtml(card.title)}
            </h3>

            <p
              class="mut mb-0"
              data-p="entails.cards.${index}.text"
            >
              ${escapeHtml(card.text)}
            </p>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <section id="entails">
      <div class="container">

        <div class="row justify-content-center mb-5">
          <div class="col-lg-9 text-center">
            <div class="kicker mb-3">
              GOVERNANCE
            </div>

            <h2
              data-p="entails.title"
            >
              ${escapeHtml(D.entails.title)}
            </h2>

            <p
              class="mut mt-3 mb-0"
              data-p="entails.intro"
            >
              ${escapeHtml(D.entails.intro)}
            </p>
          </div>
        </div>

        <div class="row g-4">
          ${cards}
        </div>

        <button
          class="btn btn-ghost addb"
          data-add="entails"
        >
          + Add Governance Area
        </button>

      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   About
   --------------------------------------------------------- */

function renderAbout() {
  return `
    <section id="about" class="alt">
      <div class="container">

        <div class="row align-items-center g-5">

          <div class="col-lg-4">
            ${imagePlaceholder(D.about.img, "about-image", true)}
          </div>

          <div class="col-lg-8">

            <div class="kicker mb-3">
              ABOUT
            </div>

            <h2 data-p="about.title">
              ${escapeHtml(D.about.title)}
            </h2>

            <h3
              class="h5 gold mt-4"
              data-p="about.intro"
            >
              ${escapeHtml(D.about.intro)}
            </h3>

            <p
              class="mut mt-3"
              data-p="about.bio"
            >
              ${escapeHtml(D.about.bio)}
            </p>

            <div class="mt-4">
              <strong>Focus Areas</strong>

              <p
                class="mut mt-2"
                data-p="about.interests"
              >
                ${escapeHtml(D.about.interests)}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   Skills
   --------------------------------------------------------- */

function renderSkills() {
  const groups = {};

  (D.skills || []).forEach((skill, index) => {
    if (!groups[skill.c]) {
      groups[skill.c] = [];
    }

    groups[skill.c].push({
      ...skill,
      index
    });
  });

  const groupHtml = Object.entries(groups)
    .map(([category, skills]) => {
      return `
        <div class="col-lg-4">
          <div class="cardx">
            <h3
              class="h5 mb-4"
              data-p="skills.${skills[0].index}.c"
            >
              ${escapeHtml(category)}
            </h3>

            ${skills
              .map((skill) => {
                if (!isOwner() && !skill.pub) return "";

                return `
                  <div
                    class="mb-4 ${skill.pub ? "" : "hide"}"
                  >
                    ${ownerControls("skills", skill.index)}
                    ${
                      isOwner()
                        ? `
                      <div class="d-flex justify-content-between">
                        <span
                          data-p="skills.${skill.index}.n"
                        >
                          ${escapeHtml(skill.n)}
                        </span>

                        <span
                          data-p="skills.${skill.index}.p"
                        >
                          ${skill.p}%
                        </span>
                      </div>
                    `
                        : `
                      <div class="d-flex justify-content-between">
                        <span>
                          ${escapeHtml(skill.n)}
                        </span>

                        <span>
                          ${skill.p}%
                        </span>
                      </div>
                    `
                    }

                    <div class="bar mt-2">
                      <i style="width:${Math.min(
                        100,
                        Math.max(0, Number(skill.p) || 0)
                      )}%"></i>
                    </div>
                  </div>
                `;
              })
              .join("")}

          </div>
        </div>
      `;
    })
    .join("");

  return `
    <section id="skills">
      <div class="container">

        <div class="text-center mb-5">
          <div class="kicker mb-3">
            SKILLS
          </div>

          <h2>
            Governance & Risk Capabilities
          </h2>
        </div>

        <div class="row g-4">
          ${groupHtml}
        </div>

        <button
          class="btn btn-ghost addb"
          data-add="skills"
        >
          + Add Skill
        </button>

      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   Projects
   --------------------------------------------------------- */

function renderProjects() {
  const projects = (D.projects || [])
    .map((project, index) => {
      if (!isOwner() && !project.pub) return "";

      return `
        <div class="col-md-6 col-lg-4">
          <div
            class="cardx proj ${project.pub ? "" : "hide"}"
            data-project="${index}"
          >
            ${ownerControls("projects", index)}

            ${projectImage(project.img)}

            <div class="p-4">

              <div class="d-flex justify-content-between align-items-start gap-2">
                <span class="tag">
                  ${escapeHtml(project.cat)}
                </span>

                <span class="st st-${statusClass(project.status)}">
                  ${escapeHtml(project.status)}
                </span>
              </div>

              <h3
                class="h5 mt-3"
              >
                ${escapeHtml(project.title)}
              </h3>

              <p class="mut small">
                ${escapeHtml(project.desc)}
              </p>

              <div>
                ${renderTags(project.tech)}
              </div>

            </div>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <section id="projects" class="alt">
      <div class="container">

        <div class="text-center mb-5">
          <div class="kicker mb-3">
            PROJECTS
          </div>

          <h2>
            Selected Work
          </h2>

          <p class="mut mt-3">
            Practical projects combining technology, governance,
            security and responsible AI principles.
          </p>
        </div>

        <div class="row g-4">
          ${projects}
        </div>

        <button
          class="btn btn-ghost addb"
          data-add="projects"
        >
          + Add Project
        </button>

      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   Experience
   --------------------------------------------------------- */

function renderExperience() {
  const items = (D.experience || [])
    .map((item, index) => {
      if (!isOwner() && !item.pub) return "";

      return `
        <div
          class="it ${item.pub ? "" : "hide"}"
        >
          ${ownerControls("experience", index)}

          <div class="d-flex justify-content-between flex-wrap gap-2">
            <h3
              class="h5 mb-1"
              data-p="experience.${index}.role"
            >
              ${escapeHtml(item.role)}
            </h3>

            <span
              class="mut small"
              data-p="experience.${index}.date"
            >
              ${escapeHtml(item.date)}
            </span>
          </div>

          <div
            class="gold mb-2"
            data-p="experience.${index}.org"
          >
            ${escapeHtml(item.org)}
          </div>

          <p
            class="mut"
            data-p="experience.${index}.text"
          >
            ${escapeHtml(item.text)}
          </p>

          <div>
            ${renderTags(item.skills)}
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <section id="experience">
      <div class="container">

        <div class="text-center mb-5">
          <div class="kicker mb-3">
            EXPERIENCE
          </div>

          <h2>
            Professional Experience
          </h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="tl">
              ${items}
            </div>
          </div>
        </div>

        <div class="text-center">
          <button
            class="btn btn-ghost addb"
            data-add="experience"
          >
            + Add Experience
          </button>
        </div>

      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   Services
   --------------------------------------------------------- */

function renderServices() {
  const services = (D.services || [])
    .map((service, index) => {
      if (!isOwner() && !service.pub) return "";

      return `
        <div class="col-md-6 col-lg-3">
          <div
            class="cardx ${service.pub ? "" : "hide"}"
          >
            ${ownerControls("services", index)}

            <div
              class="ico"
              data-p="services.${index}.i"
            >
              ${escapeHtml(service.i)}
            </div>

            <h3
              class="h5"
              data-p="services.${index}.t"
            >
              ${escapeHtml(service.t)}
            </h3>

            <p
              class="mut small mb-0"
              data-p="services.${index}.d"
            >
              ${escapeHtml(service.d)}
            </p>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <section id="services" class="alt">
      <div class="container">

        <div class="text-center mb-5">
          <div class="kicker mb-3">
            SERVICES
          </div>

          <h2>
            Governance & Risk Services
          </h2>
        </div>

        <div class="row g-4">
          ${services}
        </div>

        <button
          class="btn btn-ghost addb"
          data-add="services"
        >
          + Add Service
        </button>

      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   Contact
   --------------------------------------------------------- */

function renderContact() {
  const email = escapeHtml(D.contact.email);
  const github = safeUrl(D.contact.github);
  const linkedin = safeUrl(D.contact.linkedin);

  const githubButton = isOwner()
    ? `
      <div class="mb-3">
        <label class="form-label">GitHub URL</label>
        <input
          type="url"
          class="form-control"
          data-link-edit="github"
          value="${escapeHtml(D.contact.github || "")}"
          placeholder="https://github.com/your-handle"
        >
      </div>
    `
    : github
      ? `
        <a
          href="${github}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost"
        >
          GitHub
        </a>
      `
      : "";

  const linkedinButton = isOwner()
    ? `
      <div class="mb-3">
        <label class="form-label">LinkedIn URL</label>
        <input
          type="url"
          class="form-control"
          data-link-edit="linkedin"
          value="${escapeHtml(D.contact.linkedin || "")}"
          placeholder="https://linkedin.com/in/your-profile"
        >
      </div>
    `
    : linkedin
      ? `
        <a
          href="${linkedin}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost"
        >
          LinkedIn
        </a>
      `
      : "";

  return `
    <section id="contact">
      <div class="container">

        <div class="text-center mb-5">
          <div class="kicker mb-3">
            CONTACT
          </div>

          <h2>
            Let's Connect
          </h2>

          <p class="mut">
            Interested in AI governance, technology risk or responsible AI?
            Get in touch.
          </p>
        </div>

        <div class="row justify-content-center g-4">

          <div class="col-lg-5">
            <div class="cardx">

              <h3 class="h5 mb-4">
                Contact Information
              </h3>

              <p>
                <strong>Email:</strong><br>
                <a
                  href="mailto:${email}"
                  data-p="contact.email"
                >
                  ${email}
                </a>
              </p>

              <p>
                <strong>Location:</strong><br>
                <span data-p="contact.location">
                  ${escapeHtml(D.contact.location)}
                </span>
              </p>

              <div class="d-flex flex-column gap-3 mt-4">
                ${githubButton}
                ${linkedinButton}
              </div>

            </div>
          </div>

          <div class="col-lg-5">
            <div class="cardx">

              <h3 class="h5 mb-4">
                Send a Message
              </h3>

              <form id="contactForm">

                <div class="mb-3">
                  <label
                    class="form-label"
                    for="contactName"
                  >
                    Name
                  </label>

                  <input
                    id="contactName"
                    type="text"
                    class="form-control"
                    required
                  >
                </div>

                <div class="mb-3">
                  <label
                    class="form-label"
                    for="contactEmail"
                  >
                    Email
                  </label>

                  <input
                    id="contactEmail"
                    type="email"
                    class="form-control"
                    required
                  >
                </div>

                <div class="mb-3">
                  <label
                    class="form-label"
                    for="contactMessage"
                  >
                    Message
                  </label>

                  <textarea
                    id="contactMessage"
                    class="form-control"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="btn btn-gold"
                >
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   Footer
   --------------------------------------------------------- */

function renderFooter() {
  return `
    <footer>
      <div class="container">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">

          <span class="mut">
            ${escapeHtml(D.settings.footer)}
          </span>

        </div>
      </div>
    </footer>
  `;
}

/* ---------------------------------------------------------
   Image helpers
   --------------------------------------------------------- */

function imagePlaceholder(src, type = "", round = false) {
  if (src) {
    return `
      <div
        class="ph ${round ? "round" : ""}"
        data-img="${type}"
        style="background-image:url('${escapeHtml(src)}')"
      ></div>
    `;
  }

  return `
    <div
      class="ph ${round ? "round" : ""}"
      data-img="${type}"
    ></div>
  `;
}

function projectImage(src) {
  if (!src) {
    return `
      <div class="ph"></div>
    `;
  }

  return `
    <div
      class="ph"
      style="background-image:url('${escapeHtml(src)}')"
    ></div>
  `;
}

/* ---------------------------------------------------------
   Tags
   --------------------------------------------------------- */

function renderTags(value) {
  if (!value) return "";

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map(
      (item) =>
        `<span class="tag">${escapeHtml(item)}</span>`
    )
    .join(" ");
}

/* ---------------------------------------------------------
   Status
   --------------------------------------------------------- */

function statusClass(status) {
  const value = String(status || "").toLowerCase();

  if (value.includes("completed")) return "Completed";
  if (value.includes("progress")) return "In";
  if (value.includes("planning")) return "Planning";

  return "On";
}

/* ---------------------------------------------------------
   Owner controls
   --------------------------------------------------------- */

function ownerControls(type, index) {
  if (!isOwner()) return "";

  return `
    <div class="ctl">

      <button
        type="button"
        data-action="toggle"
        data-type="${type}"
        data-index="${index}"
        title="Publish or unpublish"
      >
        ${getPublished(type, index) ? "Hide" : "Publish"}
      </button>

      <button
        type="button"
        data-action="delete"
        data-type="${type}"
        data-index="${index}"
        title="Delete"
      >
        Delete
      </button>

    </div>
  `;
}

function getPublished(type, index) {
  const item = getItem(type, index);
  return item ? Number(item.pub) === 1 : false;
}

function getItem(type, index) {
  if (type === "entails") {
    return D.entails.cards[index];
  }

  if (type === "projects") {
    return D.projects[index];
  }

  if (type === "experience") {
    return D.experience[index];
  }

  if (type === "services") {
    return D.services[index];
  }

  if (type === "skills") {
    return D.skills[index];
  }

  return null;
}

/* ---------------------------------------------------------
   Inline editing
   --------------------------------------------------------- */

function bindContentEditing() {
  if (!isOwner()) return;

  document.querySelectorAll("[data-p]").forEach((element) => {
    element.contentEditable = "true";

    element.addEventListener("blur", () => {
      const path = element.dataset.p;

      if (!path) return;

      setByPath(path, element.innerText.trim());

      save();
    });
  });

  document.querySelectorAll("[data-link-edit]").forEach((element) => {
    element.addEventListener("blur", () => {
      const key = element.dataset.linkEdit;

      if (!key || !D.contact) return;

      D.contact[key] = element.value.trim();
      save();
    });

    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        element.blur();
      }
    });
  });

  document.querySelectorAll("[data-img]").forEach((element) => {
    element.addEventListener("click", () => {
      openImagePicker(element.dataset.img);
    });
  });
}

function setByPath(path, value) {
  const parts = path.split(".");
  let target = D;

  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];

    if (!(key in target)) {
      target[key] = {};
    }

    target = target[key];
  }

  const last = parts[parts.length - 1];

  if (target && typeof target === "object") {
    target[last] = value;
  }
}

/* ---------------------------------------------------------
   Owner mode
   --------------------------------------------------------- */

function updateOwnerMode() {
  const bar = document.getElementById("bar");

  if (!bar) return;

  if (isOwner()) {
    bar.classList.remove("d-none");
    document.body.classList.add("ed");
  } else {
    bar.classList.add("d-none");
    document.body.classList.remove("ed");
  }
}

/* ---------------------------------------------------------
   Login
   --------------------------------------------------------- */

function showAdminLoginError(message) {
  const error = document.getElementById("adminLoginError");

  if (!error) return;

  error.textContent = message;
  error.classList.remove("d-none");
}

function clearAdminLoginError() {
  const error = document.getElementById("adminLoginError");

  if (!error) return;

  error.textContent = "";
  error.classList.add("d-none");
}

function openAdminLoginModal() {
  const modalEl = document.getElementById("adminLoginModal");

  if (!modalEl) return;

  clearAdminLoginError();

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();

  const usernameInput = document.getElementById("adminUsername");

  if (usernameInput) {
    setTimeout(() => usernameInput.focus(), 100);
  }
}

function bindAdminLoginForm() {
  const form = document.getElementById("adminLoginForm");

  if (!form) return;

  const modalEl = document.getElementById("adminLoginModal");

  if (modalEl) {
    modalEl.addEventListener(
      "hidden.bs.modal",
      () => {
        form.reset();
        clearAdminLoginError();
      },
      { once: true }
    );
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("adminUsername")?.value.trim();
    const password = document.getElementById("adminPassword")?.value;

    if (!username || !password) {
      showAdminLoginError("Please enter both username and password.");
      return;
    }

    if (username === OWNER_USERNAME && password === OWNER_PASSWORD) {
      setOwner(true);
      clearAdminLoginError();

      const modal = bootstrap.Modal.getInstance(
        document.getElementById("adminLoginModal")
      );

      if (modal) {
        modal.hide();
      }

      render();
      alert("Admin mode enabled.");
      return;
    }

    showAdminLoginError("Incorrect username or password.");
  });
}

function ownerLogin() {
  openAdminLoginModal();
}

/* ---------------------------------------------------------
   Owner toolbar
   --------------------------------------------------------- */

function getStoredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  return saved === "light" ? "light" : "dark";
}

function applyTheme(theme) {
  const selected = theme === "light" ? "light" : "dark";
  document.body.classList.toggle("light", selected === "light");
  document.body.dataset.theme = selected;
  localStorage.setItem(THEME_KEY, selected);

  const toggles = [
    document.getElementById("themeToggle"),
    document.getElementById("themeToggleNav")
  ];

  toggles.forEach((toggle) => {
    if (!toggle) return;

    const isLight = selected === "light";
    toggle.textContent = isLight
      ? "Switch to dark mode"
      : "Switch to light mode";
    toggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode"
    );
  });
}

function toggleTheme() {
  const current = document.body.classList.contains("light") ? "light" : "dark";
  applyTheme(current === "light" ? "dark" : "light");
}

function bindToolbar() {
  const bar = document.getElementById("bar");

  if (!bar) return;

  const editToggle = document.getElementById("tEdit");
  const colorInput = document.getElementById("tColor");
  const themeToggle = document.getElementById("themeToggle");

  if (colorInput) {
    colorInput.value = D.settings.accent || "#f5b335";

    colorInput.addEventListener("input", (event) => {
      D.settings.accent = event.target.value;

      document.documentElement.style.setProperty(
        "--accent",
        D.settings.accent
      );

      save();
    });
  }

  if (editToggle) {
    editToggle.checked = true;

    editToggle.addEventListener("change", () => {
      document.body.classList.toggle(
        "ed",
        editToggle.checked
      );
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  const navThemeToggle = document.getElementById("themeToggleNav");

  if (navThemeToggle) {
    navThemeToggle.addEventListener("click", toggleTheme);
  }

  applyTheme(getStoredTheme());

  bar.querySelectorAll("[data-t]").forEach((button) => {
    button.addEventListener("click", () => {
      handleToolbarAction(button.dataset.t);
    });
  });
}

function handleToolbarAction(action) {
  switch (action) {
    case "seo":
      editSEO();
      break;

    case "pass":
      changePassword();
      break;

    case "export":
      exportData();
      break;

    case "import":
      document.getElementById("fJson")?.click();
      break;

    case "reset":
      resetPortfolio();
      break;

    case "out":
      setOwner(false);
      render();
      break;
  }
}

/* ---------------------------------------------------------
   SEO
   --------------------------------------------------------- */

function editSEO() {
  const value = prompt(
    "Enter SEO title:",
    D.settings.seo
  );

  if (value === null) return;

  D.settings.seo =
    value.trim() ||
    "SIMON MWANGI NDUA | Governance, Risk & Compliance";

  save();
  render();
}

/* ---------------------------------------------------------
   Password
   --------------------------------------------------------- */

function changePassword() {
  const current = prompt("Enter current password:");

  if (current !== D.settings.pass) {
    alert("Current password is incorrect.");
    return;
  }

  const next = prompt("Enter new password:");

  if (!next || next.length < 6) {
    alert("Password must contain at least 6 characters.");
    return;
  }

  const confirmPassword = prompt("Confirm new password:");

  if (next !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  D.settings.pass = next;

  save();

  alert("Password updated successfully.");
}

/* ---------------------------------------------------------
   Export
   --------------------------------------------------------- */

function exportData() {
  const blob = new Blob(
    [JSON.stringify(D, null, 2)],
    {
      type: "application/json"
    }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "portfolio-data.json";

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

/* ---------------------------------------------------------
   Import
   --------------------------------------------------------- */

function bindImport() {
  const input = document.getElementById("fJson");

  if (!input) return;

  input.addEventListener("change", (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);

        if (!imported || typeof imported !== "object") {
          throw new Error("Invalid data");
        }

        D = {
          ...cloneDefaults(),
          ...imported,
          settings: {
            ...cloneDefaults().settings,
            ...(imported.settings || {})
          }
        };

        save();
        render();

        alert("Portfolio data imported successfully.");
      } catch (error) {
        console.error(error);
        alert("Invalid portfolio JSON file.");
      }

      input.value = "";
    };

    reader.readAsText(file);
  });
}

/* ---------------------------------------------------------
   Reset
   --------------------------------------------------------- */

function resetPortfolio() {
  const confirmed = confirm(
    "Reset the entire portfolio to the default content?"
  );

  if (!confirmed) return;

  D = cloneDefaults();

  save();
  render();

  alert("Portfolio has been reset.");
}

/* ---------------------------------------------------------
   Image upload
   --------------------------------------------------------- */

let selectedImageTarget = null;

function openImagePicker(target) {
  if (!isOwner()) return;

  selectedImageTarget = target;

  document.getElementById("fImg")?.click();
}

function bindImageUpload() {
  const input = document.getElementById("fImg");

  if (!input) return;

  input.addEventListener("change", () => {
    const file = input.files?.[0];

    if (!file || !selectedImageTarget) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      resizeImage(
        reader.result,
        1200,
        (resizedImage) => {
          if (selectedImageTarget === "hero-image") {
            D.hero.img = resizedImage;
          } else if (selectedImageTarget === "about-image") {
            D.about.img = resizedImage;
          }

          save();
          render();

          selectedImageTarget = null;
        }
      );
    };

    reader.readAsDataURL(file);

    input.value = "";
  });
}

function resizeImage(dataUrl, maxSize, callback) {
  const image = new Image();

  image.onload = () => {
    let width = image.width;
    let height = image.height;

    if (width > maxSize || height > maxSize) {
      const scale = Math.min(
        maxSize / width,
        maxSize / height
      );

      width = Math.round(width * scale);
      height = Math.round(height * scale);
    }

    const canvas = document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");

    context.drawImage(
      image,
      0,
      0,
      width,
      height
    );

    callback(
      canvas.toDataURL("image/jpeg", 0.85)
    );
  };

  image.src = dataUrl;
}

/* ---------------------------------------------------------
   Add new content
   --------------------------------------------------------- */

function openSkillModal() {
  const modalEl = document.getElementById("skillEditorModal");

  if (!modalEl) return;

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  const nameInput = document.getElementById("skillNameInput");
  const categoryInput = document.getElementById("skillCategoryInput");
  const percentInput = document.getElementById("skillPercentInput");

  if (nameInput) nameInput.value = "";
  if (categoryInput) categoryInput.value = "AI Governance";
  if (percentInput) percentInput.value = "60";

  setTimeout(() => nameInput?.focus(), 100);
  modal.show();
}

function bindSkillModalForm() {
  const form = document.getElementById("skillEditorForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("skillNameInput");
    const categoryInput = document.getElementById("skillCategoryInput");
    const percentInput = document.getElementById("skillPercentInput");

    const name = nameInput?.value.trim() || "New Skill";
    const category = (categoryInput?.value.trim() || "AI Governance");
    const percent = Number(percentInput?.value || 60);

    D.skills.push(
      sk(name, category, Math.min(100, Math.max(1, percent)))
    );

    save();
    render();

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("skillEditorModal")
    );

    if (modal) {
      modal.hide();
    }
  });
}

function addContent(type) {
  if (!isOwner()) return;

  if (type === "entails") {
    D.entails.cards.push({
      title: "New Governance Area",
      icon: "✦",
      text: "Describe this governance area.",
      pub: 1
    });
  }

  if (type === "projects") {
    D.projects.push(
      pr(
        "New Project",
        "AI Governance",
        "Planning",
        "Describe the project and the problem it addresses.",
        "Python, Django"
      )
    );
  }

  if (type === "experience") {
    D.experience.push({
      org: "Organisation",
      role: "Position",
      date: "2026 – Present",
      text: "Describe your experience.",
      skills: "Python, Risk Assessment",
      pub: 1
    });
  }

  if (type === "services") {
    D.services.push(
      sv(
        "New Service",
        "Describe the service.",
        "✦"
      )
    );
  }

  if (type === "skills") {
    openSkillModal();
    return;
  }

  save();
  render();
}

/* ---------------------------------------------------------
   Delete / publish controls
   --------------------------------------------------------- */

function handleOwnerAction(action, type, index) {
  if (!isOwner()) return;

  const item = getItem(type, index);

  if (!item) return;

  if (action === "toggle") {
    item.pub = item.pub ? 0 : 1;

    save();
    render();

    return;
  }

  if (action === "delete") {
    const confirmed = confirm(
      "Delete this item?"
    );

    if (!confirmed) return;

    if (type === "entails") {
      D.entails.cards.splice(index, 1);
    }

    if (type === "projects") {
      D.projects.splice(index, 1);
    }

    if (type === "experience") {
      D.experience.splice(index, 1);
    }

    if (type === "services") {
      D.services.splice(index, 1);
    }

    if (type === "skills") {
      D.skills.splice(index, 1);
    }

    save();
    render();
  }
}

/* ---------------------------------------------------------
   Project modal
   --------------------------------------------------------- */

function openProject(index) {
  const project = D.projects[index];

  if (!project) return;

  const modalElement = document.getElementById("pm");
  const body = document.getElementById("pmBody");

  if (!modalElement || !body) return;

  body.innerHTML = `
    <div class="d-flex justify-content-between align-items-start gap-3 mb-4">
      <div>
        <div class="kicker mb-2">
          ${escapeHtml(project.cat)}
        </div>

        <h2 class="h3 mb-2">
          ${escapeHtml(project.title)}
        </h2>

        <span class="st st-${statusClass(project.status)}">
          ${escapeHtml(project.status)}
        </span>
      </div>

      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>

    ${
      project.img
        ? `
      <div
        class="ph mb-4"
        style="height:260px;background-image:url('${escapeHtml(
          project.img
        )}')"
      ></div>
    `
        : ""
    }

    <p class="mut">
      ${escapeHtml(project.desc)}
    </p>

    <hr>

    <h3 class="h5">
      Problem
    </h3>

    <p class="mut">
      ${escapeHtml(project.problem)}
    </p>

    <h3 class="h5 mt-4">
      Objectives
    </h3>

    <p class="mut">
      ${escapeHtml(project.objectives)}
    </p>

    <h3 class="h5 mt-4">
      Approach & Solution
    </h3>

    <p class="mut">
      ${escapeHtml(project.solution)}
    </p>

    <h3 class="h5 mt-4">
      Results & Lessons Learned
    </h3>

    <p class="mut">
      ${escapeHtml(project.results)}
    </p>

    <h3 class="h5 mt-4">
      Technology
    </h3>

    <div>
      ${renderTags(project.tech)}
    </div>

    <div class="d-flex flex-wrap gap-2 mt-4">

      ${
        safeUrl(project.github)
          ? `
        <a
          href="${safeUrl(project.github)}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost"
        >
          GitHub
        </a>
      `
          : ""
      }

      ${
        safeUrl(project.live)
          ? `
        <a
          href="${safeUrl(project.live)}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-gold"
        >
          Live Project
        </a>
      `
          : ""
      }

    </div>

    ${
      isOwner()
        ? `
      <div class="border-top mt-4 pt-4">
        <button
          type="button"
          class="btn btn-gold"
          id="editProject"
        >
          Edit Project
        </button>
      </div>
    `
        : ""
    }
  `;

  const modal = bootstrap.Modal.getOrCreateInstance(
    modalElement
  );

  modal.show();

  const editButton = document.getElementById("editProject");

  if (editButton) {
    editButton.addEventListener("click", () => {
      modal.hide();
      editProject(index);
    });
  }
}

/* ---------------------------------------------------------
   Project editor
   --------------------------------------------------------- */

function editProject(index) {
  const project = D.projects[index];

  if (!project || !isOwner()) return;

  const title = prompt(
    "Project title:",
    project.title
  );

  if (title !== null) {
    project.title = title.trim();
  }

  const category = prompt(
    "Project category:",
    project.cat
  );

  if (category !== null) {
    project.cat = category.trim();
  }

  const status = prompt(
    "Status (Completed / In Progress / Planning):",
    project.status
  );

  if (status !== null) {
    project.status = status.trim();
  }

  const description = prompt(
    "Project description:",
    project.desc
  );

  if (description !== null) {
    project.desc = description.trim();
  }

  const tech = prompt(
    "Technology (comma separated):",
    project.tech
  );

  if (tech !== null) {
    project.tech = tech.trim();
  }

  const problem = prompt(
    "Problem:",
    project.problem
  );

  if (problem !== null) {
    project.problem = problem.trim();
  }

  const objectives = prompt(
    "Objectives:",
    project.objectives
  );

  if (objectives !== null) {
    project.objectives = objectives.trim();
  }

  const solution = prompt(
    "Approach & Solution:",
    project.solution
  );

  if (solution !== null) {
    project.solution = solution.trim();
  }

  const results = prompt(
    "Results & Lessons Learned:",
    project.results
  );

  if (results !== null) {
    project.results = results.trim();
  }

  const github = prompt(
    "GitHub URL:",
    project.github
  );

  if (github !== null) {
    project.github = github.trim();
  }

  const live = prompt(
    "Live project URL:",
    project.live
  );

  if (live !== null) {
    project.live = live.trim();
  }

  save();
  render();
}

/* ---------------------------------------------------------
   Contact form
   --------------------------------------------------------- */

function bindContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name =
      document.getElementById("contactName")?.value.trim();

    const email =
      document.getElementById("contactEmail")?.value.trim();

    const message =
      document.getElementById("contactMessage")?.value.trim();

    if (!name || !email || !message) {
      alert("Please complete all fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:${D.contact.email}?subject=${subject}&body=${body}`;
  });
}

/* ---------------------------------------------------------
   Global event delegation
   --------------------------------------------------------- */

function bindGlobalEvents() {
  document.addEventListener("click", (event) => {
    const ownerLoginButton =
      event.target.closest("#ownerLogin");

    if (ownerLoginButton) {
      ownerLogin();
      return;
    }

    const addButton =
      event.target.closest("[data-add]");

    if (addButton) {
      addContent(addButton.dataset.add);
      return;
    }

    const ownerButton =
      event.target.closest("[data-action]");

    if (ownerButton) {
      handleOwnerAction(
        ownerButton.dataset.action,
        ownerButton.dataset.type,
        Number(ownerButton.dataset.index)
      );

      return;
    }

    const projectCard =
      event.target.closest("[data-project]");

    if (
      projectCard &&
      !event.target.closest(".ctl")
    ) {
      openProject(
        Number(projectCard.dataset.project)
      );
    }
  });
}

/* ---------------------------------------------------------
   Initialisation
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  render();

  bindToolbar();
  bindImport();
  bindImageUpload();
  bindContactForm();
  bindAdminLoginForm();
  bindSkillModalForm();
  bindGlobalEvents();
});

/* ---------------------------------------------------------
   Re-bind toolbar after render
   --------------------------------------------------------- */

const originalRender = render;

render = function () {
  originalRender();

  setTimeout(() => {
    bindToolbar();
    bindImport();
    bindImageUpload();
    bindContactForm();
    bindAdminLoginForm();
    bindSkillModalForm();
  }, 0);
};