import {useState, useEffect } from "react"
import { axios } from "axios"
import { baseURL, config } from "../services"



function RoundForm(props) {
  const [player, setPlayer] = useState("")
  const [course, setCourse] = useState("")
  const [score, setScore] = useState(null)
  const [holes, setHoles] = useState(null)
  const [fairwaysHit, setFairwaysHit] = useState(null)
  const [possibleFairways, setPossibleFairways] = useState(null)
  const [greens, setGreens] = useState(null)
  const [putts, setPutts] = useState(null)
  const [upAndDowns, setUpAndDowns] = useState(null)
  const [possibleUpAndDowns, setPossibleUpAndDowns] = useState(null)

  


  return (
    <div className="form-round-info container">
      
      <form>

        <h2>Round Info</h2>

        <div className="form-player">
          <label htmlFor="player"> Player Name: </label>
          <input
            type="text"
            id="player"
            placeholder="John Smith..."
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </div>
        

        <div className="form-course">
          <label htmlFor="course"> Golf Course: </label>
          <input
            type="text"
            id="course"
            placeholder="Augusta National..."
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div className="form-score">
          <label htmlFor="score"> Score: </label>
          <input
            type="number"
            id="score"
            placeholder="72..."
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <div className="form-holes">
          <label htmlFor="holes"> Holes: </label>
          <input
            type="number"
            id="holes"
            placeholder="18..."
            value={holes}
            onChange={(e) => setHoles(e.target.value)}
          />
        </div>
    </form>
      
    </div>
  )
}

export default RoundForm