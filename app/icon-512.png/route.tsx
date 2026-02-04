import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 102,
        }}
      >
        <svg
          width="320"
          height="320"
          viewBox="0 0 24 24"
          fill="none"
        >
          <defs>
            <linearGradient id="bolt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
          <path d="M13 2L4.5 12.5h5l-1.5 7.5 8.5-10.5h-5L13 2z" fill="url(#bolt)" />
          <path d="M13 2L4.5 12.5h5l-1.5 7.5 8.5-10.5h-5L13 2z" fill="none" stroke="#c084fc" strokeWidth="0.2" opacity="0.5"/>
        </svg>
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
