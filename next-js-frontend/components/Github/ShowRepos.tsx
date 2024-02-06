'use client'

import {useEffect, useState} from "react";
import Repo from "@/Models/Repos";
import './showRepos.css';
import {Typewriter} from "nextjs-simple-typewriter";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Cell, Legend, Pie, PieChart, Tooltip} from 'recharts';

export default function ShowRepos() {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#4CAF50', '#FFD700', '#8A2BE2', '#FF4500', '#7CFC00', '#FF69B4'];

    const [repos, setRepos] = useState<Repo[]>([]);

    const [error, setError] = useState<string>("null");

    const getRepos = async () => {
        const response = await fetch('https://api.github.com/users/DylanBrass/repos', {
            headers: {
                'Authorization': `BEARER ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
            }
        });
        const data = await response.json();
        console.log(data)
        if (response.status != 200) {
            setError("Error fetching repos")
            return
        }
        setRepos(data);
    }

    async function getLanguages(url: string): Promise<{}[]> {

        if (url === "" || url === undefined) {

            return [{}]
        }

        const response = await fetch(url + "/languages", {
            headers: {
                'Authorization': `BEARER ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
            }
        });

        console.log(response)

        if (response.status != 200) {
            return [{}]
        }

        // remove promise type

        const data = await response.json();

        console.log(data)


        return data;


    }


    useEffect(() => {
        getRepos();
    }, []);


    return (
        <main>

            <h1 className={"text-center"}>Github Repos</h1>

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


            <Swiper
                pagination={{
                    type: 'bullets',
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {repos.map((repo) => (


                    <SwiperSlide key={
                        // @ts-ignore
                        repo.id}>
                        <div className={"w-screen h-[100%] text-center"}>
                            <a href={repo.html_url} className={"capitalize repo-item"}
                               style={{
                                   textDecoration: "none",
                                   color: "black"
                               }}
                            >
                                {
                                    // @ts-ignore
                                    <h2>{formatRepo(repo)}</h2>

                                }
                            </a>
                            <div className={"languages"}>
                                {
                                    getLanguages(repo.url).then((languages) => {
                                        if (languages.length === 0) {
                                            return
                                        }


                                        return (
                                            <div>
                                                {Object.keys(languages).length <= 1 ?

                                                    <div>
                                                        <p style={{
                                                            fontFamily: "'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",
                                                            fontStyle: 'normal'
                                                        }}>
                                                            Written in : {Object.keys(languages)[0]}</p>
                                                    </div>
                                                    :
                                                    <div>
                                                        <Typewriter
                                                            key={Object.keys(languages)[0]}
                                                            words={Object.keys(languages)}
                                                            cursor
                                                            loop={10000}
                                                            cursorBlinking={true}
                                                            cursorStyle='|'
                                                            typeSpeed={70}
                                                            deleteSpeed={50}
                                                            delaySpeed={1000}
                                                        />
                                                    </div>
                                                }
                                                <PieChart width={400} height={400}
                                                          className={"m-auto mb-6"}
                                                >
                                                    <Pie
                                                        data={Object.keys(languages).map((key) => {
                                                            return {
                                                                name: key,
                                                                // @ts-ignore
                                                                value: parseFloat((languages[key] / Object.values(languages).reduce((a, b) => a + b, 0) * 100).toFixed(2))
                                                            }
                                                        })}
                                                        cx={200}
                                                        cy={200}
                                                        paddingAngle={Object.keys(languages).length <= 1 ? 0 : 5}
                                                        outerRadius={80}
                                                        fill="#8884d8"
                                                        dataKey="value"
                                                        label
                                                    >
                                                        {
                                                            Object.keys(languages).map((entry, index) => <Cell
                                                                key={`cell-${index}`}
                                                                fill={COLORS[index % COLORS.length]}
                                                            />)
                                                        }

                                                    </Pie>
                                                    <Legend/>
                                                    <Tooltip/>
                                                </PieChart>

                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );

}


function formatRepo(repo: Repo) {
    let formattedName = repo.name.replace(/-/g, " ");
    formattedName = formattedName.replace(/_/g, " ");
    formattedName = formattedName.replace(/([A-Z])/g, ' $1').trim()
    return formattedName;
}