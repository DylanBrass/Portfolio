'use client'

import Fish from "@/components/hobbies/fishkeeping/fish";
import History from "@/components/hobbies/history/history";
import ModelBuilding from "@/components/hobbies/models/ModelBuilding";
import {useState} from "react";
import myPhoto from "@/public/myPhoto.jpg";
import history from "@/public/History.jpg";
import fishKeeping from "@/public/fishKeeping.jpg";
import modelBuilding from "@/public/tank.jpg";
import { animateScroll as scroll } from 'react-scroll';


export default function Page() {

    const [showFish, setShowFish] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [showModelBuilding, setShowModelBuilding] = useState(false);

    const handleImageClick = (hobby: string) => {
        let elementId = "";

        switch (hobby) {
            case 'fish':
                setShowFish(!showFish);
                setShowHistory(false);
                setShowModelBuilding(false);
                elementId = "fish-box";
                break;
            case 'history':
                setShowFish(false);
                setShowHistory(!showHistory);
                setShowModelBuilding(false);
                elementId = "history-box";
                break;
            case 'modelBuilding':
                setShowFish(false);
                setShowHistory(false);
                setShowModelBuilding(!showModelBuilding);
                elementId = "model-box";
                break;
            default:
                break;
        }

        if (elementId) {
            // @ts-ignore
            scroll.scrollToBottom({
                duration: 800,
                smooth: 'easeInOutQuart',
            });
        }
    };
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
                    <h1 className={"text-2xl font-bold"}>Hi, my name is Dylan !</h1>
                    <p className={"sm:text-wrap"}>
                        I&apos;m a dedicated Software Developer with a solid foundation in
                        Computer Science, holding a DEC in the field. My passion for coding is the driving force behind
                        my professional journey, where I find joy in crafting efficient and innovative solutions.
                        <br/>
                        <br/>
                        While my expertise lies in software development, my interests extend beyond the digital realm. I
                        have an insatiable curiosity for history, finding inspiration in the stories of the past that
                        shape our present. Beyond the screen, you&apos;ll find me immersed in the world of fishkeeping,
                        cultivating a vibrant underwater ecosystem that mirrors the complexity of coding projects.
                        <br/>
                        <br/>

                        Model building is another facet of my creativity. Whether it&apos;s constructing intricate
                        miniature
                        replicas or designing elegant code structures, I appreciate the art of bringing ideas to life
                        with precision and attention to detail.
                        <br/>
                        <br/>

                        I thrive on challenges, particularly when it comes to backend development. Problem-solving is
                        not just a skill; it&apos;s a source of satisfaction that propels me to continually enhance my
                        abilities. I believe in the power of technology to make a positive impact, and I am committed to
                        contributing my skills to create solutions that stand the test of time.
                        <br/>
                        <br/>
                        Join me on this journey where the worlds of coding, history, fishkeeping, and model building
                        converge, creating a unique tapestry that reflects my diverse interests and unwavering
                        commitment to excellence.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-5 mx-10 my-10">
                <hr className="w-1/3"/>
                <p className="text-center font-light text-opacity-25 italic animate-pulse flex gap-2 font-inter">Hobbies</p>
                <hr className="w-1/3"/>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">

                <h1 className="text-center">Click To View My Hobbies</h1>

                <div className="flex flex-col lg:flex-row items-center lg:gap-4 mt-4">
                    <div className={`hobby-image ${showFish ? '' : ''}`} onClick={() => handleImageClick('fish')}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={fishKeeping.src} alt={"placeholder"}
                             className={"rounded-full flex items-center justify-center w-64 h-64 mb-2 lg:mb-0"}/>
                        <p className={"text-center"}>Fish keeping</p>
                    </div>
                    <div className={`hobby-image ${showHistory ? '' : ''}`} onClick={() => handleImageClick('history')}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={history.src} alt={"placeholder"}
                             className={"rounded-full flex items-center justify-center w-64 h-64 mb-2 lg:mb-0"}/>
                        <p className={"text-center"}>Studying History</p>
                    </div>
                    <div className={`hobby-image ${showModelBuilding ? '' : ''}`}
                         onClick={() => handleImageClick('modelBuilding')}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={modelBuilding.src} alt={"placeholder"}
                             className={"rounded-full flex items-center justify-center w-64 h-64 mb-2 lg:mb-0"}/>
                        <p className={"text-center"}>Model Building</p>
                    </div>
                </div>


                <div id={"fish-box"} className={`${showFish ? 'appear' : 'hidden'}`}>
                    <Fish/>
                </div>
                <div id={"history-box"} className={`${showHistory ? 'appear' : 'hidden'}`}>
                    <History/>
                </div>
                <div id={"model-box"} className={`${showModelBuilding ? 'appear' : 'hidden'}`}>
                    <ModelBuilding/>
                </div>

            </div>
        </div>
    )
}