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

export default function Corso({dict} : any) {

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
                                {dict.slide1.p1}
                            </p>
                            <p>
                                {dict.slide1.p2}

                            </p>
                            <p>
                                {dict.slide1.p3}
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
                                {dict.slide2.p1}
                            </p>
                            <p>
                                {dict.slide2.p2}
                            </p>
                            <p>
                                {dict.slide2.p3}
                            </p>
                            <p>
                                {dict.slide2.p4}
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}