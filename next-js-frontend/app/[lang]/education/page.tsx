'use client'
import "./Education.css"
import axios from "axios";


import Commendations from "../../../Models/Commendations";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {useEffect, useState} from "react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Timeline from "@/components/Timeline/Timeline";
import {Locale} from "@/i18n.config";

export default function Education({
                                      params: {lang},
                                  }: {
    params: { lang: Locale }
}) {


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
                    <a href="/commendations/create" className="block mb-4 text-blue-500">
                        {lang === "en" ? "Worked with me before ?" : "Déjà travaillé avec moi ?"}
                    </a>

                    {commendations.length === 0 ? <h2>{lang === "en" ? "No commendations yet !" : "Pas encore de recommandations !"}</h2> :
                        <div>
                            <h2>{lang === "en" ? "People I worked with !" : "Les gens avec qui j'ai travaillé !"}</h2>


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
                                                <div key={index}
                                                     className="commendation w-fit m-auto p-2 rounded-b min-w-[50%] h-full shadow-lg">
                                                    <h3>{lang === "en" ? "From" : "De"} {commendation.name}</h3>
                                                    <p className={""}>{commendation.message}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    }
                </div>
            </div>

            <div>
                <Timeline
                    lang={lang}
                />
            </div>


        </div>
    );
}