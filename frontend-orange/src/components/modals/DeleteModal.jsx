import Axios from 'axios';
import PropTypes from 'prop-types';
import { Box, Typography, Modal, Button, CircularProgress, Snackbar } from '@mui/material';
import DeletedPostModal from './DeletedProjectModal';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';

const DeleteModal = ({ onClose, projectId }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [deletedProjectModalOpen, setDeletedProjectModalOpen] = useState(false);

    const handleCancel = () => {
        onClose();
    };

    const handleDelete = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            await Axios.delete(`https://orange-9dj9.onrender.com/project/delete/${projectId}`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            setDeletedProjectModalOpen(true);
        } catch (error) {
            setError('Erro ao excluir projeto. Por favor, tente novamente.');
            setSnackbarOpen(true);
            console.error('Erro ao excluir projeto', error);
        } finally {
            setLoading(false);
            onClose();
        }
    };


    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
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
                        onClick={handleDelete}
                        disabled={loading}
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
                        {loading && <CircularProgress size={24} sx={{ marginLeft: 1, color: '#FCFDFF' }} />}
                    </Button>
                    <Button
                        variant='outlined'
                        onClick={handleCancel}
                        disabled={loading}
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
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <MuiAlert onClose={handleCloseSnackbar} severity='error' elevation={6} variant='filled'>
                    {error}
                </MuiAlert>
            </Snackbar>
            {deletedProjectModalOpen && (
                <DeletedPostModal
                    onClose={() => {
                        setDeletedProjectModalOpen(false);
                    }}
                />
            )}
        </Modal>
    );
};

DeleteModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    projectId: PropTypes.string.isRequired,
};

export default DeleteModal;
