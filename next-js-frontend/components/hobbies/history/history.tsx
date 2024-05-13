'use client'

export default function History({dict}: any) {
    return (
        <div className={"text-center"}
             style={{width: "100"}}
        >

            <h1 id={"history"} className={"text-center "}>
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
