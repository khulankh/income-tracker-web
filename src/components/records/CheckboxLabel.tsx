import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
interface RadioButtonsGroupProps {
    transactionType: string;
    setTransactionType: (type: string) => void;
}

export default function RadioButtonsGroup({transactionType, setTransactionType}: RadioButtonsGroupProps) {
    return (
        <FormControl>
            <RadioGroup value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel value="income" control={<Radio />} label="Income" />
                <FormControlLabel value="expense" control={<Radio />} label="Expense" />
            </RadioGroup>
        </FormControl>
    );
}
