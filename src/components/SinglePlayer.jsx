import React from 'react';

const SinglePlayer = ({ player }) => {
  return (
    <div className="single-player">
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} />
      <p>Breed: {player.breed}</p>
      <p>Team: {player.team}</p>
    </div>
  );
};

export default SinglePlayer;