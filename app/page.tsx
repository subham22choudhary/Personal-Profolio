"use client";

import { useEffect } from "react";
import Link from "next/link";

const experience = [
  {
    company: "Cotiviti",
    role: "Software Engineer - II",
    period: "Feb 2026 – Present",
    bullets: [
      "Designing Agentic AI processes to autonomously process data and orchestrate intelligent tasks with LLMs",
      "Multi-agent systems, tool-calling APIs, and structured prompt engineering of complex healthcare data pipelines",
      "RAG pipeline optimization via vector databases, embeddings, and semantic search for grounded AI answers",
      "Partnering with product and data science teams to scale Generative AI solutions in production",
    ],
  },
  {
    company: "Innominds",
    role: "Senior Web Developer",
    period: "Sept 2025 – Feb 2026",
    bullets: [
      "Designed Agentic AI systems using LLMs for autonomous multi-step task planning and execution",
      "Built autonomous agents with context management, API interactions, and workflow automation via ChatGPT/Claude APIs",
      "Scaled Generative AI pipelines across data ingestion, inference, evaluation, and production deployment",
      "RESTful API + React Charts dashboards that reduced response times by 25%",
      "Led HubSpot site management with responsive React.js, HubSpot CMS, and Shopify UIs",
    ],
  },
  {
    company: "HighRadius",
    role: "Web Developer - II",
    period: "Jul 2022 – Aug 2025",
    bullets: [
      "Built RAG pipelines with embeddings, vector databases, and semantic search",
      "No-code content platform (React.js) enabling 800+ blog publications with 30% efficiency gain",
      "Deployed HighRadius website on AWS (S3, EC2) with scalable backend and database hosting",
      "Introduced Google Auth for 300K+ users with secure, seamless authentication",
      "3 years HubSpot experience: web pages, form workflows, API data management, and CRM integration",
    ],
  },
  {
    company: "Fidelity National Financial",
    role: "Analyst",
    period: "Jun 2017 – Apr 2019",
    bullets: [
      "Built underwriting module UI with React.js & Redux — 30% decrease in page load time via code splitting",
      "Risk assessment features with 40% faster processing through React.js and API integration",
      "React.memo and useCallback optimizations; WCAG accessibility via ARIA roles and semantic HTML",
    ],
  },
];

const skills = [
  {
    label: "Frontend",
    items:
      "HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, SCSS, Webpack",
  },
  {
    label: "Backend",
    items: "Node.js, Express.js, PHP, Python",
  },
  {
    label: "Agentic & GenAI",
    items:
      "Agentic AI Systems, LLMs, ChatGPT/Claude API, Prompt Engineering, LLM Orchestration, RAG Pipelines, Autonomous Agents, Tool-Calling APIs, Generative AI Pipelines",
  },
  {
    label: "AI Data & Search",
    items: "Vector Databases, Embeddings, Semantic Search",
  },
  {
    label: "Cloud & DevOps",
    items:
      "AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Ansible, CI/CD Pipelines",
  },
  {
    label: "Databases & Tools",
    items:
      "MongoDB, MySQL, Redux, RESTful APIs, Git, Figma, Webflow",
  },
  {
    label: "CRM & CMS",
    items:
      "HubSpot, Salesforce (Pardot Lightning), WordPress, Shopify",
  },
];

const education = [
  {
    degree: "B.Tech",
    school: "Kalinga Institute of Industrial Technology",
    loc: "Bhubaneswar, OD, India",
    period: "Jul 2019 – Jun 2022",
  },
  {
    degree: "Diploma",
    school: "Nettur Technical Training Foundation",
    loc: "Bangalore, KA, India",
    period: "Jul 2014 – Jun 2017",
  },
  {
    degree: "Class X",
    school: "D.A.V. Public School, Bistupur",
    loc: "Jamshedpur, JH, India",
    period: "Mar 2003 – Mar 2014",
  },
];

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="section-label">
      <span>{text}</span>
      <div />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="portfolio-page">
      {/* Grid background */}
      <div className="grid-background" />

      {/* HERO */}
      <section className="hero-section">
        <p className="availability">
          Available for opportunities
        </p>

        <h1 className="hero-title">
          <span>SUBHAM</span>
          <span className="hero-title-outline">CHOUDHARY</span>
        </h1>

        <p className="hero-description">
          AI Engineer &amp; Full-Stack Developer. 6+ years building{" "}
          <span>Agentic AI systems</span>, RAG pipelines, and LLM-powered
          products at enterprise scale.
        </p>

        {/* CTAs */}
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            Get In Touch →
          </Link>

          <a
            href="/Subham_Choudhary_Resume.pdf"
            download
            className="btn btn-outline"
          >
            Download Resume ↓
          </a>

          <a
            href="https://wa.me/918210219654"
            className="btn btn-secondary"
          >
            +91 821-021-9654
          </a>
        </div>

        {/* Social links */}
        <div className="social-links">
          {[
            {
              label: "LinkedIn ↗",
              href: "https://www.linkedin.com/in/subhamchoudhary",
            },
            {
              label: "GitHub ↗",
              href: "https://github.com/subham22choudhary?tab=repositories",
            },
          ].map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="content-section">
        <div className="content-container">
          <SectionLabel text="00 — About" />

          <div className="about-grid">
            {[
              "6+ years spanning full-stack web development and AI engineering — specializing in Agentic AI systems, LLM integration, and Generative AI pipeline architecture.",
              "Transitioned from senior web development into AI engineering, bringing production-grade frontend/backend expertise alongside hands-on LLM deployment.",
              "Proven ability to design and ship autonomous AI agents, RAG pipelines, and multi-step LLM orchestration at enterprise scale.",
              "Bridges AI capabilities and real-world product requirements — from prompt engineering to cloud deployment on AWS.",
            ].map((text, i) => (
              <p key={i} className="about-item reveal">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="content-section">
        <div className="content-container">
          <SectionLabel text="01 — Experience" />

          <div className="experience-list">
            {experience.map((job, i) => (
              <div key={i} className="experience-item reveal">
                <div className="experience-meta">
                  <p className="experience-period">{job.period}</p>

                  <h3>{job.company}</h3>

                  <p className="experience-role">{job.role}</p>
                </div>

                <ul className="experience-bullets">
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>
                      <span>▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="content-section">
        <div className="content-container">
          <SectionLabel text="02 — Skills" />

          <div className="skills-list">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item reveal">
                <span className="skill-label">{skill.label}</span>

                <span className="skill-items">{skill.items}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section id="project" className="content-section">
        <div className="content-container">
          <SectionLabel text="03 — Project" />

          <div className="project-card reveal">
            <div className="project-header">
              <div>
                <h3>Procon</h3>

                <p>Full-Stack Professional Ordering Platform</p>
              </div>

              <a
                href="https://procon.inteliglo.com/"
                className="project-link"
              >
                View ↗
              </a>
            </div>

            <div className="tech-tags">
              {[
                "Next.js",
                "Supabase",
                "PostgreSQL",
                "JWT",
                "Google Auth",
                "Stripe API",
                "AWS",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <ul className="project-bullets">
              {[
                "End-to-end book ordering platform with JWT and Google Auth, seamless Stripe payment integration",
                "Scalable relational backend in Supabase (PostgreSQL) with Row Level Security and real-time subscriptions",
                "Full order lifecycle management from cart to payment confirmation via RESTful APIs",
              ].map((bullet, i) => (
                <li key={i}>
                  <span>▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="content-section">
        <div className="content-container">
          <SectionLabel text="04 — Education" />

          <div className="education-grid">
            {education.map((item, i) => (
              <div key={i} className="education-card reveal">
                <p className="education-period">{item.period}</p>

                <p className="education-degree">{item.degree}</p>

                <p className="education-school">{item.school}</p>

                <p className="education-location">{item.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-section">
        <div className="contact-container">
          <p className="contact-label">Let's work together</p>

          <h2>Have a project in mind?</h2>

          <p className="contact-description">
            Whether it's building intelligent AI systems or shipping
            world-class web products — let's connect.
          </p>

          <div className="contact-actions">
            <Link href="/contact" className="btn btn-primary contact-btn">
              Contact Me →
            </Link>

            <a
              href="/Subham_Choudhary_Resume.pdf"
              download
              className="btn btn-secondary contact-btn"
            >
              View Resume ↓
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}