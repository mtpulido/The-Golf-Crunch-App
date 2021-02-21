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

      <img src="https://i.imgur.com/J4M5QIO.png?2" alt="" className="golfer" className="logo"
        onTouchStart={scroll} onClick={scroll}/>

      
      <div className="golf-crunch">
      <h2>
        Golf<br></br>Crunch
      </h2>
      </div>
      </div>
  );
}

export default Nav;
