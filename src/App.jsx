import { useState } from "react";

import { motion } from "framer-motion";

import {

  ArrowDown,

  ArrowRight,

  ArrowUpRight,

  Bot,

  Braces,

  Check,

  Code2,

  Globe,

  Link as LinkIcon,

  Mail,

  Menu,

  MessageCircle,

  Send,

  Sparkles,

  Workflow,

  X,

  Zap,

} from "lucide-react";

const services = [

  {

    number: "01",

    icon: Globe,

    title: "Website Development",

    description:

      "Modern, responsive websites and web applications designed to turn visitors into customers.",

    tags: ["React", "Tailwind CSS", "WordPress"],

  },

  {

    number: "02",

    icon: Workflow,

    title: "AI Automation",

    description:

      "Automate repetitive business tasks, connect APIs and create smarter workflows with AI.",

    tags: ["n8n", "API Integration", "Python"],

  },

  {

    number: "03",

    icon: Bot,

    title: "AI Agent Development",

    description:

      "Build practical AI assistants and custom agents for customer support, lead handling and business tasks.",

    tags: ["LLM APIs", "FastAPI", "Python"],

  },

  {

    number: "04",

    icon: Braces,

    title: "Custom Software",

    description:

      "Develop useful digital products with reliable backends, databases and clean interfaces.",

    tags: ["FastAPI", "PostgreSQL", "React"],

  },

];

const projects = [

  {

    number: "01",

    name: "Surprise Delivery",

    category: "E-commerce Application",

    description:

      "A delivery shopping application concept with a React frontend, FastAPI backend and PostgreSQL database.",

    tech: ["React", "FastAPI", "PostgreSQL"],

    icon: "🛍️",

    color: "from-violet-500/20 to-blue-500/10",

    status: "In development",

    href: "",

  },

  {

    number: "02",

    name: "LankaBizAI",

    category: "AI Business Analytics",

    description:

      "An AI-powered business tool concept for analysing customer conversations, identifying potential lost sales and generating follow-up messages.",

    tech: ["Python", "Streamlit", "SQLite"],

    icon: "📊",

    color: "from-cyan-500/20 to-violet-500/10",

    status: "Project showcase",

    href: "",

  },

  {

    number: "03",

    name: "DinoAI JobHunter",

    category: "Workflow Automation",

    description:

      "An automation workflow concept for processing CVs, discovering relevant jobs and tracking application progress with approval steps.",

    tech: ["n8n", "AI APIs", "Google Sheets"],

    icon: "🤖",

    color: "from-blue-500/20 to-indigo-500/10",

    status: "Workflow project",

    href: "",

  },

  {

    number: "04",

    name: "Tamil Wedding Invitation",

    category: "Web Design & Development",

    description:

      "A wedding invitation website concept featuring Tamil cultural details, responsive layouts and an elegant visual experience.",

    tech: ["React", "CSS", "Framer Motion"],

    icon: "💍",

    color: "from-pink-500/20 to-violet-500/10",

    status: "Website project",

    href: "",

  },

];

const skills = [

  "React",

  "JavaScript",

  "HTML & CSS",

  "Tailwind CSS",

  "Python",

  "FastAPI",

  "REST APIs",

  "PostgreSQL",

  "MySQL",

  "n8n",

  "AI / LLM APIs",

  "Flutter",

  "WordPress",

  "Git & GitHub",

];

const fadeUp = {

  hidden: { opacity: 0, y: 22 },

  visible: {

    opacity: 1,

    y: 0,

    transition: { duration: 0.55, ease: "easeOut" },

  },

};

function SectionHeading({ eyebrow, title, accent, description }) {

  return (

    <motion.div

      variants={fadeUp}

      initial="hidden"

      whileInView="visible"

      viewport={{ once: true, amount: 0.2 }}

      className="mb-12 max-w-2xl"

    >

      <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-300">

        <Sparkles size={14} />

        {eyebrow}

      </p>

      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">

        {title} <span className="gradient-text">{accent}</span>

      </h2>

      {description && (

        <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">

          {description}

        </p>

      )}

    </motion.div>

  );

}

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  // Replace these sample details with your real contact information.

  const email = "YOUR_EMAIL@example.com";

  const github = "https://github.com/YOUR_GITHUB_USERNAME";

  const linkedin = "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/";

  const whatsapp = ""; // Example: https://wa.me/947XXXXXXXX

  const navLinks = [

    ["Services", "#services"],

    ["Projects", "#projects"],

    ["About", "#about"],

    ["Contact", "#contact"],

  ];

  return (

    <div className="glow min-h-screen overflow-hidden bg-[#080812] text-zinc-100">

      {/* Navigation */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080812]/85 backdrop-blur-xl">

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">

          <a href="#home" className="flex items-center gap-3">

            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 font-black text-white shadow-lg shadow-violet-500/20">

              D.

            </span>

            <span>

              <span className="block font-bold tracking-tight text-white">

                Dinoshan<span className="text-violet-400">.</span>

              </span>

              <span className="block text-[10px] uppercase tracking-[0.17em] text-zinc-500">

                Developer & AI Builder

              </span>

            </span>

          </a>

          <div className="hidden items-center gap-8 md:flex">

            {navLinks.map(([label, href]) => (

              <a

                key={label}

                href={href}

                className="text-sm text-zinc-400 transition hover:text-white"

              >

                {label}

              </a>

            ))}

            <a

              href="#contact"

              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-violet-200"

            >

              Let's Talk <ArrowUpRight className="ml-1 inline" size={15} />

            </a>

          </div>

          <button

            type="button"

            onClick={() => setMenuOpen(!menuOpen)}

            aria-label={menuOpen ? "Close menu" : "Open menu"}

            aria-expanded={menuOpen}

            className="rounded-lg border border-white/10 p-2 text-white md:hidden"

          >

            {menuOpen ? <X size={21} /> : <Menu size={21} />}

          </button>

        </nav>

        {menuOpen && (

          <div className="border-t border-white/10 bg-[#0d0d19] px-5 py-4 md:hidden">

            {navLinks.map(([label, href]) => (

              <a

                key={label}

                href={href}

                onClick={() => setMenuOpen(false)}

                className="block rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5"

              >

                {label}

              </a>

            ))}

          </div>

        )}

      </header>

      <main>

        {/* Hero */}

        <section

          id="home"

          className="relative mx-auto flex min-h-[690px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[760px] lg:px-12"

        >

          <div className="pointer-events-none absolute left-[5%] top-[12%] h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

          <div className="pointer-events-none absolute right-[5%] top-[30%] h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />

          <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

            <motion.div

              initial="hidden"

              animate="visible"

              variants={{

                visible: {

                  transition: { staggerChildren: 0.12 },

                },

              }}

            >

              <motion.div variants={fadeUp}>

                <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-medium text-violet-200">

                  <span className="relative flex h-2 w-2">

                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />

                  </span>

                  Building digital solutions with AI

                </span>

              </motion.div>

              <motion.p

                variants={fadeUp}

                className="mt-8 text-sm font-medium tracking-wide text-zinc-400 sm:text-base"

              >

                Hi, I'm Dinoshan — I build for the future.

              </motion.p>

              <motion.h1

                variants={fadeUp}

                className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl xl:text-[82px]"

              >

                Websites.

                <br />

                <span className="gradient-text">AI Agents.</span>

                <br />

                Automation.

              </motion.h1>

              <motion.p

                variants={fadeUp}

                className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"

              >

                I build modern websites, intelligent AI agents and smart

                automation workflows that help businesses work better and grow

                faster.

              </motion.p>

              <motion.div

                variants={fadeUp}

                className="mt-9 flex flex-wrap gap-3"

              >

                <a

                  href="#projects"

                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/30"

                >

                  Explore My Work

                  <ArrowRight

                    size={17}

                    className="transition group-hover:translate-x-1"

                  />

                </a>

                <a

                  href="#contact"

                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-white/[0.07]"

                >

                  <Mail size={16} />

                  Contact Me

                </a>

              </motion.div>

              <motion.div

                variants={fadeUp}

                className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-500 sm:text-sm"

              >

                <span className="flex items-center gap-2">

                  <Check size={15} className="text-violet-400" />

                  Responsive design

                </span>

                <span className="flex items-center gap-2">

                  <Check size={15} className="text-violet-400" />

                  Practical AI solutions

                </span>

                <span className="flex items-center gap-2">

                  <Check size={15} className="text-violet-400" />

                  Business-focused builds

                </span>

              </motion.div>

            </motion.div>

            {/* Animated code card */}

            <motion.div

              initial={{ opacity: 0, scale: 0.94, y: 24 }}

              animate={{ opacity: 1, scale: 1, y: 0 }}

              transition={{ duration: 0.8, delay: 0.2 }}

              className="relative mx-auto w-full max-w-md"

            >

              <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-violet-600/20 to-blue-500/10 blur-2xl" />

              <div className="glass relative overflow-hidden rounded-3xl p-5 shadow-2xl shadow-black/30 sm:p-7">

                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">

                  <div className="flex gap-2">

                    <span className="h-3 w-3 rounded-full bg-red-400/80" />

                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />

                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />

                  </div>

                  <span className="text-xs text-zinc-500">

                    developer.config

                  </span>

                  <Code2 size={17} className="text-violet-300" />

                </div>

                <div className="space-y-5 py-7 font-mono text-xs leading-6 sm:text-sm">

                  <p className="text-zinc-500">

                    <span className="text-violet-400">const</span>{" "}

                    <span className="text-cyan-300">developer</span> = {"{"}

                  </p>

                  <div className="space-y-3 pl-5">

                    <p>

                      <span className="text-violet-300">name:</span>{" "}

                      <span className="text-emerald-300">'Dinoshan'</span>,

                    </p>

                    <p>

                      <span className="text-violet-300">role:</span>{" "}

                      <span className="text-emerald-300">

                        'AI & Full-Stack'

                      </span>

                      ,

                    </p>

                    <p>

                      <span className="text-violet-300">builds:</span> [

                    </p>

                    <div className="space-y-2 pl-5">

                      <p className="text-emerald-300">'Websites'</p>

                      <p className="text-emerald-300">'AI Agents'</p>

                      <p className="text-emerald-300">'Automations'</p>

                    </div>

                    <p>],</p>

                    <p>

                      <span className="text-violet-300">mindset:</span>{" "}

                      <span className="text-emerald-300">

                        'Solve real problems'

                      </span>

                    </p>

                  </div>

                  <p className="text-zinc-500">{"};"}</p>

                  <div className="rounded-xl border border-violet-400/15 bg-violet-400/[0.05] p-4">

                    <div className="flex items-center gap-2 text-violet-200">

                      <Zap size={16} />

                      <span>Ready to build your next idea?</span>

                    </div>

                    <p className="mt-1 text-xs text-zinc-500">

                      Let's turn your vision into reality.

                    </p>

                  </div>

                </div>

              </div>

              <motion.div

                animate={{ y: [0, -8, 0] }}

                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

                className="glass absolute -left-4 top-20 hidden items-center gap-3 rounded-2xl p-4 shadow-xl sm:flex"

              >

                <span className="rounded-xl bg-violet-500/15 p-2.5 text-violet-300">

                  <Bot size={21} />

                </span>

                <span>

                  <span className="block text-xs font-semibold text-white">

                    AI Solutions

                  </span>

                  <span className="text-[11px] text-zinc-500">

                    Intelligent by design

                  </span>

                </span>

              </motion.div>

              <motion.div

                animate={{ y: [0, 8, 0] }}

                transition={{

                  duration: 4.5,

                  repeat: Infinity,

                  ease: "easeInOut",

                }}

                className="glass absolute -right-3 bottom-20 hidden items-center gap-3 rounded-2xl p-4 shadow-xl sm:flex"

              >

                <span className="rounded-xl bg-blue-500/15 p-2.5 text-blue-300">

                  <Workflow size={21} />

                </span>

                <span>

                  <span className="block text-xs font-semibold text-white">

                    Smart Workflows

                  </span>

                  <span className="text-[11px] text-zinc-500">

                    Automate the routine

                  </span>

                </span>

              </motion.div>

            </motion.div>

          </div>

        </section>

        {/* Technology strip */}

        <section className="border-y border-white/[0.07] bg-white/[0.015]">

          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-5 py-7 text-xs font-medium text-zinc-500 sm:px-8 sm:text-sm lg:gap-x-12">

            <span className="uppercase tracking-[0.18em] text-zinc-600">

              My toolkit

            </span>

            {["React", "Python", "FastAPI", "n8n", "PostgreSQL", "AI APIs"].map(

              (tech) => (

                <span key={tech} className="transition hover:text-violet-300">

                  {tech}

                </span>

              )

            )}

          </div>

        </section>

        {/* Services */}

        <section

          id="services"

          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12"

        >

          <SectionHeading

            eyebrow="What I do"

            title="Services built around"

            accent="your goals."

            description="From your first website to an AI-powered business workflow, I focus on building useful, maintainable digital solutions."

          />

          <div className="grid gap-4 sm:grid-cols-2">

            {services.map((service, i) => {

              const Icon = service.icon;

              return (

                <motion.article

                  key={service.number}

                  variants={fadeUp}

                  initial="hidden"

                  whileInView="visible"

                  viewport={{ once: true, amount: 0.15 }}

                  transition={{ delay: i * 0.08 }}

                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/[0.035] sm:p-8"

                >

                  <div className="flex items-start justify-between">

                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.08] text-violet-300 transition group-hover:bg-violet-400/15">

                      <Icon size={23} />

                    </span>

                    <span className="font-mono text-xs text-zinc-600">

                      {service.number}

                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">

                    {service.title}

                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">

                    {service.description}

                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {service.tags.map((tag) => (

                      <span

                        key={tag}

                        className="rounded-lg border border-white/[0.07] bg-black/20 px-3 py-1.5 text-xs text-zinc-400"

                      >

                        {tag}

                      </span>

                    ))}

                  </div>

                  <a

                    href="#contact"

                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition group-hover:text-violet-200"

                  >

                    Discuss a project

                    <ArrowRight

                      size={15}

                      className="transition group-hover:translate-x-1"

                    />

                  </a>

                </motion.article>

              );

            })}

          </div>

        </section>

        {/* Projects */}

        <section

          id="projects"

          className="border-y border-white/[0.06] bg-white/[0.015]"

        >

          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12">

            <SectionHeading

              eyebrow="Selected work"

              title="Ideas turned into"

              accent="digital projects."

              description="A selection of my development and automation work. Project descriptions reflect their current status; demos can be added when publicly available."

            />

            <div className="grid gap-5 sm:grid-cols-2">

              {projects.map((project, i) => (

                <motion.article

                  key={project.number}

                  variants={fadeUp}

                  initial="hidden"

                  whileInView="visible"

                  viewport={{ once: true, amount: 0.15 }}

                  transition={{ delay: i * 0.08 }}

                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c17] transition hover:border-violet-400/25"

                >

                  <div

                    className={`relative flex min-h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}

                  >

                    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:32px_32px]" />

                    <motion.div

                      whileHover={{ scale: 1.08, rotate: 2 }}

                      transition={{ duration: 0.3 }}

                      className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/15 bg-black/30 text-5xl shadow-2xl backdrop-blur-xl"

                    >

                      {project.icon}

                    </motion.div>

                    <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-medium text-zinc-300 backdrop-blur-md">

                      {project.category}

                    </span>

                    <span className="absolute right-5 top-5 font-mono text-xs text-white/50">

                      {project.number}

                    </span>

                  </div>

                  <div className="p-6 sm:p-7">

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="text-xl font-semibold text-white">

                        {project.name}

                      </h3>

                      <span className="shrink-0 rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] text-zinc-500">

                        {project.status}

                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">

                      {project.description}

                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.tech.map((tech) => (

                        <span

                          key={tech}

                          className="rounded-lg bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400"

                        >

                          {tech}

                        </span>

                      ))}

                    </div>

                    {project.href ? (

                      <a

                        href={project.href}

                        target="_blank"

                        rel="noreferrer"

                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:text-white"

                      >

                        View project <ArrowUpRight size={16} />

                      </a>

                    ) : (

                      <p className="mt-6 text-xs text-zinc-600">

                        Project link can be added when a public demo is ready.

                      </p>

                    )}

                  </div>

                </motion.article>

              ))}

            </div>

          </div>

        </section>

        {/* Skills */}

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>

              <SectionHeading

                eyebrow="Tools & technologies"

                title="The right tools for"

                accent="real solutions."

                description="My toolkit covers modern frontend development, backend APIs, databases and practical AI automation."

              />

              <a

                href="#contact"

                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white"

              >

                Have a project in mind?

                <ArrowRight size={16} />

              </a>

            </div>

            <motion.div

              variants={fadeUp}

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true }}

              className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"

            >

              <div className="mb-6 flex items-center gap-3">

                <span className="rounded-xl bg-blue-500/10 p-3 text-blue-300">

                  <Code2 size={22} />

                </span>

                <div>

                  <h3 className="font-semibold text-white">

                    Technologies I work with

                  </h3>

                  <p className="mt-1 text-xs text-zinc-500">

                    Select tools based on project requirements

                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-2.5">

                {skills.map((skill) => (

                  <span

                    key={skill}

                    className="rounded-xl border border-white/[0.08] bg-black/20 px-3.5 py-2.5 text-sm text-zinc-300 transition hover:border-violet-400/30 hover:text-violet-200"

                  >

                    {skill}

                  </span>

                ))}

              </div>

            </motion.div>

          </div>

        </section>

        {/* About */}

        <section

          id="about"

          className="border-y border-white/[0.06] bg-white/[0.015]"

        >

          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28 lg:px-12">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">

                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/25 to-blue-500/20 blur-2xl" />

                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-violet-400/25 bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-6xl font-bold tracking-tight text-white sm:h-52 sm:w-52">

                  D.

                </div>

                <span className="absolute bottom-5 right-0 rounded-2xl border border-white/10 bg-[#10101e] px-4 py-2 text-xs text-violet-200">

                  Developer & AI Builder

                </span>

              </div>

              <div>

                <SectionHeading

                  eyebrow="A little about me"

                  title="I build with purpose,"

                  accent="not just code."

                  description="I'm Dinoshan, an Information Systems graduate interested in full-stack development, AI-powered products and business automation. I enjoy turning ideas into practical digital solutions with a focus on usability, clarity and maintainability."

                />

                <div className="grid gap-3 sm:grid-cols-2">

                  {[

                    "Business-focused development",

                    "Clean, responsive interfaces",

                    "Practical AI integrations",

                    "Reliable API and database design",

                  ].map((item) => (

                    <div

                      key={item}

                      className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm text-zinc-300"

                    >

                      <Check

                        size={17}

                        className="mt-0.5 shrink-0 text-violet-300"

                      />

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Contact */}

        <section

          id="contact"

          className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12"

        >

          <div className="pointer-events-none absolute inset-x-[15%] top-1/4 h-64 rounded-full bg-violet-600/[0.08] blur-[100px]" />

          <motion.div

            variants={fadeUp}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true }}

            className="glass relative overflow-hidden rounded-3xl p-7 text-center sm:p-12 md:p-16"

          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-200">

              <MessageCircle size={22} />

            </span>

            <p className="relative mt-6 text-xs font-bold uppercase tracking-[0.24em] text-violet-300">

              Let's work together

            </p>

            <h2 className="relative mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">

              Have an idea?

              <br />

              <span className="gradient-text">Let's build it.</span>

            </h2>

            <p className="relative mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">

              Need a website, an AI agent or a business automation workflow?

              Tell me about your project and let's explore the right solution.

            </p>

            <div className="relative mt-9 flex flex-wrap justify-center gap-3">

              <a

                href={`mailto:${email}?subject=${encodeURIComponent("Freelance project enquiry")}`}

                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"

              >

                <Send size={16} />

                Start a Conversation

              </a>

              {whatsapp && (

                <a

                  href={whatsapp}

                  target="_blank"

                  rel="noreferrer"

                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.06]"

                >

                  <MessageCircle size={16} />

                  WhatsApp

                </a>

              )}

            </div>

            <p className="relative mt-5 text-xs text-zinc-600">

              Replace the sample email with your real contact address.

            </p>

          </motion.div>

        </section>

      </main>

      {/* Footer */}

      <footer className="border-t border-white/[0.07]">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

          <a href="#home" className="font-semibold tracking-tight text-white">

            Dinoshan<span className="text-violet-400">.</span>

            <span className="ml-2 text-xs font-normal text-zinc-500">

              AI & Full-Stack Developer

            </span>

          </a>

          <p className="text-xs text-zinc-600">

            © {new Date().getFullYear()} Dinoshan. Built with React.

          </p>

          <div className="flex items-center gap-3">

            <a

              href={github}

              target="_blank"

              rel="noreferrer"

              aria-label="GitHub"

              className="rounded-xl border border-white/[0.08] p-2.5 text-zinc-400 transition hover:border-violet-400/30 hover:text-white"

            >

              <Code2 size={17} />

            </a>

            <a

              href={linkedin}

              target="_blank"

              rel="noreferrer"

              aria-label="LinkedIn"

              className="rounded-xl border border-white/[0.08] p-2.5 text-zinc-400 transition hover:border-violet-400/30 hover:text-white"

            >

              <LinkIcon size={17} />

            </a>

            <a

              href={`mailto:${email}`}

              aria-label="Email"

              className="rounded-xl border border-white/[0.08] p-2.5 text-zinc-400 transition hover:border-violet-400/30 hover:text-white"

            >

              <Mail size={17} />

            </a>

          </div>

        </div>

      </footer>

      <a

        href="#home"

        aria-label="Back to top"

        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#171526]/90 text-white shadow-xl backdrop-blur transition hover:border-violet-400/30"

      >

        <ArrowDown size={17} className="rotate-180" />

      </a>

    </div>

  );

}

export default App;
