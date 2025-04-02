import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project HT",
  description: "Project prediction temperature and humidity",
  creator: "Diego Ivan Perea Montealegre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="h-screen flex flex-col justify-center items-center px-8">
            {children}
          </main>
         
      </body>
    </html>
  );
}
