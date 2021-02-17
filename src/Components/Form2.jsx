import { useState } from "react"
import { Link } from "react-router-dom"

function Form2(props) {

  return (
    <div className="form-info-container">

        <p>Short Game</p>

        <div className="form-putts">
          <label htmlFor="putts"> Putts: </label>
          <input
            className="number-input"
            type="number"
            id="putts"
            placeholder="33..."
            value={props.putts}
            onChange={(e) => props.setPutts(e.target.value)}
          />
        </div>
        

        <div className="form-up-and-downs">
          <label htmlFor="up-and-downs"> Up & Downs: </label>
          <input
            className="number-input"
            type="number"
            id="up-and-downs"
            placeholder="3..."
            value={props.upAndDowns}
            onChange={(e) => props.setUpAndDowns(e.target.value)}
          />
        </div>

        <div className="form-possible-up-and-downs">
          <label htmlFor="possible-up-and-downs"> Possible Up & Downs: </label>
          <input
            className="number-input"
            type="number"
            id="possible-up-and-downs"
            placeholder="8..."
            value={props.possibleUpAndDowns}
            onChange={(e) => props.setPossibleUpAndDowns(e.target.value)}
          />
      </div>
      
        <Link to="/form/1">
        <button>Back</button>
      </Link>

      <button>Submit</button>
    </div>
  )
}
export default Form2