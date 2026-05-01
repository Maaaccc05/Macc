import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Stream Together",
    description:
      "Want to watch YT videos with your Friends or Partner? Well here's your StreamTogether",
    image: "/projects/image.png",
    tags: ["React", "TailwindCSS", "Socket.io"],
    demoUrl: "https://streamtogether.onrender.com/",
    githubUrl: "https://github.com/Maaaccc05/StreamTogether",
  },
  {
    id: 2,
    title: "Cafe Finder",
    description:
      "Just simple Cafe finder which finds Cafe near you using Google Maps",
    image: "/projects/image2.png",
    tags: ["React", "Tailwind", "Google Maps API"],
    demoUrl: "https://cafe-finder-nu.vercel.app/",
    githubUrl: "https://github.com/Maaaccc05/Cafe-Finder",
  },
  {
    id: 3,
    title: "Money Lending",
    description:
      "Developed a full-stack loan management platform for a real client to manage borrowers, lenders, and multi-lender loans. Implemented dynamic interest calculation based on annual rates with monthly, quarterly, and semi-annual cycles. Built features like lender-level settlement, interest tracking, and CSV report generation.",
    image: "/projects/image3.png",
    tags: ["React", "Tailwind", "Node.js", "MongoDB"],
    demoUrl: "https://money-lending-alpha.vercel.app/",
    githubUrl: "https://github.com/Maaaccc05/Money-Lending",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <span className="section-label">
              <span
                style={{
                  width: 16,
                  height: 1,
                  background: "#a3e635",
                  display: "inline-block",
                }}
              />
              Work
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
              Selected{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#a3e635,#65a30d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Projects
              </span>
            </h2>
          </div>

          <a
            href="https://github.com/Maaaccc05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: "0.8rem" }}
          >
            All projects <ArrowRight size={13} />
          </a>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, idx) => (
            <div
              key={project.id}
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                overflow: "hidden",
                transition: "border-color 0.25s, transform 0.25s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(163,230,53,0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: 190,
                  overflow: "hidden",
                  position: "relative",
                  background: "#0d0d0d",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                {/* index badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    background: "#a3e635",
                    padding: "2px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.05em",
                  }}
                >
                  0{idx + 1}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    flexWrap: "wrap",
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f0f0f0",
                    marginBottom: "0.4rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#666",
                    lineHeight: 1.65,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Links */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginTop: "1.25rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "#a3e635",
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <ExternalLink size={13} />
                    Live demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "#666",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                  >
                    <Github size={13} />
                    Source code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
