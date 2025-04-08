import { useState, useEffect } from "react";


export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function fetchPlayers() {
      const data = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2412-ftb-mt-web-pt/players"
      );
      const results = await data.json();
      setPlayers(results.data.players);
    }
    fetchPlayers();
  }, []);

  return (
    <div>
      <h2>All Players</h2>
      <div className="players-list">
        {players.map((player) => (
          <div key={player.id} className="player-card">
            <h3>{player.name}</h3>
            <img src={player.imageUrl} alt={player.name} />
            <button 
              onClick={() => alert(JSON.stringify(player, null, 2))}>
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
