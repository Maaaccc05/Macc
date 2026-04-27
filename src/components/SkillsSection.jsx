import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS",    category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React",      category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js",    category: "backend" },
  { name: "Express",    category: "backend" },
  { name: "MongoDB",    category: "backend" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Figma",      category: "tools" },
  { name: "VS Code",    category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const categoryColors = {
  frontend: "#a3e635",
  backend:  "#38bdf8",
  tools:    "#f472b6",
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
      {/* Grid bg only this section */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="container mx-auto max-w-5xl" style={{ position: "relative" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <span className="section-label">
              <span style={{ width: 16, height: 1, background: "#a3e635", display: "inline-block" }} />
              Expertise
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#f0f0f0",
                lineHeight: 1.1,
              }}
            >
              My{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#a3e635,#65a30d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Skills
              </span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div
            style={{
              display: "flex",
              gap: "0.4rem",
              background: "#111",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 8,
              padding: "0.25rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "0.3rem 0.85rem",
                  borderRadius: 6,
                  border: "none",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                  background:
                    active === cat ? "#a3e635" : "transparent",
                  color: active === cat ? "#0a0a0a" : "#666",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {filtered.map((skill) => (
            <div
              key={skill.name}
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10,
                padding: "1.1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "default",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  categoryColors[skill.category] + "50";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#d4d4d4",
                }}
              >
                {skill.name}
              </span>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: categoryColors[skill.category],
                  flexShrink: 0,
                  boxShadow: `0 0 6px ${categoryColors[skill.category]}`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div
              key={cat}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.72rem",
                fontFamily: "'JetBrains Mono', monospace",
                color: "#555",
                textTransform: "capitalize",
                letterSpacing: "0.04em",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: color,
                  boxShadow: `0 0 4px ${color}`,
                }}
              />
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
