import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, TextField, Typography, Box, ThemeProvider, Link, useMediaQuery, CircularProgress } from '@mui/material';
import { theme } from '../../utils/Theme';
import collections from '../../assets/collections/collections.svg';
import ViewPostModal from './ViewPostModal';
import SavePostModal from './SavePostModal';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Axios from 'axios';

// Constantes para tamanhos e cores repetidas
const modalWidth = '850px';
const modalHeight = '502px';
const backgroundColor = '#FEFEFE';
const primaryColor = theme.palette.neutral.secondaryLight;

const EditProjectModal = ({ onClose, handleEditProjectModal }) => {
    const [viewPostModalOpen, setViewPostModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [editedPostModalOpen, setEditedPostModalOpen] = useState(false);
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [linkError, setLinkError] = useState('');
    const [hasErrors, setHasErrors] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loading, setLoading] = useState(false);



    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [projectData, setProjectData] = useState({
    titulo: '',
    tags: [],
    links: '',
    descrição: '',
    imagem: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProjectData({ ...projectData, [name]: value });
        validateField(name, value);
        };
        
        const validateField = (name, value) => {
        switch (name) {
            case 'titulo':
            setTitleError(value.length < 4 || value.length > 30 ? 'O título deve ter entre 4 e 30 caracteres.' : '');
            break;
            case 'descrição':
            setDescriptionError(value.length < 10 || value.length > 255 ? 'A descrição deve ter entre 10 e 255 caracteres.' : '');
            break;
            case 'links':
            setLinkError(value.length < 10 || value.length > 255 ? 'O link deve ter entre 10 e 255 caracteres.' : '');
            break;
            default:
            break;
        }
        setHasErrors(!!(titleError || descriptionError || linkError));
        };
        
        const handleTagsChange = (event) => {
        const tagsArray = event.target.value.split(' ').filter(tag => tag.trim() !== ' ');
        setProjectData((prevData) => ({ ...prevData, tags: tagsArray }));
        };
        
    const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProjectData((prevData) => {
        if (prevData.imagem !== imageFile) {
        return { ...prevData, imagem: imageFile };
        }
        return prevData;
    });
    };

    const handleSave = async () => {
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append('titulo', projectData.titulo);
            formData.append('tags', projectData.tags.join(', '));
            formData.append('links', projectData.links);
            formData.append('descrição', projectData.descrição);
            formData.append('imagem', projectData.imagem);
    
            const response = await Axios.post('https://orange-9dj9.onrender.com/project/update/${id}', formData);
    
            if (response.status === 200 || response.status === 201) {
                setEditedPostModalOpen(true);
                onClose();
            }

        } catch (error) {
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    };
    

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };
    

    const backgroundImage = useMemo(() => {
    if (projectData.imagem) {
        return `url(${URL.createObjectURL(projectData.imagem)})`;
    }
    return 'none';
    },
    [projectData.imagem]);


    return (
    <ThemeProvider theme={theme}>
        {!editedPostModalOpen && (
        <Modal open={true} onClose={onClose} >
        <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
            }}
        >
            <Box
            sx={{
                width: modalWidth,
                height: hasErrors ? 'auto' : modalHeight,
                backgroundColor: backgroundColor,
                padding: '35px 41px',
                display: 'flex',
                flexDirection: 'column',
            }}
            >
            <Typography
                variant='h4'
                font='Roboto'
                fontSize='26px'
                color='neutral.dark'
                sx={{ marginBottom: '8px' }}
        >
                Editar Projeto
                {loading && <CircularProgress />}
            </Typography>

            <Box
                sx={{
                width: '140%',
                height: '30px',
                marginTop: '7px',
                }}
            >
                <Typography
                marginTop='10px'
                color='neutral.dark'
                letterSpacing='0.20px'
                font='Roboto'
                fontSize='1.0rem'
                >
                Selecione o conteúdo que você deseja fazer upload
                </Typography>
            </Box>

            <Box
                sx={{
                width: '100%',
                display: 'flex',
                flexDirection: isSmallScreen ? 'column-reverse' : 'row',
                justifyContent: 'space-between',
                gap: '26px',
                marginTop: '-15px',
                }}
            >
                <Box
                sx={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '5px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: primaryColor,
                    marginTop: '32px',
                    backgroundImage: backgroundImage,
                }}
                >
                <Box
                    sx={{
                    width: '56px',
                    height: '56px',
                    margin: 'auto',
                    display: projectData.imagem ? 'none' : 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <input
                    type='file'
                    accept='image/*'
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                    id='imageInput'
                    />
                    <label htmlFor='imageInput'>
                    <img
                        src={collections}
                        alt='Collections'
                        style={{ cursor: 'pointer' }}
                    />
                    </label>
                    <Typography
                    variant='body2'
                    marginTop='14px'
                    sx={{
                        whiteSpace: 'nowrap',
                        color: 'neutral.secondaryDark',
                        opacity: '60%',
                    }}
                    >
                    Compartilhe seu talento com milhares de<wbr /> pessoas
                    </Typography>
                </Box>
                </Box>

                <Box
                sx={{
                    width: '433px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
                >
                <TextField
                    label='Titulo'
                    variant='outlined'
                    name='titulo'
                    value={projectData.titulo}
                    onChange={handleInputChange}
                    error={Boolean(titleError)}
                    helperText={titleError}
                />
                <TextField
                    label='Tags'
                    variant='outlined'
                    name='tags'
                    value={projectData.tags.join(' ')}
                    onChange={handleTagsChange}
                />
                <TextField
                    label='Link'
                    variant='outlined'
                    name='links'
                    value={projectData.links}
                    onChange={handleInputChange}
                    error={Boolean(linkError)}
                    helperText={linkError}
                />
                <TextField
                    label='Descrição'
                    multiline
                    rows={4}
                    variant='outlined'
                    name='descrição'
                    value={projectData.descrição}
                    onChange={handleInputChange}
                    error={Boolean(descriptionError)}
                    helperText={descriptionError}
                />
                </Box>
            </Box>

            <Box>
                <Link
                href='#'
                onClick={() => {
                    setViewPostModalOpen(true);
                    setSelectedProject({ ...projectData, imagem: URL.createObjectURL(projectData.imagem) });
                }}
                sx={{
                    display: 'block',
                    marginTop: '16px',
                    color: 'neutral.dark',
                    textDecoration: 'none',
                    fontSize: '18px',
                }}
                >
                Visualizar publicação
                </Link>
            </Box>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: '16px',
                }}
            >
                <Button
                variant='contained'
                color='secondary'
                onClick={handleSave}
                sx={{
                    width: 'Hug (109px)',
                    height: 'Hug (42px)',
                    padding: '8px 22px',
                    borderRadius: '4px',
                    marginRight: '16px',
                    color: '#FCFDFF',
                }}
                >
                <b>Salvar</b>
                </Button>
                <Button
                variant='outlined'
                onClick={()=>{handleEditProjectModal()}}
                sx={{
                    width: 'Hug (101px)',
                    height: 'Hug (42px)',
                    padding: '8px 22px',
                    borderRadius: '4px',
                    backgroundColor: 'neutral.secondaryMain',
                    opacity: '37%',
                    color: 'black',
                }}
                >
                <b>Cancelar</b>
                </Button>
            </Box>
            </Box>
        </Box>
        </Modal>
        )}
        <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <MuiAlert onClose={handleCloseSnackbar} severity='error' elevation={6} variant='filled'>
            Erro ao editar o projeto. Por favor, tente novamente.
            </MuiAlert>
        </Snackbar>

        {viewPostModalOpen && (
        <ViewPostModal
            onClose={() => {
            setViewPostModalOpen(false);
            setSelectedProject(null);
            }}
            projectData={selectedProject}
        />
        )}
        {editedPostModalOpen && (
        <SavePostModal
            onClose={() => {
            setEditedPostModalOpen(false);
            }}
        />
        )}
    </ThemeProvider>
    );
};

EditProjectModal.propTypes = {
    onClose: PropTypes.func,
    handleEditProjectModal: PropTypes.func,
}.isRequired;

export default EditProjectModal;