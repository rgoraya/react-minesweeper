import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import GameBoard from './components/game_board'
import Instructions from './components/instructions'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardSize: 9,
      numberOfMines: 10,
      difficulty: "low"
    }
  }

  render () {
    return (
      <div className="App container">
        <Header />
        <GameBoard 
          boardSize = {this.state.boardSize}
          numberOfMines = {this.state.numberOfMines}
          difficulty = {this.state.difficulty}
          gameInitialized = {this.state.gameInitialized}
          onGameStart = {() => this.onGameStart()}
          onGameStop = {() => this.onGameStop()}
        />
        <Instructions />
      </div>
    );
  }


}

export default App;
