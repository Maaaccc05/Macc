import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home",     href: "#hero"     },
  { name: "About",    href: "#about"    },
  { name: "Skills",   href: "#skills"   },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact"  },
];

export const Navbar = () => {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [isMenuOpen,  setIsMenuOpen]  = useState(false);
  const [active,      setActive]      = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef    = useRef(null);
  const itemRefs  = useRef({});
  const prevXRef  = useRef(0);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  /* ── Scroll-spy ── */
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const visibilityMap = {};
    const observers = [];

    const pickMostVisible = () => {
      let bestId = null, bestRatio = 0;
      for (const id of sectionIds) {
        const ratio = visibilityMap[id] ?? 0;
        if (ratio > bestRatio) { bestRatio = ratio; bestId = id; }
      }
      if (bestId) {
        const matched = navItems.find((item) => item.href === `#${bestId}`);
        if (matched) setActive(matched.name);
      }
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { visibilityMap[id] = entry.intersectionRatio; pickMostVisible(); },
        { rootMargin: "-10% 0px -10% 0px", threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  /* ── Sliding indicator — distance-proportional duration ── */
  useLayoutEffect(() => {
    const el = itemRefs.current[active];
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect  = el.getBoundingClientRect();
      const newX    = elRect.left - navRect.left;

      const distance = Math.abs(newX - prevXRef.current);
      const ms = Math.round(Math.min(Math.max(distance * 0.9, 140), 300));
      prevXRef.current = newX;

      setIndicatorStyle({
        width:     elRect.width,
        transform: `translateX(${newX}px)`,
        transition: `transform ${ms}ms cubic-bezier(0.4,0,0.2,1), width ${ms}ms cubic-bezier(0.4,0,0.2,1)`,
      });
    }
  }, [active]);

  const pillBg     = isScrolled ? "rgba(34,40,49,0.92)" : "rgba(34,40,49,0.65)";
  const pillBorder = isScrolled ? "1px solid rgba(223,208,184,0.22)" : "1px solid rgba(223,208,184,0.10)";
  const pillShadow = isScrolled
    ? "0 0 0 1px rgba(223,208,184,0.06), 0 8px 32px rgba(0,0,0,0.45), 0 0 60px -12px rgba(223,208,184,0.12)"
    : "0 4px 24px rgba(0,0,0,0.25)";

  return (
    <>
      {/* ── Floating pill wrapper ── */}
      <div
        style={{
          position: "fixed",
          top: isScrolled ? "1rem" : "1.4rem",
          left: 0, right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "top 0.4s cubic-bezier(0.16,1,0.3,1)",
          pointerEvents: "none",
          paddingInline: "1rem",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            /* ── more horizontal breathing room ── */
            padding: "0.4rem 0.7rem",
            borderRadius: "9999px",
            background: pillBg,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: pillBorder,
            boxShadow: pillShadow,
            transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
            pointerEvents: "auto",
            maxWidth: "calc(100vw - 2rem)",
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={() => setActive("Home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              textDecoration: "none",
              /* right padding creates space before the divider */
              padding: "0.3rem 1rem 0.3rem 0.5rem",
              borderRadius: "9999px",
              flexShrink: 0,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {/* MK avatar badge */}
            <span
              style={{
                width: 26, height: 26,
                borderRadius: "50%",
                background: "var(--color-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: "0.6rem",
                color: "var(--color-bg)",
                flexShrink: 0,
                letterSpacing: "0.03em",
              }}
            >
              MK
            </span>
            {/* Name — hidden on small screens */}
            <span
              className="hidden sm:inline"
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

          {/* ── Divider ── */}
          <div
            className="hidden md:block"
            style={{
              width: 1, height: 18,
              background: "rgba(223,208,184,0.2)",
              borderRadius: 9999,
              flexShrink: 0,
              /* space on both sides of the divider */
              marginInline: "0.15rem",
            }}
          />

          {/* ── Desktop nav links ── */}
          <div
            ref={navRef}
            className="hidden md:flex"
            style={{
              position: "relative",
              alignItems: "center",
              /* gap between the indicator-tracked buttons */
              gap: "0.1rem",
            }}
          >
            {/* Sliding pill indicator */}
            <span
              style={{
                position: "absolute",
                top: 0, left: 0,
                height: "100%",
                background: "rgba(223,208,184,0.15)",
                borderRadius: "9999px",
                border: "1px solid rgba(223,208,184,0.2)",
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
                  color: active === item.name ? "var(--color-accent)" : "var(--color-muted)",
                  textDecoration: "none",
                  /* more horizontal padding = more breathing room between tabs */
                  padding: "0.45rem 1.05rem",
                  borderRadius: "9999px",
                  transition: "color 0.2s, background 0.2s",
                  whiteSpace: "nowrap",
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  if (active !== item.name) {
                    e.currentTarget.style.color = "var(--color-text)";
                    e.currentTarget.style.background = "rgba(223,208,184,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== item.name) {
                    e.currentTarget.style.color = "var(--color-muted)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="flex md:hidden"
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 34, height: 34,
              borderRadius: "50%",
              background: isMenuOpen ? "rgba(223,208,184,0.12)" : "transparent",
              border: "none",
              cursor: "pointer",
              color: isMenuOpen ? "var(--color-accent)" : "var(--color-muted)",
              transition: "background 0.2s, color 0.2s",
              flexShrink: 0,
              marginLeft: "0.25rem",
            }}
          >
            {isMenuOpen
              ? <X    size={18} strokeWidth={2.5} />
              : <Menu size={18} strokeWidth={2.5} />
            }
          </button>
        </nav>
      </div>

      {/* ── Mobile full-screen overlay ── */}
      <div
        aria-hidden={!isMenuOpen}
        style={{
          position: "fixed", inset: 0,
          zIndex: 45,
          background: "rgba(22,27,34,0.96)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
          transition: "opacity 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            width: 320, height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(223,208,184,0.06) 0%, transparent 70%)",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem", textAlign: "center", position: "relative" }}>
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => { setActive(item.name); setIsMenuOpen(false); }}
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: active === item.name ? "var(--color-accent)" : "rgba(246,243,238,0.5)",
                textDecoration: "none",
                padding: "0.45rem 2rem",
                borderRadius: "8px",
                transition: "color 0.2s, transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: isMenuOpen ? `${i * 0.055}s` : "0s",
                transform: isMenuOpen ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
                opacity: isMenuOpen ? 1 : 0,
                display: "block",
              }}
              onMouseEnter={(e) => {
                if (active !== item.name) {
                  e.currentTarget.style.color = "var(--color-text)";
                  e.currentTarget.style.transform = "translateX(8px) scale(1)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.name) {
                  e.currentTarget.style.color = "rgba(246,243,238,0.5)";
                  e.currentTarget.style.transform = "translateX(0) scale(1)";
                }
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Active dot indicators */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            gap: "0.5rem",
            opacity: isMenuOpen ? 1 : 0,
            transition: "opacity 0.3s 0.3s",
          }}
        >
          {navItems.map((item) => (
            <div
              key={item.name}
              style={{
                width:  active === item.name ? 20 : 6,
                height: 6,
                borderRadius: "9999px",
                background: active === item.name ? "var(--color-accent)" : "rgba(223,208,184,0.2)",
                transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
