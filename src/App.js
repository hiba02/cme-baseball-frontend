import React, { useState, useCallback, useRef } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import CreateTeam from "./components/CreateTeam";

function App() {
  const [word, setWord] = useState("");
  const [userId, setUserId] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  const [playersInfo, setPlayersInfo] = useState(null);
  const [teamNames, setTeamNames] = useState(null); //[]
  const [teamId, setTeamId] = useState(1);
  const [currentTeam, setCurrentTeam] = useState("");
  const [pitcher, setPitcher] = useState({
    name: "A Aron",
    uniform_number: "35",
    position: "RF",
  });
  const [hitter, setHitter] = useState({
    name: "A Aron",
    uniform_number: "35",
    position: "RF",
  });
  const nextId = useRef(100);

  // functions

  //CreateTeam.js handleSubmit
  const addTeamInClient = useCallback(
    (teamName, userId) => {
      const team = {
        id: nextId.current,
        name: teamName,
        user_id: userId,
      };
      setTeamNames(teamNames.concat(team));
      nextId.current += 1;
    },
    [teamNames]
  );

  return (
    <div id="wrap">
      <Router>
        <header>
          <Header />
        </header>
        <aside>
          <Nav userInfo={userInfo} currentTeam={currentTeam} />
        </aside>
        <section>
          <Switch>
            <Route path="/createTeam">
              <CreateTeam
                // addTeam={addTeam}
                // currentUserInfo={userInfo}
                // curretnUserId={userId}
                // addFavoriteTeam={addFavoriteTeam}
                // getUserIdTeamId={getUserIdTeamId}
                // getUserInfoByEmail={getUserInfoByEmail}
                addTeamInClient={addTeamInClient}
              />
            </Route>
          </Switch>
        </section>
        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
