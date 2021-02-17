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
import Form from "./Components/Form/Form"
import Form1 from "./Components/Form/Form1"
import Form2 from "./Components/Form/Form2"


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

  
    <form>
        <Route exact path="/form">
          <Form />
        </Route>  

        <Route path="/form1">
          <Form1 />
        </Route>

        <Route path="/form2">
          <Form2 />
        </Route>
    </form>

    
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
