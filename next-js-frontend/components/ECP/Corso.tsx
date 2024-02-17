'use client'
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter"
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import './Corso.css'
import mainPage from '@/public/corso-main-page.png'

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import {Navigation, Pagination} from 'swiper/modules';

export default function Corso() {

    const codeString = ' @Override\n' +
        '    public int sendEmail(String recipient, String subject, String template, Map<String, String> parameters) throws MessagingException {\n' +
        '        try {\n' +
        '            log.info("Sending email to {}", recipient);\n' +
        '            for (Map.Entry<String, String> entry : parameters.entrySet()) {\n' +
        '                log.info("Parameter {} : {}", entry.getKey(), entry.getValue());\n' +
        '            }\n' +
        '            Message message = new MimeMessage(session);\n' +
        '\n' +
        '            message.setFrom(new InternetAddress(username));\n' +
        '            message.setRecipients(\n' +
        '                    Message.RecipientType.TO,\n' +
        '                    InternetAddress.parse(recipient)\n' +
        '            );\n' +
        '            message.setSubject(subject);\n' +
        '\n' +
        '            Context context = new Context();\n' +
        '            //loop for all parameters and add them to the context\n' +
        '\n' +
        '            for (Map.Entry<String, String> entry : parameters.entrySet()) {\n' +
        '                context.setVariable(entry.getKey(), entry.getValue());\n' +
        '            }\n' +
        '\n' +
        '            String processedString = templateEngine.process(template, context);\n' +
        '\n' +
        '            //error is handled by the global controller handler\n' +
        '\n' +
        '            message.setContent(processedString, "text/html; charset=utf-8");\n' +
        '\n' +
        '\n' +
        '            Transport.send(message);\n' +
        '            return HttpStatus.SC_OK;\n' +
        '        } catch (MessagingException e) {\n' +
        '            throw new MessagingException();\n' +
        '        } catch (Exception e) {\n' +
        '            log.error(e.getMessage());\n' +
        '            return HttpStatus.SC_UNPROCESSABLE_ENTITY;\n' +
        '        }\n' +
        '    }'


    SyntaxHighlighter.registerLanguage('java', java);

    return (

        <div>

            <h1 id={"corso"} className={"text-center"}>Corso</h1>
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
                            <p>
                                This website was the combination of everything we learned in CEGEP, we were tasked to
                                find a client and fulfill the requirements they had.
                            </p>
                            <p>
                                Our client was Corso Electric, which is a electrician company, they wanted a website to
                                track their orders, and show themselves to the world.
                            </p>
                            <p>
                                We used React and Spring Boot to make this website, as well as MySQL for the database.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"flex h-fit p-8"}>
                        <div className={"w-1/2 p-2 max-h-96 overflow-scroll"}>
                            <SyntaxHighlighter language="java" style={atomDark}>
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                        <div className={"w-1/2 text-center p-2"}>
                            <p>
                                This is a part of the code that I wrote for the project.
                            </p>
                            <p>
                                This is a method that sends an email to the client, it uses Thymeleaf to process the
                                template and send the email.
                            </p>
                            <p>
                                The email is sent to the client with the parameters that are passed to the method.
                            </p>
                            <p>
                                My goal with this method was to make it as easy as possible to send an email, so that my
                                teammates could use it without any problem, and I tried to make it as verbosed and clear
                                to use. I would say I succeeded in that, since a lost of people in my class ended up
                                asking and copying my code.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}