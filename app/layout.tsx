import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";


 export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>

  </html>

 }