import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { ToastProvider } from "@/components/Toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TopTank Kenya - Premium Water Storage Solutions | Water Tanks Nairobi",
  description: "Kenya's trusted water storage technology since 2007. Premium quality water tanks engineered for durability with KEBS Diamond Mark of Quality. Available in Nairobi, Mombasa, Kisumu, and nationwide delivery.",
  keywords: "water tanks Kenya, TopTank Kenya, plastic tanks Nairobi, underground tanks Kenya, water storage solutions Kenya, loft tanks, cylindrical tanks, industrial water tanks, agricultural water tanks",
  authors: [{ name: "TopTank Kenya" }],
  creator: "TopTank Kenya",
  publisher: "TopTank Kenya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://toptank.co.ke'),
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://toptank.co.ke",
    title: "TopTank Kenya - Premium Water Storage Solutions",
    description: "Kenya's trusted water storage technology since 2007. Premium quality water tanks engineered for durability.",
    siteName: "TopTank Kenya",
  },
  twitter: {
    card: "summary_large_image",
    title: "TopTank Kenya - Premium Water Storage Solutions",
    description: "Kenya's trusted water storage technology since 2007.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <WishlistProvider>
            <ToastProvider>
              <Navigation />
              <main className="flex-grow">{children}</main>
              <Footer />
              <WhatsAppButton />
              <CartSidebar />
            </ToastProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
