import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export default function ToggleBtn() {
  const [transaction, setTransaction] = useState('expense');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newtransaction: string,
  ) => {
    setTransaction(newtransaction);
    console.log(transaction)
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={transaction}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        value="expense"
        sx={{
          width: '172px',
          height: '40px',
          borderRadius: '20px',
          backgroundColor: transaction === 'expense' ? '#0166FF' : 'initial',
        }}
      >
        Expense
      </ToggleButton>
      <ToggleButton
        value="income"
        sx={{
          width: '172px',
          height: '40px',
          borderRadius: '20px',
          backgroundColor: transaction === 'income' ? '#0166FF' : 'initial',
        }}
      >
        Income
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
