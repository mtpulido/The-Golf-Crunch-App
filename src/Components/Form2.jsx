import { useState } from "react"
import { Link } from "react-router-dom"

function Form2(props) {

  return (

    <div className="form-parent-container">

    <div className="form-shortgame-container">

        <p id="shorttgame-heading">Short Game</p>

        <div id="form-putts">
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
        

        <div id="form-up-and-downs">
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

        <div id="form-possible-up-and-downs">
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
      </div>
      

      <div className="next-back-container">
        <Link to="/form/1">
        <div className="form-navigation">Back</div>
        </Link>

        <div><button className="form-navigation">Submit</button></div>
      </div>
    </div>
  )
}
export default Form2