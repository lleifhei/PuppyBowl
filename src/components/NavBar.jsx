import { useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <nav>
      <button onClick={handleClick}>Home/AllPlayers</button>
      <button
        onClick={() => {
          const playerName = prompt("Enter player name to search:");
          if (playerName) {
            navigate(`${playerName}`);
          }
        }}
      >
        Search Player List
      </button>
      <button onClick={() => navigate("/new-player")}>New Player Form</button>
    </nav>
  );
}
