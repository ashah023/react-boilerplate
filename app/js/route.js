import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => <div><h2>Home</h2></div>

export default () => (
  <Router>
    <div>
      <ul>
        <Route exact path="/" component={ Home } />
        <Route path="/home" component={ Home } />
      </ul>
    </div>
  </Router>
)