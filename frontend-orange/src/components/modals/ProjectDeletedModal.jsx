import PropTypes from 'prop-types';
import { Box, Typography, Modal, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ProjectDeleteModal = ({ onClose }) => {
    return (
        <Modal open={true} onClose={onClose}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    marginBottom: '20px',
                }}
            >
                <Box sx={{ bgcolor: 'background.paper', p: 4, textAlign: 'center', width: '341px', height: '210px' }}>
                    <Typography variant="h5" component="h2" color='#515255' mb={2} height='48' width='255px' marginLeft='42px' fontSize='25px'>
                        Projeto deletado com sucesso!
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, marginTop: '15px' }}>
                        <CheckCircleIcon sx={{ fontSize: 50, color: '#008000', mr: 1 }} />
                    </Box>
                    <Button
                        onClick={onClose}
                        size="large"
                        font='Roboto'
                        sx={{
                            marginTop: '15px',
                            bgcolor: '#FF5522',
                            color: '#FCFDFF',
                            width: '254px',
                            height: '47px',
                            borderRadius: '4px',
                            fontSize: '15px',
                            padding: '10px',
                            '&:hover': {
                                bgcolor: '#E64A19',
                            },
                        }}
                    >
                        <b>Voltar para projetos</b>
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

ProjectDeleteModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ProjectDeleteModal;
