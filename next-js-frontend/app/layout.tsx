import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React, {Suspense} from "react";
import Navbar from "@/components/Navbar/Navbar";
import Loading from "@/components/Loading/Loading";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Dylan Brassard - Portfolio",
    description: "Dylan Brassard's portfolio, showcasing his past projects and his education.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body className={inter.className}>

        <div className={"h-screen animation-wrapper"} id={"animation-intro"}>

            <Navbar/>
            <Suspense fallback={<Loading/>}>

                {children}
            </Suspense>

        </div>

        </body>
        </html>
    );
}
