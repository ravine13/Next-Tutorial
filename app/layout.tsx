import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"

 export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en">
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Navbar />
        {children}
      </ThemeProvider>
      </body>

  </html>

 }