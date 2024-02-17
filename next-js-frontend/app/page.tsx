import PetClinic from "@/components/Pet-Clinic/PetClinic";
import ShowRepos from "@/components/Github/ShowRepos";
import ContactManager from "@/components/Contact-Manager/ContactManager";
import Corso from "@/components/ECP/Corso";
import GolfGame from "@/components/Game-Project/GolfGame";
import ArtGallery from "@/components/Art-Gallery/ArtGallery";
import Intro from "@/components/Introduction/Intro";
import Loading from "@/components/Loading/Loading";
import React, { Suspense } from "react";
import { getDictionary } from "@/dictionaries/getDictionary";
import background from "@/public/mainPageBackground.jpg";

export default function Home() {
    return (
        <main>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${background.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "95vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Intro/>
            </div>
        </main>
    );
}
