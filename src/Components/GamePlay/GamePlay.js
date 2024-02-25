import React, { useState, useEffect } from 'react';
import "./GamePlay.css";

const GamePlay = ({ username, onGameEnd }) => {
  const [coins, setCoins] = useState(21);
  const [result, setResult] = useState('');

  const handlePlayerMove = async (quantity) => {
    try {
      // Make a POST request to the play game API
      const response = await fetch('http://localhost:8080/api/game/play', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          coinsPicked: quantity,
        }),
      });

      if (response.ok) {
        // Update game state based on the response
        const gameResult = await response.text();

        // Check if the game is over and handle accordingly
        if (gameResult === 'win' || gameResult === 'lose') {
          setResult(gameResult);
          onGameEnd(gameResult);
        } else {
          // Update coins if the game is still ongoing
          setCoins(coins - quantity);
        }
      } else {
        // Handle API error
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div>
      <h1>Game Play Screen</h1>
      <p>{`${username}'s turn`}</p>
      <p>Coins left: {coins}</p>
      <button onClick={() => handlePlayerMove(1)}>Pick 1 Coin</button>
      <button onClick={() => handlePlayerMove(2)}>Pick 2 Coins</button>
      <button onClick={() => handlePlayerMove(3)}>Pick 3 Coins</button>
      <button onClick={() => handlePlayerMove(4)}>Pick 4 Coins</button>

      {result && <p>{result}</p>}
    </div>
  );
};

export default GamePlay;
