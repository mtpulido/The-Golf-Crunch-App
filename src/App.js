import './App.css';
import { Link, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import RoundForm from "./Components/RoundForm"
import RenderRound from "./Components/RenderRounds"
import Mission from "./Components/Mission"
import { useState, useEffect } from "react"
import { baseURL, config } from "./services"
import axios from 'axios';
import RenderDetails from "./Components/RenderDetails"


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
        <RoundForm />
    </Route>  
      
      <Route path="/rounds">
        <h2>Rounds</h2>
        {golfRounds.map((golfRound) => (
          <RenderRound golfRound={golfRound} />
        ))}
    </Route>  
      
    <Route path="/mission">
        <Mission />
      </Route>  
      
      <Route path="/details">
      {golfRounds.map((golfRound) => (
          <RenderDetails golfRound={golfRound} />
        ))}
      </Route>
      

    </div>
  );
}

export default App;
