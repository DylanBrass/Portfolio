
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import {Locale} from "@/i18n.config";

export default function Timeline({lang}: { lang: Locale }) {
    return (
        <VerticalTimeline
            lineColor={'#ddd'}
            animate={true}
            layout={"2-columns"}
        >
            <VerticalTimelineElement
                visible={true}
                contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: 'rgb(33, 150, 243)', color: '#fff',
                }}
                date="2024 - ?"
                dateClassName={"text-black"}
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon={<SchoolIcon/>}
            >
                <h3 className="vertical-timeline-element-title">École de Technologie Supérieur</h3>
                <p className="vertical-timeline-element-subtitle">
                    {lang === "en" ? "B.Eng. in Software Engineering" : "B.Eng. en Génie Logiciel"}
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                visible={true}
                contentArrowStyle={{borderRight: '7px solid  rgb(233, 30, 99)'}}
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: 'rgb(233, 30, 99)', color: '#fff',
                }}
                date="3rd of March 2024 - 28th of June 2024"
                dateClassName={"text-black"}
                iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                icon={<WorkHistoryIcon/>}
            >
                <h3 className="vertical-timeline-element-title">
                    {lang === "en" ? "Desjardins Internship" : "Stage chez Desjardins"}
                </h3>
                <p className="vertical-timeline-element-subtitle">
                    {lang === "en" ? "Software Developer" : "Développeur Logiciel"}
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                visible={true}
                contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: 'rgb(33, 150, 243)', color: '#fff',
                }}
                date="2024"
                dateClassName={"text-black"}
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon={<SchoolIcon/>}
            >
                <h3 className="vertical-timeline-element-title">
                    {lang === "en" ? "Successfully deployed first Website" : "Déploiement du premier site web"}
                </h3>
                <p className="vertical-timeline-element-subtitle"><a
                    href={"https://corsoelectriqueinc.ca/"} target={"_blank"}>Corso Electrique Inc.</a></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                visible={true}
                contentArrowStyle={{borderRight: '7px solid  rgb(233, 30, 99)'}}
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: 'rgb(233, 30, 99)', color: '#fff',
                }}
                date="June 2022 - August 2022"
                dateClassName={"text-black"}
                iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                icon={<WorkHistoryIcon/>}
            >
                <h3 className="vertical-timeline-element-title">{lang === "en" ? "Archivist position at the SHLM" : "Archiviste à la SHLM"}</h3>
                <p className="vertical-timeline-element-subtitle">Société d&apos;histoire de La
                    Prairie-de-la-Magdeleine</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                visible={true}
                contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: 'rgb(33, 150, 243)', color: '#fff',
                }}
                date="2021 - 2024"
                dateClassName={"text-black"}
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                icon={<SchoolIcon/>}
            >
                <h3 className="vertical-timeline-element-title">Champlain College Saint-Lambert</h3>
                <p className="vertical-timeline-element-subtitle">
                    {lang === "en" ? "D.E.C. in Computer Science" : "D.E.C. en Informatique"}
                </p>
            </VerticalTimelineElement>


        </VerticalTimeline>
    )
}

