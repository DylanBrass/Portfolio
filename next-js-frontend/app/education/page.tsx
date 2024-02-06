'use client'
import "./Education.css"
import axios from "axios";


import Commendations from "../../Models/Commendations";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {useEffect, useState} from "react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Education() {


    const [commendations, setCommendations] = useState<Commendations[]>([]);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_BE_HOST + 'api/commendations')
            .then((response) => {
                setCommendations(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div className="container mx-auto mt-8">
            <div className={"text-center"}>
                <div className={"m-auto"}>
                    <h2>People I worked with !</h2>


                    <Swiper
                        pagination={{
                            type: 'bullets',
                            clickable: true
                        }}
                        loop={true}
                        autoplay={true}
                        modules={[Pagination, Autoplay]}
                        speed={1000}
                        className="mySwiper"
                    >
                        {commendations.map((commendation, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                >
                                    <div className={"m-5 mb-20"}>
                                        <div key={index} className="commendation w-fit m-auto p-2 rounded-b min-w-[50%] h-full shadow-lg">
                                            <h3>From : {commendation.name}</h3>
                                            <p className={""}>{commendation.message}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 resume-box h-[90vh]">

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
                    <embed src="/CV_fr.pdf" width="100%" height={"100%"} className={"overflow-auto"}/>
                    <a className={"download-resume"} href="/CV_fr.pdf" download={"dylan_brassard_cv"}>Download my
                        resume</a>
                    <a href="/commendations/create" className="block mb-4 text-blue-500">Leave me a commendation</a>


                </div>


            </div>

        </div>
    );
}