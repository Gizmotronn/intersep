"use client"

import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useSession } from '@supabase/auth-helpers-react';

interface Bank {
  bank_id: number;
  bank_name: string;
}

const BankSelection: React.FC = () => {
  const supabase = createClientComponentClient();
  const session = useSession();

  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<number | null>(null);

  useEffect(() => {
    fetchBanks();
    loadUserBank();
  }, []);

  const fetchBanks = async () => {
    const { data, error } = await supabase.from('banks').select('*');
    if (error) {
      console.error('Error fetching banks:', error.message);
    } else {
      setBanks(data || []);
    }
  };

  const loadUserBank = async () => {
    if (session) {
      const { data, error } = await supabase
        .from('profiles')
        .select('bank_id')
        .eq('user_id', session.user?.id)
        .single();
      if (!error && data) {
        setSelectedBank(data.bank_id);
      }
    }
  };

  return (
    <div>
      <h2>Select Your Bank</h2>
      <div className="bank-grid">
        {banks.map((bank) => (
          <div
            key={bank.bank_id}
            className={`bank-card ${selectedBank === bank.bank_id ? 'selected' : ''}`}
            style={{
              color: selectedBank === bank.bank_id ? 'red' : 'inherit',
              fontWeight: bank.bank_id === 3 ? 'bold' : 'normal',
            }}
          >
            {bank.bank_name} (ID: {bank.bank_id})
          </div>
        ))}
      </div>
      <div>
        {selectedBank !== null && (
          <p>You have selected: {banks.find((bank) => bank.bank_id === selectedBank)?.bank_name}</p>
        )}
      </div>
    </div>
  );
};

export default BankSelection;