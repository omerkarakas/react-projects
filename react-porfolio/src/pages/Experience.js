import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import '../styles/Experience.css';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="darkblue">
        {/* TKK */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="2021 - Current"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
          h5="omer"
        >
          <h3 className="vertical-timeline-element-title title">
            Turkish Agricultural Credit Cooperatives
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Senior Software Engineer
          </h5>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Ankara, Turkey
          </h5>
          <p>Javascript, Typescript, React.js, Express, Node.js Projects</p>
        </VerticalTimelineElement>

        {/* PIRIGO */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="2020 - 2021"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Pirigo Payment Solutions
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Co-Founder, Lead Software Engineer
          </h5>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Ankara, Turkey
          </h5>
          <p>
            Javascript, TypeScript, React.js, React native, Amazon Web Services
            (AWS), Spring/Java backend development, Java Vaadin, Web Services
            (REST, SOAP), PostgreSQL
          </p>
        </VerticalTimelineElement>

        {/* Bilge Adam */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="2019 - 2020"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Bilge Adam Academy
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Web Development Instructor
          </h5>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Ankara, Turkey
          </h5>
          <p>
            JavaScript, React.js, HTML, CSS, Java, Hibernate, Spring (Framework,
            MVC, AOP, REST, Security), Spring Boot
          </p>
        </VerticalTimelineElement>

        {/* SGK */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="2017 - 2019"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Social Security Institution, VBT Software
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Performance Tuning Expert
          </h5>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Ankara, Turkey
          </h5>
          <p>Java, IBM DB2, SQL/PL</p>
        </VerticalTimelineElement>

        {/* PIRIGO */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="2016 - 2017"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Pirigo Payment Solutions
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Co-Founder, Senior Software Engineer
          </h5>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Ankara, Turkey
          </h5>
          <p>
            Javascript, Frontend JS, Angular.js, Ionic, Cordova, Amazon Web
            Services (AWS), Java Vaadin Framework, Backend Spring Java
            Development, Web Services (REST), PostgreSQL
          </p>
        </VerticalTimelineElement>

        {/* INNOVA */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="2004 - 2016"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Innova IT Solutions
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Senior Software Engineer
          </h5>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Ankara, Turkey
          </h5>
          <p>
            Java, Backend Spring Java Development, Web Services (SOAP), Swing,
            Oracle Database, SQL, PL/SQL
          </p>
        </VerticalTimelineElement>

        {/* MS */}
        <VerticalTimelineElement
          className="vertical-timeline--education"
          date="2003 - 2006"
          iconStyle={{ background: '#f5d20b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Middle East Technical University
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Ankara, Turkey
          </h5>
          <p>MS in Computer Engineering, GPA : 3.45</p>
        </VerticalTimelineElement>

        {/* DOCUART */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="1999 - 2003"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">Docuart IT</h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Software Developer
          </h5>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Ankara, Turkey
          </h5>
          <p> Oracle Database, SQL, PL/SQL, Oracle Forms, Reports</p>
        </VerticalTimelineElement>

        {/* BS */}
        <VerticalTimelineElement
          className="vertical-timeline--education"
          date="1994 - 1999"
          iconStyle={{ background: '#f5d20b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Middle East Technical University
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Ankara, Turkey
          </h5>
          <p>BS in Civil Engineering, GPA : 2.85</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
