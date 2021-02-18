import { Link, Route } from "react-router-dom" 

function Home() {

  return (
    <div className="home-container">

      <Link to="/scores">
        <div className="rounds-button">
          <h2 className="button-text">View Scores</h2>
        </div>
      </Link>

      <Link to="/form">
      <span className="form-button"> 
      <h2 className="button-text">Enter Round</h2>
      </span>
      </Link>

      <Link to="/mission">
        <div className="mission-button">
          <h2 className="button-text">Our Mission</h2>
        </div>
      </Link>
    </div>
  )
}

export default Home