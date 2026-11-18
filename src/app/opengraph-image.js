import { ImageResponse } from "next/og";

export const alt = "Priyanshu Chaudhary – GeneratePress & WordPress Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(to right, rgba(3,7,18,0.05) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          color: "#030712",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Priyanshu Chaudhary
        </div>
        <div style={{ marginTop: 20, fontSize: 40, color: "#4b5563" }}>
          GeneratePress & WordPress Developer
        </div>
        <div style={{ marginTop: 56, fontSize: 28, color: "#06b6d4" }}>
          priyanshuc.dev
        </div>
      </div>
    ),
    size
  );
}
