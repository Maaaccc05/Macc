import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled
          ? "py-3 border-b border-white/5 backdrop-blur-xl bg-[#0a0a0a]/80"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "#a3e635",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "0.7rem",
              color: "#0a0a0a",
              flexShrink: 0,
            }}
          >
            MK
          </span>
          <span
            style={{
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "#f0f0f0",
              letterSpacing: "-0.01em",
            }}
          >
            Mayuresh<span style={{ color: "#a3e635" }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              style={{
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: active === item.name ? "#a3e635" : "#888",
                textDecoration: "none",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#f0f0f0")}
              onMouseLeave={(e) =>
              (e.target.style.color =
                active === item.name ? "#a3e635" : "#888")
              }
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-accent"
          style={{ fontSize: "0.8rem", padding: "0.45rem 1rem" }}
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className="md:hidden p-2 text-[#888] hover:text-white transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center",
          "transition-all duration-300",
          "bg-[#0a0a0a]/97 backdrop-blur-xl",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-10 text-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => { setActive(item.name); setIsMenuOpen(false); }}
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: active === item.name ? "#a3e635" : "#f0f0f0",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

