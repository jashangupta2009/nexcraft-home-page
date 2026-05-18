import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: [
            "radial-gradient(circle at 22% 18%, #5e2eb0 0%, transparent 58%)",
            "radial-gradient(circle at 82% 28%, #c98a2a 0%, transparent 52%)",
            "radial-gradient(circle at 50% 94%, #1f7388 0%, transparent 56%)",
            "#0a0a14",
          ].join(", "),
          color: "#f5edd9",
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: "-0.04em",
          textShadow: "0 0 6px rgba(240, 210, 75, 0.45)",
          borderRadius: 7,
        }}
      >
        N
      </div>
    ),
    { ...size },
  );
}
