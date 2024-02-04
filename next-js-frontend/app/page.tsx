'use client'

import PetClinic from "@/components/Pet-Clinic/PetClinic";
import ShowRepos from "@/components/Github/ShowRepos";
import ContactManager from "@/components/Contact-Manager/ContactManager";
import Corso from "@/components/ECP/Corso";
import GolfGame from "@/components/Game-Project/GolfGame";
import ArtGallery from "@/components/Art-Gallery/ArtGallery";
import Intro from "@/components/Introduction/Intro";

export default function Home() {
    return (
        <main>

            <Intro/>

            <hr/>
            <div className={"grid grid-cols-12"}>

                <div className={"col-span-6 text-center"}>
                    <span id={"projects"}/>
                    <h2>My Past Projects</h2>
                    <p>These are some of my past projects</p>
                </div>
                <div className={"col-span-6 text-center"}>
                    <h2>Github</h2>
                    <ShowRepos/>
                </div>

            </div>

            <hr/>
            <Corso/>

            <hr/>
            <PetClinic/>

            <hr/>

            <ContactManager/>

            <hr/>

            <GolfGame/>

            <hr/>

            <ArtGallery/>

        </main>
    );
}
