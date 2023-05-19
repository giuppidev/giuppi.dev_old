import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "giuppi.dev",
  description: "Programmatore nomade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col justify-center px-8 bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
