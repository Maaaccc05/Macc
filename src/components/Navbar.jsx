import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const itemRefs = useRef({});

  /* ── Scroll detection ──────────────────────── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Slide indicator position ──────────────── */
  useEffect(() => {
    const el = itemRefs.current[active];
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        width: elRect.width,
        transform: `translateX(${elRect.left - navRect.left}px)`,
      });
    }
  }, [active]);

  return (
    <div
      style={{
        position: "fixed",
        top: isScrolled ? "1rem" : "1.4rem",
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "top 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: "none",
        paddingInline: "1rem",
      }}
    >
      {/* ── Pill shell ── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.35rem 0.5rem",
          borderRadius: "9999px",
          background: isScrolled
            ? "rgba(34, 40, 49, 0.82)"
            : "rgba(34, 40, 49, 0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: isScrolled
            ? "1px solid rgba(223, 208, 184, 0.22)"
            : "1px solid rgba(223, 208, 184, 0.09)",
          boxShadow: isScrolled
            ? "0 0 0 1px rgba(223,208,184,0.06), 0 8px 32px rgba(0,0,0,0.45), 0 0 60px -12px rgba(223,208,184,0.12)"
            : "0 4px 24px rgba(0,0,0,0.25)",
          transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "auto",
          maxWidth: "100%",
        }}
      >
        {/* Logo badge */}
        <a
          href="#hero"
          onClick={() => setActive("Home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            textDecoration: "none",
            padding: "0.3rem 0.65rem 0.3rem 0.4rem",
            borderRadius: "9999px",
            marginRight: "0.25rem",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "var(--color-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "0.62rem",
              color: "var(--color-bg)",
              flexShrink: 0,
              letterSpacing: "0.02em",
            }}
          >
            MK
          </span>
          <span
            style={{
              fontWeight: 600,
              fontSize: "0.82rem",
              color: "var(--color-text)",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            Mayuresh<span style={{ color: "var(--color-accent)" }}>.</span>
          </span>
        </a>

        {/* Thin vertical divider */}
        <div
          style={{
            width: 1,
            height: 18,
            background: "rgba(223,208,184,0.15)",
            borderRadius: 9999,
            flexShrink: 0,
            marginRight: "0.15rem",
          }}
        />

        {/* Nav items with sliding indicator */}
        <div
          ref={navRef}
          style={{ position: "relative", display: "flex", alignItems: "center", gap: "0" }}
        >
          {/* Sliding pill indicator */}
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              background: "rgba(223, 208, 184, 0.1)",
              borderRadius: "9999px",
              border: "1px solid rgba(223,208,184,0.14)",
              transition:
                "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              pointerEvents: "none",
              ...indicatorStyle,
            }}
          />

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              ref={(el) => (itemRefs.current[item.name] = el)}
              onClick={() => setActive(item.name)}
              style={{
                position: "relative",
                fontSize: "0.8rem",
                fontWeight: active === item.name ? 600 : 500,
                letterSpacing: "0.01em",
                color:
                  active === item.name
                    ? "var(--color-accent)"
                    : "var(--color-muted)",
                textDecoration: "none",
                padding: "0.42rem 0.85rem",
                borderRadius: "9999px",
                transition: "color 0.25s",
                whiteSpace: "nowrap",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                if (active !== item.name)
                  e.currentTarget.style.color = "var(--color-text)";
              }}
              onMouseLeave={(e) => {
                if (active !== item.name)
                  e.currentTarget.style.color = "var(--color-muted)";
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};
