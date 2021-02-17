import './App.css';
import { Link, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import ViewScores from "./Components/ViewScores"
import Mission from "./Components/Mission"
import { useState, useEffect } from "react"
import { baseURL, config } from "./services"
import axios from 'axios';
import ViewDetails from "./Components/ViewDetails"
import ParentForm from "./Components/Form/ParentForm"


function App() {
  const [golfRounds, setGolfRounds] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getGolfData = async () => {
      const response = await axios.get(baseURL, config)
      setGolfRounds(response.data.records)
    }
    getGolfData()
  }, [toggleFetch])

  return (
    <div className="App">
      
      <Nav />
  
      
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/form">
        <ParentForm />
    </Route>

    
    <Route exact path="/scores">
        <h2>Rounds</h2>
        {golfRounds.map((golfRound) => (
          <ViewScores
            golfRound={golfRound}
            key={golfRound.id}
          />
        ))}
    </Route>  
      
      
    <Route path="/scores/:id">
        <ViewDetails golfRounds={golfRounds}/>
    </Route>


    <Route path="/mission">
        <Mission />
    </Route>  
    </div>
  );
}

export default App;
