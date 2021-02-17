import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom" 



let fixTime = (isoDate) => {
  let localDate = new Date(isoDate)
  let dateString = localDate.toString()
  let dateFormat = `${dateString.slice(0, 10)}`
  return dateFormat
}



function ViewDetails(props) {
  const [holes, setHoles] = useState(null)
  const [fairwaysHit, setFairwaysHit] = useState(null)
  const [possibleFairways, setPossibleFairways] = useState(null)
  const [greens, setGreens] = useState(null)
  const [putts, setPutts] = useState(null)
  const [upAndDowns, setUpAndDowns] = useState(null)
  const [possibleUpAndDowns, setPossibleUpAndDowns] = useState(null)
  const [createdTime, setCreatedTime] = useState("")
  const params = useParams()

  useEffect(() => {
    
    if (props.golfRounds.length > 0 && params.id) {

      const foundGolfRound = props.golfRounds.find((golfRound) => params.id === golfRound.id)

      if (foundGolfRound) {
        setHoles(foundGolfRound.fields.holes)
        setFairwaysHit(foundGolfRound.fields.fairwaysHit)
        setPossibleFairways(foundGolfRound.fields.possibleFairways)
        setGreens(foundGolfRound.fields.greens)
        setPutts(foundGolfRound.fields.putts)
        setUpAndDowns(foundGolfRound.fields.upAndDowns)
        setPossibleUpAndDowns(foundGolfRound.fields.possibleUpAndDowns)
        setCreatedTime(foundGolfRound.createdTime)
      }
    }
  }, [params.id, props.golfRounds])

  return (
    <div className="round-details">
      
      <div>
        Round Info <br></br>
      Posted: {fixTime(createdTime)} | Holes: {holes} | 
    </div>

      <div>
        Long Game<br></br>
      Fairways: {fairwaysHit}/{possibleFairways} | Greens In Regulation: {greens}/{holes}
      </div>
      
      <div>
        Short Game<br></br>
      Up & Downs: {upAndDowns}/{possibleUpAndDowns} | Putts: {putts}
      </div>
      <Link to="/scores">
      <button>Back</button>
      </Link>

  </div>
  )
}

export default ViewDetails


