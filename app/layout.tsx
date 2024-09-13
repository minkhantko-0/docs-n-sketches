import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./CovexClientProvider";

const opensSans = Open_Sans({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Docs & Sketches",
  description: "Document your vision, sketch your ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={opensSans.style}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
