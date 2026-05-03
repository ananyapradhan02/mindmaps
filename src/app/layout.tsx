import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const serif = localFont({
  src: [
    { path: "../fonts/Fraunces-Variable.woff2", style: "normal" },
    { path: "../fonts/Fraunces-Variable-Italic.woff2", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const sans = localFont({
  src: [
    { path: "../fonts/DMSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/DMSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/DMSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/DMSans-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Mind Maps Collective",
  description: "A living archive of culture, creativity, and the systems we build (and live inside).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
