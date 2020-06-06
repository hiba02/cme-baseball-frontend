import React, { useState, useCallback, useRef } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <div id="wrap">
      <Router>
        <header>
          <Header />
        </header>
        <aside></aside>
        <section></section>
        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
