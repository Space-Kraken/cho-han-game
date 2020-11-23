import { React, useState } from "react";
import "./App.scss";
import Main from "./Components/Molecules/Main";
import Game from "./Components/Molecules/Game";
function App() {
  const [stateGame, setstateGame] = useState(false);
  const [back, setBack] = useState("");
  const [bet, setBet] = useState("");
  const start = () => {
    setstateGame(!stateGame);
  };
  const setLose = () => {
    setBack("-Perdiste");
  };
  const setWin = () => {
    setBack("-Ganaste");
  };
  const setNeutral = () => {
    setBack("");
  };
  return (
    <div className={"App" + back}>
      <header className="App-header">
        {stateGame ? (
          <Game
            bet={bet}
            win={() => setWin()}
            lose={() => setLose()}
            neutral={() => setNeutral()}
            action={() => start()}
          />
        ) : (
          <Main
            amount={(bet) => {
              setBet(bet);
            }}
            stage={stateGame}
            start={() => start()}
          />
        )}
      </header>
    </div>
  );
}

export default App;
