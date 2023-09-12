import Navbar from "@/components/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pixel Converter",
  description: "Convert images to pixel art (8bit)",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-slate-200 pt-10  pb-20 flex flex-col px-2 `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
