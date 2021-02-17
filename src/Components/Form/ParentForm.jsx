import { useState } from "react"
import { Route } from "react-router-dom"
import Form from "./Form"
import Form1 from "./Form1"
import Form2 from "./Form2"

function ParentForm() {
  const [player, setPlayer] = useState("")
  const [course, setCourse] = useState("")
  const [score, setScore] = useState("")
  const [holes, setHoles] = useState("")

  const [fairwaysHit, setFairwaysHit] = useState("")
  const [possibleFairways, setPossibleFairways] = useState("")
  const [greens, setGreens] = useState("")

  const [putts, setPutts] = useState("")
  const [upAndDowns, setUpAndDowns] = useState("")
  const [possibleUpAndDowns, setPossibleUpAndDowns] = useState("")

  return (
    <div>
    <form>
    <Route exact path="/form">
        <Form
          player={player}
          setPlayer={setPlayer}
          course={course}
          setCourse={setCourse}
          score={score}
          setScore={setScore}
          holes={holes}
          setHoles={setHoles}
          />
    </Route>

    <Route exact path="/form/1">
        <Form1
          fairwaysHit={fairwaysHit}
          setFairwaysHit={setFairwaysHit}
          possibleFairways={possibleFairways}
          setPossibleFairways={setPossibleFairways}
          greens={greens}
          setGreens={setGreens}
          />
    </Route>
 
        
    <Route exact path="/form/2">    
        <Form2
          putts={putts}
          setPutts={setPutts}
          upAndDowns={upAndDowns}
          setUpAndDowns={setUpAndDowns}
          possibleUpAndDowns={possibleUpAndDowns}
          setPossibleUpAndDowns={setPossibleUpAndDowns}
          />
    </Route>
    </form>
    </div>
  )
}

export default ParentForm