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
  title: "Luffy - Software Development Engineer",
  description:
    "Professional portfolio of Monkey D. Luffy, Software Development Engineer with 2+ years experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <PageWrapper>
            <main className="pt-24 flex-grow">{children}</main>
            <Footer />
          </PageWrapper>
        </ThemeProvider>
        <SmoothCursor />
      </body>
    </html>
  );
}
