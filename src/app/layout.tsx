import type { Metadata } from "next";

////prior to chadcn
// import { Inter } from "next/font/google";
import { Inter as FontSans} from "next/font/google";
import "./globals.css";

////prior to chadcn
//const inter = Inter({ subsets: ["latin"] });

////chadcn
import { cn } from "@/lib/utils"

////chadcn
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

////prior to chadcn
// <body className={inter.className}>{children}</body>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  );
}
