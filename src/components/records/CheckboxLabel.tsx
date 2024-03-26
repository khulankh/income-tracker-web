import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButtonsGroup() {
  
  //  const { transactionType, amount , title } = data;
  // const IncomeExpense = (transactionType: string) => {
  //   if (transactionType === "income") {
  //     console.log(data)
  //   }else{
  //     console.log("hello")
  //   }
  // }


  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="all" control={<Radio defaultChecked />} label="All" />
        <FormControlLabel value="income" control={<Radio  />} label="Income" />
        <FormControlLabel value="expense" control={<Radio />} label="Expense" />
      </RadioGroup>
    </FormControl>
  );
}
