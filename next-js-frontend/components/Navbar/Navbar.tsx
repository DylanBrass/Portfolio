'use client'

import ChatImg from "../../public/Gmail_icon.svg";
import Image from "next/image";
import linkedin from "../../public/LinkedIn_icon.svg.png";

export default function Navbar() {

    return (
        <nav className={"flex gap-4 justify-between"}>
            <div className={"logo-box link-box flex gap-x-24 text-white"}>
                <div>
                    <a id={"logo"}>Dylan Brassard</a>
                </div>
                <div>
                    <a href="/">Home</a>
                </div>
                <div>
                    <a href="/about">About</a>
                </div>
                <div>
                    <a href="/education">Education</a>
                </div>

            </div>
            <div className={"flex justify-end h-max"}>
                <span className={"text-white mt-auto mb-auto"}>EN</span>


                <div className={"vertical-bar"}/>

                <Image className={""} src={ChatImg} alt={"Talk to me !"}
                       height={40}
                />
                <div className={"vertical-bar"}/>

                <div className={"linkedIn-box"}>
                    <Image
                        className={""}
                        src={linkedin}
                        alt={"LinkedIn"}
                        width={40} height={40}
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/dylan-brassard-43001428b/", "_blank")
                        }
                        }
                    />
                </div>
            </div>
        </nav>
    )

}