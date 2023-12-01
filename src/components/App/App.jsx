import axios from "axios";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import FeelingsItem from "../FeelingsItem/FeelingsItem";
import UnderstandingItem from "../UnderstandingItem/UnderstandingItem";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in useEffect");
    getFeelings();
  }, []);
  const getFeelings = () => {
    axios({
      method: "GET",
      url: "/feedback",
    })
      .then((response) => {
        const feelingsItem = response.data;

        dispatch({
          type: "SET_FEEDBACK",
          payload: feelingsItem,
        });
      })
      .catch((error) => {
        console.log("error on GET", error);
      });
  };
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path="/">
          <FeelingsItem />

          <Link to="/understandInfo">
            <button>Next</button>
          </Link>
        </Route>
        <Route exact path="/understandInfo">
          <UnderstandingItem />
        </Route>
      </Router>
    </div>
  );
}

export default App;
