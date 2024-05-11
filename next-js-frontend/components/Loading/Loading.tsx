'use client'

import {Typewriter} from "nextjs-simple-typewriter";

export default function Loading({text}: { text: string[] }) {

    return (
        <div className={"loading m-auto text-center mt-5 mb-5"}>

            <Typewriter
                words={text}
                loop={5}
                cursor
                cursorStyle=''
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
            />

        </div>
    );
}