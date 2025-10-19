import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { SocketProvider } from "@/providers/SocketProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qizo",
  description: "Realtime Quiz app",
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
          <nav className="bg-white shadow-sm px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#bbe65b] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  Qizo
                </span>
              </div>
              <div className="flex items-center space-x-8">
                <a
                  href="#"
                  className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  About
                </a>
                <div className="relative">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm flex items-center"
                  >
                    Services
                    <span className="ml-1">▼</span>
                  </a>
                </div>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Contact
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <SignedOut>
                  <SignInButton>
                    <button className="text-gray-600 hover:text-gray-900 text-sm">
                      Log in
                    </button>
                  </SignInButton>

                  <SignUpButton>
                    <button className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </nav>
          
          <Toaster position="top-right" reverseOrder={false} />
          <SocketProvider>{children}</SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
