'use client'

import PetClinic from "@/components/Pet-Clinic/PetClinic";
import ShowRepos from "@/components/Github/ShowRepos";
import ContactManager from "@/components/Contact-Manager/ContactManager";
import Corso from "@/components/ECP/Corso";
import GolfGame from "@/components/Game-Project/GolfGame";
import ArtGallery from "@/components/Art-Gallery/ArtGallery";
import Intro from "@/components/Introduction/Intro";
import {Typewriter} from "nextjs-simple-typewriter";

export default function Home() {
    return (
        <main>

            <Intro/>

            <hr/>
            <div className={"grid grid-cols-12"}>

                <div className={"col-span-6 text-center"}>
                    <span id={"projects"}/>
                    <h2>My Past Projects</h2>
                    <Typewriter
                        words={['Spring Boot', 'ASP.NET Core', 'React JS', 'React TS', 'NextJs', 'ExpressJs', 'Flask']}
                        cursor
                        loop={10000}
                        cursorBlinking={true}
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></div>
                <div className={"col-span-6 text-center"}>
                    <h2>Github</h2>
                    <ShowRepos/>
                </div>

            </div>

            <Corso/>

            <PetClinic/>


            <ContactManager/>


            <GolfGame/>


            <ArtGallery/>

        </main>
    );
}
