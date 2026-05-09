"use client";

export default function Footer() {
  return (
    <footer style={{ position: "relative", background: "#080A0F", overflow: "hidden" }}>
      {/* Wave SVG */}
      <div style={{ position: "relative", height: "120px", marginBottom: "-2px" }}>
        <svg
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", bottom: 0, width: "100%", height: "100%" }}
          preserveAspectRatio="none"
        >
          {/* Wave 3 — deepest, most opaque */}
          <path
            className="wave3"
            d="M0,90 C250,60 450,120 700,80 C900,50 1050,100 1200,85 L1200,120 L0,120 Z"
            fill="rgba(0,255,135,0.04)"
          />
          {/* Wave 2 */}
          <path
            className="wave2"
            d="M0,80 C150,40 350,110 550,70 C750,30 950,90 1200,70 L1200,120 L0,120 Z"
            fill="rgba(0,255,135,0.06)"
          />
          {/* Wave 1 — topmost, most visible */}
          <path
            className="wave1"
            d="M0,60 C200,20 400,100 600,60 C800,20 1000,80 1200,60 L1200,120 L0,120 Z"
            fill="rgba(0,255,135,0.09)"
          />
        </svg>
      </div>

      {/* Footer content */}
      <div style={{
        background: "rgba(0,255,135,0.03)",
        borderTop: "1px solid rgba(0,255,135,0.1)",
        padding: "48px 7vw 36px",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "32px",
            marginBottom: "40px",
          }}>
            <div>
              <p style={{ fontWeight: 900, fontSize: "22px", letterSpacing: "-0.5px" }}>
                SUBHAM CHOUDHARY
              </p>
              <p style={{ fontSize: "10px", color: "#4A4D55", marginTop: "6px", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                AI Engineer &amp; Full-Stack Developer
              </p>
              <p style={{ fontSize: "12px", color: "#8A8880", marginTop: "12px", maxWidth: "300px", lineHeight: 1.7 }}>
                Building intelligent systems that scale. Open to full-time and freelance opportunities.
              </p>
            </div>

            <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
              <div>
                <p style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "16px" }}>
                  Navigate
                </p>
                {["About", "Experience", "Skills", "Project", "Contact"].map((l) => (
                  <a key={l} href={l === "Contact" ? "/contact" : `/#${l.toLowerCase()}`}
                    style={{ display: "block", fontSize: "12px", color: "#8A8880", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#00FF87")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#8A8880")}
                  >
                    {l}
                  </a>
                ))}
              </div>
              <div>
                <p style={{ fontSize: "10px", color: "#00FF87", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "16px" }}>
                  Contact
                </p>
                <a href="mailto:subham.choudhary.fullstack@gmail.com"
                  style={{ display: "block", fontSize: "12px", color: "#8A8880", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00FF87")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#8A8880")}
                >
                  subham.choudhary.fullstack<br />@gmail.com
                </a>
                <a href="tel:+918210219654"
                  style={{ display: "block", fontSize: "12px", color: "#8A8880", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00FF87")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#8A8880")}
                >
                  +91 821-021-9654
                </a>
                <a href="/Subham_Choudhary_Resume.pdf" download
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "10px", color: "#000", background: "#00FF87", padding: "8px 16px", textDecoration: "none", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "8px", transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  Download Resume ↓
                </a>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: "1px solid #12151C",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}>
            <p style={{ fontSize: "11px", color: "#3A3D45" }}>
              © {new Date().getFullYear()} Subham Choudhary. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              {["LinkedIn ↗", "GitHub ↗"].map(l => (
                <a key={l} href="#"
                  style={{ fontSize: "10px", color: "#3A3D45", textDecoration: "none", letterSpacing: "0.2em", textTransform: "uppercase", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00FF87")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#3A3D45")}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
