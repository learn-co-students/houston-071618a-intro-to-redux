import React, { Component } from "react";
import {connect} from 'react-redux'

class AddPlayer extends Component {
  state = {
    id: 200,
    name: "humzah",
    number: 8.5,
    shoe: 7,
    points: 600,
    rebounds: 500,
    assists: 400,
    steals: 300,
    blocks: 200,
    slamDunks: 100,
    team_id: 2
  };

  handleChange = e => {
    this.setState({
      [e.target.name]:
        e.target.name === "name" ? e.target.value : parseInt(e.target.value, 10)
    }, () => console.log(this.state));
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.id && this.state.team_id) this.props.submitPlayer(this.state);
  };

  autoFill = e => {
    e.preventDefault();
    this.setState({
      id: 200,
      name: "humzah",
      number: 8.5,
      shoe: 7,
      points: 600,
      rebounds: 500,
      assists: 400,
      steals: 300,
      blocks: 200,
      slamDunks: 100,
      team_id: 2
    });
  };

  render() {
    return (
      <form className="ui form fields center" onSubmit={this.handleSubmit}>
        <div className="fields" style={{ justifyContent: "center" }}>
          <div className="field">
            <label>
              id<input
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
              />
            </label>
            <label>
              name<input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="field">
            <label>
              number<input
                type="text"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </label>
            <label className="field">
              shoe<input
                type="text"
                name="shoe"
                value={this.state.shoe}
                onChange={this.handleChange}
              />
            </label>
            <label>
              points<input
                type="text"
                name="points"
                value={this.state.points}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="field">
            <label>
              rebounds<input
                type="text"
                name="rebounds"
                value={this.state.rebounds}
                onChange={this.handleChange}
              />
            </label>
            <label>
              assists<input
                type="text"
                name="assists"
                value={this.state.assists}
                onChange={this.handleChange}
              />
            </label>
            <label>
              steals<input
                type="text"
                name="steals"
                value={this.state.steals}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="field">
            <label>
              blocks<input
                type="text"
                name="blocks"
                value={this.state.blocks}
                onChange={this.handleChange}
              />
            </label>
            <label>
              slamDunks<input
                type="text"
                name="slamDunks"
                value={this.state.slamDunks}
                onChange={this.handleChange}
              />
            </label>
            <label>
              team<select
                type="text"
                name="team_id"
                value={this.state.team_id}
                onChange={this.handleChange}
              >
                {this.props.teams.map(team => (
                  <option value={team.id}>{team.team_name}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <input type="submit" value="Add Player" />
        <button onClick={this.autoFill}>Autofill</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    submitPlayer: (player) => dispatch({
      type: "ADD_PLAYER",
      payload: player
  })
  }
}

function mapStateToProps(state){
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
