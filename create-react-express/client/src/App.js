import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Saved from './pages/Saved'
import Search from './pages/Search'

// <Switch> is unique in that it renders a route exclusively.

function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/Search' component={Search} />
          <Route exact path='/Saved' component={Saved} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
