import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <div className="home-button">
          <h2>Home</h2>
        </div>
      </Link>

      {/* <img src="http://clipart-library.com/images_k/silhouette-golfer/silhouette-golfer-4.png"/> */}

      <h2>
        Golf<br></br>Crunch
      </h2>
    </div>
  );
}

export default Nav;
