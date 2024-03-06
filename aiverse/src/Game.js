// src/components/Game.js
import React, { useState } from 'react';

const Game = () => {
  const [pumpCount, setPumpCount] = useState(0);
  const [isPopped, setIsPopped] = useState(false);

  const handlePump = () => {
    setPumpCount(pumpCount + 1);
    if (pumpCount >= 10) {
      setIsPopped(true);
    }
  };

  return (
    <div>
      <h2>Balloon Pumping Game</h2>
      {!isPopped ? (
        <>
          <p>Click to pump the balloon!</p>
          <button onClick={handlePump}>Pump</button>
          <p>Pump Count: {pumpCount}</p>
        </>
      ) : (
        <p>The balloon popped!</p>
      )}
    </div>
  );
};

export default Game;
