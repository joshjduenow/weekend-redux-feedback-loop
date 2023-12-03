import axios from "axios";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import FeelingsItem from "../FeelingsItem/FeelingsItem";
import UnderstandingItem from "../UnderstandingItem/UnderstandingItem";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <FeelingsItem />
        </Route>
        <Route exact path="/understand">
          <UnderstandingItem />
        </Route>
        <Route exact path="/support">
          <SupportItem />
        </Route>
        <Route exact path="/comment">
          <CommentItem />
        </Route>
        <Route exact path="/review">
          <ReviewItem />
        </Route>
        <Route exact path="/finish">
          <FinishItem />
        </Route>
      </Router>
    </div>
  );
}

export default App;
