"use client";
import { useEffect } from "react";

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
    <div className="flex items-center gap-4">
      <span style={{ color: "#00FF87", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase" }}>{text}</span>
      <div style={{ flex: 1, height: "1px", background: "#1A1D24" }} />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(24px)";
      (el as HTMLElement).style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: "#080A0F", color: "#E8E6E1", minHeight: "100vh", fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
      {/* Grid bg */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.025, backgroundImage: "linear-gradient(#00FF87 1px, transparent 1px), linear-gradient(90deg, #00FF87 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* ── HERO ── */}
      <section style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 7vw 60px" }}>
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "40px", animation: "fadeUp 0.6s ease both", animationDelay: "0.5s" }}>
          <a href="mailto:subham.choudhary.fullstack@gmail.com"
            style={{ padding: "12px 24px", border: "1px solid #00FF87", color: "#00FF87", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = "#00FF87"; (e.target as HTMLElement).style.color = "#000"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "#00FF87"; }}>
            Email Me
          </a>
          <a href="tel:+918210219654"
            style={{ padding: "12px 24px", border: "1px solid #2A2D35", color: "#8A8880", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "#E8E6E1"; (e.target as HTMLElement).style.color = "#E8E6E1"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "#2A2D35"; (e.target as HTMLElement).style.color = "#8A8880"; }}>
            +91 821-021-9654
          </a>
        </div>
        <div style={{ display: "flex", gap: "24px", marginTop: "28px", animation: "fadeUp 0.6s ease both", animationDelay: "0.6s" }}>
          {[{ label: "LinkedIn ↗", href: "https://www.linkedin.com/in/subhamchoudhary/" }, { label: "GitHub ↗", href: "https://github.com/subham22choudhary/" }].map(l => (
            <a key={l.label} href={l.href} style={{ fontSize: "10px", color: "#8A8880", letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid transparent", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "#00FF87"; (e.target as HTMLElement).style.borderBottomColor = "#00FF87"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "#8A8880"; (e.target as HTMLElement).style.borderBottomColor = "transparent"; }}>
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── SUMMARY ── */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "960px" }}>
          <SectionLabel text="00 — About" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {[
              "6+ years spanning full-stack web development and AI engineering — specializing in Agentic AI systems, LLM integration, and Generative AI pipeline architecture.",
              "Transitioned from senior web development into AI engineering, bringing production-grade frontend/backend expertise alongside hands-on LLM deployment.",
              "Proven ability to design and ship autonomous AI agents, RAG pipelines, and multi-step LLM orchestration at enterprise scale.",
              "Bridges AI capabilities and real-world product requirements — from prompt engineering to cloud deployment on AWS.",
            ].map((text, i) => (
              <p key={i} className="reveal" style={{ fontSize: "13px", color: "#8A8880", lineHeight: 1.8, borderLeft: "2px solid #1A1D24", paddingLeft: "16px", cursor: "default" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderLeftColor = "#00FF87"; el.style.color = "#E8E6E1"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderLeftColor = "#1A1D24"; el.style.color = "#8A8880"; }}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "960px" }}>
          <SectionLabel text="01 — Experience" />
          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "56px" }}>
            {experience.map((job, i) => (
              <div key={i} className="reveal" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "40px" }}>
                <div style={{ paddingTop: "2px" }}>
                  <p style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "6px" }}>{job.period}</p>
                  <h3 style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "-0.5px" }}>{job.company}</h3>
                  <p style={{ fontSize: "12px", color: "#8A8880", marginTop: "4px" }}>{job.role}</p>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: "13px", color: "#8A8880", lineHeight: 1.7, display: "flex", gap: "12px" }}>
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
      <section style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "960px" }}>
          <SectionLabel text="02 — Skills" />
          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "0" }}>
            {skills.map((s, i) => (
              <div key={i} className="reveal" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "32px", alignItems: "baseline", borderBottom: "1px solid #12151C", paddingBottom: "20px", marginBottom: "20px" }}>
                <span style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.3em", textTransform: "uppercase" }}>{s.label}</span>
                <span style={{ fontSize: "13px", color: "#8A8880", lineHeight: 1.8 }}>{s.items}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT ── */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "960px" }}>
          <SectionLabel text="03 — Project" />
          <div className="reveal" style={{ marginTop: "48px", border: "1px solid #1A1D24", padding: "40px", transition: "border-color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#00FF87")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#1A1D24")}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
              <div>
                <h3 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.5px" }}>Procon</h3>
                <p style={{ fontSize: "13px", color: "#8A8880", marginTop: "4px" }}>Full-Stack Professional Ordering Platform</p>
              </div>
              <a href="https://procon.inteliglo.com/" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8880", border: "1px solid #2A2D35", padding: "8px 16px", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "#00FF87"; (e.target as HTMLElement).style.color = "#00FF87"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "#2A2D35"; (e.target as HTMLElement).style.color = "#8A8880"; }}>
                View ↗
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {["Next.js", "Supabase", "PostgreSQL", "JWT", "Google Auth", "Stripe API", "AWS"].map((t) => (
                <span key={t} style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 12px", background: "#0D1017", border: "1px solid #1A1D24", color: "#8A8880" }}>{t}</span>
              ))}
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
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
      <section style={{ position: "relative", zIndex: 10, padding: "80px 7vw", borderTop: "1px solid #12151C" }}>
        <div style={{ maxWidth: "960px" }}>
          <SectionLabel text="04 — Education" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginTop: "48px" }}>
            {education.map((e, i) => (
              <div key={i} className="reveal" style={{ border: "1px solid #1A1D24", padding: "28px", transition: "border-color 0.3s", cursor: "default" }}
                onMouseEnter={e2 => (e2.currentTarget.style.borderColor = "#00FF87")}
                onMouseLeave={e2 => (e2.currentTarget.style.borderColor = "#1A1D24")}>
                <p style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "8px" }}>{e.period}</p>
                <p style={{ fontWeight: 900, fontSize: "18px", letterSpacing: "-0.5px" }}>{e.degree}</p>
                <p style={{ fontSize: "12px", color: "#8A8880", marginTop: "6px" }}>{e.school}</p>
                <p style={{ fontSize: "11px", color: "#4A4D55", marginTop: "4px" }}>{e.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ position: "relative", zIndex: 10, padding: "48px 7vw", borderTop: "1px solid #12151C", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <p style={{ fontWeight: 900, fontSize: "18px", letterSpacing: "-0.5px" }}>SUBHAM CHOUDHARY</p>
          <p style={{ fontSize: "10px", color: "#4A4D55", marginTop: "4px", letterSpacing: "0.3em", textTransform: "uppercase" }}>AI Engineer &amp; Full-Stack Developer</p>
        </div>
        <a href="mailto:subham.choudhary.fullstack@gmail.com" style={{ fontSize: "13px", color: "#00FF87", textDecoration: "none" }}>
          subham.choudhary.fullstack@gmail.com
        </a>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          .grid-exp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
