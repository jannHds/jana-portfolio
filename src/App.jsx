import React from "react";
import { motion } from "framer-motion";

const resumeLink = "/Jana_Hassan_Algarni_Resume.pdf";

const projects = [
  {
    title: "Mental Health Risk Prediction",
    type: "Machine Learning",
    description:
      "Predicted mental health risk using survey and lifestyle data. Trained and evaluated Logistic Regression and Random Forest models.",
    tags: ["Python", "Scikit-learn", "Pandas", "Random Forest"],
    link: "https://github.com/jannHds/Mental-Health-Risk-Prediction",
  },
  {
    title: "Road Network Algorithm Comparison",
    type: "Algorithm Analysis",
    description:
      "Compared Dijkstra and Bellman-Ford algorithms using road-network data and analyzed runtime performance across input sizes.",
    tags: ["Python", "NetworkX", "Algorithms", "Matplotlib"],
    link: "https://github.com/jannHds/Road-Network-Algorithm-Comparison",
  },
  {
    title: "Amazon Mobile Reviews Sentiment Analysis",
    type: "NLP",
    description:
      "Built an NLP sentiment analysis workflow for Amazon mobile reviews, including preprocessing, training, and evaluation.",
    tags: ["NLP", "Python", "Data Analysis", "ML"],
    link: "https://github.com/jannHds/Sentiment-Analysis-of-Amazon-Unlocked-Mobile-Reviews",
  },
  {
    title: "Legends Restaurant System",
    type: "Full Stack",
    description:
      "Developed customer-side restaurant ordering features using Django and MySQL, including browsing, ordering, and tracking.",
    tags: ["Django", "MySQL", "Python", "GitHub"],
    link: "https://github.com/jannHds/Legends_Restaurant",
  },
  {
    title: "Spam Detection System",
    type: "Machine Learning",
    description:
      "Created a spam detection model with text preprocessing, feature extraction, and classification performance evaluation.",
    tags: ["Python", "NLP", "Classification", "Scikit-learn"],
    link: "https://github.com/jannHds/Spam-Detection-ML",
  },
  {
    title: "Hotel Management System",
    type: "Java OOP",
    description:
      "Built a Java-based hotel management system using OOP principles for booking and customer management features.",
    tags: ["Java", "OOP", "Team Project"],
    link: "https://github.com/jannHds/HotelSystem",
  },
];

const skills = [
  "Python",
  "Java",
  "C++",
  "Machine Learning",
  "NLP",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Django",
  "MySQL",
  "OOP",
  "GitHub",
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Time Management",
  "Analytical Thinking",
];

const certificates = [
  "Artificial Intelligence Concepts and Advanced Applications — SDAIA",
  "Linear Algebra for Machine Learning and Data Science — DeepLearning.AI",
  "SkillsBuild Program — IBM",
];

const navItems = [
  ["Intro", "#intro"],
  ["Profile", "#profile"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["CV", "#cv"],
  ["Contact", "#contact"],
];

function runPortfolioChecks() {
  if (typeof console === "undefined") return;
  console.assert(projects.length === 6, "Expected 6 featured projects.");
  console.assert(skills.includes("C++"), "Expected C++ to be listed in skills.");
  console.assert(softSkills.length === 5, "Expected 5 soft skills.");
  console.assert(resumeLink.endsWith(".pdf"), "Resume link should point to a PDF file.");
}

runPortfolioChecks();

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55 },
};

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "mail") {
    return (
      <svg {...common}>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...common}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1.1-3.5c3.7-.4 7.6-1.8 7.6-8A6.2 6.2 0 0 0 19.8 2c.2-.4.7-2-.2-4 0 0-1.4-.4-4.6 1.7a15.6 15.6 0 0 0-8.4 0C3.4-2.4 2-2 2-2c-.9 2-.4 3.6-.2 4A6.2 6.2 0 0 0 .1 6.5c0 6.2 3.9 7.6 7.6 8A4.8 4.8 0 0 0 6.6 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.8Z" />
        <path d="M8.8 8.9c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.6 1.5c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5a6.4 6.4 0 0 0 3.1 2.7c.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.7-.1l1.4.7c.3.1.4.3.4.5 0 .8-.7 1.7-1.5 1.8-1.4.2-4.2-.6-6.5-2.8-2.1-2.1-3-4.7-2.8-5.8.1-.5.5-.9.8-1.2Z" />
      </svg>
    );
  }

  if (name === "file") {
    return (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function Label({ children }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.36em] text-sky-300">
      {children}
    </p>
  );
}

function Chip({ children }) {
  return (
    <span className="rounded-full border border-sky-200/15 bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-100">
      {children}
    </span>
  );
}

function ContactAction({ href, icon, label, target = "_blank", download = false, compact = false }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      download={download}
      title={label}
      className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-sky-200/10 bg-white/[0.035] px-2 py-3 text-slate-300 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-300/10 hover:text-white"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-sky-400/12 text-sky-200 transition group-hover:bg-sky-300/25 group-hover:text-white">
        <Icon name={icon} className="h-5 w-5" />
      </span>

      <span className="text-[11px] font-bold leading-none">{label}</span>
    </a>
  );
}

export default function JanaPortfolio() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#06111f] text-slate-100 selection:bg-sky-300 selection:text-slate-950">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_88%_6%,rgba(37,99,235,0.20),transparent_28%),radial-gradient(circle_at_55%_92%,rgba(14,165,233,0.16),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.055)_0.8px,transparent_0.8px)] bg-[size:42px_42px] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06111f]/80 to-[#06111f]" />
      </div>

      <div className="min-h-screen w-full lg:pl-[280px]">
        <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] overflow-hidden border-r border-sky-200/10 bg-[#07182a]/95 px-4 py-4 shadow-[22px_0_80px_rgba(2,8,23,0.30)] backdrop-blur-2xl lg:block">
         <div className="flex min-h-full flex-col justify-between gap-4">
            <div>
              <a href="#intro" className="group block rounded-[1.8rem] border border-sky-200/10 bg-white/[0.045] p-5 transition hover:border-sky-300/30 hover:bg-sky-300/10">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-300 via-blue-400 to-cyan-200 shadow-[0_0_35px_rgba(56,189,248,0.25)]">
                  <span className="text-lg font-black text-slate-950">JA</span>
                </div>
                <h2 className="text-xl font-black tracking-tight text-white">Jana Algarni</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">AI Student · ML · NLP</p>
              </a>

              <nav className="mt-7 space-y-2 text-sm">
                {navItems.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-3 rounded-2xl px-4 py-3 font-bold text-slate-300 transition hover:bg-sky-300/10 hover:text-white"
                  >
                    <span className="h-2.5 w-2.5 rounded-full border border-sky-300/50 bg-transparent transition group-hover:border-sky-200 group-hover:bg-sky-300 group-hover:shadow-[0_0_16px_rgba(56,189,248,0.95)]" />
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-[1.4rem] border border-sky-200/10 bg-slate-950/35 p-3 shadow-[0_18px_45px_rgba(2,8,23,0.25)]">
  <p className="mb-3 text-center text-[10px] font-black uppercase tracking-[0.34em] text-sky-300">
    Connect
  </p>

  <div className="grid grid-cols-4 gap-2">
    <ContactAction href="mailto:Janahds2005@gmail.com" target="_self" icon="mail" label="Email" />
    <ContactAction href="https://github.com/jannHds" icon="github" label="GitHub" />
    <ContactAction href="https://linkedin.com/in/jana-algarni-23a679310" icon="linkedin" label="LinkedIn" />
    <ContactAction href="https://wa.me/966550364104" icon="whatsapp" label="WhatsApp" />
  </div>
</div>
          </div>
        </aside>

        <div className="min-w-0 px-4 py-5 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <header className="sticky top-4 z-30 mb-8 flex items-center justify-between rounded-[1.7rem] border border-sky-200/10 bg-[#07182a]/80 px-5 py-4 shadow-2xl backdrop-blur-xl lg:hidden">
            <div>
              <strong className="text-white">Jana Algarni</strong>
              <p className="text-xs text-slate-400">AI Portfolio</p>
            </div>
            <a href="#contact" className="rounded-full bg-sky-300 px-4 py-2 text-sm font-black text-slate-950">Contact</a>
          </header>

          <section id="intro" className="grid min-h-[88vh] items-center gap-10 py-10 xl:grid-cols-[minmax(0,1fr)_390px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <Label>Artificial Intelligence Portfolio</Label>
              <h1 className="mt-6 max-w-5xl text-[clamp(3.4rem,9vw,8.6rem)] font-black leading-[0.82] tracking-[-0.075em] text-white">
                Jana
                <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-blue-300 bg-clip-text text-transparent">Algarni</span>
              </h1>
              <div className="mt-8 max-w-3xl border-l border-sky-300/50 pl-6">
                <p className="text-lg leading-9 text-slate-300 md:text-xl">
                  AI student passionate about developing intelligent systems and solving real-world problems through machine learning, data analysis, and emerging technologies.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full bg-sky-300 px-7 py-4 font-black text-slate-950 shadow-[0_20px_60px_rgba(14,165,233,0.22)] transition hover:-translate-y-1 hover:bg-cyan-200">Explore Work</a>
                <a href={resumeLink} target="_blank" rel="noreferrer" className="rounded-full border border-sky-200/15 bg-white/[0.05] px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-300/10">View CV</a>
                <a href="https://github.com/jannHds" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-sky-300/40">GitHub</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75 }} className="relative hidden xl:block">
              <div className="absolute -inset-8 rounded-full bg-sky-400/15 blur-3xl" />
              <div className="relative rounded-[3rem] border border-sky-200/10 bg-white/[0.045] p-5 shadow-[0_25px_95px_rgba(2,8,23,0.35)] backdrop-blur-xl">
                <div className="rounded-[2.4rem] border border-sky-200/10 bg-[#07182a] p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-200">Current Focus</p>
                  <h3 className="mt-5 text-4xl font-black leading-tight text-white">Seeking Coop Training Opportunities</h3>
                  <div className="mt-12 grid grid-cols-2 gap-3">
                    <div className="rounded-3xl border border-sky-200/10 bg-white/[0.055] p-4">
                      <p className="text-3xl font-black text-sky-200">6</p>
                      <p className="mt-1 text-sm text-slate-400">Selected Projects</p>
                    </div>
                    <div className="rounded-3xl border border-sky-200/10 bg-white/[0.055] p-4">
                      <p className="text-3xl font-black text-sky-200">CV</p>
                      <p className="mt-1 text-sm text-slate-400">Ready to View</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="profile" className="py-20">
            <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
              <motion.div {...fade} className="rounded-[2.5rem] border border-sky-200/10 bg-white/[0.045] p-8 backdrop-blur-xl">
                <Label>Education</Label>
                <h2 className="mt-5 text-4xl font-black leading-tight text-white">Bachelor of Artificial Intelligence</h2>
                <p className="mt-5 leading-8 text-slate-300">Imam Abdulrahman Bin Faisal University, Dammam, Saudi Arabia</p>
                <div className="mt-7 inline-flex rounded-full border border-sky-200/20 bg-sky-300/10 px-5 py-3 font-black text-sky-100">GPA 4.64 / 5.0</div>
              </motion.div>

              <motion.div {...fade} transition={{ duration: 0.55, delay: 0.08 }} className="rounded-[2.5rem] border border-sky-200/10 bg-gradient-to-br from-sky-950/55 to-slate-950/25 p-8 backdrop-blur-xl">
                <Label>Profile</Label>
                <p className="mt-5 text-lg leading-9 text-slate-300">
                  Specialized in Artificial Intelligence with focus on Machine Learning and NLP. Applied data preprocessing, model training, and evaluation techniques through practical projects.
                </p>
                <p className="mt-6 rounded-[2rem] border border-cyan-200/10 bg-cyan-200/8 p-5 leading-8 text-cyan-50">
                  Passionate about exploring emerging technologies and continuous advancements in the field of Artificial Intelligence.
                </p>
              </motion.div>
            </div>
          </section>

          <section id="projects" className="py-20">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <Label>Selected Work</Label>
                <h2 className="mt-4 text-5xl font-black tracking-tight text-white md:text-6xl">Projects</h2>
              </div>
              <p className="max-w-md leading-7 text-slate-400">A cleaner project section with balanced cards, stronger spacing, and direct GitHub links.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
              {projects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="group flex min-h-[300px] flex-col justify-between rounded-[2.2rem] border border-sky-200/10 bg-white/[0.045] p-6 shadow-[0_20px_70px_rgba(2,8,23,0.22)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-300/35 hover:bg-sky-300/[0.075]"
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <p className="rounded-full border border-sky-200/15 bg-sky-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-sky-200">{project.type}</p>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950/35 text-sky-200 transition group-hover:bg-sky-300 group-hover:text-slate-950">
                        <Icon name="arrow" className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="text-2xl font-black leading-tight text-white transition group-hover:text-sky-100">{project.title}</h3>
                    <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <Chip key={tag}>{tag}</Chip>)}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          <section id="skills" className="py-20">
            <div className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
              <div>
                <Label>Capabilities</Label>
                <h2 className="mt-4 text-5xl font-black tracking-tight text-white">Skills Cloud</h2>
                <p className="mt-5 leading-8 text-slate-400">Tools and technologies used across academic and practical projects.</p>
              </div>
              <div className="flex flex-wrap gap-3 rounded-[2.5rem] border border-sky-200/10 bg-white/[0.045] p-7 backdrop-blur-xl">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.025 }}
                    className="rounded-full border border-sky-200/10 bg-white/[0.05] px-5 py-3 font-semibold text-slate-200 transition hover:border-sky-300/35 hover:bg-sky-300/10 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </section>

          <section id="soft-skills" className="py-16">
            <div className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
              <div>
                <Label>Personal Strengths</Label>
                <h2 className="mt-4 text-5xl font-black tracking-tight text-white">Soft Skills</h2>
                <p className="mt-5 leading-8 text-slate-400">Skills that support collaboration, learning, and problem solving in technical projects.</p>
              </div>
              <div className="grid gap-3 rounded-[2.5rem] border border-sky-200/10 bg-white/[0.045] p-7 backdrop-blur-xl sm:grid-cols-2">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="rounded-3xl border border-sky-200/15 bg-sky-300/[0.075] px-5 py-4 font-semibold text-sky-50"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="cv" className="py-20">
            <motion.div {...fade} className="relative overflow-hidden rounded-[3rem] border border-sky-200/10 bg-gradient-to-br from-sky-300/16 via-blue-500/10 to-slate-950/60 p-8 backdrop-blur-xl md:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-300/25 blur-3xl" />
              <div className="relative z-10 grid gap-8 xl:grid-cols-[1fr_360px] xl:items-center">
                <div>
                  <Label>Resume</Label>
                  <h2 className="mt-4 text-5xl font-black leading-none tracking-tight text-white md:text-6xl">View my CV</h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    A dedicated CV area makes it easier for recruiters to open or download the resume without searching through the page.
                  </p>
                </div>
                <div className="grid gap-3 rounded-[2rem] border border-sky-200/10 bg-slate-950/35 p-4">
                  <ContactAction href={resumeLink} icon="file" label="Open CV" />
                  <ContactAction href={resumeLink} icon="file" label="Download CV" download />
                </div>
              </div>
            </motion.div>
          </section>

          <section className="py-20">
            <div className="grid gap-6 xl:grid-cols-2">
              <motion.div {...fade} className="rounded-[2.5rem] border border-sky-200/10 bg-white/[0.045] p-8 backdrop-blur-xl">
                <Label>Certificates</Label>
                <h2 className="mt-4 text-4xl font-black text-white">Learning Path</h2>
                <div className="mt-7 space-y-4">
                  {certificates.map((certificate) => (
                    <div key={certificate} className="rounded-3xl border border-sky-200/10 bg-white/[0.04] p-5 text-slate-300">{certificate}</div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fade} transition={{ duration: 0.55, delay: 0.08 }} className="rounded-[2.5rem] border border-sky-200/10 bg-white/[0.045] p-8 backdrop-blur-xl">
                <Label>Volunteer Experience</Label>
                <h2 className="mt-4 text-4xl font-black text-white">Community Work</h2>
                <div className="mt-7 space-y-4">
                  <div className="rounded-3xl border border-sky-200/10 bg-white/[0.04] p-5">
                    <h3 className="font-black text-white">Content Writer Volunteer</h3>
                    <p className="mt-2 text-sky-200">National Center for Non-Profit Sector — 48 hours</p>
                    <p className="mt-3 text-slate-400">Created written content for community-focused initiatives.</p>
                  </div>
                  <div className="rounded-3xl border border-sky-200/10 bg-white/[0.04] p-5">
                    <h3 className="font-black text-white">Community Support & Media Volunteer</h3>
                    <p className="mt-2 text-sky-200">National Center for Non-Profit Sector — 40 hours</p>
                    <p className="mt-3 text-slate-400">Supported community initiatives and assisted in promoting programs via social media.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="contact" className="py-24">
            <div className="relative overflow-hidden rounded-[3rem] border border-sky-200/20 bg-sky-300 p-8 text-slate-950 shadow-[0_30px_95px_rgba(14,165,233,0.22)] md:p-12">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-100/70 blur-3xl" />
              <div className="relative z-10">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-950/70">Contact</p>
                <h2 className="mt-4 max-w-3xl text-5xl font-black leading-none tracking-tight md:text-7xl">Let’s build something intelligent.</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-800">
                  Interested in AI projects, creative technologies, and opportunities that combine innovation, research, and real-world problem solving.
                </p>
                <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <a href="mailto:Janahds2005@gmail.com" className="flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-5 py-4 font-black text-white transition hover:-translate-y-1">
                    <Icon name="mail" /> Email
                  </a>
                  <a href="https://github.com/jannHds" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-2xl border border-slate-950/20 px-5 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-white/40">
                    <Icon name="github" /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/jana-algarni-23a679310" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-2xl border border-slate-950/20 px-5 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-white/40">
                    <Icon name="linkedin" /> LinkedIn
                  </a>
                  <a href="https://wa.me/966550364104" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-2xl border border-slate-950/20 px-5 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-white/40">
                    <Icon name="whatsapp" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-sky-200/10 py-8 text-sm text-slate-500">
            © 2026 Jana Hassan Algarni — AI Portfolio
          </footer>
        </div>
      </div>
    </main>
  );
}
