import { Modal, Button, TextField, Typography, Box, ThemeProvider, Link } from '@mui/material';
import { theme } from '../../utils/Theme';
import collections from '../../assets/collections/collections.svg';

// Constantes para tamanhos e cores repetidas
const modalWidth = '850px';
const modalHeight = '502px';
const backgroundColor = '#FEFEFE';
const primaryColor = theme.palette.neutral.secondaryLight;

const AddProjectModal = () => {
    return (
    <ThemeProvider theme={theme}>
        <Modal open={true} onClose={() => {}}>
        <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            }}
        >
            <Box
            sx={{
                width: modalWidth,
                height: modalHeight,
                backgroundColor: backgroundColor,
                padding: '24px 30px',
                display: 'flex',
                flexDirection: 'column',
            }}
            >
            <Typography variant='h4' font='Roboto' fontSize='26px' color='neutral.dark' sx={{ marginBottom: '8px' }}>
                Adicionar Projeto
            </Typography>

            <Box
                sx={{
                width: '140%',
                height: '30px',
                marginTop: '7px',
                }}
            >
                <Typography marginTop='10px' color='neutral.dark' letterSpacing='0.20px' font='Roboto' fontSize='1.0rem'>
                Selecione o conteúdo que você deseja fazer upload
                </Typography>
            </Box>

            <Box
                sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
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
                }}
                >
                <Box
                    sx={{
                    width: '56px',
                    height: '56px',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <img src={collections} alt='Collections' />
                    <Typography variant='body2' marginTop='14px' sx={{ whiteSpace: 'nowrap', color:'neutral.secondaryDark', opacity: '60%' }}>
                    Compartilhe seu talento com milhares de<wbr /> pessoas
                    </Typography>
                </Box>
                </Box>

                <Box
                sx={{
                    width: '433px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                }}
                >
                <TextField label='Título' variant='outlined' />
                <TextField label='Tags' variant='outlined' />
                <TextField label='Link' variant='outlined' />
                <TextField label='Descrição' multiline rows={4} variant='outlined' />
                </Box>
            </Box>

            <Box>
                <Link href='' sx={{ display: 'block', marginTop: '16px', color: 'neutral.dark', textDecoration: 'none', fontSize: '18px' }}>
                Visualizar publicação
                </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '16px' }}>
                <Button
                variant='contained'
                color='secondary'
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
    </ThemeProvider>
    );
};

export default AddProjectModal;
