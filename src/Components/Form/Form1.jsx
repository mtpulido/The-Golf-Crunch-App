import { useState } from "react"
import { Link } from "react-router-dom"

function Form1() {
  const [fairwaysHit, setFairwaysHit] = useState(null)
  const [possibleFairways, setPossibleFairways] = useState(null)
  const [greens, setGreens] = useState(null)

  return (
    
    <div>

        <h2>Long Game</h2>

        <div className="form-fairways-hit">
          <label htmlFor="fairways"> Fairways Hit: </label>
          <input
            type="number"
            id="fairways"
            placeholder="8..."
            value={fairwaysHit}
            onChange={(e) => setFairwaysHit(e.target.value)}
          />
        </div>
        

        <div className="form-fairways-possible">
          <label htmlFor="fairways-possible"> Possible Fairways (no par 3s): </label>
          <input
            type="number"
            id="fairways-possible"
            placeholder="14..."
            value={possibleFairways}
            onChange={(e) => setPossibleFairways(e.target.value)}
          />
        </div>

        <div className="form-greens">
          <label htmlFor="greens"> Greens in Regulation: </label>
          <input
            type="number"
            id="greens"
            placeholder="11..."
            value={greens}
            onChange={(e) => setGreens(e.target.value)}
          />
        </div>

      <Link to="/form2" >
        <button>Next</button>
      </Link>
      
    </div>
  )
}

export default Form1