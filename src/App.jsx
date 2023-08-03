import { useEffect, useState } from "react";
import "./App.css";
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
import daiba from "./daiba-avatar.png";

function App() {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    kaboom();
    loadSprite("player", `${daiba}`);
    const player = add([sprite("player"), pos(250, 0)]);
    setPlayer(player);
  }, []);

  return <div className="game-container"></div>;
}

export default App;
