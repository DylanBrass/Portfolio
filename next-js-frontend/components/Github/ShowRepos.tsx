'use client'

import {useEffect, useState} from "react";
import Repo from "@/Models/Repos";
import './showRepos.css';
import {Typewriter} from "nextjs-simple-typewriter";

export default function ShowRepos() {

    const [repos, setRepos] = useState<Repo[]>([]);

    const [error, setError] = useState<string>("null");

    const getRepos = async () => {
        const response = await fetch('https://api.github.com/users/DylanBrass/repos');
        const data = await response.json();
        console.log(data)
        if (response.status != 200) {
            setError("Error fetching repos")
            return
        }
        setRepos(data);
    }

    async function getLanguages(url: string): Promise<string[]> {

        if (url === "" || url === undefined) {

            return []
        }

        const response = await fetch(url + "/languages")

        console.log(response)

        if (response.status != 200) {
            return []
        }

        // remove promise type

        const data = await response.json();

        console.log(data)

        return Object.keys(data)


    }


    useEffect(() => {
        getRepos();
    }, []);


    return (
        <main>

            <h1>Github Repos</h1>

            {repos.length === 0 && error === "null" ? (
                    <div>
                        <Typewriter
                            words={['Loading...']}
                            cursor
                            loop={10000}
                            cursorBlinking={true}
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                )
                :
                <div>
                    {error !== "null" ? (
                            <div>
                                <p>{error}</p>
                            </div>
                        ) :
                        <div>

                        </div>
                    }
                </div>
            }


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
                        {
                            getLanguages(repo.url).then((languages) => {
                                if (languages.length === 0) {
                                    return
                                }
                                return (
                                    <Typewriter
                                        key={languages[0]}
                                        words={languages}
                                        cursor
                                        loop={10000}
                                        cursorBlinking={true}
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                )
                            })
                        }


                    </div>
                </div>
            ))}
        </main>
    );

}


function formatRepo(repo: Repo) {
    let formattedName = repo.name.replace(/-/g, " ");
    formattedName = formattedName.replace(/_/g, " ");
    formattedName = formattedName.replace(/([A-Z])/g, ' $1').trim()
    return formattedName;
}