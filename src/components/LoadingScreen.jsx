import { useEffect, useRef, useState } from "react";

/*
  Animation timeline
  ─────────────────────────────────────────────
  0    ms  → mount
  80   ms  → Phase 1 : MK badge bounces in
  550  ms  → Phase 2 : SVG orbit ring starts drawing
  1950 ms  → Phase 3 : ring complete → glow pulses, name slides in
  2500 ms  → Phase 4 : tagline fades in
  3100 ms  → Phase 5 : iris-wipe exit begins
  3800 ms  → Phase 6 : done / unmount
*/

const NAME = "Mayuresh Kamble";
const TAGLINE = "Full Stack  ·  ML Enthusiast";
const RING_R = 62;                       // SVG ring radius
const CIRCUMFERENCE = 2 * Math.PI * RING_R; // ≈ 389.6

export const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [ringProgress, setRingProgress] = useState(0); // 0–1
  const ringRafRef = useRef(null);
  const ringStartRef = useRef(null);
  const RING_DURATION = 1350; // ms to draw the full ring

  /* ── Phase scheduler ── */
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),
      setTimeout(() => setPhase(2), 550),
      setTimeout(() => setPhase(3), 550 + RING_DURATION + 50),
      setTimeout(() => setPhase(4), 550 + RING_DURATION + 500),
      setTimeout(() => setPhase(5), 3100),
      setTimeout(() => { setPhase(6); onComplete?.(); }, 3800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  /* ── Ring drawing via rAF ── */
  useEffect(() => {
    if (phase !== 2) return;
    ringStartRef.current = null;

    const tick = (ts) => {
      if (!ringStartRef.current) ringStartRef.current = ts;
      const elapsed = ts - ringStartRef.current;
      const t = Math.min(elapsed / RING_DURATION, 1);
      // Ease-in-out
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setRingProgress(eased);
      if (t < 1) ringRafRef.current = requestAnimationFrame(tick);
    };

    ringRafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(ringRafRef.current);
  }, [phase]);

  if (phase === 6) return null;

  const ringOffset = CIRCUMFERENCE * (1 - ringProgress);
  const glowing = phase >= 3;
  const exiting = phase === 5;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0D1117",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        /* ── Iris-wipe exit ── */
        clipPath: exiting ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
        transition: exiting
          ? "clip-path 0.68s cubic-bezier(0.76, 0, 0.24, 1)"
          : "none",
        pointerEvents: exiting ? "none" : "auto",
        overflow: "hidden",
      }}
    >
      {/* ── Noise texture overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
        }}
      />

      {/* ── Ambient glow behind badge ── */}
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: glowing
            ? "radial-gradient(circle, rgba(223,208,184,0.14) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(223,208,184,0.05) 0%, transparent 70%)",
          transition: "background 0.8s ease",
          pointerEvents: "none",
        }}
      />

      {/* ── SVG ring + MK badge ── */}
      <div
        style={{
          position: "relative",
          width: 144,
          height: 144,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {/* Orbit SVG ring */}
        <svg
          width="144"
          height="144"
          viewBox="0 0 144 144"
          style={{
            position: "absolute",
            inset: 0,
            transform: "rotate(-90deg)",   /* start drawing from top */
          }}
        >
          {/* Track (dim) */}
          <circle
            cx="72" cy="72" r={RING_R}
            fill="none"
            stroke="rgba(223,208,184,0.07)"
            strokeWidth="1.5"
          />
          {/* Progress arc */}
          <circle
            cx="72" cy="72" r={RING_R}
            fill="none"
            stroke={glowing ? "rgba(223,208,184,0.9)" : "var(--color-accent)"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={phase >= 3 ? 0 : ringOffset}
            style={{
              transition: phase >= 3 ? "stroke-dashoffset 0.1s, stroke 0.5s" : "none",
              filter: glowing ? "drop-shadow(0 0 6px rgba(223,208,184,0.7))" : "none",
            }}
          />
          {/* Dot at the head of the progress arc */}
          {phase === 2 && ringProgress > 0.02 && (
            <circle
              cx={72 + RING_R * Math.cos(2 * Math.PI * ringProgress - Math.PI / 2)}
              cy={72 + RING_R * Math.sin(2 * Math.PI * ringProgress - Math.PI / 2)}
              r="3"
              fill="var(--color-accent)"
              style={{ filter: "drop-shadow(0 0 4px var(--color-accent))" }}
            />
          )}
        </svg>

        {/* MK badge */}
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: "50%",
            background: "var(--color-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 800,
            fontSize: "1.55rem",
            letterSpacing: "0.05em",
            color: "#0D1117",
            userSelect: "none",
            /* Spring bounce in */
            transform: phase >= 1 ? "scale(1)" : "scale(0.15)",
            opacity: phase >= 1 ? 1 : 0,
            transition:
              "transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease, box-shadow 0.8s ease",
            boxShadow: glowing
              ? "0 0 0 8px rgba(223,208,184,0.08), 0 0 40px rgba(223,208,184,0.3)"
              : "0 0 0 0px transparent",
          }}
        >
          MK
        </div>
      </div>

      {/* ── Name ── */}
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.5rem, 5vw, 2.4rem)",
          letterSpacing: "-0.04em",
          color: "#F6F3EE",
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1)",
          marginBottom: "0.6rem",
        }}
      >
        {NAME}
      </div>

      {/* ── Tagline ── */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(0.65rem, 2vw, 0.78rem)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-muted)",
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s",
        }}
      >
        {TAGLINE}
      </div>

      {/* ── Bottom progress bar ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          width: `${ringProgress * 100}%`,
          background:
            "linear-gradient(90deg, var(--color-accent-2), var(--color-accent))",
          transition: "width 0.05s linear",
          opacity: 0.6,
        }}
      />

      {/* ── Version watermark ── */}
      <div
        style={{
          position: "absolute",
          bottom: "1.25rem",
          right: "1.5rem",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.6rem",
          color: "rgba(246,243,238,0.15)",
          letterSpacing: "0.1em",
        }}
      >
        v1.0.0
      </div>
    </div>
  );
};
