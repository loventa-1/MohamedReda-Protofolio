// =========================
// Configuration / Portfolio Data
// =========================
const portfolioData = {
  personalInfo: {
    name: "Mohammed Reda",
    shortName: "MR",
    title: ["Full Stack Developer", "Software Engineer"],
    description: "Full Stack Developer with 1 year of experience building high-performance websites with clean architecture, beautiful UI, and scalable solutions.",
    email: "mohamed.reda.software@gmail.com",
    phone: "01505646406",
    whatsappUrl: "https://wa.me/201505646406",
    profileImage: "assets/images/profile.jpeg",
    github: "https://github.com/loventa-1",
    linkedin: "https://www.linkedin.com/in/mohammedreda-software"
  },
  about: {
    description: [
      "I'm Mohammed Reda, a Computer Science student and aspiring Software Engineer with a strong passion for building modern web applications.",
      "I specialize in Full Stack Web Development and enjoy transforming ideas into functional, scalable, and user-friendly digital products.",
      "I have hands-on experience working with frontend and backend technologies, building RESTful APIs, managing databases, and implementing complete web application features.",
      "I'm continuously improving my technical skills, exploring modern development practices, and focusing on writing clean, maintainable code.",
      "I believe that great software is not just about functionality, but also about performance, usability, and architecture."
    ],
    statistics: [
      { icon: "🚀", value: 2, suffix: "+", label: "Projects" },
      { icon: "💼", value: 1, suffix: " Year", label: "Experience" },
      { icon: "💻", value: "Full Stack", suffix: "", label: "Developer" }
    ]
  },
  education: [{
    university: "Mansoura University",
    faculty: "Faculty of Computers and Information",
    level: "Third Year Student",
    department: "Computers and Information",
    grade: "Very Good"
  }],
  experience: [
    {
      title: "Full Stack Developer",
      organization: "Professional Experience",
      icon: "⌘",
      bullets: [
        "Building modern and responsive web applications.",
        "Developing frontend interfaces and backend services.",
        "Working with databases and REST APIs.",
        "Applying clean code principles and structured architecture."
      ]
    },
    {
      title: "MEAN Stack Trainee – NTI",
      organization: "National Telecommunication Institute (NTI) · Mansoura Branch",
      icon: "N",
      bullets: [
        "Intensive MEAN Stack development training.",
        "Working with MongoDB, Express.js, Angular, and Node.js.",
        "Learning professional development workflows.",
        "Building practical full-stack applications."
      ]
    }
  ],
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "Angular", "Responsive Web Design"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "MVC Architecture", "Authentication & Authorization"],
    database: ["MongoDB", "Mongoose"],
    tools: ["Git", "GitHub", "Postman", "npm"]
  },
  projects: [
    {
      title: "Full Stack Web Application",
      description: "A hotel management and booking system that helps organize rooms, manage reservations, and easily track occupancy status.",
      image: "assets/images/projects/HotelDash.png",
      technologies: ["Node.js","Express.js","RESTful APIs", "MongoDB"],
      github: "#",
      demo: ""
    },
    {
      title: "Modern Portfolio Platform",
      description: "A polished portfolio experience demonstrating component-based layouts and accessible interactions.",
      image: "assets/images/projects/protofolioPreview.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: ""
    },
    {
      title: "E-commerce Starter",
      description: "A configurable storefront concept with product management, shopping cart, and checkout-ready structure.",
      image: "assets/images/projects/HomePageE-commerce.png",
      technologies: ["Angular","Node.js","Express.js", "MongoDB"],
      github: "#",
      demo: ""
    }
  ],
  testimonials: [
    {
      name: "Demo Reviewer",
      role: "Sample testimonial — not a real client",
      avatar: "DR",
      text: "This is a clearly marked sample testimonial. Replace this entry in portfolioData.testimonials with verified feedback."
    },
    {
      name: "Demo Colleague",
      role: "Sample testimonial — not a real client",
      avatar: "DC",
      text: "Mohammed approaches projects with curiosity and attention to detail. This placeholder demonstrates the testimonial carousel."
    },
    {
      name: "Demo Mentor",
      role: "Sample testimonial — not a real client",
      avatar: "DM",
      text: "A strong foundation in full-stack development and continuous learning is represented here as editable demo content."
    }
  ],
  services: [
    { icon: "◫", title: "Frontend Development", description: "Building responsive, modern, and interactive user interfaces.", technologies: "HTML · CSS · JavaScript · Angular" },
    { icon: "⚙", title: "Backend Development", description: "Building secure, scalable, and maintainable backend systems.", technologies: "Node.js · Express.js · MongoDB" },
    { icon: "◈", title: "Full Stack Web Development", description: "Building complete web applications from frontend to backend.", technologies: "Angular · Node.js · MongoDB" },
    { icon: "▣", title: "E-commerce Development", description: "Developing complete online stores with product management, shopping carts, and payment gateway integration.", technologies: "Catalog · Cart · Checkout" }
  ],
  navigation: [
    ["home", "Home"], ["about", "About"], ["education", "Education"], ["experience", "Experience"],
    ["skills", "Skills"], ["projects", "Projects"], ["testimonials", "Testimonials"],
    ["services", "Services"], ["contact", "Get In Touch"]
  ]
};

// =========================
// DOM Selectors
// =========================
const navbar = document.querySelector("#navbar");
const navMenu = document.querySelector("#nav-menu");
const menuToggle = document.querySelector("#menu-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const backToTop = document.querySelector("#back-to-top");
const scrollProgress = document.querySelector(".scroll-progress span");
const cursorGlow = document.querySelector(".cursor-glow");

// =========================
// Safe DOM Utilities
// =========================
function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function sectionHeading(eyebrow, title, lead = "", centered = false) {
  const wrapper = createElement("div", `section-heading${centered ? " section-heading--center" : ""} reveal`);
  wrapper.append(createElement("p", "eyebrow", eyebrow), createElement("h2", "section-title", title));
  if (lead) wrapper.append(createElement("p", "section-lead", lead));
  return wrapper;
}

// =========================
// Dynamic Content Rendering
// =========================
function renderNavigation() {
  portfolioData.navigation.forEach(([id, label]) => {
    const link = createElement("a", "", label);
    link.href = `#${id}`;
    if (id === "home") link.classList.add("active");
    link.dataset.section = id;
    navMenu.append(link);
  });
}

function renderHero() {
  const section = document.querySelector("#home");
  section.innerHTML = "";
  const container = createElement("div", "container hero__grid");
  const copy = createElement("div", "hero__copy");
  copy.append(
    createElement("p", "hero__intro hero__animate", "Hello, I'm"),
    createElement("h1", "hero__title hero__animate", `${portfolioData.personalInfo.name.split(" ")[0]} ${portfolioData.personalInfo.name.split(" ")[1]}`),
  );
  const role = createElement("p", "hero__role hero__animate");
  const roleText = createElement("span", "typing-text");
  roleText.setAttribute("aria-live", "polite");
  role.append(roleText, createElement("span", "typing-cursor"));
  copy.append(role, createElement("p", "hero__description hero__animate", portfolioData.personalInfo.description));
  const actions = createElement("div", "hero__actions hero__animate");
  const projectsLink = createElement("a", "button button--primary", "View Projects");
  projectsLink.href = "#projects";
  const hireLink = createElement("a", "button", "Hire Me");
  hireLink.href = "#contact";
  actions.append(projectsLink, hireLink);
  copy.append(actions);

  const visual = createElement("div", "hero__visual");
  const ring = createElement("div", "profile-ring");
  const image = createElement("img");
  image.src = portfolioData.personalInfo.profileImage;
  image.alt = `Portrait placeholder for ${portfolioData.personalInfo.name}`;
  ring.append(image);
  visual.append(ring);
  const tagOne = createElement("div", "floating-tag floating-tag--one");
  tagOne.append(createElement("span", "floating-tag__dot"), createElement("span", "", "Available for work"));
  const tagTwo = createElement("div", "floating-tag floating-tag--two");
  tagTwo.append(createElement("span", "floating-tag__dot"), createElement("span", "", "Full Stack"));
  visual.append(tagOne, tagTwo);
  container.append(copy, visual);
  section.append(container);
}

function renderAbout() {
  const section = document.querySelector("#about");
  section.innerHTML = '<div class="container"></div>';
  const container = section.firstElementChild;
  container.append(sectionHeading("About", "Building the web with purpose."));
  const grid = createElement("div", "about__grid");
  const imageWrap = createElement("div", "about__image-wrap reveal");
  const image = createElement("img", "about__image");
  image.src = portfolioData.personalInfo.profileImage;
  image.alt = `About portrait placeholder for ${portfolioData.personalInfo.name}`;
  imageWrap.append(image);
  const copy = createElement("div", "about__content reveal");
  const copyText = createElement("div", "about__copy");
  portfolioData.about.description.forEach(text => copyText.append(createElement("p", "", text)));
  copy.append(copyText);
  const stats = createElement("div", "stats-grid");
  portfolioData.about.statistics.forEach((stat, index) => {
    const card = createElement("div", "stat-card stagger");
    card.style.setProperty("--i", index);
    const icon = createElement("span", "stat-card__icon", stat.icon);
    const strong = createElement("strong", "stat-value", stat.value);
    strong.dataset.value = String(stat.value);
    strong.dataset.suffix = stat.suffix;
    card.append(icon, strong, createElement("span", "", stat.label));
    stats.append(card);
  });
  copy.append(stats);
  grid.append(imageWrap, copy);
  container.append(grid);
}

function renderEducation() {
  const section = document.querySelector("#education");
  section.innerHTML = '<div class="container"></div>';
  const container = section.firstElementChild;
  container.append(sectionHeading("Education", "Academic Foundation.", "", true));
  const education = portfolioData.education[0];
  const card = createElement("article", "education-card reveal");
  card.append(createElement("div", "education-card__icon", "🎓"));
  const content = createElement("div", "education-card__content");
  content.append(createElement("h3", "", education.university), createElement("p", "education-card__faculty", education.faculty));
  const details = createElement("div", "education-card__details");
  [
    ["Academic Level", education.level],
    ["Department", education.department],
    ["Academic Grade", education.grade]
  ].forEach(([label, value]) => {
    const detail = createElement("div", "detail");
    detail.append(createElement("span", "", label), createElement("strong", "", value));
    details.append(detail);
  });
  content.append(details);
  card.append(content);
  container.append(card);
}

function renderExperience() {
  const section = document.querySelector("#experience");
  section.innerHTML = '<div class="container"></div>';
  const container = section.firstElementChild;
  container.append(sectionHeading("Experience", "Professional Journey.", "", true));
  const timeline = createElement("div", "timeline");
  portfolioData.experience.forEach((item, index) => {
    const wrapper = createElement("article", "timeline-item reveal stagger");
    wrapper.style.setProperty("--i", index);
    wrapper.append(createElement("div", "timeline-marker", item.icon));
    const card = createElement("div", "timeline-card");
    card.append(createElement("h3", "", item.title), createElement("p", "timeline-card__org", item.organization));
    const list = createElement("ul");
    item.bullets.forEach(bullet => list.append(createElement("li", "", bullet)));
    card.append(list);
    wrapper.append(card);
    timeline.append(wrapper);
  });
  container.append(timeline);
}

function renderSkills() {
  const section = document.querySelector("#skills");
  section.innerHTML = '<div class="container"></div>';
  const container = section.firstElementChild;
  container.append(sectionHeading("Skills", "Tools & technologies.", "", true));
  const grid = createElement("div", "skills-grid");
  const categories = [
    ["Frontend Development", "⌁", portfolioData.skills.frontend],
    ["Backend Development", "⚙", portfolioData.skills.backend],
    ["Database", "◉", portfolioData.skills.database],
    ["Development Tools", "⌘", portfolioData.skills.tools]
  ];
  categories.forEach(([title, icon, skills], index) => {
    const card = createElement("article", "skill-category reveal stagger");
    card.style.setProperty("--i", index);
    const header = createElement("div", "skill-category__header");
    header.append(createElement("div", "skill-category__icon", icon), createElement("h3", "", title));
    const list = createElement("div", "skill-list");
    skills.forEach(skill => list.append(createElement("span", "skill-pill", skill)));
    card.append(header, list);
    grid.append(card);
  });
  container.append(grid);
}

function renderProjects() {
  const section = document.querySelector("#projects");
  section.innerHTML = '<div class="container"></div>';
  const container = section.firstElementChild;
  container.append(sectionHeading("Projects", "Selected work.", "A collection of portfolio-ready project placeholders designed for easy replacement.", true));
  const grid = createElement("div", "projects-grid");
  portfolioData.projects.forEach((project, index) => {
    const card = createElement("article", "project-card reveal stagger");
    card.style.setProperty("--i", index);
    const imageWrap = createElement("div", "project-card__image-wrap");
    const image = createElement("img", "project-card__image");
    image.src = project.image;
    image.alt = `${project.title} project preview`;
    image.loading = "lazy";
    imageWrap.append(image);
    const body = createElement("div", "project-card__body");
    body.append(createElement("h3", "", project.title), createElement("p", "", project.description));
    const badges = createElement("div", "badge-list");
    project.technologies.forEach(tech => badges.append(createElement("span", "badge", tech)));
    const links = createElement("div", "project-card__links");
    const githubLink = createElement("a", "project-link", "GitHub");
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.rel = "noopener";
    githubLink.setAttribute("aria-label", `View ${project.title} on GitHub`);
    links.append(githubLink);
    if (project.demo) {
      const demoLink = createElement("a", "project-link", "Live Demo");
      demoLink.href = project.demo;
      demoLink.target = "_blank";
      demoLink.rel = "noopener";
      links.append(demoLink);
    }
    body.append(badges, links);
    card.append(imageWrap, body);
    grid.append(card);
  });
  container.append(grid);
}

function renderTestimonials() {
  const section = document.querySelector("#testimonials");
  section.innerHTML = '<div class="container"></div>';
  const container = section.firstElementChild;
  container.append(sectionHeading("Testimonials", "Demo feedback.", "The cards below are sample content and not represented as real client reviews.", true));
  const shell = createElement("div", "testimonials-shell reveal");
  const viewport = createElement("div", "testimonial-viewport");
  const track = createElement("div", "testimonial-track");
  track.id = "testimonial-track";
  portfolioData.testimonials.forEach(testimonial => {
    const card = createElement("article", "testimonial-card");
    card.append(createElement("div", "testimonial-card__avatar", testimonial.avatar));
    card.append(createElement("div", "testimonial-card__stars", "★★★★★"));
    card.append(createElement("blockquote", "", `“${testimonial.text}”`));
    card.append(createElement("cite", "", `${testimonial.name} · ${testimonial.role}`));
    track.append(card);
  });
  viewport.append(track);
  shell.append(viewport);
  const prev = createElement("button", "slider-control slider-control--prev", "‹");
  prev.type = "button";
  prev.id = "testimonial-prev";
  prev.setAttribute("aria-label", "Previous testimonial");
  const next = createElement("button", "slider-control slider-control--next", "›");
  next.type = "button";
  next.id = "testimonial-next";
  next.setAttribute("aria-label", "Next testimonial");
  shell.append(prev, next);
  const dots = createElement("div", "slider-dots");
  dots.id = "slider-dots";
  shell.append(dots);
  container.append(shell);
}

function renderServices() {
  const section = document.querySelector("#services");
  section.innerHTML = '<div class="container"></div>';
  const container = section.firstElementChild;
  container.append(sectionHeading("Services", "How I can help.", "", true));
  const grid = createElement("div", "services-grid");
  portfolioData.services.forEach((service, index) => {
    const card = createElement("article", "service-card reveal stagger");
    card.style.setProperty("--i", index);
    card.append(createElement("div", "service-card__icon", service.icon));
    card.append(createElement("h3", "", service.title), createElement("p", "", service.description));
    card.append(createElement("span", "service-card__tech", service.technologies));
    grid.append(card);
  });
  container.append(grid);
}

function renderContact() {
  const section = document.querySelector("#contact");
  section.innerHTML = '<div class="container"></div>';
  const container = section.firstElementChild;
  container.append(sectionHeading("Get In Touch", "Let’s build something great.", "", true));
  const grid = createElement("div", "contact-grid");
  const info = createElement("div", "contact-info reveal");
  [
    ["☎", "WhatsApp", portfolioData.personalInfo.phone, portfolioData.personalInfo.whatsappUrl],
    ["✉", "Email", portfolioData.personalInfo.email, `mailto:${portfolioData.personalInfo.email}`]
  ].forEach(([icon, label, value, linkUrl]) => {
    const link = createElement("a", "contact-card");
    link.href = linkUrl;
    link.target = linkUrl.startsWith("http") ? "_blank" : "_self";
    if (linkUrl.startsWith("http")) link.rel = "noopener";
    link.append(createElement("div", "contact-card__icon", icon));
    const text = createElement("div");
    text.append(createElement("span", "", label), createElement("strong", "", value));
    link.append(text);
    info.append(link);
  });
  info.append(createElement("p", "contact-note", "Have a project in mind? Send a message and let’s discuss the next step."));
  const form = createElement("form", "contact-form reveal");
  form.noValidate = true;
  form.id = "contact-form";
  const row = createElement("div", "form-row");
  [
    ["name", "Full Name", "text", "Mohammed Reda"],
    ["email", "Email Address", "email", "you@example.com"]
  ].forEach(([id, label, type, placeholder]) => row.append(createField(id, label, type, placeholder)));
  form.append(row);
  form.append(createField("subject", "Subject", "text", "Project inquiry"));
  form.append(createField("message", "Message", "textarea", "Tell me about your project"));
  const submit = createElement("button", "button button--primary", "Send Message");
  submit.type = "submit";
  form.append(submit, createElement("p", "form-status", ""));
  grid.append(info, form);
  container.append(grid);
}

function createField(id, labelText, type, placeholder) {
  const wrapper = createElement("div", "field");
  const label = createElement("label", "", labelText);
  label.htmlFor = id;
  let input;
  if (type === "textarea") {
    input = createElement("textarea");
  } else {
    input = createElement("input");
    input.type = type;
  }
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  input.required = true;
  const error = createElement("p", "field-error");
  error.id = `${id}-error`;
  wrapper.append(label, input, error);
  return wrapper;
}

function renderFooter() {
  const footer = document.querySelector("#footer");
  footer.innerHTML = "";
  const container = createElement("div", "container");
  const inner = createElement("div", "footer__inner");
  const identity = createElement("div", "footer__identity");
  identity.append(createElement("strong", "", portfolioData.personalInfo.name), createElement("span", "", "Software Engineer | Full Stack Developer"));
  const links = createElement("div", "footer__links");
  [["GitHub", portfolioData.personalInfo.github], ["LinkedIn", portfolioData.personalInfo.linkedin]].forEach(([label, url]) => {
    const link = createElement("a", "", label);
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    links.append(link);
  });
  inner.append(identity, links);
  container.append(inner, createElement("p", "footer__copyright", "Copyright © 2026 Mohammed Reda. All Rights Reserved."));
  footer.append(container);
}

// =========================
// Navigation Logic
// =========================
function initializeNavigation() {
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
  menuToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", open);
  });
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
    backToTop.classList.toggle("visible", window.scrollY > 600);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  }, { passive: true });
}

// =========================
// Theme Management
// =========================
function initializeTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const theme = saved || systemTheme;
  applyTheme(theme);
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("portfolio-theme", next);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#131B2B" : "#F9F8F6");
}

// =========================
// Typing Animation
// =========================
function initializeTypingAnimation() {
  const target = document.querySelector(".typing-text");
  if (!target) return;
  const titles = portfolioData.personalInfo.title;
  let titleIndex = 0;
  let characterIndex = 0;
  let deleting = false;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    target.textContent = titles[0];
    return;
  }
  function type() {
    const title = titles[titleIndex];
    target.textContent = title.slice(0, characterIndex);
    if (!deleting && characterIndex < title.length) {
      characterIndex++;
      setTimeout(type, 75);
    } else if (!deleting) {
      deleting = true;
      setTimeout(type, 1600);
    } else if (characterIndex > 0) {
      characterIndex--;
      setTimeout(type, 42);
    } else {
      deleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, 300);
    }
  }
  type();
}

// =========================
// Scroll Animations
// =========================
function initializeRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(element => element.classList.add("visible"));
    return;
  }
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .13 });
  revealElements.forEach(element => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".nav-menu a").forEach(link => {
          link.classList.toggle("active", link.dataset.section === entry.target.id);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55%", threshold: 0 });
  document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));
}

// =========================
// Statistics Animation
// =========================
function initializeStatisticsAnimation() {
  const elements = document.querySelectorAll(".stat-value");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const value = element.dataset.value;
      const suffix = element.dataset.suffix || "";
      if (!Number.isFinite(Number(value))) {
        element.textContent = `${value}${suffix}`;
      } else {
        const target = Number(value);
        const start = performance.now();
        const duration = 900;
        function count(now) {
          const progress = Math.min((now - start) / duration, 1);
          element.textContent = `${Math.round(target * (1 - Math.pow(1 - progress, 3)))}${suffix}`;
          if (progress < 1) requestAnimationFrame(count);
        }
        requestAnimationFrame(count);
      }
      observer.unobserve(element);
    });
  }, { threshold: .6 });
  elements.forEach(element => observer.observe(element));
}

// =========================
// Testimonials Slider
// =========================
function initializeTestimonials() {
  const track = document.querySelector("#testimonial-track");
  if (!track) return;
  const cards = [...track.children];
  const dotsContainer = document.querySelector("#slider-dots");
  let current = 0;
  let timer;
  cards.forEach((_, index) => {
    const dot = createElement("button", `slider-dot${index === 0 ? " active" : ""}`);
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to testimonial ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.append(dot);
  });
  function goToSlide(index) {
    current = (index + cards.length) % cards.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    [...dotsContainer.children].forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === current));
  }
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goToSlide(current + 1), 5500);
  }
  document.querySelector("#testimonial-prev").addEventListener("click", () => { goToSlide(current - 1); resetTimer(); });
  document.querySelector("#testimonial-next").addEventListener("click", () => { goToSlide(current + 1); resetTimer(); });
  resetTimer();
}

// =========================
// Mouse Effects
// =========================
function initializeMouseEffects() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  let ticking = false;
  window.addEventListener("mousemove", event => {
    if (!ticking) {
      requestAnimationFrame(() => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
        cursorGlow.style.opacity = "1";
        ticking = false;
      });
      ticking = true;
    }
  });
  document.querySelectorAll(".project-card, .skill-category, .service-card").forEach(card => {
    card.addEventListener("mousemove", event => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${y * -3}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

// =========================
// Contact Form Validation
// =========================
function initializeContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    let valid = true;
    ["name", "email", "subject", "message"].forEach(id => {
      const input = form.elements[id];
      const wrapper = input.closest(".field");
      const error = wrapper.querySelector(".field-error");
      let message = "";
      if (!input.value.trim()) message = "This field is required.";
      if (id === "email" && input.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        message = "Enter a valid email address.";
      }
      wrapper.classList.toggle("invalid", Boolean(message));
      input.setAttribute("aria-invalid", String(Boolean(message)));
      error.textContent = message;
      if (message) valid = false;
    });
    const status = form.querySelector(".form-status");
    if (!valid) {
      status.textContent = "Please correct the highlighted fields.";
      return;
    }
    status.textContent = "Demo form ready — connect this form to your preferred email or form service.";
    form.reset();
  });
}

// =========================
// Initialization
// =========================
function initializePortfolio() {
  renderNavigation();
  renderHero();
  renderAbout();
  renderEducation();
  renderExperience();
  renderSkills();
  renderProjects();
  renderTestimonials();
  renderServices();
  renderContact();
  renderFooter();
  initializeTheme();
  initializeNavigation();
  initializeTypingAnimation();
  initializeRevealAnimations();
  initializeStatisticsAnimation();
  initializeTestimonials();
  initializeMouseEffects();
  initializeContactForm();
}

document.addEventListener("DOMContentLoaded", initializePortfolio);
