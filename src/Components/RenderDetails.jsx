import { useEffect } from "react"
import {useParams} from "react-router-dom"



let fixTime = (isoDate) => {
  let localDate = new Date(isoDate)
  let dateString = localDate.toString()
  let dateFormat = `${dateString.slice(0, 10)}`
  return dateFormat
}

function RenderDetails(props) {

  return (
    <div className="round-details">
      
      <div>
        Round Info <br></br>
      Posted: {fixTime(props.golfRound.createdTime)} | Holes: {props.golfRound.fields.holes} | 
    </div>

      <div>
        Long Game<br></br>
      Fairways: {props.golfRound.fields.fairwaysHit}/{props.golfRound.fields.possibleFairways} | Greens In Regulation: {props.golfRound.fields.greens}/{props.golfRound.fields.holes}
      </div>
      
      <div>
        Short Game<br></br>
      Up & Downs: {props.golfRound.fields.upAndDowns}/{props.golfRound.fields.possibleUpAndDowns} | Putts: {props.golfRound.fields.putts}
      </div>


  </div>
  )
}

export default RenderDetails


