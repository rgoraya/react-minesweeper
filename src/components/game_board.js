import React, { Component } from 'react';
import Square from './square';
import GameControls from './game_controls';
import Result from './result'

export default class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.pendingSquares = [];
    this.traversedSquares = [];

    this.state = {
      mineLocations: this.mineLocations(this.props.boardSize, this.props.numberOfMines),
      traversedSquares: [],
      flaggedSquares: [],
      result: null,
      progress: "initial",
      difficulty: this.props.difficulty,
      boardSize: this.props.boardSize,
      numberOfMines: this.props.numberOfMines,
      gameTime: null
    }

    this.buildBoardRows = this.buildBoardRows.bind(this);
    this.buildBoardColumns = this.buildBoardColumns.bind(this);
  }

  
  handleMineFlagging (square) {
    this.setState({ flaggedSquares: [...this.state.flaggedSquares, square] })  
  }

  handleSquareClick (square) {
    if (this.state.mineLocations.includes(square)) {
      this.handleGameEnd("lost")
    } else {
      this.traversedSquares = [];
      this.pendingSquares = [];
      this.pendingSquares.push(square);
      this.traverseBoard();
    }
  }

  traverseBoard () {
    if (this.pendingSquares.length > 0) {
      if (this.getMinesAround(this.pendingSquares[0]) === 0 && !this.traversedSquares.includes(this.pendingSquares[0]) && !this.state.traversedSquares.includes(this.pendingSquares[0])) {        
          let neighbors = this.getNeighbors(this.pendingSquares[0]);
          
        for (let j=0; j < neighbors.length; j++) {
          if (!this.pendingSquares.includes(neighbors[j])) {
            this.pendingSquares.push(neighbors[j]);
          }
        }
      } 
      
      // mark as traversed
      if (!this.traversedSquares.includes(this.pendingSquares[0])) {
        this.traversedSquares.push(this.pendingSquares[0])
      }

      // remove from pending
      this.pendingSquares.splice(0, 1);
      // revisit
      this.traverseBoard();
      return;  
    }
    
    let totalTraversed = [...this.state.traversedSquares, ...this.traversedSquares];

    if (totalTraversed.length >= (Math.pow(this.state.boardSize, 2) - this.state.mineLocations.length)) {
      this.handleGameEnd("won");
    } else {
      this.setState( {
        traversedSquares: totalTraversed,
        progress: "on"
      });
    }
  }

  getMinesAround (sqLocation) {
    let neighborsWithMines = (this.getNeighbors(sqLocation, true));
    return neighborsWithMines.length;  
  }

  getNeighbors (sqLocation, onlyWithMines = false) {
    let size = this.state.boardSize;
    let neighborPositions = [-(size + 1),  -(size), -(size - 1), -1, 1, (size - 1), size, (size + 1)];
    let leftOutOfBounds = [-(size + 1), -1, (size - 1)];
    let rightOutOfBounds = [-(size - 1), 1, (size + 1)];
    let neighbors = [];

    neighborPositions.forEach((neighborPosition) => {
      let neighborSq = neighborPosition + sqLocation;
      // not out of bounds on the right
      if (!( (sqLocation % size === 0) && rightOutOfBounds.includes(neighborPosition) )) { 
        // not out of bounds on the left
        if (!( ((sqLocation -1) % size === 0) && leftOutOfBounds.includes(neighborPosition) )) {
          // not out of bounds on top or bottom
          if ((neighborSq > 0) && (neighborSq <= Math.pow(size, 2))) {
            // check to see if we are here to get all valid neighbors or only ones with mines
            if (!onlyWithMines || (onlyWithMines && this.state.mineLocations.includes(neighborSq)) ) {
                neighbors.push(neighborSq)
            }
          }
        }
      }
    });
    return neighbors;
  }

  handleGameEnd(result) {
    this.setState({ 
      result,  
      progress: "off"
    });
  }

  onGameReload () {
    this.resetGame(this.state.difficulty, this.state.boardSize, this.state.numberOfMines)
  }

  difficultySwitched (difficulty) {
    const difficultyLevels = {
      low: { boardSize: 9, numberOfMines: 10 },
      high: { boardSize: 12, numberOfMines: 20 }
    };
    const boardSize = difficultyLevels[difficulty].boardSize;
    const numberOfMines = difficultyLevels[difficulty].numberOfMines;
    
    this.resetGame(difficulty, boardSize, numberOfMines);
  }

  resetGame (difficulty, boardSize, numberOfMines) {
    this.setState({ 
      boardSize, 
      numberOfMines, 
      difficulty, 
      mineLocations: this.mineLocations(boardSize, numberOfMines),
      progress: "initial",
      traversedSquares: [],
      flaggedSquares: [],
      result: null 
    })
  }

  render () {
    return (
      <div>
        <GameControls
          progress = {this.state.progress} 
          difficulty = {this.state.difficulty}
          result = {this.state.result} 
          difficultySwitched = {(difficulty) => {this.difficultySwitched(difficulty)}}
          onGameReload = {() => this.onGameReload()}
          onGameEnd = {(gameTime) => { this.setState({ gameTime }) }} 
        />
        {this.buildBoardRows()}
        <Result 
          result = {this.state.result}
          squaresRevealed = {this.state.traversedSquares.length}
          gameTime = {this.state.gameTime} 
        />
      </div>
    )
  }

  mineLocations (boardSize, numberOfMines) {
    let mineLocations = [];
    while(mineLocations.length < numberOfMines ){
        var randomLocation = Math.floor(Math.random()*(Math.pow(boardSize, 2))) + 1;
        if (mineLocations.indexOf(randomLocation) > -1) continue;
        mineLocations[mineLocations.length] = randomLocation;
    }
    return mineLocations
  }
  
  buildBoardRows () {
    let rowArr = [];
    for (let y = 1; y <= this.state.boardSize; y++) {
      rowArr.push(
        <div className="gameboard d-flex flex-row justify-content-center" key={y}>
          {this.buildBoardColumns(y)}
        </div>
      )
    }
    return rowArr;
  }

  buildBoardColumns (y) {
    let colArr = [];
    for (let x=1; x<= this.state.boardSize; x++ ) {
      let location = x+((y-1)*this.state.boardSize);

      colArr.push(
        <Square 
          hasMine = {this.state.mineLocations.includes(location)}
          isTraversed = {this.state.traversedSquares.includes(location)}
          isFlagged = {this.state.flaggedSquares.includes(location)}
          minesAround = {this.getMinesAround(location)}
          key = {location} 
          location = {location}
          result = {this.state.result}
          handleSquareClick = {(location) => this.handleSquareClick(location)}
          handleMineFlagging = {(location) => this.handleMineFlagging(location)}
        />
      );
    }
    return colArr;
  }
}