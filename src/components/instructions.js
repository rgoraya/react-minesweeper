import React from 'react'

const Instructions = () => {
  return (
    <div className="instructions d-flex flex-row justify-content-center mt-4">
      <div className="mr-3">
        <p className="mb-0">Easy</p>
        <small className="text-muted">Board: 9x9 | Mines: 10</small>
      </div>
      <div className="mx-3">
        <p className="mb-0">Difficult</p>
        <small className="text-muted">Board: 12x12 | Mines: 20</small>
      </div>
      <div className="ml-3">
        <p className="mb-0">Flagging</p>
        <small className="text-muted">Right click to flag squares</small>
      </div>
    </div>
  )
}

export default Instructions;