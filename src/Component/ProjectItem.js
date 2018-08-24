import React, { Component } from 'react';
import {Header, Button, Grid, Image, Label, Table} from 'semantic-ui-react';

class ProjectItem extends Component {

  isEven(n){ return (n % 2) === 0; }

  render() {
    const p = this.props.project;

    return (
      <Grid.Row className="ProjectItem">
        {!this.isEven(p.id) ?
          (<Grid.Column> <Image src={this.props.pic} fluid bordered/> </Grid.Column>) :
          ('')}

          <Grid.Column>
            <Header size='huge' textAlign='center' className = "project-title">
              {p.name}
              <Header.Subheader>
                {p.team_size} members <br/> {p.language}
              </Header.Subheader>
            </Header>
            <Table className="project-table" basic="very" verticalAlign="middle" textAlign="left">
              <Table.Body>
                <Table.Row className = "project-description">
                  <Table.Cell><Label color='grey'>Description: </Label></Table.Cell>
                  <Table.Cell>{p.description}</Table.Cell>
                </Table.Row>
                <Table.Row className = "project-contribution">
                  <Table.Cell><Label color='blue'> Contribution: </Label></Table.Cell>
                  <Table.Cell>{p.contribution}</Table.Cell>
                </Table.Row>
                <Table.Row className = "project-challenge">
                  <Table.Cell><Label color='red'>Challenge:</Label></Table.Cell>
                  <Table.Cell>{p.challenge}</Table.Cell>
                </Table.Row>
                <Table.Row className = "project-outcome">
                  <Table.Cell><Label color='olive'>Outcome:</Label></Table.Cell>
                  <Table.Cell>{p.outcome}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Button animated color="twitter" href={p.link} fluid>
              <Button.Content visible>
                View on Github
              </Button.Content>
            </Button>
          </Grid.Column>

          {this.isEven(p.id) ?
            (<Grid.Column> <Image src={this.props.pic} fluid bordered/> </Grid.Column>) :
            ('')}
          </Grid.Row>
        );
      }
    }

    export default ProjectItem;
