import { ArrowDown, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 grid-bg overflow-hidden"
    >
      {/* Radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(163,230,53,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container max-w-4xl mx-auto z-10"
        style={{ textAlign: "left" }}
      >
        {/* Label */}
        <div className="opacity-0 animate-fade-in" style={{ marginBottom: "1.5rem" }}>
          <span className="section-label">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#a3e635",
                display: "inline-block",
                animation: "pulse-subtle 2s ease-in-out infinite",
              }}
            />
            Available for work
          </span>
        </div>

        {/* Headline */}
        <h1
          className="opacity-0 animate-fade-in-delay-1"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#a3e635,#65a30d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mayuresh
          </span>
          <br />
          Kamble
        </h1>

        {/* Sub */}
        <p
          className="opacity-0 animate-fade-in-delay-2"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "#888",
            maxWidth: 520,
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}
        >
          I build web applications using MERN. Recently, I've started learning
          machine learning and I'm exploring how to combine it with web
          development.
        </p>

        {/* CTAs */}
        <div
          className="opacity-0 animate-fade-in-delay-3"
          style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
        >
          <a href="#projects" className="btn-accent">
            View my work <ArrowRight size={14} />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </div>

        {/* Stats row */}
        <div
          className="opacity-0 animate-fade-in-delay-4"
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "4rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "2+", label: "Years coding" },
            { value: "5+", label: "Projects shipped" },
            { value: "MERN", label: "Stack" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "#f0f0f0",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#555",
                  marginTop: "0.25rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.15em",
            color: "#444",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <ArrowDown size={14} color="#444" />
      </div>
    </section>
  );
};
