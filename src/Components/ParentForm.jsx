import { useState } from "react"
import {baseURL, config} from "../services"
import axios from "axios"
import { Route } from "react-router-dom"
import Form from "./Form"
import Form1 from "./Form1"
import Form2 from "./Form2"
import { useHistory } from "react-router-dom"
import Analysis from "./Analysis"

function ParentForm(props) {
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
  const [fieldsProp, setFieldsProp] =useState({})
  const history = useHistory()


  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const fields = {
      player,
      course,
      score: parseInt(score),
      holes: parseInt(holes), 
      fairwaysHit: parseInt(fairwaysHit),
      possibleFairways: parseInt(possibleFairways),
      greens: parseInt(greens),
      putts: parseInt(putts),
      upAndDowns: parseInt(upAndDowns),
      possibleUpAndDowns: parseInt(possibleUpAndDowns),
    }
    setFieldsProp(fields)

    await axios.post(baseURL, { fields }, config)
    props.setToggleFetch((curr) => !curr)

    history.push("/form/analysis")
  }


  return (
  <div>
    <form onSubmit={handleSubmit}>
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
        
    <Route exact path="/form/analysis">
      <Analysis fields={fieldsProp}/>
    </Route>
      </form>

      {/* <Route exact path="/form/analysis">
        <Analysis fields={fieldsProp}/>
      </Route> */}
  </div>
  )
}

export default ParentForm