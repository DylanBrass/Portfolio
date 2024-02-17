import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import mainPage from "@/public/golf-game.png";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";

import csharp from 'react-syntax-highlighter/dist/esm/languages/prism/csharp';

export default function GolfGame() {

    const calculationString = " rb2d.AddForce(6.5f * force * -(endPos - (Vector2)transform.position).normalized);\n"

    const codeString = `private void Start()
{

    rb2d = gameObject.GetComponent<Rigidbody2D>();

    audioSource = gameObject.AddComponent<AudioSource>();
    hitSound = Resources.Load<AudioClip>("Hit");
    audioSource.clip = hitSound;

    if (IsLocalPlayer)
    {
        lineRenderer = this.gameObject.AddComponent<LineRenderer>();

        //This does not work in the build version: I am guessing it's because it 
        //does not have acess to the Shaders library
        //lineRenderer.material = new Material(Shader.Find("Legacy Shaders/Particles/Alpha Blended Premultiply"));

        lineRenderer.material = new Material(lineMaterial);
        lineRenderer.startColor = Color.white;
        lineRenderer.endColor = new Color(255, 2255, 255, 0.25f);
        lineRenderer.startWidth = 0.2f;
        lineRenderer.endWidth = 0.01f;
        lineRenderer.renderingLayerMask = 3;
    }


}

//put as update
private void Update()
{

    if (IsLocalPlayer)
    {
        if (this.gameObject != null && Camera.main != null)
        {
            //determine direction of hit
            Vector2 directionOfHit = Camera.main.ScreenToWorldPoint(Input.mousePosition) - this.gameObject.transform.position;

            float strengthOfHit = Mathf.Clamp(Vector2.Distance(transform.position, Camera.main.ScreenToWorldPoint(Input.mousePosition)), 0, maxDragLength);
            Vector2 endPos = (Vector2)transform.position + (directionOfHit.normalized * strengthOfHit);
            //check if ball is moving so ball cant be hit while moving
            if (rb2d.velocity.magnitude < 0.05f)
            {
                isMoving = false;
                gameObject.GetComponent<Collider2D>().isTrigger = true;
            }
            else
            {
                isMoving = true;
                gameObject.GetComponent<Collider2D>().isTrigger = false;
            }


            if (!isMoving)
            {
                //draw line for how strong ball is hit

                lineRenderer.SetPosition(1, endPos);


                lineRenderer.SetPosition(0, this.gameObject.transform.position);


                if (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.Space))
                {
                    //calculate force of hit
                    float force = (Vector2.Distance(this.gameObject.transform.position, endPos) * 100 / maxDragLength);
                    //add force to the direction determined higher up
                    rb2d.AddForce(6.5f * force * -(endPos - (Vector2)transform.position).normalized);
                    GlobalVariables.numOfHitsForLvl++;
                    audioSource.Play();
                }
            }



        }
    }
    if (isMoving)
        gameObject.GetComponent<Collider2D>().isTrigger = false;

}`

    SyntaxHighlighter.registerLanguage('csharp', csharp);

    return (
        <div>

            <h1 id={"golf-game"} className={"text-center"}>Golf Game</h1>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={"flex h-fit p-8"}>
                        <div className={"w-1/2 m-auto"}>
                            <img src={mainPage.src} alt={"Corso"} width={"100%"}/>
                        </div>
                        <div className={"w-1/2 text-center p-2"}>
                            <h1>
                                <a href={"https://github.com/DylanBrass/Final_Game_Project"}>
                                    found here
                                </a>
                            </h1>
                            <p>
                                This project was made with 3 other teammates, we each had our specialties and I was in
                                charge of coding the multiplayer aspects. This project was our final project to show
                                what we learned during or &quot;Gaming with unity&quot; class.
                            </p>
                            <p>
                                This was the first time I ever did anything with multiplayer and even more so, this was
                                my first game, I had a lot of fun, and it&apos;s something I expect to do again.
                            </p>
                            <p>
                                As you can see when you watch the video on github, there is a few bugs and polish
                                problems, these are simply because we ran
                                out of time since we were in our 4th semester with 7 classes and we needed to do other
                                projects. We would all like to fix those. Otherwise more levels and cleaner multiplayer
                                interactions are also on the list to do.
                            </p>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"flex h-fit p-8"}>
                        <div className={"w-1/2 p-2 max-h-96 overflow-scroll"}>

                            <SyntaxHighlighter language={"csharp"} style={atomDark}>
                                {codeString}
                            </SyntaxHighlighter>
                        </div>

                        <div className={"w-1/2 text-center p-2"}>

                            <p className={"m-auto"}>
                                This code is what make the line behing the ball appear and determine the strength of the
                                hit. I really liked thiis code for how simple it ended up being, we used line renderer
                                to draw the line to the cursor with a maximum length. Then with a calculation here :
                            </p>
                            <div className={"p-2 max-h-56 overflow-scroll"}>
                                <SyntaxHighlighter language={"csharp"} style={atomDark}>
                                    {calculationString}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}