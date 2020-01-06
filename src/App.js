import React from 'react';
import './App.css';
import Nav from './Component/Nav.js'
import About from './Component/About.js'
import StockDetail from './Component/StockDetail.js'
import StockWinners from './Component/StockWinners.js'
import StockLosers from './Component/StockLosers.js'
import MajorIndexes from './Component/MajorIndexes.js'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/StockDetail" component = {StockDetail} />
      <Route path="/StockWinners" component = {StockWinners} />
      <Route path="/StockLosers" component = {StockLosers} />
      <Route path="/MajorIndexes" component = {MajorIndexes} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;
