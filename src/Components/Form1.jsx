import { useState } from "react"
import { Link } from "react-router-dom"

function Form1(props) {

  return (
    <div className="form-info-container">

        <p>Long Game</p>

        <div className="form-fairways-hit">
          <label htmlFor="fairways"> Fairways Hit: </label>
          <input
            className="number-input"
            type="number"
            id="fairways"
            placeholder="8..."
            value={props.fairwaysHit}
            onChange={(e) => props.setFairwaysHit(e.target.value)}
          />
        </div>
        

        <div className="form-fairways-possible">
          <label htmlFor="fairways-possible"> Possible Fairways (no par 3s): </label>
          <input
            className="number-input"
            type="number"
            id="fairways-possible"
            placeholder="14..."
            value={props.possibleFairways}
            onChange={(e) => props.setPossibleFairways(e.target.value)}
          />
        </div>

        <div className="form-greens">
          <label htmlFor="greens"> Greens in Regulation: </label>
          <input
            className="number-input"
            type="number"
            id="greens"
            placeholder="11..."
            value={props.greens}
            onChange={(e) => props.setGreens(e.target.value)}
          />
      </div>
      
      <Link to="/form">
        <button>Back</button>
      </Link>

      <Link to="/form/2" >
        <button>Next</button>
      </Link>
      
    </div>
  )
}

export default Form1