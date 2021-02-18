import './App.css';
import { Link, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import ViewScores from "./Components/ViewScores"
import { useState, useEffect } from "react"
import { baseURL, config } from "./services"
import axios from 'axios';
import ViewDetails from "./Components/ViewDetails"
import ParentForm from "./Components/ParentForm"


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
      

      <Route exact path="/scores">
        {golfRounds.map((golfRound) => (
          <ViewScores
            golfRound={golfRound}
            key={golfRound.id}
            time={golfRound.createdTime}
          />
        ))}
      </Route> 
      

    <Route path="/form">
        <ParentForm setToggleFetch={setToggleFetch}/>
      </Route>
      
      
    <Route path="/scores/:id">
        <ViewDetails golfRounds={golfRounds}/>
    </Route>
    </div>
  );
}

export default App;
