import {useState, useEffect } from "react"
import { axios } from "axios"
import { baseURL, config } from "../../services"
import {Link, Route} from "react-router-dom"
import Form from "./Form"
import Form1 from "./Form1"
import Form2 from "./Form2"



function RoundForm(props) {

  return (
    <div className="form-round-info container">

      <form>
        <Form />

        <Route exact path="/form1">
          <Form1 />
        </Route>

        <Route exact path="/form2">
          <Form2 />
        </Route>
        
    </form>
      
    </div>
  )
}

export default RoundForm