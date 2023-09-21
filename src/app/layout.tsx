import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageProgres from "@/components/ui/PageProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RWANDA SCOUT ASSOCIATION",
  description: "SACOUT ASSOCIATION",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageProgres />
        {children}
      </body>
    </html>
  );
}
