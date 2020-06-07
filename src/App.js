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
  const [playersInfo, setPlayersInfo] = useState([
    {
      team_id: 1,
      name: "R Hyun-jin",
      uniform_number: "99",
      position: "P",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 1,
      name: "H Austin  ",
      uniform_number: "18",
      position: "C",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 1,
      name: "H Eric    ",
      uniform_number: "30",
      position: "1B",
      bats: "L",
      throws: "L",
      check: false,
    },
    {
      team_id: 1,
      name: "G Greg    ",
      uniform_number: "05",
      position: "2B",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 1,
      name: "M Machado ",
      uniform_number: "27",
      position: "3B",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 1,
      name: "C Jake    ",
      uniform_number: "09",
      position: "SS",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 1,
      name: "M Will    ",
      uniform_number: "04",
      position: "RF",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 1,
      name: "P Tommy   ",
      uniform_number: "28",
      position: "LF",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 1,
      name: "N Josh    ",
      uniform_number: "22",
      position: "CF",
      bats: "L",
      throws: "L",
      check: false,
    },
  ]);
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

  //CreateTeam.js handleSubmit
  const addNewPlayerInClient = (
    team_id,
    name,
    uniform_number,
    position,
    bats,
    throws,
    check
  ) => {
    console.log(
      "App.js addNewPlayerInClient: parameter",
      teamId,
      name,
      uniform_number,
      position,
      bats,
      throws,
      check
    );
    const player = {
      id: nextId.current,
      name: name,
      uniform_number: uniform_number,
      position: position,
      bats: bats,
      throws: throws,
      check: check,
    };
    setPlayersInfo(playersInfo.concat(player));
    nextId.current += 1;
  };

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
                teamId={teamId}
                addNewPlayerInClient={addNewPlayerInClient}
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
