import { useState } from "react";

const skills = [
  // Web Development
  { name: "HTML/CSS",    category: "webdev" },
  { name: "JavaScript",  category: "webdev" },
  { name: "React",       category: "webdev" },
  { name: "Tailwind CSS",category: "webdev" },
  { name: "Node.js",     category: "webdev" },
  { name: "Express",     category: "webdev" },
  { name: "MongoDB",     category: "webdev" },
  { name: "SQL",         category: "webdev" },
  // Machine Learning / AI
  { name: "Python",      category: "ml" },
  { name: "NumPy",       category: "ml" },
  { name: "Pandas",      category: "ml" },
  { name: "Matplotlib",  category: "ml" },
  { name: "Seaborn",     category: "ml" },
  { name: "OpenCV",      category: "ml" },
  // Tools
  { name: "Git/GitHub",  category: "tools" },
  { name: "Figma",       category: "tools" },
  { name: "VS Code",     category: "tools" },
  { name: "Postman",     category: "tools" },
];

const CATEGORIES = [
  { key: "all",    label: "All" },
  { key: "webdev", label: "Web Development" },
  { key: "ml",     label: "Machine Learning / AI" },
  { key: "tools",  label: "Tools" },
];

const SKILL_ICONS = {
  "HTML/CSS":    "https://cdn.simpleicons.org/html5/E34F26",
  "JavaScript":  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "React":       "https://cdn.simpleicons.org/react/61DAFB",
  "Tailwind CSS":"https://cdn.simpleicons.org/tailwindcss/38BDF8",
  "Node.js":     "https://cdn.simpleicons.org/nodedotjs/6BBF47",
  "Express":     "https://cdn.simpleicons.org/express/DDDDDD",
  "MongoDB":     "https://cdn.simpleicons.org/mongodb/00ED64",
  "SQL":         "https://cdn.simpleicons.org/postgresql/699ACA",
  "Python":      "https://cdn.simpleicons.org/python/4B8BBE",
  "NumPy":       "https://cdn.simpleicons.org/numpy/4DABF5",
  "Pandas":      "https://cdn.simpleicons.org/pandas/B07CE5",
  "Matplotlib":  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  "Seaborn":     "https://cdn.simpleicons.org/python/64DCC8",
  "OpenCV":      "https://cdn.simpleicons.org/opencv/9B72E8",
  "Git/GitHub":  "https://cdn.simpleicons.org/github/E0D5C5",
  "Figma":       "https://cdn.simpleicons.org/figma/F24E1E",
  "VS Code":     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "Postman":     "https://cdn.simpleicons.org/postman/FF6C37",
};

const categoryColors = {
  webdev: "var(--color-accent)",
  ml:     "#818cf8",
  tools:  "#f472b6",
};

export const SkillsSection = () => {
  const [active, setActive] = useState("all");

  const filtered = skills.filter(
    (s) => active === "all" || s.category === active
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="container mx-auto max-w-5xl" style={{ position: "relative" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: "2.5rem" }}>
          <span className="section-label">
            <span style={{ width: 16, height: 1, background: "var(--color-accent)", display: "inline-block" }} />
            Expertise
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
              lineHeight: 1.1,
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </span>
          </h2>
        </div>

        {/* ── Pill tabs — matches navbar style ── */}
        <div
          style={{
            marginBottom: "2.5rem",
            overflowX: "auto",
            paddingBottom: "0.25rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              gap: "0.3rem",
              padding: "0.3rem",
              borderRadius: "9999px",
              background: "rgba(34,40,49,0.75)",
              border: "1px solid rgba(223,208,184,0.11)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            {CATEGORIES.map(({ key, label }) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  style={{
                    padding: "0.38rem 1.05rem",
                    borderRadius: "9999px",
                    border: "none",
                    fontSize: "0.78rem",
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: "0.01em",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                    background: isActive ? "var(--color-accent)" : "transparent",
                    color:      isActive ? "var(--color-bg)"     : "var(--color-muted)",
                    boxShadow:  isActive ? "0 2px 10px rgba(223,208,184,0.22)" : "none",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Skills grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
            gap: "0.65rem",
          }}
        >
          {filtered.map((skill) => {
            const accentColor = categoryColors[skill.category];
            return (
              <div
                key={skill.name}
                style={{
                  position: "relative",
                  background: "rgba(57,62,70,0.3)",
                  border: "1px solid rgba(223,208,184,0.08)",
                  borderRadius: 10,
                  padding: "0.85rem 1rem 0.85rem 1.4rem",
                  display: "flex",
                  alignItems: "center",
                  minHeight: 52,
                  cursor: "default",
                  backdropFilter: "blur(8px)",
                  transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(223,208,184,0.2)";
                  e.currentTarget.style.transform   = "translateY(-2px)";
                  e.currentTarget.style.boxShadow   = `0 8px 24px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(223,208,184,0.08)";
                  e.currentTarget.style.transform   = "translateY(0)";
                  e.currentTarget.style.boxShadow   = "none";
                }}
              >
                {/* Left accent bar */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "18%",
                    height: "64%",
                    width: 3,
                    borderRadius: "0 3px 3px 0",
                    background: accentColor,
                    opacity: 0.75,
                  }}
                />

                {/* Inner row: icon + label */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    width: "100%",
                    minWidth: 0,
                  }}
                >
                  {/* Icon — hard-constrained size */}
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {SKILL_ICONS[skill.name] ? (
                      <img
                        src={SKILL_ICONS[skill.name]}
                        alt=""
                        style={{
                          width: 18,
                          height: 18,
                          objectFit: "contain",
                          display: "block",
                          opacity: 0.9,
                        }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    ) : (
                      <span
                        style={{
                          fontSize: "0.5rem",
                          fontWeight: 800,
                          color: accentColor,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {skill.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Skill name */}
                  <span
                    style={{
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      letterSpacing: "-0.01em",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Legend ── */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {Object.entries(categoryColors).map(([cat, color]) => {
            const label = CATEGORIES.find((c) => c.key === cat)?.label ?? cat;
            return (
              <div
                key={cat}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.68rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--color-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 2.5,
                    borderRadius: 9999,
                    background: color,
                    opacity: 0.8,
                    flexShrink: 0,
                  }}
                />
                {label}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
