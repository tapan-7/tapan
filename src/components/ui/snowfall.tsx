"use client";

import { useEffect, useState, type ComponentProps } from "react";
import { Snowfall as ReactSnowfall } from "react-snowfall";

export function Snowfall(props: ComponentProps<typeof ReactSnowfall>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ReactSnowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        pointerEvents: "none",
        ...props?.style,
      }}
      {...props}
    />
  );
}
