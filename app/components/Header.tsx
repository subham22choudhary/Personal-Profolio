"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Project", href: "/#project" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="glass-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 7vw",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontWeight: 900,
            fontSize: "16px",
            letterSpacing: "-0.5px",
            color: "#E8E6E1",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            SC
            <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#00FF87",
              display: "inline-block",
            }} className="dot-pulse" />
          </span>
        </Link>

        <nav style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {navLinks.map((l) => {
            const isActive = pathname === l.href || pathname === l.href.replace("/#", "/");
            return (
              <Link key={l.label} href={l.href}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: isActive ? "#00FF87" : "#8A8880",
                  borderBottom: isActive ? "1px solid #00FF87" : "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#00FF87"; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#8A8880"; }}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="/Subham_Choudhary_Resume.pdf"
            download
            style={{
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#000",
              background: "#00FF87",
              padding: "8px 18px",
              fontWeight: 700,
              transition: "opacity 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Resume ↓
          </a>
        </nav>
      </div>
      <style>{`
        .dot-pulse {
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.6); }
        }
        @media (max-width: 700px) {
          nav a:not(:last-child) { display: none; }
        }
      `}</style>
    </header>
  );
}
