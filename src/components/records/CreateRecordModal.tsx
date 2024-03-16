import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ToggleBtn from './ToggleBtn';
import Box from '@mui/material/Box';
import axios, { AxiosError } from 'axios';
import { MutatingDots } from 'react-loader-spinner'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 712,
  bgcolor: 'background.paper',
  border: '2px solid #0166FF',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function CreateRecordModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  // const [required, setRequired] = useState('')

  const handleModal = () => setOpen((prev) => !prev);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleCreateRecord = async (): Promise<void> => {
    if (
        amount === '' ||
        note === ' ' ||
        category === '' ||
        date === ''
    ) {
        // setRequired('Please enter all inputs');
    } else {
        try {
            const response = await axios.post("http://localhost:8080/createTransaction", {
                amount: amount,
                title: note,
                category: category,
                createdAt: date,
            });
            setLoading(false);
            console.log(response);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const axiosError = err as AxiosError;
                setLoading(false);
                // setRequired(axiosError.response?.data as string);
            }
        }
    }
};



  return (
    <div>
      <Button className='addrec-btn' onClick={handleModal}>+ Add</Button>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='rec-modal-container'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontFamily: "sans-serif" }}>Add Record</h3>
                <ToggleBtn />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p>Amount</p>
                  <input className='add-amount-input' type="text" placeholder='₮ 0.00' value={amount} onChange={handleAmountChange} />
                  <p>Category</p>
                  <select className='choose-category-input' onChange={handleCategoryChange} value={category} >
                    <option value='Food & Drinks'>Food & Drinks</option>
                    <option value='Shopping'>Shopping</option>
                    <option value='Housing'>Housing</option>
                    <option value='Transportation'>Transportation</option>
                    <option value='Vehicle'>Vehicle</option>
                    <option value='Life & Entertainment'>Life & Entertainment</option>
                    <option value='Communication, PC'>Communication, PC</option>
                    <option value='Financial expenses'>Financial expenses</option>
                    <option value='Investments'>Investments</option>
                    <option value='Income'>Income</option>
                    <option value="Others">Others</option>
                  </select>
                  <p>Date</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <input type="date" style={{
                      width: '348px',
                      height: '48px',
                      border: '1px solid #0166FF',
                      borderRadius: '12px',
                    }} value={date} onChange={handleDateChange} />
                  </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <p>Title</p>
                  <input type="text" placeholder='Write here' className='modal-note' value={note} onChange={handleNoteChange} />

                  {loading ? <MutatingDots
                    visible={true}
                    height="100"
                    width="100"
                    color="#0166FF"
                    secondaryColor="#0166FF"
                    radius="12.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  /> : <button style={{
                    width: '348px',
                    height: '48px',
                    borderRadius: '20px',
                    backgroundColor: '#0166FF',
                    color: 'white',
                    border: 'none',
                  }}
                  onClick={handleCreateRecord}
                  >Add Expense</button>}
                  {/* <div style={{ color: "red" }}>{required}</div> */}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
