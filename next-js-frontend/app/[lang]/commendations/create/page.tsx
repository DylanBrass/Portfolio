'use client'
import axios from "axios";
import Swal from 'sweetalert2'
import './AddCommendation.css'
import {Locale} from "@/i18n.config";
import React from "react";

export default function CreateCommendation({
                                               params: {lang},
                                           }: {
    params: { lang: Locale }
}) {

    const [isLoading, setIsLoading] = React.useState(false);

    const submitCommendation = (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        axios.post(process.env.NEXT_PUBLIC_BE_HOST + 'api/commendations',
            {
                name: event.target.name.value,
                email: event.target.email.value,
                message: event.target.message.value
            })
            .then((response) => {
                console.log(response);
                window.location.href = "/education";
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!, Please try again."
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className={"add-commendation-wrapper"}>
            <div className={"container"}>
                <h2 className={"title"}>{lang === "en" ? "Add a commendation" : "Ajouter une recommandation"}</h2>
                <form onSubmit={submitCommendation}>
                    <input className={"input"} type={"text"} name={"name"} id={"name"} placeholder={lang === "en" ? "Name" : "Nom"}
                    />
                    <input className={"input"} type={"email"} name={"email"} id={"email"} placeholder={lang === "en" ? "Email" : "Courriel"}
                    />
                    <textarea className={"textarea"} name={"message"} id={"message"} placeholder={lang === "en" ? "Message" : "Message"
                    }/>
                    <button
                        disabled={isLoading}
                        className={"button"} type="submit">{lang === "en" ? "Submit" : "Soumettre"}</button>
                </form>
            </div>
        </div>
    );
}

