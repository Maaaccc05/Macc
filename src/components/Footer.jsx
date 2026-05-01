import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      style={{
        padding: "2rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "var(--color-bg)",
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
            color: "var(--color-muted)",
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
            color: "var(--color-muted)",
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
            color: "var(--color-accent)",
            transition: "background 0.2s, border-color 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-accent-dim)";
            e.currentTarget.style.borderColor = "rgba(223,208,184,0.3)";
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
