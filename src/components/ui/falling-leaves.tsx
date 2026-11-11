"use client";

import { useEffect, useState } from "react";
import {
  FallingLeaves as ReactFallingLeaves,
  type FallingLeavesProps,
} from "falling-leaves/react";

export function FallingLeaves(props: FallingLeavesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ReactFallingLeaves fullScreen zIndex={50} {...props} />;
}

