import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './containers/home/index'
import About from './containers/about/index'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App