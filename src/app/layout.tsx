import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PageWrapper } from "@/components/page-wrapper";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Tapan Kumar Swain — Software Development Engineer",
  description:
    "Portfolio of Tapan Kumar Swain, Software Development Engineer specializing in high-performance web and mobile applications with React, Next.js, and React Native.",
  openGraph: {
    title: "Tapan Kumar Swain — Software Development Engineer",
    description:
      "Frontend-focused SDE building modern web and mobile apps with React, Next.js, and React Native.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans bg-[#09090b] text-[#f4f4f5] selection:bg-purple-500/20 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <PageWrapper>
            <main className="flex-grow">{children}</main>
            <Footer />
          </PageWrapper>
        </ThemeProvider>
        <SmoothCursor />
      </body>
    </html>
  );
}
