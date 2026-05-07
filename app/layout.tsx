import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subham Choudhary — AI Engineer & Full-Stack Developer",
  description: "AI Engineer and Full-Stack Developer specializing in Agentic AI systems, RAG pipelines, and LLM-powered products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
