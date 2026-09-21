"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Project", id: "project" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
        background: scrolled ? "rgba(0, 0, 0, 0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 7vw",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontWeight: 900,
              fontSize: "16px",
              letterSpacing: "-0.5px",
              color: "#E8E6E1",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            SC

            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00FF87",
                display: "inline-block",
              }}
              className="dot-pulse"
            />
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
        >
          {/* Section Links */}
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => scrollToSection(link.id)}
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#8A8880",
                background: "transparent",
                border: "none",
                padding: "0 0 2px",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "color 0.2s, border-color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00FF87";
                e.currentTarget.style.borderBottom =
                  "1px solid #00FF87";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8A8880";
                e.currentTarget.style.borderBottom =
                  "1px solid transparent";
              }}
            >
              {link.label}
            </button>
          ))}

          {/* Contact */}
          <Link
            href="/contact"
            style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: pathname === "/contact" ? "#00FF87" : "#8A8880",
              borderBottom:
                pathname === "/contact"
                  ? "1px solid #00FF87"
                  : "1px solid transparent",
              paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00FF87";
            }}
            onMouseLeave={(e) => {
              if (pathname !== "/contact") {
                e.currentTarget.style.color = "#8A8880";
              }
            }}
          >
            Contact
          </Link>

          {/* Resume */}
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
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
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
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.3;
            transform: scale(0.6);
          }
        }

        @media (max-width: 700px) {
          .desktop-nav {
            gap: 12px !important;
          }

          .desktop-nav button,
          .desktop-nav a[href="/contact"] {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}