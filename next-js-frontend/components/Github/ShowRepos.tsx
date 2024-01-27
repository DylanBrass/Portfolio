'use client'

import {useEffect, useState} from "react";
import Repo from "@/Models/Repos";
import './showRepos.css';

export default function ShowRepos() {

    const [repos, setRepos] = useState<[Repo]>([new Repo(0, "", "")]);

    const getRepos = async () => {
        const response = await fetch('https://api.github.com/users/DylanBrass/repos');
        const data = await response.json();
        setRepos(data);
    }

    useEffect(() => {
        getRepos();
    }, []);

    return (
        <main>

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