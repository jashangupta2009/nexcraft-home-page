"use client";

import { track } from "@vercel/analytics";

export function EmailLink() {
  return (
    <a
      href="mailto:hello@nexcraft.app"
      className="email-link font-sans"
      aria-label="Email NexCraft at hello@nexcraft.app"
      onClick={() => track("email_click")}
    >
      hello@nexcraft.app
      <span className="arrow" aria-hidden="true">→</span>
    </a>
  );
}
