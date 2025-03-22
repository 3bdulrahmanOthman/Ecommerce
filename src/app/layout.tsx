import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce Store",
  authors: [
    {
      name: "Abdulrahman Othman",
      url: "https://github.com/Supremache",
    },
  ],
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/favicon.ico",
  // },
  description: "A modern ecommerce store with an admin panel.",
  keywords: [
    "Ecommerce",
    "Admin Panel",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  // openGraph: {
  //   title: "Ecommerce Store",
  //   description: "A modern ecommerce store with an admin panel.",
  //   url: "https://ecommerce-store.vercel.app",
  //   siteName: "Ecommerce Store",
  //   images: [
  //     {
  //       url: "/og-image.png",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: "en-US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Ecommerce Store",
  //   description: "A modern ecommerce store with an admin panel.",
  //   images: ["/og-image.png"],
  //   creator: "@Supremache",
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   nocache: false,
  //   noarchive: false,
  //   noimageindex: false,
  //   noydir: false,
  //   maxSnippet: -1,
  //   maxImagePreview: "large",
  //   maxVideoPreview: -1,
  //   allow: [
  //     {
  //       userAgent: "*",
  //       allow: "/",
  //     },
  //   ],
  //   disallow: [
  //     {
  //       userAgent: "*",
  //       disallow: "/api/",
  //     },  
  //   ],
  // },
  // manifest: "/site.webmanifest",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  //   { media: "(prefers-color-scheme: dark)", color: "#000000" },
  // ],
  // appleWebApp: {
  //   capable: true,
  //   statusBarStyle: "default",
  //   title: "Ecommerce Store",
  //   startupImage: [
  //     "/apple-touch-startup-image.png",
  //     "/apple-touch-startup-image-2x.png",
  //   ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} />
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
