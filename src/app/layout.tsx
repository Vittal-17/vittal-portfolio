import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Cursor from "@/components/ui/Cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://vittal-dev.vercel.app"),
  title: "Vittal J G — Full-Stack Engineer",
  description:
    "Full-Stack Engineer building production web applications and AI systems — from document-grounded RAG platforms to commerce platforms and applied machine learning.",
  keywords: ["Full-Stack Engineer", "RAG", "AI systems", "React", "FastAPI", "Django", "Machine Learning"],
  authors: [{ name: "Vittal J G" }],
  openGraph: {
    title: "Vittal J G — Full-Stack Engineer",
    description: "Production web applications and AI systems, built end to end.",
    type: "website",
    url: "https://vittal-dev.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <div className="bg-layer bg-studio" aria-hidden />
        <div className="bg-layer bg-grid" aria-hidden />
        <div className="bg-layer bg-grain" aria-hidden />

        <ScrollProgress />
        <Cursor />

        <a href="#top" className="skip-link">
          Skip to content
        </a>

        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
