import "./App.css";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import FeelingsItem from "../FeelingsItem/FeelingsItem";
import UnderstandingItem from "../UnderstandingItem/UnderstandingItem";
import SupportItem from "../SupportItem/SupportItem";
import CommentItem from "../CommentItem/CommentItem";
import ReviewItem from "../ReviewItem/ReviewItem";
import FinishItem from "../FinishItem/FinishItem";
import NewFeedbackItem from "../NewFeedbackItem/NewFeebackItem";

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
          <NewFeedbackItem />
        </Route>
      </Router>
    </div>
  );
}

export default App;
