// REMOVE ALL SHARED STATE FROM PARENT COMPONENTS

import React, { Component } from "react";
import gamesData from "./gamesData";
import AddPlayer from "./components/AddPlayer";
import TeamList from "./components/TeamList";
import PlayerDetails from "./components/PlayerDetails";
import NavHeader from "./components/Header";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";

class App extends Component {
  state = {
    showForm: false
  };

  handleSelectPlayer = player => {
    // this.setState({
    //   selectedPlayer: player
    // });
    // NO MUTATION
    // this.state.selectedPlayer = player;
  };

  handleShowForm = e => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleAddPlayer = player => {
    //   const team = this.state.teams.find(team => team.id === player.team_id);
    //   const teamIndex = this.state.teams.indexOf(team);
    //   const playersCopy = [...team.players, player];
    //   const teamCopy = { ...team, players: playersCopy };
    //   const teamsCopy = [...this.state.teams];
    //   teamsCopy.splice(teamIndex, 1, teamCopy);
    //   this.setState({ teams: teamsCopy });
  };

  render() {
    return (
      <div className="App">
        <NavHeader />
        <button onClick={this.handleShowForm}>Show Form</button>
        {this.state.showForm ? (
          <AddPlayer addPlayer={this.handleAddPlayer} />
        ) : null}
        <TeamList selectPlayer={this.handleSelectPlayer} />
        {!this.props.selectedPlayer ? (
          <div> Click Player for Details </div>
        ) : (
          <PlayerDetails />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPlayer: state.selectedPlayer
  };
};

export default connect(mapStateToProps)(App);

// DISPATCH calls reducer with current state and passed action
// const playerData = {
//   id: 200,
//   name: "humzah",
//   number: 8.5,
//   shoe: 7,
//   points: 600,
//   rebounds: 500,
//   assists: 400,
//   steals: 300,
//   blocks: 200,
//   slamDunks: 100,
//   team_id: 2
// };
// store.dispatch(addPlayer(playerData));
