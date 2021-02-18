import { useState } from "react"
import { Link } from "react-router-dom"

function Form1(props) {

  return (
    <div className="form-parent-container">

    <div className="form-longgame-container">

        <p id="form-longgame-heading">Long Game</p>

        <div id="form-fairways-hit">
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
        

        <div id="form-fairways-possible">
          <label htmlFor="fairways-possible"> Possible Fairways: </label>
          <input
            className="number-input"
            type="number"
            id="fairways-possible"
            placeholder="14..."
            value={props.possibleFairways}
            onChange={(e) => props.setPossibleFairways(e.target.value)}
          />
        </div>

        <div id="form-greens">
          <label htmlFor="greens"> Greens in Reg: </label>
          <input
            className="number-input"
            type="number"
            id="greens"
            placeholder="11..."
            value={props.greens}
            onChange={(e) => props.setGreens(e.target.value)}
          />
      </div>
      </div>
      
      <div className="next-back-container">
      <Link to="/form">
      <div className="form-navigation">Back</div>
      </Link>

      <Link to="/form/2" >
      <div className="form-navigation">Next</div>
        </Link>
      </div>
      
      </div>
  )
}

export default Form1