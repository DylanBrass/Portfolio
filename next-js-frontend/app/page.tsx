import Intro from "@/components/Introduction/Intro";
import React from "react";
import background from "@/public/mainPageBackground.jpg";

export default function Home() {
    return (
        <main>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${background.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "95vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Intro/>
            </div>
        </main>
    );
}
