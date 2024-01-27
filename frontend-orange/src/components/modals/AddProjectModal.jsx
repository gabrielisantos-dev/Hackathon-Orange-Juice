import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, TextField, Typography, Box, ThemeProvider } from '@mui/material';
import collections from '../../assets/collections/collections.svg';
import { theme } from '../../utils/Theme';

const AddProjectModal = ({ open, onclose }) => {
    const [projectData, setProjectData] = useState({
        title: '',
        tags: [],
        link: '',
        description: '',
        });

        return (
            <ThemeProvider theme={theme}>
            <Modal open={open} onClose={onclose}>
                <Box sx={{
                    width:'890px',
                    height: '522px',
                    top: '143px',
                    left: '207px',
                    color: theme.neutral.dark,
                    backgroundColor: '#FEFEFE',
                    }}>
                    <Box>
                        <Typography variant='h3'>Adicionar Projeto</Typography>
                        </Box>
                        <Box
                        sx={{
                            width: '389px',
                            height: '336px',
                            padding: '0px, 0px, 320px, 0px',
                            gap: '16px',

                        }}
                        >
                            <Typography variant='p'>Selecione o conteúdo que você deseja fazer upload</Typography>
                            <Box
                            sx={{
                                width:'389px',
                                height:'304px',
                                display:'flex',
                                borderRadius:'5px',
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:'neutral.secondaryLight',
                                }}
                            >
                                <image src={collections} />
                                <Typography variant="body2">Compartilhe seu talento com milhares de pessoas</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Button>Visualizar publicação</Button>
                            <Box
                            sx={{
                                width: 'Hug (101px)',
                                height: 'Hug (42px)',
                                padding: '8px, 22px, 8px, 22px',
                                borderRadius: '4px',

                            }}                            
                            >
                                <Button color='#FF5522'>Salvar</Button>
                                <Button color='#0000001F'>Cancelar</Button>
                            </Box>

                        </Box>
                </Box>
    </Modal>
    </ThemeProvider>
        )
}

AddProjectModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onclose: PropTypes.func.isRequired,
}

export default AddProjectModal;