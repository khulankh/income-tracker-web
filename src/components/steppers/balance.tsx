import React, { useState } from 'react';
import BalanceIcon from '../icons/balance';

interface BalanceProps {
  onNext: (cashBalance: number) => void;
}

const Balance: React.FC<BalanceProps> = ({ onNext }) => {
  const [cashBalance, setCashBalance] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCashBalance(e.target.value);
  };

  const handleNext = () => {
    const balanceNumber = parseFloat(cashBalance);
    if (!isNaN(balanceNumber)) {
      onNext(balanceNumber);
    }
  };

  return (
    <div className="balance-container">
      <BalanceIcon />
      <h1 style={{ fontSize: '24px', color: '#0F172A', textAlign: 'center' }}>Set up your cash Balance</h1>
      <input placeholder="Cash" id="sign-input" value={cashBalance} onChange={handleChange} />
      <p style={{ color: '#475569', fontSize: '12px', textAlign: 'center' }}>How much cash do you have in your wallet?</p>
      <button className="confirm-btn" onClick={handleNext}>Confirm</button>
    </div>
  );
};

export default Balance;