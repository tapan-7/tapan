"use client";

import React from "react";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] text-[#f4f4f5]">
      {children}
    </div>
  );
}
