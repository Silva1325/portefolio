import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miguel Silva",
  description: "Software engineer based in Porto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-bg-primary text-text-primary font-body md:flex-row">
        <Navbar />
        <div className="flex-1">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
