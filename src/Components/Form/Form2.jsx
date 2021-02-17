import { useState } from "react"
import { Link } from "react-router-dom"

function Form2() {
  const [putts, setPutts] = useState(null)
  const [upAndDowns, setUpAndDowns] = useState(null)
  const [possibleUpAndDowns, setPossibleUpAndDowns] = useState(null)

  return (
    
    <div>

        <h2>Short Game</h2>

        <div className="form-putts">
          <label htmlFor="putts"> Putts: </label>
          <input
            type="number"
            id="putts"
            placeholder="33..."
            value={putts}
            onChange={(e) => setPutts(e.target.value)}
          />
        </div>
        

        <div className="form-up-and-downs">
          <label htmlFor="up-and-downs"> Up & Downs: </label>
          <input
            type="number"
            id="up-and-downs"
            placeholder="3..."
            value={upAndDowns}
            onChange={(e) => setUpAndDowns(e.target.value)}
          />
        </div>

        <div className="form-possible-up-and-downs">
          <label htmlFor="possible-up-and-downs"> Possible Up & Downs: </label>
          <input
            type="number"
            id="possible-up-and-downs"
            placeholder="8..."
            value={possibleUpAndDowns}
            onChange={(e) => setPossibleUpAndDowns(e.target.value)}
          />
      </div>
      
        <Link to="/form1">
        <button>Back</button>
      </Link>
      
      <button>Submit</button>
    </div>
  )
}
export default Form2