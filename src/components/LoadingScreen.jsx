import { useEffect, useState } from "react";

/* ── Keyframes injected once ───────────────────────────────── */
const KEYFRAMES = `
  @keyframes orb-1 {
    0%,100% { transform: translate(0,0) scale(1); }
    35%     { transform: translate(40px,-30px) scale(1.06); }
    68%     { transform: translate(-20px,35px) scale(0.96); }
  }
  @keyframes orb-2 {
    0%,100% { transform: translate(0,0) scale(1); }
    40%     { transform: translate(-35px,25px) scale(1.04); }
    72%     { transform: translate(25px,-40px) scale(0.97); }
  }
  @keyframes orb-3 {
    0%,100% { transform: translate(0,0) scale(1); }
    50%     { transform: translate(20px,20px) scale(1.08); }
  }
  @keyframes shimmer {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(400%); }
  }
  @keyframes soft-pulse {
    0%,100% { opacity: 0.55; }
    50%     { opacity: 1; }
  }
`;

/* ── Timeline ──────────────────────────────────────────────── */
const T_NAME    = 300;
const T_DIVIDER = 1200;
const T_ROLE    = 1450;
const T_SHIMMER = 1750;
const T_EXIT    = 3100;
const T_DONE    = 3850;

export const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase]     = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone]       = useState(false);

  useEffect(() => {
    const ts = [
      setTimeout(() => setPhase(1), T_NAME),
      setTimeout(() => setPhase(2), T_DIVIDER),
      setTimeout(() => setPhase(3), T_ROLE),
      setTimeout(() => setPhase(4), T_SHIMMER),
      setTimeout(() => setExiting(true), T_EXIT),
      setTimeout(() => { setDone(true); onComplete?.(); }, T_DONE),
    ];
    return () => ts.forEach(clearTimeout);
  }, [onComplete]);

  if (done) return null;

  return (
    <>
      <style>{KEYFRAMES}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "#07080C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          opacity:    exiting ? 0 : 1,
          transform:  exiting ? "scale(1.04)" : "scale(1)",
          transition: exiting
            ? "opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)"
            : "none",
          pointerEvents: exiting ? "none" : "auto",
        }}
      >
        {/* ── Aurora orbs ───────────────────────────────── */}
        <div style={{
          position: "absolute",
          width: "60vmax", height: "60vmax",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(223,208,184,0.14) 0%, rgba(223,208,184,0.04) 45%, transparent 70%)",
          top: "-18%", right: "-18%",
          filter: "blur(10px)",
          animation: "orb-1 10s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          width: "50vmax", height: "50vmax",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(148,137,121,0.1) 0%, rgba(57,62,70,0.06) 50%, transparent 72%)",
          bottom: "-22%", left: "-12%",
          filter: "blur(14px)",
          animation: "orb-2 13s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          width: "28vmax", height: "28vmax",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(223,208,184,0.06) 0%, transparent 70%)",
          top: "60%", right: "10%",
          filter: "blur(18px)",
          animation: "orb-3 8s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        {/* ── Noise texture ────────────────────────────── */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        }} />

        {/* ── Main content ─────────────────────────────── */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: 0, zIndex: 1, textAlign: "center",
          padding: "0 2rem",
        }}>

          {/* Name — blur-to-sharp, letter-spacing morphs */}
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2.8rem, 9vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              margin: 0,
              color: "#F0EDE8",
              letterSpacing: phase >= 1 ? "-0.03em" : "0.3em",
              opacity: phase >= 1 ? 1 : 0,
              filter: phase >= 1 ? "blur(0px)" : "blur(20px)",
              transition: [
                "opacity 1.2s cubic-bezier(0.16,1,0.3,1)",
                "filter 1.2s cubic-bezier(0.16,1,0.3,1)",
                "letter-spacing 1.4s cubic-bezier(0.16,1,0.3,1)",
              ].join(", "),
            }}
          >
            Mayuresh
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, var(--color-accent) 0%, var(--color-accent-2) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kamble
            </span>
          </h1>

          {/* Divider line — grows outward */}
          <div style={{
            width:  phase >= 2 ? "min(220px, 45vw)" : "0px",
            height: "1px",
            margin: "2rem 0 1.6rem",
            background: "linear-gradient(90deg, transparent, rgba(223,208,184,0.45), transparent)",
            transition: "width 0.9s cubic-bezier(0.16,1,0.3,1)",
          }} />

          {/* Role */}
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(0.58rem, 1.8vw, 0.72rem)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            margin: 0,
            opacity:   phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>
            Full Stack Developer&nbsp;&nbsp;·&nbsp;&nbsp;ML Enthusiast
          </p>
        </div>

        {/* ── Shimmer progress bar at bottom ────────────── */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "1px",
          background: "rgba(223,208,184,0.07)",
          overflow: "hidden",
          opacity:    phase >= 4 ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}>
          <div style={{
            position: "absolute",
            top: 0, width: "25%", height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(223,208,184,0.9), transparent)",
            animation: "shimmer 2s ease-in-out infinite",
          }} />
        </div>

        {/* ── Soft pulsing center glow ───────────────────── */}
        <div style={{
          position: "absolute",
          width: "30vmax", height: "30vmax",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(223,208,184,0.03) 0%, transparent 70%)",
          animation: "soft-pulse 3s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* ── Corner label ──────────────────────────────── */}
        <span style={{
          position: "absolute",
          bottom: "1.4rem", right: "1.5rem",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.1em",
          color: "rgba(240,237,232,0.1)",
        }}>
          portfolio · 2025
        </span>
      </div>
    </>
  );
};
