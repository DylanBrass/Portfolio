'use client'

import {Typewriter} from "nextjs-simple-typewriter";

export default function Loading() {


    return (
        <div className={"loading m-auto text-center mt-5 mb-5"}>

            <Typewriter
                words={['Loading', 'Loading.', 'Loading..', 'Loading...']}
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