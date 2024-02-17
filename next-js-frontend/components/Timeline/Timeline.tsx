import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export default function Timeline() {
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
                <p className="vertical-timeline-element-subtitle">Software Engineering Bachelor</p>
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
                <h3 className="vertical-timeline-element-title">Desjardins Internship</h3>
                <p className="vertical-timeline-element-subtitle">Software Developer</p>
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
                <h3 className="vertical-timeline-element-title">Successfully deployed first Website</h3>
                <p className="vertical-timeline-element-subtitle">Corso Electrique Inc. found <a
                    href={"https://corsoelectriqueinc.tech/"}>here</a></p>
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
                <h3 className="vertical-timeline-element-title">Archivist position at the SHLM</h3>
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
                <p className="vertical-timeline-element-subtitle">D.E.C. in Computer Science</p>
            </VerticalTimelineElement>


        </VerticalTimeline>
    )
}

