'use client'

import './Intro.css'
import {useEffect} from "react";
import {wait} from "next/dist/lib/wait";
export default function Intro() {


    return (
        <div className={"h-screen"}>
            <div className={"flex flex-col justify-center items-center h-full"}>
                <h1 className={"text-6xl font-bold text-center"}>Welcome to my portfolio</h1>
                <h2 className={"text-4xl font-bold text-center"}>I&apos;m a full stack developer</h2>
                <a href={"#projects"} className={"mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>See my projects</a>
            </div>

        </div>
    );
}