import { Routes, Route } from "react-router";
import { useState } from 'react';
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import './App.css'


function App() {
    const [players, setPlayers] = useState([]);

    return (
      
      <>
      <nav>
        <NavBar />
      </nav>
      <h1> Welcome Back to Puppy Bowl</h1>
      <div className="App">
          <Routes>
            <Route path="/" element={<AllPlayers players={players} setPlayers={setPlayers} />} />
            <Route path="/players/:id" element={<SinglePlayer />} />
            <Route path="/new-player" element={<NewPlayerForm />} />
          </Routes>
      </div>
        </>

    );
}

export default App