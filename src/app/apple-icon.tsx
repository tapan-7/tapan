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
          width="130"
          height="130"
        >
          <path
            d="M8 5L1.5 16L8 27"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 7V22.5C16 24.5 17.2 25.5 19.5 25.5"
            fill="none"
            stroke="#f8fafc"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13H20"
            fill="none"
            stroke="#f8fafc"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M24 5L30.5 16L24 27"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="3.4"
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
