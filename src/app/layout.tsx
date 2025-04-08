import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/theme-provider";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple Dashboard",
  icons: {
    icon: "/images/logo.svg",
  },
  description: "A simple and intuitive product dashboard to view, filter, and manage products effortlessly. Easily sort and search through your inventory with real-time updates.",
  keywords: [
    "dashboard",
    "products",
    "product dashboard",
    "product management",
    "product inventory",
    "filter",
    "sort",
    "search",
    "real-time updates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
