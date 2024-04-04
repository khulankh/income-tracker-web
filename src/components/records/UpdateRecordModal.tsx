import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { MdModeEdit } from 'react-icons/md';
import axios from 'axios';
import { RecordData } from '../dashboard/Lending';
import CategoryChoices from './CategoryChoices';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #0166FF',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

type Props = {
  data: RecordData;
  setData: Dispatch<SetStateAction<RecordData[]>>;
};

const UpdateRecordModal: FC<Props> = ({ data, setData }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [amount, setAmount] = useState(data.amount);
  const [category, setCategory] = useState(data.category);

  const handleModal = () => setOpen((prev) => !prev);

  const UpdateRecord = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/updateTransaction/${data._id}`, {
        title,
        amount,
        category
      });
        console.log(response)
      setData(prevData => {
        return prevData.map((record: RecordData) => {
          if (record._id === response.data._id) {
            return { ...response.data };
          }
          return record;
        });
      }); 
      console.log(data)

      handleModal();
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  return (
    <div>
      <Button className='update-btn' onClick={handleModal}><MdModeEdit size={20} /></Button>
      <Modal open={open} onClose={handleModal}>
        <Box sx={style}>
          <div className='rec-modal-container' style={{display:'flex', flexDirection:'column'}}>
            <p>Amount</p>
            <input className='add-amount-input' type="number" placeholder='₮ 0.00' value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
            <p>Category</p>
            <CategoryChoices category={category} setCategory={setCategory} />
            <p>Title</p>
            <input type="text" placeholder='Write here again' className='modal-note' value={title} onChange={handleTitleChange} />
            <Button onClick={UpdateRecord}>Update</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateRecordModal;
