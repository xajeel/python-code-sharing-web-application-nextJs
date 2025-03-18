import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import NavbarResponsive from "@/components/NavbarResponsive";
import { Poppins } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-poppins", // Custom CSS variable
});


// Define font styles
// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "PySnipper",
  description: "Discover & Contribute",
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
        className={`${poppins.variable} antialiased bg-white text-gray-800`}
      >
        <div /*className="container p-4 border-b m-auto shadow-sm"*/>
          {/* <Navbar /> */}
          <NavbarResponsive />
        </div>
        <div className="md:container mx-auto p-6 md:p-12">
        {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
