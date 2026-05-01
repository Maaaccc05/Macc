import { Briefcase, Code, Brain } from "lucide-react";

const cards = [
  {
    icon: Code,
    title: "Web Development",
    body: "Building responsive and scalable web applications",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    body: "Currently learning machine learning and exploring how to integrate intelligent features into web applications.",
  },
  {
    icon: Briefcase,
    title: "Full Stack",
    body: "Comfortable across the entire MERN stack — from database design to polished UIs.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Subtle divider glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          maxWidth: 700,
          height: 1,
          background:
            "linear-gradient(90deg,transparent,var(--color-accent-dim),transparent)",
        }}
      />

      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <span className="section-label">
            <span
              style={{
                width: 16,
                height: 1,
                background: "var(--color-accent)",
                display: "inline-block",
              }}
            />
            About me
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-text)",
            }}
          >
            Full Stack Developer<br />
            <span
              style={{
                background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &amp; Teaching Machines to Learn
            </span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="max-md:!grid-cols-1 max-md:!gap-10"
        >
          {/* Left: bio */}
          <div>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-muted)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              I'm a full stack developer (MERN). I focus on building clean and
              functional web applications. Recently, I've started exploring
              machine learning and I'm learning how to bring those ideas into my
              projects.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-accent">
                Get in touch
              </a>
              <a
                href="/resume.pdf"
                className="btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>

            {/* Thin separator */}
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--color-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                Currently based in India
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--color-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Open to remote &amp; on-site roles
              </p>
            </div>
          </div>

          {/* Right: cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {cards.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="gradient-border card-hover"
                style={{ padding: "1.25rem 1.5rem" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: "var(--color-accent-dim)",
                          border: "1px solid rgba(223,208,184,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                  >
                        <Icon size={16} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                            color: "var(--color-text)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {title}
                    </h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
