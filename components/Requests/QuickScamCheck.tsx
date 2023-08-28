"use client"

import React, { useState } from 'react';

interface ScamCheckerProps {
  selectedBank: string | null;
}

const ScamChecker: React.FC = () => {
  const [urlInput, setUrlInput] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [userCredits, setUserCredits] = useState<number>(10);

  const handleUrlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(event.target.value);
  };

  const checkScam = () => {
    if (isValidUrl(urlInput)) {
      // Deduct a credit and perform the scam check
      if (userCredits > 0) {
        setUserCredits(userCredits - 1);
        setMessage('Definite Scam');
      } else {
        setMessage('Insufficient credits');
      }
    } else {
      alert('Invalid URL. Please enter a valid URL.');
    }
  };

  const isValidUrl = (url: string) => {
    // Simple URL validation (you can use a more comprehensive method)
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div>
      <h2>Scam Checker</h2>
      <p>User Credits: {userCredits}</p>
      {/* {selectedBank && <p>Selected Bank: {selectedBank}</p>} */}
      <input type="text" placeholder="Enter URL" value={urlInput} onChange={handleUrlInputChange} />
      <button onClick={checkScam}>Check</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ScamChecker;