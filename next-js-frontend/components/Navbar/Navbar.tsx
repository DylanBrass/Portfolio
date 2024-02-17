'use client'
import ChatImg from "../../public/Gmail_icon.svg";
import Image from "next/image";
import linkedin from "../../public/LinkedIn_icon.png";
import Swal from "sweetalert2";
import logo from "../../public/logo.png";

export default function Navbar() {





    return (
        <nav className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-4 pb-4 lg:pt-0 lg:pb-0">
            <div className="logo-box link-box flex gap-x-4 lg:gap-x-24 text-white lg:text-base">
                <div className={"hidden lg:block"}>
                    <a className={"animate-none"} href="/"><Image src={logo} alt="Dylan Brassard" height={65}/></a>
                </div>
                <div className={"m-auto"}>
                    <a href="/">Home</a>
                </div>
                <div className={"m-auto"}>
                    <a href="/projects">Projects</a>
                </div>
                <div className={"m-auto"}>
                    <a href="/about">About</a>
                </div>
                <div className={"m-auto"}>
                    <a href="/education">Education</a>
                </div>
            </div>
            <div className="contact-wrapper flex items-center justify-end lg:h-max">
            <span className="text-white mt-auto mb-auto lg:mt-0 lg:mb-0">EN</span>

                <div className="vertical-bar"/>
                <div className="email-box" onClick={()=>{
                    Swal.fire({
                        icon: "info",
                        title: "Write me an email",
                        html: "My email is <a href='mailto:dylan.brassard@outlook.com'>dylan.brassard@outlook.com</a>" +
                            "<br>Click the button to copy it to your clipboard." +
                            "<br>" +
                            "<button class='button' onclick='navigator.clipboard.writeText(\"dylan.brassard@outlook.com\")'>Copy</button>",
                        showCloseButton: true,


                    });

                }}>
                    <Image
                        className=""
                        src={ChatImg}
                        alt="Email"
                        width={40}
                    />
                </div>


                <div className="vertical-bar"/>

                <div className="linkedIn-box">
                    <Image
                        className=""
                        src={linkedin}
                        alt="LinkedIn"
                        width={40}
                        height={40}
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/dylan-brassard-43001428b/", "_blank");
                        }}
                    />
                </div>
            </div>
        </nav>

    );
}
