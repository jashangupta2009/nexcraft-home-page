import type { CSSProperties } from "react";

type DelayStyle = CSSProperties & { "--delay": string };
const delay = (ms: number): DelayStyle => ({ "--delay": `${ms}ms` });

export default function HomePage() {
  return (
    <main className="relative min-h-svh w-full">
      <header
        className="reveal absolute left-6 top-6 flex items-center gap-3 font-mono text-micro uppercase text-ink-faint sm:left-10 sm:top-10"
        style={delay(0)}
      >
        <span className="pulse-dot" aria-hidden="true" />
        <span>NexCraft · Stealth · 2026</span>
      </header>

      <div className="mx-auto flex min-h-svh max-w-column flex-col justify-center px-6 py-32 sm:px-10 sm:py-40">
        <h1
          className="reveal font-sans text-display font-extralight tracking-tight text-ink"
          style={delay(120)}
        >
          NexCraft
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

        <address
          className="reveal mt-12 not-italic"
          style={delay(440)}
        >
          <a
            href="mailto:hello@nexcraft.app"
            className="email-link font-sans text-base"
            aria-label="Email NexCraft at hello@nexcraft.app"
          >
            hello@nexcraft.app
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </address>
      </div>

      <footer
        className="reveal absolute bottom-6 right-6 font-mono text-micro uppercase text-ink-faint sm:bottom-10 sm:right-10"
        style={delay(560)}
      >
        © 2026 NexCraft LLC
      </footer>
    </main>
  );
}
