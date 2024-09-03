import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const monospace = Roboto_Mono({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Unrealchat",
  description: "The new chat room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={monospace.className}>{children}</body>
    </html>
  );
}
