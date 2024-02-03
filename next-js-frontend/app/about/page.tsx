'use client'

import Fish from "@/components/hobbies/fishkeeping/fish";
import History from "@/components/hobbies/history/history";
import ModelBuilding from "@/components/hobbies/models/ModelBuilding";
import {useState} from "react";


export default function Page() {

    const [showFish, setShowFish] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [showModelBuilding, setShowModelBuilding] = useState(false);

    const handleImageClick = (hobby: string) => {
        switch (hobby) {
            case 'fish':
                setShowFish(!showFish);
                setShowHistory(false);
                setShowModelBuilding(false);
                window.location.href = "#fish-box";
                break;
            case 'history':
                setShowFish(false);
                setShowHistory(!showHistory);
                setShowModelBuilding(false);
                window.location.href = "#history-box";

                break;
            case 'modelBuilding':
                setShowFish(false);
                setShowHistory(false);
                setShowModelBuilding(!showModelBuilding);
                window.location.href = "#model-box";
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <div className={"m-auto"} style={{
                width: "80%",
            }}>
                <div className={"flex p-12 float-start"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={"https://via.placeholder.com/500"} alt={"placeholder"}
                         className={"rounded-full flex items-center justify-center w-96"}/>
                </div>
                <div className={"p-12"}>
                    <p className={"text-wrap"} style={{
                        wordSpacing: "0.8rem",
                    }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero
                        eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus
                        est Lorem ipsum dolor sit amet.

                        <br/>
                        <br/>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                        illum
                        dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                        praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                        sit
                        amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna
                        aliquam erat volutpat.

                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                        esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                        iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                        nulla
                        facilisi.
                        <br/>
                        <br/>
                        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                        placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim
                        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat.

                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                        illum
                        dolore eu feugiat nulla facilisis.

                    </p>
                </div>
            </div>

            <hr/>
            <div className="flex flex-col items-center justify-center mt-4">

                <h1 className="text-center">Hobbies</h1>

                <div className="flex flex-col lg:flex-row items-center lg:gap-4 mt-4">
                    <div className={`hobby-image ${showFish ? '' : ''}`} onClick={() => handleImageClick('fish')}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={"https://via.placeholder.com/150"} alt={"placeholder"}
                             className={"rounded-full flex items-center justify-center w-96 mb-2 lg:mb-0"}/>
                        <p className={"text-center"}>Fish keeping</p>
                    </div>
                    <div className={`hobby-image ${showHistory ? '' : ''}`} onClick={() => handleImageClick('history')}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={"https://via.placeholder.com/150"} alt={"placeholder"}
                             className={"rounded-full flex items-center justify-center w-96 mb-2 lg:mb-0"}/>
                        <p className={"text-center"}>Studying History</p>
                    </div>
                    <div className={`hobby-image ${showModelBuilding ? '' : ''}`}
                         onClick={() => handleImageClick('modelBuilding')}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={"https://via.placeholder.com/150"} alt={"placeholder"}
                             className={"rounded-full flex items-center justify-center w-96 mb-2 lg:mb-0"}/>
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