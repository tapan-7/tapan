"use client";

import React from "react";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {children}
    </div>
  );
}
