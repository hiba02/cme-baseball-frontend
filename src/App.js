import React, { useState, useCallback, useRef } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [currentTeam, setCurrentTeam] = useState("");

  return (
    <div id="wrap">
      <Router>
        <header>
          <Header />
        </header>
        <aside>
          <Nav userInfo={userInfo} currentTeam={currentTeam} />
        </aside>
        <section></section>
        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
