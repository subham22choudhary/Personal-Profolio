"use client";
import { useState } from "react";

// ─── SUPABASE CONFIG ───────────────────────────────────────────────────────────
// Replace these with your actual Supabase project URL and anon key
const SUPABASE_URL = "https://YOUR_PROJECT_ID.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
// Table name in your Supabase database
const TABLE_NAME = "contacts";
// ──────────────────────────────────────────────────────────────────────────────

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <span style={{ color: "#00FF87", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
        {text}
      </span>
      <div style={{ flex: 1, height: "1px", background: "#1A1D24" }} />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in Name, Email, and Message.");
      return;
    }
    setError("");
    setState("submitting");

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setState("success");

      // Auto-trigger resume download after successful submission
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/Subham_Choudhary_Resume.pdf";
        link.download = "Subham_Choudhary_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 800);

    } catch (err) {
      setState("error");
      setError("Something went wrong. Please try again or email directly.");
    }
  };

  return (
    <main style={{ background: "#080A0F", color: "#E8E6E1", minHeight: "100vh" }}>
      {/* Grid bg */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.025, backgroundImage: "linear-gradient(#00FF87 1px, transparent 1px), linear-gradient(90deg, #00FF87 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div style={{ position: "relative", zIndex: 10, padding: "120px 7vw 80px", maxWidth: "1000px", margin: "0 auto" }}>
        <SectionLabel text="05 — Contact" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "60px", marginTop: "56px", alignItems: "start" }}>

          {/* Left — info */}
          <div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: "20px" }}>
              Let's build something<br />
              <span style={{ color: "#00FF87" }}>remarkable.</span>
            </h1>
            <p style={{ fontSize: "13px", color: "#8A8880", lineHeight: 1.9, marginBottom: "36px" }}>
              Fill out the form and your resume download will begin automatically after submission.
              I typically respond within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Email", value: "subham.choudhary.fullstack@gmail.com", href: "mailto:subham.choudhary.fullstack@gmail.com" },
                { label: "Phone", value: "+91 821-021-9654", href: "tel:+918210219654" },
                { label: "LinkedIn", value: "linkedin.com/in/subham", href: "#" },
                { label: "GitHub", value: "github.com/subham", href: "#" },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "4px" }}>{item.label}</p>
                  <a href={item.href}
                    style={{ fontSize: "13px", color: "#8A8880", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#E8E6E1")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#8A8880")}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Direct download */}
            <div style={{ marginTop: "40px", padding: "20px", border: "1px solid #1A1D24", background: "rgba(0,255,135,0.02)" }}>
              <p style={{ fontSize: "11px", color: "#8A8880", lineHeight: 1.7, marginBottom: "14px" }}>
                Prefer to download the resume directly without submitting the form?
              </p>
              <a href="/Subham_Choudhary_Resume.pdf" download
                style={{ fontSize: "10px", color: "#00FF87", border: "1px solid #00FF87", padding: "8px 18px", textDecoration: "none", letterSpacing: "0.2em", textTransform: "uppercase", display: "inline-block", transition: "all 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#00FF87"; el.style.color = "#000"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#00FF87"; }}
              >
                Download Resume ↓
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {state === "success" ? (
              <SuccessCard />
            ) : (
              <div style={{ border: "1px solid #1A1D24", padding: "40px" }}>
                <p style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "28px" }}>
                  Send a Message
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ fontSize: "10px", color: "#8A8880", letterSpacing: "0.25em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                        Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                        style={{ display: "block", width: "100%" }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "10px", color: "#8A8880", letterSpacing: "0.25em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                        Phone
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        className="form-input"
                        style={{ display: "block", width: "100%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "10px", color: "#8A8880", letterSpacing: "0.25em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="form-input"
                      style={{ display: "block", width: "100%" }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "10px", color: "#8A8880", letterSpacing: "0.25em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className="form-input"
                      style={{ display: "block", width: "100%", resize: "vertical", fontFamily: "inherit" }}
                    />
                  </div>

                  {error && (
                    <p style={{ fontSize: "12px", color: "#FF4757", padding: "10px 14px", border: "1px solid rgba(255,71,87,0.3)", background: "rgba(255,71,87,0.05)" }}>
                      {error}
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={state === "submitting"}
                    style={{
                      padding: "15px 28px",
                      background: state === "submitting" ? "#1A1D24" : "#00FF87",
                      color: state === "submitting" ? "#8A8880" : "#000",
                      border: "none",
                      fontSize: "11px",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      cursor: state === "submitting" ? "not-allowed" : "pointer",
                      transition: "all 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={e => { if (state !== "submitting") e.currentTarget.style.opacity = "0.85"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
                  >
                    {state === "submitting" ? (
                      <>
                        <span style={{ width: "14px", height: "14px", border: "2px solid #8A8880", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                        Sending...
                      </>
                    ) : (
                      "Send Message & Get Resume →"
                    )}
                  </button>

                  <p style={{ fontSize: "11px", color: "#4A4D55", textAlign: "center" }}>
                    ✦ Resume downloads automatically after submission
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

function SuccessCard() {
  return (
    <div style={{
      border: "1px solid #00FF87",
      padding: "48px 40px",
      background: "rgba(0,255,135,0.03)",
      textAlign: "center",
      animation: "fadeUp 0.5s ease both",
    }}>
      <div style={{ fontSize: "40px", marginBottom: "20px" }}>✓</div>
      <h3 style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "-0.5px", color: "#00FF87", marginBottom: "12px" }}>
        Message Sent!
      </h3>
      <p style={{ fontSize: "13px", color: "#8A8880", lineHeight: 1.8, marginBottom: "24px" }}>
        Thank you for reaching out. Your resume download should have started automatically.
        I'll be in touch within 24 hours.
      </p>
      <a href="/Subham_Choudhary_Resume.pdf" download
        style={{ fontSize: "10px", color: "#000", background: "#00FF87", padding: "10px 24px", textDecoration: "none", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, display: "inline-block", transition: "opacity 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        Download Again ↓
      </a>
    </div>
  );
}
