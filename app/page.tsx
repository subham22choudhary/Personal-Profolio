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
  { label: "Frontend", items: "HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, SCSS, Webpack" },
  { label: "Backend", items: "Node.js, Express.js, PHP, Python" },
  { label: "Agentic & GenAI", items: "Agentic AI Systems, LLMs, ChatGPT/Claude API, Prompt Engineering, LLM Orchestration, RAG Pipelines, Autonomous Agents, Tool-Calling APIs, Generative AI Pipelines" },
  { label: "AI Data & Search", items: "Vector Databases, Embeddings, Semantic Search" },
  { label: "Cloud & DevOps", items: "AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Ansible, CI/CD Pipelines" },
  { label: "Databases & Tools", items: "MongoDB, MySQL, Redux, RESTful APIs, Git, Figma, Webflow" },
  { label: "CRM & CMS", items: "HubSpot, Salesforce (Pardot Lightning), WordPress, Shopify" },
];

const education = [
  { degree: "B.Tech", school: "Kalinga Institute of Industrial Technology", loc: "Bhubaneswar, OD, India", period: "Jul 2019 – Jun 2022" },
  { degree: "Diploma", school: "Nettur Technical Training Foundation", loc: "Bangalore, KA, India", period: "Jul 2014 – Jun 2017" },
  { degree: "Class X", school: "D.A.V. Public School, Bistupur", loc: "Jamshedpur, JH, India", period: "Mar 2003 – Mar 2014" },
];

function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <span style={{ color: "#00FF87", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{text}</span>
      <div style={{ flex: 1, height: "1px", background: "#1A1D24" }} />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: "#080A0F", color: "#E8E6E1", minHeight: "100vh" }}>
      {/* Grid bg */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.025, backgroundImage: "linear-gradient(#00FF87 1px, transparent 1px), linear-gradient(90deg, #00FF87 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* ── HERO ── */}
      <section style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "100px 7vw 60px" }}>
        <p style={{ color: "#00FF87", fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "24px", animation: "fadeUp 0.6s ease both", animationDelay: "0.1s" }}>
          Available for opportunities
        </p>
        <h1 style={{ fontSize: "clamp(52px, 10vw, 100px)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-2px", animation: "fadeUp 0.6s ease both", animationDelay: "0.2s" }}>
          <span style={{ display: "block" }}>SUBHAM</span>
          <span style={{ display: "block", WebkitTextStroke: "1.5px #E8E6E1", color: "transparent" }}>CHOUDHARY</span>
        </h1>
        <p style={{ fontSize: "17px", color: "#8A8880", marginTop: "28px", maxWidth: "580px", lineHeight: 1.7, animation: "fadeUp 0.6s ease both", animationDelay: "0.35s" }}>
          AI Engineer &amp; Full-Stack Developer. 6+ years building{" "}
          <span style={{ color: "#00FF87" }}>Agentic AI systems</span>, RAG pipelines, and LLM-powered products at enterprise scale.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "40px", animation: "fadeUp 0.6s ease both", animationDelay: "0.5s" }}>
          <Link href="/contact"
            style={{ padding: "14px 28px", background: "#00FF87", color: "#000", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700, transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Get In Touch →
          </Link>
          <a href="/Subham_Choudhary_Resume.pdf" download
            style={{ padding: "14px 28px", border: "1px solid #00FF87", color: "#00FF87", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#00FF87"; el.style.color = "#000"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#00FF87"; }}
          >
            Download Resume ↓
          </a>
          <a href="tel:+918210219654"
            style={{ padding: "14px 28px", border: "1px solid #2A2D35", color: "#8A8880", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#E8E6E1"; el.style.color = "#E8E6E1"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "#2A2D35"; el.style.color = "#8A8880"; }}
          >
            +91 821-021-9654
          </a>
        </div>

        <div style={{ display: "flex", gap: "24px", marginTop: "28px", animation: "fadeUp 0.6s ease both", animationDelay: "0.6s" }}>
          {[{ label: "LinkedIn ↗", href: "#" }, { label: "GitHub ↗", href: "#" }].map(l => (
            <a key={l.label} href={l.href}
              style={{ fontSize: "10px", color: "#8A8880", letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid transparent", transition: "all 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.color = "#00FF87"; el.style.borderBottomColor = "#00FF87"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.color = "#8A8880"; el.style.borderBottomColor = "transparent"; }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.3 }}>
          <div style={{ width: "1px", height: "48px", background: "#E8E6E1", animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionLabel text="00 — About" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {[
              "6+ years spanning full-stack web development and AI engineering — specializing in Agentic AI systems, LLM integration, and Generative AI pipeline architecture.",
              "Transitioned from senior web development into AI engineering, bringing production-grade frontend/backend expertise alongside hands-on LLM deployment.",
              "Proven ability to design and ship autonomous AI agents, RAG pipelines, and multi-step LLM orchestration at enterprise scale.",
              "Bridges AI capabilities and real-world product requirements — from prompt engineering to cloud deployment on AWS.",
            ].map((text, i) => (
              <p key={i} className="reveal"
                style={{ fontSize: "13px", color: "#8A8880", lineHeight: 1.9, borderLeft: "2px solid #1A1D24", paddingLeft: "16px", cursor: "default", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderLeftColor = "#00FF87"; el.style.color = "#E8E6E1"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderLeftColor = "#1A1D24"; el.style.color = "#8A8880"; }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionLabel text="01 — Experience" />
          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "56px" }}>
            {experience.map((job, i) => (
              <div key={i} className="reveal" style={{ display: "grid", gridTemplateColumns: "clamp(140px,18%,210px) 1fr", gap: "40px" }}>
                <div style={{ paddingTop: "2px" }}>
                  <p style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "8px" }}>{job.period}</p>
                  <h3 style={{ fontSize: "19px", fontWeight: 900, letterSpacing: "-0.5px" }}>{job.company}</h3>
                  <p style={{ fontSize: "12px", color: "#8A8880", marginTop: "5px" }}>{job.role}</p>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: "13px", color: "#8A8880", lineHeight: 1.75, display: "flex", gap: "12px" }}>
                      <span style={{ color: "#00FF87", marginTop: "2px", flexShrink: 0 }}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionLabel text="02 — Skills" />
          <div style={{ marginTop: "48px" }}>
            {skills.map((s, i) => (
              <div key={i} className="reveal" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "32px", alignItems: "baseline", borderBottom: "1px solid #12151C", paddingBottom: "20px", marginBottom: "20px" }}>
                <span style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.3em", textTransform: "uppercase" }}>{s.label}</span>
                <span style={{ fontSize: "13px", color: "#8A8880", lineHeight: 1.9 }}>{s.items}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT ── */}
      <section id="project" style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionLabel text="03 — Project" />
          <div className="reveal" style={{ marginTop: "48px", border: "1px solid #1A1D24", padding: "40px", transition: "border-color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#00FF87")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#1A1D24")}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
              <div>
                <h3 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.5px" }}>Procon</h3>
                <p style={{ fontSize: "13px", color: "#8A8880", marginTop: "4px" }}>Full-Stack Professional Ordering Platform</p>
              </div>
              <a href="#" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8880", border: "1px solid #2A2D35", padding: "8px 16px", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#00FF87"; el.style.color = "#00FF87"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "#2A2D35"; el.style.color = "#8A8880"; }}
              >
                View ↗
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {["Next.js", "Supabase", "PostgreSQL", "JWT", "Google Auth", "Stripe API", "AWS"].map((t) => (
                <span key={t} style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 12px", background: "#0D1017", border: "1px solid #1A1D24", color: "#8A8880" }}>{t}</span>
              ))}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "End-to-end book ordering platform with JWT and Google Auth, seamless Stripe payment integration",
                "Scalable relational backend in Supabase (PostgreSQL) with Row Level Security and real-time subscriptions",
                "Full order lifecycle management from cart to payment confirmation via RESTful APIs",
              ].map((b, i) => (
                <li key={i} style={{ fontSize: "13px", color: "#8A8880", display: "flex", gap: "12px" }}>
                  <span style={{ color: "#00FF87", marginTop: "2px", flexShrink: 0 }}>▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionLabel text="04 — Education" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginTop: "48px" }}>
            {education.map((e, i) => (
              <div key={i} className="reveal"
                style={{ border: "1px solid #1A1D24", padding: "28px", transition: "border-color 0.3s", cursor: "default" }}
                onMouseEnter={e2 => (e2.currentTarget.style.borderColor = "#00FF87")}
                onMouseLeave={e2 => (e2.currentTarget.style.borderColor = "#1A1D24")}
              >
                <p style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "8px" }}>{e.period}</p>
                <p style={{ fontWeight: 900, fontSize: "18px", letterSpacing: "-0.5px" }}>{e.degree}</p>
                <p style={{ fontSize: "12px", color: "#8A8880", marginTop: "6px" }}>{e.school}</p>
                <p style={{ fontSize: "11px", color: "#4A4D55", marginTop: "4px" }}>{e.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA STRIP ── */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C", background: "rgba(0,255,135,0.02)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
          <p style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.4em", textTransform: "uppercase" }}>Let's work together</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1 }}>
            Have a project in mind?
          </h2>
          <p style={{ fontSize: "14px", color: "#8A8880", maxWidth: "460px", lineHeight: 1.8 }}>
            Whether it's building intelligent AI systems or shipping world-class web products — let's connect.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
            <Link href="/contact"
              style={{ padding: "14px 32px", background: "#00FF87", color: "#000", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700, transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Contact Me →
            </Link>
            <a href="/Subham_Choudhary_Resume.pdf" download
              style={{ padding: "14px 32px", border: "1px solid #2A2D35", color: "#8A8880", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "#00FF87"; el.style.color = "#00FF87"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "#2A2D35"; el.style.color = "#8A8880"; }}
            >
              View Resume ↓
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.2); }
        }
        @media (max-width: 640px) {
          section > div > div[style*="grid-template-columns: clamp"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
