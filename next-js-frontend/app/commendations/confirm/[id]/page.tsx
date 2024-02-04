'use client'

import {useParams} from 'next/navigation'
import axios from "axios";
import Swal from "sweetalert2";
import './Approve.css'

export default function Commendations() {

    const params = useParams<{ id: string }>()

    const approve = (event: any) => {
        event.preventDefault();
        axios.patch(process.env.NEXT_PUBLIC_BE_HOST + 'api/commendations/' + params.id,
            {
                pwd: event.target.pass.value
            })
            .then((response) => {
                console.log(response);

                Swal.fire({
                    icon: "success",
                    title: "Commendation approved",
                    text: "The commendation has been approved."
                }).then(() => {
                    window.location.href = "/education";
                })

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
        <div className={"approve-wrapper "}>
            <div className={"flex flex-col justify-center items-center h-full"}>
                <h2 className={"title"}>Approve commendation</h2>
                <form onSubmit={approve}>
                    <input className={"input"} type={"password"} name={"pass"} id={"pass"}/>
                    <button className={"button"} type="submit">Approve</button>
                </form>
            </div>
        </div>
    );
}