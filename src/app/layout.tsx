import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const serif = localFont({
  src: [
    { path: "../fonts/CormorantGaramond-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/CormorantGaramond-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/CormorantGaramond-Italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/CormorantGaramond-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const sans = localFont({
  src: [
    { path: "../fonts/Inter-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
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
