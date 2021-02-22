import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

let fixTime = (isoDate) => {
  let localDate = new Date(isoDate);
  let dateString = localDate.toString();
  let dateFormat = `${dateString.slice(4, 15)}`;
  return dateFormat;
};

function ViewDetails(props) {
  const [player, setPlayer] = useState("");
  const [course, setCourse] = useState("");
  const [score, setScore] = useState("");
  const [holes, setHoles] = useState(null);
  const [fairwaysHit, setFairwaysHit] = useState(null);
  const [possibleFairways, setPossibleFairways] = useState(null);
  const [greens, setGreens] = useState(null);
  const [putts, setPutts] = useState(null);
  const [upAndDowns, setUpAndDowns] = useState(null);
  const [possibleUpAndDowns, setPossibleUpAndDowns] = useState(null);
  const [createdTime, setCreatedTime] = useState("");
  const params = useParams();

  useEffect(() => {
    if (props.golfRounds.length > 0 && params.id) {
      const foundGolfRound = props.golfRounds.find(
        (golfRound) => params.id === golfRound.id
      );

      if (foundGolfRound) {
        setPlayer(foundGolfRound.fields.player);
        setCourse(foundGolfRound.fields.course);
        setScore(foundGolfRound.fields.score);
        setHoles(foundGolfRound.fields.holes);
        setFairwaysHit(foundGolfRound.fields.fairwaysHit);
        setPossibleFairways(foundGolfRound.fields.possibleFairways);
        setGreens(foundGolfRound.fields.greens);
        setPutts(foundGolfRound.fields.putts);
        setUpAndDowns(foundGolfRound.fields.upAndDowns);
        setPossibleUpAndDowns(foundGolfRound.fields.possibleUpAndDowns);
        setCreatedTime(foundGolfRound.createdTime);
      }
    }
    window.scrollTo(0, 0);
  }, [params.id, props.golfRounds]);

  return (
    <div className="round-details">
      <div className="details-info">
        <div id="details-date">{fixTime(createdTime)}</div>
        <div id="details-player">{player}</div>
        <div id="details-course">{course}</div>
        <div id="details-score">{score}</div>
        <div id="details-holes">{holes} holes</div>
      </div>

      <div className="details-longgame">
        <div id="details-longgame-label">Long Game</div>
        <div id="details-fairways">
          Fairways: {fairwaysHit}/{possibleFairways}
        </div>
        <div id="details-greens">
          Greens In Reg: {greens}/{holes}
        </div>
      </div>

      <div className="details-shortgame">
        <div id="details-shortggame-label">Short Game</div>
        <div id="details-up-and-downs">
          Up & Downs: {upAndDowns}/{possibleUpAndDowns}
        </div>
        <div id="details-putts">Putts: {putts}</div>
      </div>

      <div className="first-form-next-container">
        <Link to="/scores">
          <div className="next-back-button">Back</div>
        </Link>
      </div>
    </div>
  );
}

export default ViewDetails;
