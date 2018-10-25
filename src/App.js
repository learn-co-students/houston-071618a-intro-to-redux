import React, { Component } from "react";
import gamesData from "./gamesData";
import AddPlayer from "./components/AddPlayer";
import TeamList from "./components/TeamList";
import PlayerDetails from "./components/PlayerDetails";
import NavHeader from "./components/Header";
import "semantic-ui-css/semantic.min.css";
import {connect} from 'react-redux'

class App extends Component {
  state = {
    showForm: false
  };

    // NO MUTATION
    // this.state.selectedPlayer = player;

  handleShowForm = e => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleAddPlayer = player => {
    const team = this.state.teams.find(team => team.id === player.team_id);
    const teamIndex = this.state.teams.indexOf(team);
    const playersCopy = [...team.players, player];
    const teamCopy = { ...team, players: playersCopy };
    const teamsCopy = [...this.state.teams];
    teamsCopy.splice(teamIndex, 1, teamCopy);
    this.setState({ teams: teamsCopy });
  };

  render() {
    return (
      <div className="App">
        <NavHeader />
        <button onClick={this.handleShowForm}>Show Form</button>
        {this.state.showForm ? (
          <AddPlayer
            addPlayer={this.handleAddPlayer}
          />
        ) : null}
        <TeamList />
        {!this.props.selectedPlayer ? (
          <div> Click Player for Details </div>
        ) : (
          <PlayerDetails selectedPlayer={this.props.selectedPlayer} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    selectedPlayer: state.selectedPlayer
  }
}

export default connect(mapStateToProps, null)(App);
