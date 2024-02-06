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

        </div>
    );
}