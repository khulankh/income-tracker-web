import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ToggleBtn from './ToggleBtn';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 792,
  height: 512,
  bgcolor: 'background.paper',
  border: '2px solid #0166FF',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function CreateRecordModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button className='addrec-btn' onClick={handleOpen}>+ Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='rec-modal-container'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: "sans-serif" }}>Add Record</h3>
              <ToggleBtn />
              <p>Amount</p>
              <input className='add-amount-input' type="text" placeholder='₮ 0.00' />
              <p>Category</p>
              {/* <input className='choose-category-input' type='' placeholder='₮ 0.00' /> */}
              <select className='choose-category-input'>
                <option value=''>Food & Drinks</option>
                <option>Shopping</option>
                <option>Housing</option>
                <option>Transportation</option>
                <option>Vehicle</option>
                <option>Life & Entertainment</option>
                <option>Communication, PC</option>
                <option>Financial expenses</option>
                <option>Investments</option>
                <option>Income</option>
                <option value="">Others</option>
              </select>
              <p>Date</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <input type="date" style={{
                  width: '348px',
                  height: '48px',
                  border: '1px solid #0166FF',
                  borderRadius: '12px',
                }} />
                <button style={{
                  width: '348px',
                  height: '48px',
                  borderRadius: '20px',
                  backgroundColor: '#0166FF',
                  color: 'white',
                  border: 'none'
                }}>Add Record</button>
              </div>
            </div>
            <div>
              <p>Payee</p>
              <input className='add-amount-input' type="text" placeholder='Write here' />
              <p>Note</p>
              <input type="text" placeholder='Write here' className='modal-note' />
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  );
}
