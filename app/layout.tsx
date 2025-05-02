// app/layout.tsx
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ewake Landing",
  description: "Landing page built with Next.js 14 and Tailwind 4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
