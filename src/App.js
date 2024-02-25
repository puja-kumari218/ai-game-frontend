import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './Components/Login/Login';
import GamePlay from './Components/GamePlay/GamePlay';
import HistoryScreen from './Components/HistoryScreen/HistoryScreen';
import LostScreen from './Components/LostScreen/LostScreen';
import "./App.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen onLogin={handleLogin} />} />
          <Route path="/gameplay" element={<GamePlay username={loggedInUser} />} />
          <Route path="/history" element={<HistoryScreen username={loggedInUser} />} />
          <Route path="/lost" element={<LostScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
