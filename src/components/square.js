import React,  { Component } from 'react'

class Square extends Component {
  render () {
    if (this.props.result) {
      return (
        <div 
          className={`
            btn-sqaure justify-content-center border flex-fill d-flex align-items-center m-1 
            ${this.props.hasMine ? (this.props.result === "lost" ? "text-danger visible-mine" : "text-success visible-mine" ) : "text-dark"} 
          `}
        >{this.props.hasMine ? 
          (<span className="oi oi-fire"></span>) : 
          (this.props.minesAround || null)}
        </div>
      )
    } else if (this.props.isTraversed) { 
      return (
        <div className={`
          btn-sqaure justify-content-center border flex-fill d-flex align-items-center m-1
          ${! this.props.minesAround ? "empty" : ""}
          ${this.colorByMinesAround()}
        `}>{this.props.minesAround || null}
        </div>
      )
    } else {
      return (
        <button className={`
          btn-sqaure btn border btn-light flex-fill rounded-0 p-0 text-center m-1 ${this.props.isFlagged ? "border-info" : "border-dark"}
        `} 
          onClick = {() => this.handleSquareClick()}
          onContextMenu = {(e) => this.handleMineFlagging(e)}
        ></button>
      )
    }    
  }
  
  handleSquareClick () {
    if (!this.props.isTraversed) {
      this.props.handleSquareClick(this.props.location)
    }
  }

  handleMineFlagging (e) {
    e.preventDefault();
    if (!this.props.isTraversed) {
      this.props.handleMineFlagging(this.props.location)
    }
  }

  colorByMinesAround () {
    switch (true) {
      case (this.props.minesAround > 1 && this.props.minesAround < 3):
        return 'text-danger'
      case this.props.minesAround >= 3:
        return 'text-dark-red'
      case this.props.minesAround === 1:
      default:
        return 'text-dark' 
    }
  }
}

export default Square