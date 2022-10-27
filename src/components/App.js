import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Game from './Game'
import background from "../assets/background.jpg"

const App = () => (
  <div style={{backgroundImage: `url(${background})`, height:'100vh', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100%"}}>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/game' component={Game}/>
    </Switch>
  </div>
)

export default App
