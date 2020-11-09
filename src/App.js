import { React, useState } from "react";
import "./App.scss";
import Main from "./Components/Molecules/Main";
import Game from "./Components/Molecules/Game";
function App() {
  const [stateGame, setstateGame] = useState(false);
  const start = () => {
    setstateGame(!stateGame);
  };
  return (
    <div className="App">
      <header className="App-header">
        {stateGame ? (
          <Game action={() => start()} />
        ) : (
          <Main stage={stateGame} start={() => start()} />
        )}
        {/* <Main start={() => console.log("test")} /> */}
      </header>
    </div>
  );
}

export default App;
