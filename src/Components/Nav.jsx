import { Link } from "react-router-dom";


function scroll() {
  window.scrollTo(0, 0)
}

function Nav() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <div className="home-button">
          <h2>Home</h2>
        </div>
      </Link>

      <div className="logo" onTouchEnd={scroll} onClick={scroll}>
        🏌🏻‍♂️
      </div>

      
      <div className="golf-crunch">
      <h2>
        Golf<br></br>Crunch
      </h2>
      </div>
      </div>
  );
}

export default Nav;
