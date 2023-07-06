"use client"
import React, { useState } from 'react';

const ScamChecker: React.FC = () => {
  const [urlInput, setUrlInput] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  const handleUrlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(event.target.value);
  };

  const checkScam = () => {
    // Simulate a scam check (always returns "definite scam" for this example)
    setMessage('Definite Scam');
  };

  return (
    <div>
      <h2>Scam Checker</h2>
      <p>User Credits: 10</p>
      {/* {selectedBank && <p>Selected Bank: {selectedBank}</p>} */}
      <input type="text" placeholder="Enter URL" value={urlInput} onChange={handleUrlInputChange} />
      <button onClick={checkScam}>Check</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ScamChecker;