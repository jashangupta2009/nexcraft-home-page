import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        surface: "var(--surface)",
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
          faint: "var(--ink-faint)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
        },
      },
      fontFamily: {
        sans: ["var(--font-switzer)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        tagline: ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.4", letterSpacing: "-0.012em" }],
        body: ["1rem", { lineHeight: "1.65" }],
        micro: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      maxWidth: {
        column: "38rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
