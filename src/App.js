import React, { useState, useCallback, useRef } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import CreateTeam from "./components/CreateTeam";
import ShowTeam from "./components/ShowTeam";
import CreatePlayer from "./components/CreatePlayer";

function App() {
  const [word, setWord] = useState("");
  const [userId, setUserId] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  const [playersInfo, setPlayersInfo] = useState(null);
  const [teamNames, setTeamNames] = useState([{ id: 0, name: "Lions" }]); //[]
  // const [teamNames, setTeamNames] = useState(["Lions"]); //[]
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
  const nextId = useRef(1);

  const addTeamInClient = useCallback(
    (teamName) => {
      const team = {
        id: nextId.current,
        name: teamName,
      };
      setTeamNames(teamNames.concat(team));
      nextId.current += 1;
    },
    [teamNames]
  );

  console.log("teams", teamNames);
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
            <Route path="/showTeam">
              <ShowTeam
                // getTeamNameByUserId={getTeamNameByUserId}
                // currentUserInfo={userInfo}
                // curretnUserId={userId}
                // addFavoriteTeam={addFavoriteTeam}
                teamNames={teamNames}
                // getPlayersFromSameTeam={getPlayersFromSameTeam}
                // getPlayersByteamId={getPlayersByteamId}
                setTeamId={setTeamId}
                // setPlayersInfo={setPlayersInfo}
                currentTeam={currentTeam}
                setCurrentTeam={setCurrentTeam}
              />
            </Route>
            <Route path="/createPlayer">
              <CreatePlayer
              // user={userInfo}
              // players={playersInfo}
              // pitcher={pitcher}
              // hitter={hitter}
              // addNewPlayers={addNewPlayers}
              // teamId={teamId}
              // addNewPlayerInClient={addNewPlayerInClient}
              // getHitterFromPlayerInfo={getHitterFromPlayerInfo}
              // toggleCheckFromHitterId={toggleCheckFromHitterId}
              // removePlayerById={removePlayerById}
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
