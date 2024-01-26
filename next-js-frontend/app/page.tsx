import PetClinic from "@/components/Pet-Clinic/PetClinic";

export default function Home() {
    return (
        <main>

            <h1 className={"text-center"}>Home</h1>
            <div className={"grid grid-cols-12"}>
                <div className={"col-span-6 text-center"}>
                    <h2>My Past Projects</h2>
                    <p>These are some of my past projects</p>
                </div>
                <div className={"col-span-6 text-center"}>
                    <h2>Github</h2>
                </div>

            </div>


            <hr/>
            <h1>Pet Clinic</h1>
            <PetClinic/>

        </main>
    );
}
