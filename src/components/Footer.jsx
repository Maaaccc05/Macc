import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      style={{
        padding: "2rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#444",
            letterSpacing: "0.04em",
          }}
        >
          © {new Date().getFullYear()} Mayuresh Kamble. All rights reserved.
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#333",
            letterSpacing: "0.04em",
          }}
        >
          Built with React + Vite
        </span>

        <a
          href="#hero"
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#a3e635",
            transition: "background 0.2s, border-color 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(163,230,53,0.08)";
            e.currentTarget.style.borderColor = "rgba(163,230,53,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
};
