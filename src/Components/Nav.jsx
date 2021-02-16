import {Link} from "react-router-dom"

function Nav() {

  return (
    <div className="nav-bar">
      <Link to="/">
      <div className="home-button"><p>Home</p></div>
      </Link>

      <h1>Golf<br></br>Crunch</h1>
    </div>
  )
}

export default Nav