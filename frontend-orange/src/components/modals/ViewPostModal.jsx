import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import picture from '../../assets/profile-picture/picture.svg';
import projectImage from '../../assets/projects/project1.svg';

const ViewPostModal = ({ onClose }) => {
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      sx={{ overflow: 'scroll' }}
    >
      <div>
        <Box
          sx={{
            position: 'absolute',
            top: '75%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1042px',
            height: '981px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 3,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'right' }}>
            <CloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '0px 25px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img src={picture} alt='Imagem usuário' width='40px' height='40px' />
              <Box>
                <Typography variant='subtitle1'>Camila Soares</Typography>
                <Typography variant='subtitle1'>12/12</Typography>
              </Box>
            </Box>
            <Typography variant='h5'>Alguma coisa aqui</Typography>
            <Box sx={{ display: 'flex', gap: '8px' }}>
                <Chip />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <img
              src={projectImage}
              alt='Imagem do projeto'
              width='100%'
              height='100%'
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box
            sx={{ height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '30px 25px' }}
          >
            <Typography variant='body1'>descrição</Typography>
            <Box>
              <Typography variant='subtitle1'>Download</Typography>
              <Link href=''>Link</Link>
            </Box>
          </Box>
        </Box>
      </div>
    </Modal>
  );
};

ViewPostModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ViewPostModal;
