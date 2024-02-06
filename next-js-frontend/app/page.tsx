'use client'

import PetClinic from "@/components/Pet-Clinic/PetClinic";
import ShowRepos from "@/components/Github/ShowRepos";
import ContactManager from "@/components/Contact-Manager/ContactManager";
import Corso from "@/components/ECP/Corso";
import GolfGame from "@/components/Game-Project/GolfGame";
import ArtGallery from "@/components/Art-Gallery/ArtGallery";
import Intro from "@/components/Introduction/Intro";
import Loading from "@/components/Loading/Loading";
import React, {Suspense} from "react";

export default function Home() {
    return (
        <main>

            <Intro/>

            <hr/>
            <div id={"projects"} className={""}>
                <Suspense fallback={<Loading/>}>
                    <ShowRepos/>
                </Suspense>
            </div>

            <Corso/>

            <PetClinic/>


            <ContactManager/>


            <GolfGame/>


            <ArtGallery/>

        </main>
    );
}
