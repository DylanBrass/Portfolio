'use client'
import Fish from "@/components/hobbies/fishkeeping/fish";
import History from "@/components/hobbies/history/history";
import ModelBuilding from "@/components/hobbies/models/ModelBuilding";
import myPhoto from "@/public/myPhoto.jpg";
import history from "@/public/History.jpg";
import fishKeeping from "@/public/fishKeeping.jpg";
import modelBuilding from "@/public/tank.jpg";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/getDictionary";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default async function Page({
                                       params: {lang},
                                   }: {
    params: { lang: Locale }
}) {

    const {about} = await getDictionary(lang)

    // @ts-ignore
    return (
        <div>
            <div className={"m-auto"} style={{
                width: "80%",
            }}>
                <div className={"flex p-12 float-start"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={myPhoto.src} alt={"placeholder"}
                         className={"rounded-full sm:flex sm:items-center sm:justify-center w-96 hidden"}/>
                </div>
                <div className={"px-6"}>
                    <h1 className={"text-2xl font-bold"}>{about.title}</h1>
                    <p className={"sm:text-wrap"}>
                        {about.paragraph1}
                        <br/>
                        <br/>
                        {about.paragraph2}
                        <br/>
                        <br/>
                        {about.paragraph3}
                        <br/>
                        <br/>
                        {about.paragraph4}
                        <br/>
                        <br/>
                        {about.paragraph5}
                    </p>
                </div>
            </div>


            <div className="flex flex-col items-center justify-center mt-4 w-[100%]">
                <div className="flex justify-center items-center gap-5 mx-10 my-10 w-[100%]">
                    <hr className="w-1/3"/>
                    <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">Hobbies</p>
                    <hr className="w-1/3"/>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:gap-4 mt-4">
                    <div className={`hobby-image`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={fishKeeping.src} alt={"placeholder"}
                             className={"rounded-full flex items-center justify-center w-64 h-64 mb-2 lg:mb-0"}/>
                        <p className={"text-center"}>{about.hobbies.fish}</p>
                    </div>
                    <div className={`hobby-image`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={history.src} alt={"placeholder"}
                             className={"rounded-full flex items-center justify-center w-64 h-64 mb-2 lg:mb-0"}/>
                        <p className={"text-center"}>{about.hobbies.history}</p>
                    </div>
                    <div className={`hobby-image`}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={modelBuilding.src} alt={"placeholder"}
                             className={"rounded-full flex items-center justify-center w-64 h-64 mb-2 lg:mb-0"}/>
                        <p className={"text-center"}>{about.hobbies.modelBuilding}</p>
                    </div>
                </div>

                <div>
                    <Swiper
                        pagination={{
                            type: 'bullets',
                            clickable: true
                        }}
                        navigation={true}
                        loop={true}
                        //add bigger delay
                        autoplay={{
                            delay: 5000,
                        }}
                        modules={[Pagination, Autoplay, Navigation]}
                        speed={1000}
                        className="mySwiper"
                        style={{width: "100vh"}}
                    >
                        <SwiperSlide>
                            <div className={"flex h-fit p-8"}>
                                <Fish dict={about.fish}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"flex h-fit p-8"}>
                                <History dict={about.history}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={"flex h-fit p-8"}>
                                <ModelBuilding dict={about.models}/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}