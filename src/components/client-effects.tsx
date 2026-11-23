"use client";

import dynamic from "next/dynamic";

const GlowCursor = dynamic(
  () => import("@/components/ui/glow-cursor").then((mod) => mod.GlowCursor),
  { ssr: false }
);

const SeasonalEffects = dynamic(
  () =>
    import("@/components/ui/seasonal-effects").then(
      (mod) => mod.SeasonalEffects
    ),
  { ssr: false }
);

export function ClientEffects() {
  return (
    <>
      <SeasonalEffects />
      <GlowCursor />
    </>
  );
}

