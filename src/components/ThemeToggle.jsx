import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Always start dark for our new design
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        position: "fixed",
        top: "1.1rem",
        right: "5rem",
        zIndex: 50,
        width: 34,
        height: 34,
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(17,17,17,0.65)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "border-color 0.2s",
        color: isDark ? "var(--color-accent)" : "var(--color-muted)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent-dim)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
};
