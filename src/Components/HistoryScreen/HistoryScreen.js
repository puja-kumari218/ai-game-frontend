import React, { useState, useEffect } from 'react';
import "./HistoryScreen.css";

const HistoryScreen = ({ username }) => {
  const [gameHistory, setGameHistory] = useState([]);

  useEffect(() => {
    const fetchGameHistory = async () => {
      try {
        // Make a GET request to the game history API
        const response = await fetch(`http://localhost:8080/api/game/history?username=${username}`);

        if (response.ok) {
          const historyData = await response.json();
          setGameHistory(historyData);
        } else {
          // Handle API error
        }
      } catch (error) {
        // Handle network or other errors
      }
    };

    fetchGameHistory();
  }, [username]);

  return (
    <div>
      <h2>History Screen</h2>
      <p>Game History for {username}:</p>
      <ul>
        {gameHistory.map((item, index) => (
          <li key={index}>{`${item.result} - ${item.timestamp}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryScreen;
