import React from 'react';
import './App.css';
// import Nav from './Component/Nav.js'
import About from './Component/About.js'
import StockDetail from './Component/StockDetail.js'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Nav /> */}
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/StockDetail" component = {StockDetail} />
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
