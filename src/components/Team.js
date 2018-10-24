import React from "react";
import Player from "./Player";
import { connect } from "react-redux";
import { selectPlayer } from "../actions/teams_actions";

const Team = ({ team, selectPlayer }) => {
  const renderedPlayers = team.players.map(player => {
    return (
      <Player key={player.id} player={player} selectPlayer={selectPlayer} />
    );
  });

  return (
    <div className="team">
      <h3>{team.team_name}</h3>
      <h4>
        {" "}
        Colors: {team.colors[0]}, {team.colors[1]}{" "}
      </h4>
      {renderedPlayers}
    </div>
  );
};

//
// const mapDispatchToProps = dispatch => {
//   return { selectPlayer: player => dispatch(selectPlayer(player)) };
// };

export default connect(
  null,
  { selectPlayer }
)(Team);
