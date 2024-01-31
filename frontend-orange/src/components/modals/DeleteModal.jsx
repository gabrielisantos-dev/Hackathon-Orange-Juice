import PropTypes from 'prop-types';
import { Box, Typography, Modal, Button } from '@mui/material';

const DeleteModal = ({ onClose }) => {

const handleCancel = () => {
    onClose();
};

    return (
        <Modal open={true} onClose={onClose}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Box sx={{ bgcolor: 'background.paper', p: 4, width: '421px', height: '209px' }}>
                    <Typography variant="h5" component="h2" color='#515255' mb={2} height='48px' marginLeft= '20px' marginTop= '10px' >
                        Deseja Excluir?
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', mb: 2, marginLeft: '20px' }}>
                        <Typography variant="h5" component="h2" color='#515255' mb={2} height='30px' width='337px' fontSize='18px' >
                        Se você prosseguir irá excluir o projeto do seu portfólio
                        </Typography>
                    </Box>
                    <Button
                    variant='contained'
                    color='secondary'
                    sx={{
                    width: 'Hug (109px)',
                    height: 'Hug (42px)',
                    padding: '8px 22px',
                    borderRadius: '4px',
                    backgroundColor: '#FF5522',
                    marginLeft: '20px',
                    marginTop: '20px',
                    color: '#FCFDFF',
                }}
                >
                <b>Excluir</b>
                </Button>
                <Button
                    variant='outlined'
                    onClick={handleCancel}
                    sx={{
                    width: 'Hug (101px)',
                    height: 'Hug (42px)',
                    padding: '8px 22px',
                    borderRadius: '4px',
                    backgroundColor: '#A1A3AA',
                    opacity: '37%',
                    marginLeft: '20px',
                    marginTop: '20px',
                    color: 'black',
                }}
                >
                <b>Cancelar</b>
                </Button>
                </Box>
            </Box>
        </Modal>
    );
};

DeleteModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default DeleteModal;
