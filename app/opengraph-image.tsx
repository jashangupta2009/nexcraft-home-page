import { ImageResponse } from "next/og";

export const alt = "NexCraft. Building the next generation of intelligent digital products.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a14",
          backgroundImage: [
            "radial-gradient(circle at 18% 22%, rgba(110, 70, 200, 0.55) 0%, transparent 45%)",
            "radial-gradient(circle at 82% 30%, rgba(220, 160, 70, 0.42) 0%, transparent 42%)",
            "radial-gradient(circle at 50% 92%, rgba(70, 140, 160, 0.40) 0%, transparent 50%)",
          ].join(", "),
          color: "#f3e9d2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(243, 233, 210, 0.55)",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#e8b461",
              boxShadow: "0 0 24px rgba(232, 180, 97, 0.6)",
            }}
          />
          NexCraft · Stealth · 2026
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 160,
              fontWeight: 200,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#f3e9d2",
            }}
          >
            NexCraft
          </div>
          <div
            style={{
              fontSize: 44,
              lineHeight: 1.2,
              maxWidth: 880,
              letterSpacing: "-0.015em",
              color: "rgba(243, 233, 210, 0.92)",
            }}
          >
            Building the next generation of intelligent digital products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(243, 233, 210, 0.55)",
          }}
        >
          <div style={{ color: "#e8b461" }}>hello@nexcraft.app</div>
          <div style={{ letterSpacing: "0.18em", textTransform: "uppercase", fontSize: 16 }}>
            © 2026 NexCraft LLC
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
