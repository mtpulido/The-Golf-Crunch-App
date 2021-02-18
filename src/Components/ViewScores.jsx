import { Link } from "react-router-dom" 




function ViewScores(props) {
  return (
      <div className="view-scores">
        
        <div id="scores-player">{props.golfRound.fields.player}</div>
        <div id="scores-course">{props.golfRound.fields.course}</div>
        <div id="scores-score">{props.golfRound.fields.score}</div>
      

        <Link to={`/scores/${props.golfRound.id}`}>
        <div  id="scores-detail-button">
          View Details
        </div>
        </Link>
      </div>
  )
}

export default ViewScores