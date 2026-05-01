import { Instagram, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mayuresh-kamble-79ba97306/" },
  { icon: Twitter, label: "X", href: "https://x.com/macck69" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/maaacccc2?igsh=cXE0MTB0M2I5cDNy" },
];

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "var(--color-card)",
  color: "var(--color-text)",
  fontSize: "0.88rem",
  fontFamily: "Inter, sans-serif",
  outline: "none",
  transition: "border-color 0.2s",
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

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

      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--color-muted)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="max-md:!grid-cols-1"
        >
          {/* Left: info */}
          <div>
            {/* Email card */}
            <div
              style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 12,
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "var(--color-muted)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </p>
              <a
                href="mailto:mackam30@gmail.com"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                mackam30@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div
              style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 12,
                  padding: "1.5rem",
                }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "var(--color-muted)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Social
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.85rem",
                      color: "var(--color-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: "var(--color-card)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "0.25rem",
              }}
            >
              Send a Message
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor="name"
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--color-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="name"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor="email"
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#555",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="email"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor="message"
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#555",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Hello, I'd like to talk about..."
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: 120,
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-accent"
              style={{
                justifyContent: "center",
                opacity: isSubmitting ? 0.6 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Sending…" : "Send Message"}
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
