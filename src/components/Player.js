import React from 'react'
import {connect} from 'react-redux'
import {selectPlayer} from '../actions'

const Player = (props) => {
  return (
    <div onClick={() => props.selectedPlayer(props.player)}>
      <p>{props.player.name}</p>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return {
    selectedPlayer: (player) => dispatch(selectPlayer(player))
  }
}

export default connect(null, mapDispatchToProps)(Player)
