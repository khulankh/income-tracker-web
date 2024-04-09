import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ToggleBtnProps {
  transaction: string;
  setTransaction: (newTransaction: string) => void;
}

export default function ToggleBtn({transaction, setTransaction}: ToggleBtnProps) {
  
  const handleChange = (_:unknown, newTransaction: string) => {
    setTransaction(newTransaction);
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
          backgroundColor: transaction === 'expense' ? '#6f2dbd' : 'initial',
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
          backgroundColor: transaction === 'income' ? '#6f2dbd' : 'initial',
        }}
      >
        Income
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
