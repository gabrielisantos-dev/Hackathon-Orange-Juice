import PropTypes from 'prop-types';
import { Box, Typography, Modal, Button } from '@mui/material';

const SavePostModal = ({ onClose }) => {
    return (
        <Modal open={true} onClose={onClose}>
        <Box>
        <Box sx={{ width: 400, height: 200, bgcolor: 'background.paper', p: 2 }}>
            <Box>
                <Typography variant="h5" component="h2">Projeto adicionado com sucesso!</Typography>
            </Box>
            <Button>voltar para projetos</Button>
        </Box>
        </Box>
        </Modal>
    );
    };

SavePostModal.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default SavePostModal;