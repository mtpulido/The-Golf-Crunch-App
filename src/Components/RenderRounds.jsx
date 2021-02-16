import { Link, Route } from "react-router-dom" 



function RenderRound(props) {
  return (
    <div>
      <div className="round-of-golf">

        {props.golfRound.fields.player} | {props.golfRound.fields.course} | {props.golfRound.fields.score}

        <Link to="/details">
          <div>
            <p>Details</p>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default RenderRound