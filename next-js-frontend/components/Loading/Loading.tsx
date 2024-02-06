'use client'

import {Typewriter} from "nextjs-simple-typewriter";

export default function Loading() {

    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className={"loading m-auto"}>

            <Typewriter
                words={['Loading', 'Loading.', 'Loading..', 'Loading...']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
            />

        </div>
    );
}