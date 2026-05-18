import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
            "radial-gradient(circle at 22% 18%, #6a36c2 0%, transparent 58%)",
            "radial-gradient(circle at 82% 28%, #d49230 0%, transparent 52%)",
            "radial-gradient(circle at 50% 94%, #21809a 0%, transparent 56%)",
            "#0a0a14",
          ].join(", "),
          color: "#f5edd9",
          fontSize: 118,
          fontWeight: 300,
          letterSpacing: "-0.05em",
          textShadow: "0 0 32px rgba(240, 210, 75, 0.5)",
          borderRadius: 40,
        }}
      >
        N
      </div>
    ),
    { ...size },
  );
}
