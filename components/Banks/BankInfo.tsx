"use client"
import React from 'react';

interface BankInfoProps {
  selectedBankName: string | null;
  userCredits: number | null;
}

const BankInfo: React.FC<BankInfoProps> = ({ selectedBankName, userCredits }) => {
  return (
    <div className="bank-info">
      <p>Selected Bank: {selectedBankName}</p>
      <p>Your Credits: {userCredits}</p>
    </div>
  );
};

export default BankInfo;