import { React, useState } from "react";
import "./App.scss";
import Main from "./Components/Molecules/Main";
import Game from "./Components/Molecules/Game";
function App() {
  const [stateGame, setstateGame] = useState(false);
  const [back, setBack] = useState("");
  const start = () => {
    setstateGame(!stateGame);
  };
  const setLose = () => {
    setBack("-Perdiste");
  };
  const setWin = () => {
    setBack("-Ganaste");
  };
  return (
    <div className={"App" + back}>
      <header className="App-header">
        {stateGame ? (
          <Game
            win={() => setWin()}
            lose={() => setLose()}
            action={() => start()}
          />
        ) : (
          <Main stage={stateGame} start={() => start()} />
        )}
        {/* <Main start={() => console.log("test")} /> */}
      </header>
    </div>
  );
}

export default App;
