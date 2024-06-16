/* eslint-disable react/prop-types */
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PayPalButton from './PaypalButton';

const ModalComponent = ({open,handleClose}) => {
    console.log("modal called")
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PayPalButton />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
