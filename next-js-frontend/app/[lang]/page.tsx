import Intro from "@/components/Introduction/Intro";
import React from "react";
import background from "@/public/mainPageBackground.jpg";
import {getDictionary} from "@/lib/getDictionary";
import {Locale} from "@/i18n.config";

export default async function Home({
                                       params: {lang},
                                   }: {
    params: { lang: Locale }
}) {


    return (
        <main>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${background.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "92vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Intro lang={lang}/>
            </div>
        </main>
    );
}
