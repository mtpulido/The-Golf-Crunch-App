import { Link } from "react-router-dom" 




function ViewScores(props) {
  return (
    <div>
      <div className="round-of-golf">

        {props.golfRound.fields.player} | {props.golfRound.fields.course} | {props.golfRound.fields.score}

        <Link to={`/rounds/${props.golfRound.id}`}>
          <div>
            <p className="button-text">Details</p>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default ViewScores