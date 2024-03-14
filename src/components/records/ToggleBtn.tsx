import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleBtn() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
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
          backgroundColor: alignment === 'expense' ? '#0166FF' : 'initial',
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
          backgroundColor: alignment === 'income' ? '#0166FF' : 'initial', 
        }}
      >
        Income
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
