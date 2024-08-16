import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { redHatText } from "@/app/ui/fonts";
import "./globals.css";
import { CartProvider } from "./lib/contexts/cartcontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product List with a cart",
  description: "Developed by FrontendMentor and built by Matthew Kuria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redHatText.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
