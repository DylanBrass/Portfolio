'use client'

import {useEffect, useState} from "react";
import Repo from "@/Models/Repos";
import './showRepos.css';
import {Typewriter} from "nextjs-simple-typewriter";

export default function ShowRepos() {

    const [repos, setRepos] = useState<[Repo]>([new Repo(0, "", "", "")]);

    const getRepos = async () => {
        const response = await fetch('https://api.github.com/users/DylanBrass/repos');
        const data = await response.json();
        console.log(data)
        setRepos(data);
    }

    const getLanguages = async (url: string) => {

        const response = await fetch(url)

        console.log(response)

        return Object.keys(response.json());

    }


    useEffect(() => {
        getRepos();
    }, []);

    repos.map(async (repo) => {
        const languages = await getLanguages(`${repo.url}/languages`);


        return (
            <main key={repo.id}>

                <h1>Github Repos</h1>

                {repos.map((repo) => (


                    <div key={
                        // @ts-ignore
                        repo.id}>
                        <a href={repo.html_url} className={"capitalize repo-item"}
                           style={{
                               textDecoration: "none",
                               color: "black"
                           }}
                        >
                            {
                                // @ts-ignore
                                formatRepo(repo)

                            }
                        </a>
                        <div className={"languages"}>

                            <Typewriter
                                words={languages}
                                cursor
                                loop={10000}
                                cursorBlinking={true}
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />

                        </div>
                    </div>
                ))}
            </main>
        );
    })
}


function formatRepo(repo: Repo) {
    let formattedName = repo.name.replace(/-/g, " ");
    formattedName = formattedName.replace(/_/g, " ");
    formattedName = formattedName.replace(/([A-Z])/g, ' $1').trim()
    return formattedName;
}