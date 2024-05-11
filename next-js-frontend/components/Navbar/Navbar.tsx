'use client'
import ChatImg from "../../public/Gmail_icon.svg";
import Image from "next/image";
import linkedin from "../../public/LinkedIn_icon.png";
import Swal from "sweetalert2";
import logo from "../../public/logo.png";
import LocaleSwitcher from "@/components/I18n/locale-switcher";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/getDictionary";

export default  async function Navbar({lang}: { lang: Locale }) {

    const {nav} = await getDictionary(lang)

    return (
        <nav className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-4 pb-4 lg:pt-0 lg:pb-0">
            <div className="logo-box link-box flex gap-x-4 lg:gap-x-24 text-white lg:text-base">
                <div className={"hidden lg:block"}>
                    <a className={"animate-none"} href="/"><Image src={logo} alt="Dylan Brassard" height={65}/></a>
                </div>
                <div className={"m-auto"}>
                    <a href={`/${lang}`}
                    >{nav.home}</a>
                </div>
                <div className={"m-auto"}>
                    <a href={`/${lang}/projects`}>{nav.projects}</a>
                </div>
                <div className={"m-auto"}>
                    <a href={`/${lang}/about`}>{nav.about}</a>
                </div>
                <div className={"m-auto"}>
                    <a href={`/${lang}/education`}>{nav.education}</a>
                </div>
            </div>
            <div className="contact-wrapper flex items-center justify-end lg:h-max">
                <LocaleSwitcher/>
                <div className="vertical-bar"/>
                <div className="email-box" onClick={() => {
                    Swal.fire({
                        icon: "info",
                        title: "Write me an email",
                        html: `${nav.email.content}<br>
               <button class='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onclick='navigator.clipboard.writeText("dylan.brassard@outlook.com")'>${nav.email.copy_button_text}</button>`,
                        showCloseButton: true,
                        showConfirmButton: false
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
