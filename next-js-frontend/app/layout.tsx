import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Dylan Brassard - Portfolio",
    description: "Dylan Brassard's portfolio, showcasing his past projects and his education.",
};

export default function RootLayout({
                                       children,params
                                   }:{children:any, params: { lang: string }}) {

    console.log(params.lang)


    return (
        <html lang={params.lang}>

        <body className={inter.className}>

        <div className={"h-screen animation-wrapper"} id={"animation-intro"}>

            <Navbar/>

            {children}

        </div>

        </body>
        </html>
    );
}
