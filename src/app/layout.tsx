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
} from '@clerk/nextjs'

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
            <span className="text-xl font-semibold text-gray-900">Qizo</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a>
            <div className="relative">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm flex items-center">
                Services
                <span className="ml-1">▼</span>
              </a>
            </div>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Log in</a>
            <a href="#" className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium">Sign Up</a>
          </div>
        </div>
      </nav>
       {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
        {children}
      </body>
    </html>
     </ClerkProvider>
  );
}
