import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import {Grid, Container} from 'semantic-ui-react';
import UnitedAirwayPicture from '../Image/United-Airway/map.png';
import ERWaitingRoomPicture from '../Image/ERWaitingRoom/PatientReportEntry.png';
import BusPlzStopPicture from '../Image/BusPlzStop/api.png';
import LiquorQuickerPicture from '../Image/LiquorQuicker/shopDisplay.png';

class Project extends Component {

  getProjects(){
    return [
      {
        "id": 1,
        "name": "United Airway",
        "time_start": "Jan 2017",
        "time_end": "Apr 2017",
        "team_size": "6",
        "language": "Django, Javascript, HTML, CSS",
        "description": "A dashboard requested by the United Way (https://www.uwlm.ca/) to analyze the spendings and investment of each branches.",
        "contribution": "Designing and implementing the frontend given the client's requirement and requested images. Reviewing and refactoring the frontend codebase to ensure the ease of maintainence after handing it over to United Way",
        "challenge": "Designing a web app to quickly and intuitively display the various mixture of big data",
        "outcome": "After discussing with the client and the team member, it is decided that we uses google visualization charts to handle the visualization after considering the potential lag, monetary cost, and the ease of maintence after handing the project back to the client",
        "link": "https://github.com/richard-chiang/team-1",
      },
      {
        "id": 2,
        "name": "Emergency Room Waiting Time",
        "time_start": "Feb 2016",
        "time_end": "Apr 2016",
        "team_size": "4",
        "language": "Angular2, TypeScript, MySQL",
        "description": "Medical emergency room storage demo that records a hospital's activity",
        "contribution": "Responsible for creating and maintaining the database by building the schema and checking data's validity. Support frontend team members by building GET and POST requests handler to ensure swift data transaction between the application and the database",
        "challenge": "Building a schema that contains all types of data while ensuring ease of data manipulation through Angular2 and SQL",
        "outcome": "Consulting with the UBC database professor and agreeing on some will-be commonly used API calls, a schema was prototyped, evaluated on clarity and correctness, and was implemented with MySQL Workbench",
        "link": "https://github.com/richard-chiang/ERWaitingTime-1"
      },
      {
        "id": 3,
        "name": "Liquor Quicker",
        "time_start": "Sept 2015",
        "time_end": "Dec 2015",
        "team_size": "5",
        "language": "Django, HTML, CSS, Bootstrap",
        "description": "Intuitive map for Vancouver, BC liquor stores",
        "contribution": "Stylizing and implementing the homepage, login, registration, and store profile page.",
        "challenge": "Displaying a large amount of liquor store data and displaying them without noticeable lag",
        "outcome": "Team decides to do a major update by picking up JQuery and changing all synchronous API calls to asynchronous calls",
        "link": "https://github.com/richard-chiang/LiquorQuicker"
      },
      {
        "id": 4,
        "name": "Bus Plz Stop Android App",
        "time_start": "Dec 2014",
        "time_end": "Aug 2015",
        "team_size": "3",
        "language": "Java, Android Studio",
        "description": "Android Transit App to alert users when a user selected bus is approaching a targetted bus stop",
        "contribution": "Implementing the periodic API calls for transit data updates and compare the data to see if the bus is within the range of the targetted bus stop",
        "challenge": "Determining when to update the data. A fixed time interval data update is inappropriate because too short can quickly use up the API daily call limit and too long may allow the bus to go pass the bus stop without being noticed",
        "outcome": "Using a bus average speed, updated with an offline reinforcement learning, and the distance from the bus current position to the targetted bus stop, Update accordingly. Slow update if bus is slow or bus stop is far while fast update if bus is fast and closing in on the stop (wasn't implemented due to college exam period approaching)",
        "link": "https://github.com/richard-chiang/BusPlzStop"
      },
    ];
  }

  getPicture(id){
    switch (id){
      // United Airway
      case 1:
      return UnitedAirwayPicture;

      // ERWaitingRoom
      case 2:
      return ERWaitingRoomPicture;

      // LiquorQuicker
      case 3:
      return LiquorQuickerPicture;

      // BusPlzStop
      case 4:
      return BusPlzStopPicture;

      default:
      break;
    }
  }

  render(){
    return (
      <div className="Project">
        <Container>

          {this.getProjects().map((project) => {
            let img = this.getPicture(project.id);
            return (
              <section>
                <Grid columns={2} >
                  <ProjectItem project={project} pic= {img} key={project.id}/>
                </Grid>
              </section>
            )
          })}
        </Container>
      </div>
    );
  }
}

export default Project;
