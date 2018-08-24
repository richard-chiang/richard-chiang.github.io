import React, { Component } from 'react';
import {Header} from 'semantic-ui-react';

class WorkExperienceItem extends Component {
  render() {
    const p = this.props.experience;
    return (
      <div className="WorkExperienceItem">
        <Header size='huge'>{p.position}</Header>
        <Header size='small' textAlign='left'>
          {p.company}
          <Header.Subheader>
            <strong>{p.language}</strong>  // {p.time_start} - {p.time_end} <br />
            {p.location}
          </Header.Subheader>
        </Header>
        <div>{p.description}</div>
      </div>
    );
  }
}

export default WorkExperienceItem;
