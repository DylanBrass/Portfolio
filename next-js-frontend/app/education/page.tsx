'use client'
import "./Education.css"
import {useEffect, useState} from "react";
import axios from "axios";

import Commendations from "../../Models/Commendations";

export default function Education() {


    const [commendations, setCommendations] = useState<[Commendations]>([new Commendations("","","","")]);

    const getCommendations = async () => {
        axios.get(`${process.env.NEXT_PUBLIC_BE_HOST}api/commendations`)
            .then((response) => {
                setCommendations(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }


    useEffect(() => {
        getCommendations();
    }, []);


    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 resume-box">

                <div id="education" className="flex flex-col col-span-full md:col-span-6 text-center mb-4 md:mb-0">
                    <h2>Education</h2>
                    <ul className="list-education">
                        <li>
                            <h1 className="text-xl font-bold mb-1">2021-2024</h1>
                            <p>
                                <strong>College Diploma:</strong> DEC in Computer Science
                            </p>
                            <p>
                                <strong>Institution:</strong> Champlain College Saint-Lambert
                            </p>
                        </li>

                        <li>
                            <h1 className="text-xl font-bold mb-1">2024-?</h1>
                            <p>
                                <strong>Degree:</strong> Genie de Logiciel/Software Engineering
                            </p>
                            <p>
                                <strong>Graduation Year:</strong> TBD
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="commendations col-span-full md:col-span-6">
                    <a href="/commendations/create" className="block mb-4 text-blue-500">Leave me a commendation</a>
                    <h2>Commendations</h2>

                    {
                        commendations.map((commendation, index) => (
                            <div key={index} className="commendation">
                                <h3 className="text-xl font-bold mb-2">{commendation.name}</h3>
                                <p>{commendation.message}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}