import React from 'react';
import "./LostScreen.css";

const LostScreen = () => {
  return (
    <div>
      <h2>Lost Screen</h2>
      <p>Game Over! You lost.</p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default LostScreen;