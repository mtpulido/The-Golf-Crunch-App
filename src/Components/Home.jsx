import { Link, Route } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  );
}

export default Home;
