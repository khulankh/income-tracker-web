import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { RecordData } from "../../components/dashboard/Lending";
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid red',
    boxShadow: 24,
    p: 4,
};

type Props = {
    data: RecordData;
    setData: React.Dispatch<React.SetStateAction<RecordData[]>>;
};

const DeleteModal: React.FC<Props> = ({ data, setData }) => {
    const [open, setOpen] = React.useState(false);
    const handleModal = () => setOpen((prev) => !prev);

    const handleDeleteClick = async () => {
        try {
            await axios.delete('https://income-tracker-service.onrender.com/deleteTransaction', { data: { id: data._id } });
            setData((prevData: RecordData[]) => prevData.filter(record => record._id !== data._id));
            handleModal();
        } catch (error) {
            console.error('Error deleting record:', error);
        }
    };

    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <button onClick={handleModal} className='delete-btn'> <RiDeleteBin6Line size={20} /> </button>
            <Modal
                open={open}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='delete-modal-container'>
                        <h3>Are You Sure?</h3>
                        <div style={{display:'flex', gap:'30px'}}>
                        <button className='delete-btn' onClick={handleDeleteClick}> Yes <RiDeleteBin6Line size={20} /></button>
                        <button className='cancel-btn' onClick={handleModal}> No <MdOutlineCancel size={20} /></button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default DeleteModal;
