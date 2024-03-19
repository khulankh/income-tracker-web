import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IoFastFoodOutline } from "react-icons/io5";
import { CiShoppingTag } from 'react-icons/ci';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdEmojiTransportation } from 'react-icons/md';
import { SiDcentertainment } from 'react-icons/si';
import { FaComputer, FaHouse, FaMoneyBillTrendUp } from 'react-icons/fa6';
import { RiPsychotherapyLine, RiRefund2Line } from 'react-icons/ri';

type Props = {
    category: string;
    setCategory: (_:string)=> void
}
export default function CategoryChoices({category, setCategory}:Props) {
 
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value );
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choices</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem value='Food & Drinks'><IoFastFoodOutline /> Food & Drinks</MenuItem>
          <MenuItem value='Shopping'><CiShoppingTag /> Shopping</MenuItem>
          <MenuItem value='Housing'><FaHouse />Housing</MenuItem>
          <MenuItem value='Transportation'><MdEmojiTransportation /> Transportation</MenuItem>
          <MenuItem value='Life & Entertainment'><SiDcentertainment /> Life & Entertainment</MenuItem>
          <MenuItem value='Computer, PC'><FaComputer /> Computer, PC</MenuItem>
          <MenuItem value='Financial expenses'><FaRegMoneyBillAlt />Financial expenses</MenuItem>
          <MenuItem value='Investments'><FaMoneyBillTrendUp /> Investments</MenuItem>
          <MenuItem value='Income'><RiRefund2Line /> Income</MenuItem>
          <MenuItem value='Others'><RiPsychotherapyLine /> Others</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}