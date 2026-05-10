import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "mayuresh-kamble",
    href: "https://www.linkedin.com/in/mayuresh-kamble-79ba97306/",
    color: "#0A66C2",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    handle: "@macck69",
    href: "https://x.com/macck69",
    color: "#e2e8f0",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@maaacccc2",
    href: "https://www.instagram.com/maaacccc2?igsh=cXE0MTB0M2I5cDNy",
    color: "#E1306C",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "mackam30@gmail.com",
    href: "mailto:mackam30@gmail.com",
    color: "var(--color-accent)",
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Top glow accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          maxWidth: 600,
          height: 1,
          background:
            "linear-gradient(90deg,transparent,var(--color-accent-dim),transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--color-accent-dim) 0%, transparent 70%)",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      <div className="container mx-auto max-w-3xl" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>
            <span
              style={{
                width: 16,
                height: 1,
                background: "var(--color-accent)",
                display: "inline-block",
              }}
            />
            Contact
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Let&apos;s{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,var(--color-accent),var(--color-accent-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connect
            </span>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--color-muted)",
              maxWidth: 440,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Open to new opportunities, collaborations, and interesting
            conversations. Pick your preferred channel and say hello.
          </p>
        </div>

        {/* Social cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}
          className="max-sm:!grid-cols-1"
        >
          {socials.map(({ icon: Icon, label, handle, href, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: 14,
                textDecoration: "none",
                transition:
                  "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), border-color 0.22s, box-shadow 0.22s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `0 8px 32px -8px ${color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon bubble */}
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: color,
                  transition: "background 0.22s",
                }}
              >
                <Icon size={18} />
              </span>

              {/* Text */}
              <div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "0.15rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.02em",
                  }}
                >
                  {handle}
                </p>
              </div>

              {/* Arrow */}
              <svg
                style={{
                  marginLeft: "auto",
                  color: "var(--color-muted)",
                  opacity: 0.5,
                  flexShrink: 0,
                }}
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
