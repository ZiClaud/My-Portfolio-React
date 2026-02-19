import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Claudio Di Maio | Software Developer & Open-Source Contributor",
  description: "Developer with expertise in TypeScript, React, and Flutter. Passionate about creating scalable, user-friendly web applications and contributing to open-source projects",
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  )
}
