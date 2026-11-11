"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Snowfall } from "@/components/ui/snowfall";
import { FallingLeaves } from "@/components/ui/falling-leaves";

export function SeasonalEffects() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = (resolvedTheme || theme) === "dark";

  return isDark ? <Snowfall snowflakeCount={100} /> : <FallingLeaves />;
}
