import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//hooks

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hiranye Vithanage",
  description: "Welcome to my portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
        />
        
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
