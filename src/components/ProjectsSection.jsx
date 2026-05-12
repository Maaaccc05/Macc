import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [

  {
    id: 1,
    category: "webdev",
    title: "Money Lending",
    description:
      "Developed a full-stack loan management platform for a real client to manage borrowers, lenders, and multi-lender loans. Implemented dynamic interest calculation based on annual rates with monthly, quarterly, and semi-annual cycles. Built features like lender-level settlement, interest tracking, and CSV report generation.",
    image: "/projects/image3.png",
    tags: ["React", "Tailwind", "Node.js", "MongoDB"],
    demoUrl: "https://money-lending-alpha.vercel.app/",
    githubUrl: "https://github.com/Maaaccc05/Money-Lending",
  },
  {
    id: 2,
    category: "webdev",
    title: "Stream Together",
    description:
      "Want to watch YT videos with your Friends or Partner? Well here's your StreamTogether — real-time sync across multiple users.",
    image: "/projects/image.png",
    tags: ["React", "TailwindCSS", "Socket.io"],
    demoUrl: "https://streamtogether.onrender.com/",
    githubUrl: "https://github.com/Maaaccc05/StreamTogether",
  },
  {
    id: 3,
    category: "webdev",
    title: "Cafe Finder",
    description:
      "Just simple Cafe finder which finds Cafe near you using Google Maps API.",
    image: "/projects/image2.png",
    tags: ["React", "Tailwind", "Google Maps API"],
    demoUrl: "https://cafe-finder-nu.vercel.app/",
    githubUrl: "https://github.com/Maaaccc05/Cafe-Finder",
  },

  {
    id: 4,
    category: "ml",
    title: "Car Price Prediction",
    description:
      "Predict Ford car prices based on historical dataset",
    image: "/projects/image4.jpeg",
    tags: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
    githubUrl: "https://github.com/Maaaccc05/Car-Price-Prediction",
  },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "webdev", label: "Web Dev" },
  { key: "ml", label: "Machine Learning" },
];

const PER_PAGE = 3;

/* ── Tag color map ── */
const TAG_COLORS = {
  React: { bg: "rgba(97,218,251,0.12)", color: "#61DAFB", border: "rgba(97,218,251,0.25)" },
  TailwindCSS: { bg: "rgba(56,189,248,0.12)", color: "#38BDF8", border: "rgba(56,189,248,0.25)" },
  Tailwind: { bg: "rgba(56,189,248,0.12)", color: "#38BDF8", border: "rgba(56,189,248,0.25)" },
  "Socket.io": { bg: "rgba(255,255,255,0.08)", color: "#E2E8F0", border: "rgba(255,255,255,0.18)" },
  "Google Maps API": { bg: "rgba(52,168,83,0.12)", color: "#34A853", border: "rgba(52,168,83,0.25)" },
  "Node.js": { bg: "rgba(104,160,99,0.15)", color: "#8BC34A", border: "rgba(104,160,99,0.3)" },
  MongoDB: { bg: "rgba(0,237,100,0.1)", color: "#00ED64", border: "rgba(0,237,100,0.22)" },
  NumPy: { bg: "rgba(77,171,245,0.12)", color: "#4DABF5", border: "rgba(77,171,245,0.25)" },
  Pandas: { bg: "rgba(150,118,255,0.12)", color: "#9676FF", border: "rgba(150,118,255,0.25)" },
  Matplotlib: { bg: "rgba(255,189,68,0.12)", color: "#FFBD44", border: "rgba(255,189,68,0.25)" },
  Seaborn: { bg: "rgba(100,220,200,0.12)", color: "#64DCC8", border: "rgba(100,220,200,0.25)" },
  "Scikit-Learn": { bg: "rgba(249,115,22,0.12)", color: "#F97316", border: "rgba(249,115,22,0.25)" },
};

const DEFAULT_TAG = { bg: "rgba(223,208,184,0.1)", color: "#DFD0B8", border: "rgba(223,208,184,0.22)" };

function Tag({ label }) {
  const c = TAG_COLORS[label] || DEFAULT_TAG;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.18rem 0.6rem",
        borderRadius: "9999px",
        border: `1px solid ${c.border}`,
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: "0.02em",
        color: c.color,
        background: c.bg,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "1.5rem",
        alignItems: "center",
        padding: "1.75rem",
        borderRadius: "12px",
        border: "1px solid rgba(223,208,184,0.08)",
        background: "rgba(57,62,70,0.35)",
        backdropFilter: "blur(8px)",
        transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(223,208,184,0.22)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(223,208,184,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Subtle top-left accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 48,
          height: 2,
          background: "linear-gradient(90deg, var(--color-accent), transparent)",
          borderRadius: "0 0 4px 0",
        }}
      />

      {/* Main content */}
      <div style={{ minWidth: 0 }}>
        {/* Tags */}
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--color-text)",
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.82rem",
            color: "var(--color-muted)",
            lineHeight: 1.7,
            marginBottom: "1.1rem",
          }}
        >
          {project.description}
        </p>

        {/* Links */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.76rem",
                fontWeight: 600,
                color: "var(--color-accent)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ExternalLink size={12} strokeWidth={2.5} />
              Live demo
            </a>
          )}
          {project.demoUrl && project.githubUrl && (
            <span style={{ color: "rgba(223,208,184,0.18)", fontSize: "0.7rem" }}>|</span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.76rem",
                fontWeight: 500,
                color: "var(--color-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
            >
              <Github size={12} strokeWidth={2} />
              Source code
            </a>
          )}
        </div>
      </div>

      {/* Thumbnail */}
      <div
        className="max-md:hidden"
        style={{
          width: 180,
          height: 115,
          borderRadius: 10,
          overflow: "hidden",
          border: "1px solid rgba(223,208,184,0.15)",
          flexShrink: 0,
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "block",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </div>
  );
}

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(0);

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setPage(0);
  };

  return (
    <section
      id="projects"
      className="py-24 px-4 relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="container mx-auto max-w-5xl">
        {/* ── Header ── */}
        <div style={{ marginBottom: "2.5rem" }}>
          <span className="section-label">
            <span
              style={{
                width: 16,
                height: 1,
                background: "var(--color-accent)",
                display: "inline-block",
              }}
            />
            Work
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--color-text)",
                lineHeight: 1.1,
              }}
            >
              Selected{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg,var(--color-accent),var(--color-accent-2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Projects
              </span>
            </h2>

            <a
              href="https://github.com/Maaaccc05"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: "0.8rem" }}
            >
              All projects →
            </a>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            marginBottom: "2.5rem",
            padding: "0.3rem",
            background: "rgba(34,40,49,0.7)",
            borderRadius: "9999px",
            border: "1px solid rgba(223,208,184,0.1)",
            width: "fit-content",
            backdropFilter: "blur(8px)",
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                style={{
                  padding: "0.38rem 1.1rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.78rem",
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: "0.01em",
                  color: isActive ? "var(--color-bg)" : "var(--color-muted)",
                  background: isActive ? "var(--color-accent)" : "transparent",
                  boxShadow: isActive ? "0 2px 10px rgba(223,208,184,0.2)" : "none",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── Project cards ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minHeight: "200px",
          }}
        >
          {paginated.length === 0 ? (
            <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", paddingBlock: "3rem", textAlign: "center" }}>
              No projects in this category yet.
            </p>
          ) : (
            paginated.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginTop: "2.5rem",
            }}
          >
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                padding: "0.45rem 1rem",
                borderRadius: "9999px",
                border: "1px solid rgba(223,208,184,0.15)",
                background: "transparent",
                color: page === 0 ? "rgba(223,208,184,0.25)" : "var(--color-muted)",
                fontSize: "0.78rem",
                fontWeight: 500,
                cursor: page === 0 ? "not-allowed" : "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (page !== 0) {
                  e.currentTarget.style.borderColor = "rgba(223,208,184,0.35)";
                  e.currentTarget.style.color = "var(--color-text)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(223,208,184,0.15)";
                e.currentTarget.style.color = page === 0 ? "rgba(223,208,184,0.25)" : "var(--color-muted)";
              }}
            >
              <ChevronLeft size={14} />
              Prev
            </button>

            {/* Page dots */}
            <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  style={{
                    width: i === page ? 20 : 7,
                    height: 7,
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    background:
                      i === page ? "var(--color-accent)" : "rgba(223,208,184,0.2)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                padding: "0.45rem 1rem",
                borderRadius: "9999px",
                border: "1px solid rgba(223,208,184,0.15)",
                background: "transparent",
                color: page === totalPages - 1 ? "rgba(223,208,184,0.25)" : "var(--color-muted)",
                fontSize: "0.78rem",
                fontWeight: 500,
                cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (page !== totalPages - 1) {
                  e.currentTarget.style.borderColor = "rgba(223,208,184,0.35)";
                  e.currentTarget.style.color = "var(--color-text)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(223,208,184,0.15)";
                e.currentTarget.style.color =
                  page === totalPages - 1 ? "rgba(223,208,184,0.25)" : "var(--color-muted)";
              }}
            >
              Next
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
