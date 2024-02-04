'use client'
import axios from "axios";
import Swal from 'sweetalert2'
import './AddCommendation.css'

export default function CreateCommendation() {


    const submitCommendation = (event: any) => {
        event.preventDefault();
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
                    text: "Something went wrong!\n" + error.response.data.message + "\nPlease try again."
                });
            });
    }

    return (
        <div className={"add-commendation-wrapper"}>
            <div className={"container"}>
                <h2 className={"title"}>Leave me a commendation</h2>
                <form onSubmit={submitCommendation}>
                    <input className={"input"} type={"text"} name={"name"} id={"name"} placeholder={"Name"}/>
                    <input className={"input"} type={"email"} name={"email"} id={"email"} placeholder={"Email"}/>
                    <textarea className={"textarea"} name={"message"} id={"message"} placeholder={"Message"}/>
                    <button className={"button"} type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

