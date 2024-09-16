import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engajame! Design",
  description: "Site da Engajame! Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta
        name="google-site-verification"
        content="BOuHIAQP3CI_4HtSWi5HjqiExg3cnIHMUUwOO2Pslyw"
      />
      <body className="font-myriad">{children}</body>
    </html>
  );
}
