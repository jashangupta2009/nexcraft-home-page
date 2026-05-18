import type { CSSProperties } from "react";

type DelayStyle = CSSProperties & { "--delay": string };
const delay = (ms: number): DelayStyle => ({ "--delay": `${ms}ms` });

export default function HomePage() {
  return (
    <main className="relative min-h-svh w-full">
      <div className="mx-auto flex min-h-svh max-w-column flex-col justify-center px-6 py-24 sm:px-10 sm:py-32">
        <header
          className="reveal flex items-center gap-3 font-mono text-micro uppercase text-ink-faint"
          style={delay(0)}
        >
          <span className="pulse-dot" aria-hidden="true" />
          <span>NexCraft · Stealth · 2026</span>
        </header>

        <h1
          className="reveal mt-10 font-sans text-display font-extralight tracking-tight text-ink"
          style={delay(120)}
        >
          NexCraft <span className="text-ink-muted">LLC</span>
        </h1>

        <p
          className="reveal mt-8 max-w-[28ch] font-sans text-tagline font-normal text-ink"
          style={delay(220)}
        >
          Building the next generation of intelligent digital products.
        </p>

        <p
          className="reveal mt-10 max-w-[52ch] font-sans text-body text-ink-muted"
          style={delay(320)}
        >
          A product studio at the intersection of AI, automation, and user experience.
          Currently in stealth, developing our first set of products.
        </p>

        <div className="reveal mt-14" style={delay(440)}>
          <a
            href="mailto:hello@nexcraft.app"
            className="email-link font-sans"
            aria-label="Email NexCraft at hello@nexcraft.app"
          >
            hello@nexcraft.app
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <footer
          className="reveal mt-14 font-mono text-micro uppercase text-ink-faint"
          style={delay(560)}
        >
          © 2026 NexCraft LLC
        </footer>
      </div>
    </main>
  );
}
