'use client'

import './Intro.css'
import {getDictionary} from "@/lib/getDictionary";
import {Locale} from "@/i18n.config";

export default async function Intro({lang}: { lang: Locale }) {

    const {intro} = await getDictionary(lang)

    return (
        <div className={"h-max w-screen"}>
            <div className={"flex flex-col justify-center items-center h-full"}>
                <h1 className={"text-2xl sm:text-6xl font-bold text-center text-white"}>{intro.title}</h1>
                <h2 className={"text-1xl sm:text-4xl font-bold text-center text-white"}>{intro.subtitle}</h2>
                <div className={"flex-row text-center"}>
                    <a href={"/projects"}
                       className={"mt-10 bg-white hover:bg-red-300 text-black font-bold py-2 px-4 mx-5 sm:mx-20 rounded"}>
                        {intro.projects_button}
                    </a>
                    <a className={"mt-10 bg-white hover:bg-red-300 text-black font-bold py-2 px-4 mx-5 sm:mx-20 rounded"}
                       href={`/CV_${lang}.pdf`} download={"dylan_brassard_cv"}>
                        {intro.resume_button}
                    </a>
                </div>
            </div>
        </div>

    );
}