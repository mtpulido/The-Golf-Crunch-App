//i need to link the submit button to this component. this component will be routed on app.js under path="/form/analysis" 

//once submitted, i need to grab the value of each input and run if statements for each input based on the number.
//these might have to be sent as props or else i'll have to do all of this in the handleSubmit function. 
//need to useState for this

const analyzeGolf = ({ fields }) => {
const [analysisScore, setAnalysisScore] = useState("")
const [analysisFairways, setAnalysisFairways] = useState("")
const [analysisGreens, setAnalysisGreens] = useState("")
const [analysisChipping, setAnalysisChipping] = useState("")
const [analysisPutting, setAnalysisPutting] = useState("")

const { score, holes, fairwaysHit, possibleFairways, greens, putts, upAndDowns, possibleUpAndDowns } = fields
  
  if (score > holes * 6.62) {
    setAnalysisScore("something")
  } else if (score > holes * 6.1) {
    setAnalysisScore("something")
  } else if (score > holes * 5.5) {
    setAnalysisScore("something")
  } else if (score > holes * 4.95) {
    setAnalysisScore("something")
  } else if (score > holes * 4.4) {
    setAnalysisScore("something")
  } else if (score >= holes * 4) {
    setAnalysisScore("something")
  } else {
    setAnalysisScore("something")
  }

  return (
  <div>
      {analysisScore}
  </div>
)
}


