import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "../components/Footer"

 export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en">
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Navbar />
        {children}
          <Footer />
      </ThemeProvider>
      </body>

  </html>

 }