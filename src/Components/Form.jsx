import { useState } from "react"
import { Link } from "react-router-dom"

function Form(props) {

  return (
    <div className="form-info-container">
        <p className="form-heading">Round Info</p>
        <div className="form-player">
          <label htmlFor="player"> Player Name: </label>
          <input
            type="text"
            id="player"
            placeholder="John Smith..."
            value={props.player}
            onChange={(e) => props.setPlayer(e.target.value)}
          />
        </div>
        

        <div className="form-course">
          <label htmlFor="course"> Golf Course: </label>
          <input
            type="text"
            id="course"
            placeholder="Augusta National..."
            value={props.course}
            onChange={(e) => props.setCourse(e.target.value)}
          />
        </div>

        <div className="form-score">
          <label htmlFor="score"> Score: </label>
          <input
            className="number-input"
            type="number"
            id="score"
            placeholder="72..."
            value={props.score}
            onChange={(e) => props.setScore(e.target.value)}
          />
        </div>

        <div className="form-holes">
          <label htmlFor="holes"> Holes: </label>
          <input
            className="number-input"
            type="number"
            id="holes"
            placeholder="18..."
            value={props.holes}
            onChange={(e) => props.setHoles(e.target.value)}
        />
      </div>

      <Link to="/form/1">
        <button>Next</button>
      </Link>
      
    </div>
  )
}

export default Form