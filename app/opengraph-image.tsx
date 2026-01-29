import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ampora - AI-Powered Electrical Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 400,
            height: 4,
            background: "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
            borderRadius: 2,
          }}
        />

        {/* Main content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
          }}
        >
          {/* Lightning bolt icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
              borderRadius: 32,
              background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
              boxShadow: "0 0 60px rgba(139, 92, 246, 0.5), 0 25px 50px rgba(0, 0, 0, 0.5)",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M13 2L4.5 12.5h5l-1.5 7.5 8.5-10.5h-5L13 2z" />
            </svg>
          </div>

          {/* App name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-2px",
            }}
          >
            Ampora
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.6)",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            AI-Powered Electrical Intelligence
          </div>

          {/* Feature pills */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 16,
            }}
          >
            {["NEC Code AI", "6 Pro Calculators", "Photo Analysis"].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: "12px 24px",
                  borderRadius: 100,
                  background: "rgba(139, 92, 246, 0.15)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  color: "#c4b5fd",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom branding */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: 18,
          }}
        >
          <span>Download on the App Store</span>
          <span style={{ color: "rgba(139, 92, 246, 0.6)" }}>•</span>
          <span>iOS</span>
        </div>

        {/* Corner accents */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            width: 60,
            height: 60,
            borderLeft: "2px solid rgba(139, 92, 246, 0.3)",
            borderTop: "2px solid rgba(139, 92, 246, 0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 32,
            right: 32,
            width: 60,
            height: 60,
            borderRight: "2px solid rgba(139, 92, 246, 0.3)",
            borderTop: "2px solid rgba(139, 92, 246, 0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 32,
            width: 60,
            height: 60,
            borderLeft: "2px solid rgba(139, 92, 246, 0.3)",
            borderBottom: "2px solid rgba(139, 92, 246, 0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 32,
            width: 60,
            height: 60,
            borderRight: "2px solid rgba(139, 92, 246, 0.3)",
            borderBottom: "2px solid rgba(139, 92, 246, 0.3)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
