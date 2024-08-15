import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { Sidebar } from "@/components/navbar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-screen min-h-screen max-h-screen overflow-hidden bg-gray-base text-black-base flex flex-row">
          <Sidebar />
          <div className="w-full flex flex-col overflow-auto">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
