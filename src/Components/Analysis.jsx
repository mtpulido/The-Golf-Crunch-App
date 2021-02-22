import { useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";

const Analysis = (props) => {
  const [analysisScore, setAnalysisScore] = useState("");
  const [analysisFairways, setAnalysisFairways] = useState("");
  const [analysisGreens, setAnalysisGreens] = useState("");
  const [analysisChipping, setAnalysisChipping] = useState("");
  const [analysisPutting, setAnalysisPutting] = useState("");
  const [loading, setLoading] = useState(true);

  let {
    player,
    course,
    score,
    holes,
    fairwaysHit,
    possibleFairways,
    greens,
    putts,
    upAndDowns,
    possibleUpAndDowns,
  } = props.fields;

  let localDate = new Date();
  let dateString = localDate.toString();
  let dateFormat = `${dateString.slice(4, 15)}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    if (score <= 69) {
      setAnalysisScore("🤩 You should consider going pro...");
    } else if (score <= 71) {
      setAnalysisScore(
        " Exceptional round 🙌. You scored in the 99th percentile"
      );
    } else if (score <= 74) {
      setAnalysisScore(" Amazing round 👏. You scored in the 96th percentile.");
    } else if (score <= 77) {
      setAnalysisScore(" Great round 👊. You scored in the 90th percentile.");
    } else if (score <= 79) {
      setAnalysisScore(" Nice round 💪. You scored in the 85th percentile.");
    } else if (score <= 81) {
      setAnalysisScore(
        " Really good round ✊. You scored in the 80th percentile."
      );
    } else if (score == 82) {
      setAnalysisScore(
        " Really good round ✊. You scored in the 77th percentile."
      );
    } else if (score == 83) {
      setAnalysisScore("Good round 👍. You scored in the 74th percentile.");
    } else if (score == 84) {
      setAnalysisScore("Good round 👍. You scored in the 70th percentile.");
    } else if (score == 85) {
      setAnalysisScore("Good round 👍. You scored in the 65th percentile.");
    } else if (score == 86) {
      setAnalysisScore("Decent round 😀. You scored in the 60th percentile.");
    } else if (score == 87) {
      setAnalysisScore("Decent round 😀. You scored in the 56th percentile.");
    } else if (score == 88) {
      setAnalysisScore("Decent round 😀. You scored in the 52nd percentile.");
    } else if (score == 89) {
      setAnalysisScore("Decent round 😀. You scored in the 50th percentile.");
    } else if (score == 90) {
      setAnalysisScore("Ok round 😐. You scored in the 47th percentile.");
    } else if (score == 91) {
      setAnalysisScore("Ok round 😐. You scored in the 43rd percentile.");
    } else if (score == 92) {
      setAnalysisScore("Mediocre round 😕. You scored in the 38th percentile.");
    } else if (score == 93) {
      setAnalysisScore("Mediocre round 😕. You scored in the 33rd percentile.");
    } else if (score <= 95) {
      setAnalysisScore("Mediocre round 😕. You scored in the 25th percentile.");
    } else if (score <= 97) {
      setAnalysisScore("Bad round 😫. You scored in the 20th percentile.");
    } else if (score <= 99) {
      setAnalysisScore("Bad round 😫. You scored in the 15th percentile.");
    } else {
      setAnalysisScore(
        "🤮 You have a lot of work to do. You scored in the 10th percentile or lower."
      );
    }

    if (fairwaysHit / possibleFairways < 0.15) {
      setAnalysisFairways(
        "Wow, hit the range your driving accuracy is terrible."
      );
    } else if (fairwaysHit / possibleFairways < 0.25) {
      setAnalysisFairways(
        "Hit the range your driving accuracy needs a lot of work."
      );
    } else if (fairwaysHit / possibleFairways < 0.36) {
      setAnalysisFairways(
        "Your driving accuracy is getting there. Hit the range."
      );
    } else if (fairwaysHit / possibleFairways < 0.51) {
      setAnalysisFairways(
        "Your driving accuracy is good, try to find a bit more consistency."
      );
    } else if (fairwaysHit / possibleFairways < 0.66) {
      setAnalysisFairways("Your driving accuracy is great. Keep it up!");
    } else if (fairwaysHit / possibleFairways < 0.8) {
      setAnalysisFairways("Your driving accuracy is amazing. Keep it up!");
    } else {
      setAnalysisFairways("Holy smokes you're incredible off the tee.");
    }

    if (greens / holes < 0.13) {
      setAnalysisGreens("Yikes. You need serious work with your irons.");
    } else if (greens / holes < 0.24) {
      setAnalysisGreens("Not good. You need to work on your iron game.");
    } else if (greens / holes < 0.35) {
      setAnalysisGreens(
        "You're average at hitting the green, keep working on your irons."
      );
    } else if (greens / holes < 0.46) {
      setAnalysisGreens(
        "Decent work, try to find a bit more consistency with your irons."
      );
    } else if (greens / holes < 0.57) {
      setAnalysisGreens(
        "Good work, you're on your way to being a great iron player with a bit more practice."
      );
    } else if (greens / holes < 0.68) {
      setAnalysisGreens("Great work, you have a really nice iron game.");
    } else if (greens / holes < 0.79) {
      setAnalysisGreens("Excellent. Keep it up!");
    } else {
      setAnalysisGreens("Your irons are PGA caliber.");
    }

    if (putts / holes < 1.5) {
      //26 or lower
      setAnalysisPutting("Your putting is PGA caliber.");
    } else if (putts / holes < 1.63) {
      // 27-29
      setAnalysisPutting("Wow, phenomenal round of putting.");
    } else if (putts / holes < 1.82) {
      //30-32
      setAnalysisPutting("You had a great putting round.");
    } else if (putts / holes < 2) {
      //33-35
      setAnalysisPutting("You had a good round with the putter.");
    } else if (putts / holes < 2.15) {
      //36-38
      setAnalysisPutting("Your putting was decent, nothing more nothing less.");
    } else if (putts / holes < 2.31) {
      //39-41
      setAnalysisPutting(
        "Your puting was just average. Practice more on the green."
      );
    } else if (putts / holes < 2.5) {
      //42-44
      setAnalysisPutting(
        "Your putting was below average. Practice more on the green."
      );
    } else if (putts / holes < 2.65) {
      //45-47
      setAnalysisPutting(
        "You're not a good putter and this needs immediate attention."
      );
    } else if (putts / holes < 2.79) {
      //48-50
      setAnalysisPutting("Yikes... this is priority one for practice!");
    } else {
      //51 or more
      setAnalysisPutting("Consider quitting golf...");
    }

    if (upAndDowns / possibleUpAndDowns < 0.08) {
      setAnalysisChipping(
        "You're a horrendous chipper. Start practicing immediately."
      );
    } else if (upAndDowns / possibleUpAndDowns < 0.15) {
      setAnalysisChipping("Your chipping is awful... practice.");
    } else if (upAndDowns / possibleUpAndDowns < 0.22) {
      setAnalysisChipping("Your chipping is bad. Get out there and practice. ");
    } else if (upAndDowns / possibleUpAndDowns < 0.29) {
      setAnalysisChipping(
        "Your chipping is below average. Put some work in here."
      );
    } else if (upAndDowns / possibleUpAndDowns < 0.36) {
      setAnalysisChipping("Your chipping is average. Put some work in here.");
    } else if (upAndDowns / possibleUpAndDowns < 0.43) {
      setAnalysisChipping(
        "Your chipping is slighly above average. Keep practicing."
      );
    } else if (upAndDowns / possibleUpAndDowns < 0.5) {
      setAnalysisChipping(
        "Your chipping is decent. Try to find more consistency."
      );
    } else if (upAndDowns / possibleUpAndDowns < 0.57) {
      setAnalysisChipping(
        "You're a good chipper. Practice a bit more to become a great chipper."
      );
    } else if (upAndDowns / possibleUpAndDowns < 0.64) {
      setAnalysisChipping("You're a really good chipper. Nice work!");
    } else if (upAndDowns / possibleUpAndDowns < 0.71) {
      setAnalysisChipping("Your chipping is great! Keep it up!");
    } else if (upAndDowns / possibleUpAndDowns < 0.77) {
      setAnalysisChipping("Your chipping is amazing. ");
    } else {
      setAnalysisChipping("Your chipping is PGA tour caliber.");
    }
  }, [loading]);

  // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader for loading animation CSS.
  // https://reactjsexample.com/react-component-to-display-a-score-with-a-steps-chart/ for graph npm i.
  return (
    <div className="analysis-container">
      {loading ? (
        <div className="loading-container">
          <div className="loading-animation"></div>
          <div className="loading-text"> Crunching The Numbers</div>
        </div>
      ) : (
        <div>
          <div className="analysis-round-info">
            <div id="analysis-player">{player}'s Analysis</div>
            <div id="analysis-course">{course}</div>
            <div id="analysis-date">{dateFormat}</div>
            <div id="analysis-score">{analysisScore}</div>
          </div>

          <div className="analysis-driver-container">
            <div id="analysis-driving-label">Driver</div>
            <div id="analysis-fairways">{analysisFairways}</div>
            <div id="graph-driver">
              <ReactStoreIndicator
                value={Math.round((fairwaysHit / possibleFairways) * 125)}
                maxValue={100}
                width={140}
                fadedOpacity={25}
              />
            </div>
          </div>

          <div className="analysis-irons-container">
            <div id="analysis-irons-label">Irons</div>
            <div id="analysis-greens">{analysisGreens}</div>
            <div id="graph-irons">
              <ReactStoreIndicator
                value={Math.round((greens / holes) * 133)}
                maxValue={100}
                width={140}
                fadedOpacity={25}
              />
            </div>
          </div>

          <div className="analysis-chipping-container">
            <div id="analysis-chipping-label">Short Game</div>
            <div id="analysis-chips">{analysisChipping}</div>
            <div id="graph-shortgame">
              <ReactStoreIndicator
                value={Math.round((upAndDowns / possibleUpAndDowns) * 150)}
                maxValue={100}
                width={140}
                fadedOpacity={25}
              />
            </div>
          </div>

          <div className="analysis-putter-container">
            <div id="analysis-puting-label">Putter</div>
            <div id="analysis-putts">{analysisPutting}</div>
            <div id="graph-putter">
              <ReactStoreIndicator
                value={Math.round(Math.pow((holes / putts), 2) * 250)}
                maxValue={100}
                width={140}
                fadedOpacity={25}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analysis;
