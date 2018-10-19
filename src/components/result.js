import React from 'react'
import WonImg from '../won.gif'
import LostImg from '../lost.gif'

const styles = {
  won: {
    backgroundImage: `url(${WonImg})`
  },
  lost: {
    backgroundImage: `url(${LostImg})`  
  }
}

const Result = (props) => {
  if (props.result) {
    return (
      <div className="celebration d-flex flex-row my-4 justify-content-center">
        
        <div className={`result mr-2 ${props.result}`} style={styles[props.result]}></div>
        <p>You {props.result}! Squares Revealed: {props.squaresRevealed} | Time Taken: {props.gameTime}</p>
      </div>
    )
  } else {
    return null;
  }
}

export default Result