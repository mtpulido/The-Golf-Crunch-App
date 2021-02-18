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

    </div>
  )
}

export default Home