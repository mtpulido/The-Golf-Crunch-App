import { useState } from "react"
import { Link } from "react-router-dom"

function Form(props) {
  const [player, setPlayer] = useState("")
  const [course, setCourse] = useState("")
  const [score, setScore] = useState(null)
  const [holes, setHoles] = useState(null)

  return (
    <div>

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

      <Link to="/form1">
        <button>Next</button>
      </Link>
      
    </div>
  )
}

export default Form