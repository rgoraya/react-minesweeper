import React, { Component } from 'react'
import Timer from './timer'

class GameControls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      difficulty: this.props.difficulty
    }
  }

  render () {
    return (
      <div className="gamecontrols d-flex flex-row my-4 justify-content-center">
        <div className="mr-3" >
          <button className="btn btn-link text-dark p-0" onClick = {() => this.props.onGameReload()} >
            <span className="oi oi-reload"></span>
          </button>
        </div>
        <div className="form-check mx-3">
          <input className="form-check-input" type="radio" name="difficulty" id="difficultLow" value="low" 
            onChange={(e) => this.difficultySwitched(e)}
            checked={this.state.difficulty === "low"}
          />
          <label className="form-check-label" htmlFor="difficultEasy">Easy</label>
        </div>
        <div className="form-check mx-3">
          <input className="form-check-input" type="radio" name="difficulty" id="difficultyHigh" value="high" 
            onChange={(e) => this.difficultySwitched(e)}
            checked={this.state.difficulty === "high"}
          />
          <label className="form-check-label" htmlFor="difficultyHigh">Difficult</label>
        </div>
        <Timer 
          progress = {this.props.progress}
          onGameEnd = {this.props.onGameEnd}
        />
      </div>
    ) 
  }

  difficultySwitched (e) {
    let difficulty = e.target.value;
    this.props.difficultySwitched(e.target.value);
    this.setState({difficulty});
  }  
}

export default GameControls