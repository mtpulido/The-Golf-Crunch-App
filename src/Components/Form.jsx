import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Form(props) {
  const [alert, setAlert] = useState("")

  const unfilledFields = () => {
    setAlert("All Fields Required")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (

  <div className="form-parent-container">
      
    <div className="form-info-container">

      <p id="form-info-heading">Round Info</p>
      
      <div id="form-info-player">
          <label htmlFor="player"> Player Name: </label>
          <input className="text-input"
            type="text"
            id="player"
            placeholder="... John Smith"
            value={props.player}
            onChange={(e) => props.setPlayer(e.target.value)}
          />
      </div>
        
      <div id="form-info-course">
          <label htmlFor="course"> Golf Course: </label>
          <input className="text-input"
            type="text"
            id="course"
            placeholder="... Augusta National"
            value={props.course}
            onChange={(e) => props.setCourse(e.target.value)}
          />
      </div>

      <div id="form-info-score">
          <label htmlFor="score"> Score: </label>
          <input
            className="number-input"
            type="number"
            id="score"
            placeholder="...72"
            value={props.score}
            onChange={(e) => props.setScore(e.target.value)}
          />
      </div>

      <div id="form-info-holes">
          <label htmlFor="holes"> Holes: </label>
          <input
            className="number-input"
            type="number"
            id="holes"
            placeholder="...18"
            value={props.holes}
            onChange={(e) => props.setHoles(e.target.value)}
        />
      </div>
        
    </div>
      
      <div className="form-alert">{alert}</div>
      
    
    <div className="first-form-next-container">

    {(props.player && props.score && props.course && props.holes ?
    <Link to="/form/1"><div className="form-navigation">Next</div></Link> :
          <div className="form-navigation" onTouchStart={unfilledFields}>Next</div>)}
    </div>
      
  </div>
  )
}

export default Form