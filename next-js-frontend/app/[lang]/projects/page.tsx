'use client'
import Corso from "@/components/ECP/Corso";
import PetClinic from "@/components/Pet-Clinic/PetClinic";
import GolfGame from "@/components/Game-Project/GolfGame";
import React, {Suspense} from "react";
import Loading from "@/components/Loading/Loading";
import ShowRepos from "@/components/Github/ShowRepos";
import {getDictionary} from "@/lib/getDictionary";
import {Locale} from "@/i18n.config";

export default async function Projects({
                                           params: {lang},
                                       }: {
    params: { lang: Locale }
}) {



    const {projects} = await getDictionary(lang)

    const {loading} = await getDictionary(lang)

    return (
        <div>
            <h1 className={"text-center"}>{projects.title}</h1>
            <div id={"projects"} className={"text-center"}>
                <Suspense fallback={<Loading text={loading}/>}>
                    <ShowRepos dict={projects.allRepos}/>
                </Suspense>
            </div>

            <Corso dict={projects.corso}/>

            <PetClinic dict={projects.pet_clinic}/>

            <GolfGame dict={projects.golf_game}/>

        </div>
    );
}