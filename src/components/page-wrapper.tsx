"use client";

import { usePathname } from "next/navigation";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // The homepage has its own complex animated background in app/page.tsx
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return <div className="flex flex-col">{children}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950">
      {children}
    </div>
  );
}
