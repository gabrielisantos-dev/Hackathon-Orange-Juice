// import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Modal, Button, TextField, Typography, Box, ThemeProvider, Link } from '@mui/material';
import { theme } from '../../utils/Theme';

const AddProjectModal = () => {
    // const [projectData, setProjectData] = useState({
        // title: '',
        // tags: [],
        // link: '',
        // description: '',
        // });

        return (
            <ThemeProvider theme={theme}>
            <Modal open={open} onClose={onclose}>
                <Box sx={{
                    width:'890px',
                    height: '522px',
                    top: '143px',
                    left: '207px',
                    backgroundColor: '#FEFEFE',
                    }}>
                    <Box>
                        <Typography variant='h3'>Adicionar Projeto</Typography>
                        </Box>
                        <Box
                        sx={{
                            width: 'Fixed (413px)',
                            height: 'Fixed (336px)',
                            left: '413px',
                            gap: '16px',
                            display: 'flex',
                            flexDirection: 'column',

                        }}
                        >
                            <TextField
                            sx={{
                                width: 'Fill (413px)',
                                height: 'Hug (56px)',
                                padding: '0px, 12px, 0px, 12px',
                                borderRadius: '4px',
                                border: '1px',
                                color: '#0000003B'

                                }}
                            label='Título'
                            variant='outlined'
                            />
                            <TextField
                            sx={{
                                width: 'Fill (413px)',
                                height: 'Hug (56px)',
                                padding: '0px, 12px, 0px, 12px',
                                borderRadius: '4px',
                                border: '1px',
                                color: '#0000003B'
                                }}
                            label='Tags'
                            variant='outlined'
                            />
                            <TextField
                            sx={{
                                width: 'Fill (413px)',
                                height: 'Hug (56px)',
                                padding: '0px, 12px, 0px, 12px',
                                borderRadius: '4px',
                                border: '1px',
                                color: '#0000003B'
                                }}
                            label='Link'
                            variant='outlined'
                            />
                            <TextField
                            sx={{
                                width: 'Fill (413px)',
                                height: 'Fixed (120px)',
                                padding: '0px, 12px, 0px, 12px',
                                borderRadius: '4px',
                                border: '1px',
                                color: '#0000003B'

                                }}
                            label='Descrição'
                            variant='outlined'
                            />
                        </Box>
                        <Box>
                            <Link width='838px' underline='none' height='16px' href=''>Visualizar publicação do projeto</Link>
                        </Box>
                            <Box
                            sx={{
                                width: 'Hug (101px)',
                                height: 'Hug (42px)',
                                padding: '8px, 22px, 8px, 22px',
                                borderRadius: '4px',

                            }}                            
                            >
                                <Button>Salvar</Button>
                            </Box>
                            <Box
                            sx={{
                                width: 'Hug (101px)',
                                height: 'Hug (42px)',
                                padding: '8px, 22px, 8px, 22px',
                                borderRadius: '4px',

                            }}
                            >
                                <Button>Cancelar</Button>
                            </Box>
                </Box>
    </Modal>
    </ThemeProvider>
        )
}

export default AddProjectModal;