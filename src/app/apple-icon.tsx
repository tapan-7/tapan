import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
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
          background: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
          borderRadius: "44px",
          border: "6px solid #27272a",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="120"
          height="120"
        >
          <path
            d="M10 11.5L6.5 16L10 20.5"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 10V20.5C16 21.5 16.5 22 18 22"
            fill="none"
            stroke="#f8fafc"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 13.5H19"
            fill="none"
            stroke="#f8fafc"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 11.5L25.5 16L22 20.5"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
