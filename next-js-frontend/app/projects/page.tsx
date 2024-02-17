'use client'
import Corso from "@/components/ECP/Corso";
import PetClinic from "@/components/Pet-Clinic/PetClinic";
import GolfGame from "@/components/Game-Project/GolfGame";
import React, {Suspense} from "react";
import Loading from "@/components/Loading/Loading";
import ShowRepos from "@/components/Github/ShowRepos";

export default function Projects() {
    return (
        <div>
            <h1 className={"text-center"}>Project</h1>
            <div id={"projects"} className={"text-center"}>
                <Suspense fallback={<Loading/>}>
                    <ShowRepos/>
                </Suspense>
            </div>

            <Corso/>

            <PetClinic/>

            <GolfGame/>

        </div>
    );
}