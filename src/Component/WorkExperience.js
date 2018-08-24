import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import WorkExperienceItem from './WorkExperienceItem'

class WorkExperience extends Component {
  getExperiences(){
    return [
      {
        "id": 1,
        "company": "Evident Point Software",
        "position": "Full-Stack Web Developer",
        "time_start": "May 2016",
        "time_end": "Dec 2016",
        "location": "Vancouver, Canada",
        "language": "JQuery, MarionetteJS, Python, Ruby on Rails, MySQL, HTML",
        "description": "Working with the UX and database teams in developing the Active Textbook at https://activetextbook.com/features. Consistently maintaining the functionality and keeping the website bug-free after each code updates."
      },
      {
        "id": 2,
        "company": "University of British Columbia",
        "position": "Teaching Assistant for Software Construction",
        "time_start": "Jan 2016",
        "time_end": "June 2016",
        "location": "Vancouver, Canada",
        "language": "Android, Android Studio, Java, JUnit Test, Java Factory Test",
        "description": "Facilitating computer science students through a hands-on process of Android application development applying good UI design, clean code design pattern, and analysis of robust software components. Opening office hour three times per week assisting students in comprehending various software design, computational models, data structures, debugging process, and testing."
      },
      {
        "id": 3,
        "company": "Samsung",
        "position": "KNOX Portal and Zendesk Administrator",
        "time_start": "Jan 2015",
        "time_end": "Aug 2015",
        "location": "Vancouver, Canada",
        "language": "Zendesk, Drupal, HTML, CSS, Python, Javascript",
        "description": "Communicating with over 300 Samsung customers and an oversea R&D team in resolving Samsung KNOX issues while keeping each session within 1-day SLA time limit. Keeping website documents and UI up to date with the technical writing team at www.samsungknox.com. Assisting in maintaining over 10 thousands Samsung KNOX user account and registered Samsung partners over migrations with the QA and the development operation team."
      },
    ];
  }

  render(){
    return (
      <div className="WorkExperience">
        <Container>

          {this.getExperiences().map((experience) => {
            return(
              <section>
                <WorkExperienceItem experience={experience} key = {experience.id}/>
              </section>
            )
          })}
        </Container>>
      </div>
    );
  }
}

export default WorkExperience;
