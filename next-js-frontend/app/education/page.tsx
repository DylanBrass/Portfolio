'use client'
import "./Education.css"
import {useEffect, useState} from "react";
import axios from "axios";

export default function Education() {


    const [commendations, setCommendations] = useState([]);

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
        <div>

            <div className={"grid grid-cols-12 resume-box"}>


                <div id="education" className={"flex flex-col col-span-6 text-center"}>
                    <h2>Education</h2>
                    <ul className={"list-education"}>
                        <h1>2021-2024</h1>
                        <li>
                            <strong>College Diploma:</strong> DEC in Computer Science
                        </li>
                        <li>
                            <strong>Institution:</strong> Champlain College Saint-Lambert
                        </li>

                        <h1>2024-?</h1>
                        <li>
                            <strong>Degree:</strong> Genie de Logiciel/Software Engineering
                        </li>
                        <li>
                            <strong>Graduation Year:</strong> TBD
                        </li>
                    </ul>

                </div>

                <div className={"commendations col-span-6"}>
                    <h2>Commendations</h2>

                    {
                        commendations.map((commendation) => (
                            <div className={"commendation"} key={"r"}>
                                {commendation}
                            </div>
                        ))
                    }



                </div>

            </div>

        </div>
    );
}