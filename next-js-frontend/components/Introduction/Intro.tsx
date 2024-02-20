'use client'

import './Intro.css'

export default function Intro() {


    return (
        <div className={"h-screen"}>
            <div className={"flex flex-col justify-center items-center h-full"}>
                <h1 className={"text-2xl sm:text-6xl font-bold text-center text-white"}>Welcome to my portfolio</h1>
                <h2 className={"text-1xl sm:text-4xl  font-bold text-center text-white"}>&lt;Full Stack Developer /&gt;</h2>
                <div className={"flex flex-row text-center"}>
                    <a href={"/projects"}
                       className={"mt-10 bg-white hover:bg-red-300 text-black font-bold py-2 px-4 mx-20 rounded"}>See my
                        projects
                    </a>
                    <a className={"mt-10 bg-white hover:bg-red-300 text-black font-bold py-2 px-4 mx-20 rounded"}
                       href="/CV_fr.pdf" download={"dylan_brassard_cv"}>Download my
                        resume
                    </a>
                </div>
            </div>

        </div>
    );
}