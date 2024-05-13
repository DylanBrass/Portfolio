'use client'

export default function Fish({dict}: any) {
    return (
        <div>

            <h1 id={"fish"} className={"text-center"}>
                {dict.title}
            </h1>

            <p className={"w-50 mx-40 mb-4"}>
                {dict.paragraph1}

                <br/>
                <br/>
                {dict.paragraph2}

                <br/>
                <br/>
                {dict.paragraph3}
                <br/>
                <br/>
                {dict.paragraph4}

            </p>

        </div>
    );
}
