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
        >
          <h3 className="vertical-timeline-element-title title">
            Agricultural Credit Cooperatives, Ankara, Turkey
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Operations / Project Manager
          </h5>
          <p>Operations management, projects management</p>
        </VerticalTimelineElement>

        {/* Bilge Adam */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="2019 - 2021"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Bilge Adam Academy, Ankara, Turkey
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Java Instructor
          </h5>
          <p>
            JavaScript, HTML, CSS, Java, Hibernate, Spring, MVC, AOP, REST,
            Spring boot
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
            Social Security Institution, Ankara, Turkey
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Database Performance Tuning Expert
          </h5>
          <p>IBM DB2, SQL/PL</p>
        </VerticalTimelineElement>

        {/* PIRIGO */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="2016 - 2017"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Pirigo Payment Solutions, Ankara, Turkey
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Co-Founder, Java/JavaScript Developer
          </h5>
          <p>JS, AngularJS, Ionic Framework, Cordova, Java, Spring, Vaadin </p>
        </VerticalTimelineElement>

        {/* INNOVA */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="2004 - 2016"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Innova IT Solutions, Ankara, Turkey
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Java Developer & Oracle Developer/DBA
          </h5>
          <p>Java, Swing, Oracle Database, SQL, PL/SQL</p>
        </VerticalTimelineElement>

        {/* MS */}
        <VerticalTimelineElement
          className="vertical-timeline--education"
          date="2003 - 2006"
          iconStyle={{ background: '#f5d20b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Middle East Technical University, Ankara, Turkey
          </h3>
          <p>MS in Computer Engineering, GPA:3.45</p>
        </VerticalTimelineElement>

        {/* DOCUART */}
        <VerticalTimelineElement
          className="vertical-timeline--work"
          date="1999 - 2003"
          iconStyle={{ background: 'steelblue', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Docuart IT, Ankara, Turkey
          </h3>
          <h5 className="vertical-timeline-element-subtitle subtitle">
            Oracle Forms/Reports Developer
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
            Middle East Technical University, Ankara, Turkey
          </h3>
          <p>BS in Civil Engineering, GPA:2.85</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
