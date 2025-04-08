import React from 'react';


const SinglePlayer = ({ player }) => {
  return (
    <div className="single-player">
      <img src={player.image} alt={player.name} />
      <h3>{player.name}</h3>
      <p>{player.description}</p>
    </div>
  );
};


export default SinglePlayer;