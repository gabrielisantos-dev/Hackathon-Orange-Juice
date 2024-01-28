import { Modal, Button, TextField, Typography, Box, ThemeProvider, Link } from '@mui/material';
import { theme } from '../../utils/Theme';
import collections from '../../assets/collections/collections.svg';

// Constantes para tamanhos e cores repetidas
const modalWidth = '890px';
const modalHeight = '522px';
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
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
            }}
            >
            <Typography variant='h4' sx={{ marginBottom: '10px' }}>
                Adicionar Projeto
            </Typography>

            <Box
                sx={{
                width: '140%',
                height: '30px',
                marginTop: '16px',
                }}
            >
                <Typography color='#515255' letterSpacing='0.15px' font='Roboto' fontSize='1.1rem'>
                Selecione o conteúdo que você deseja fazer upload
                </Typography>
            </Box>

            <Box
                sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '16px',
                }}
            >
                <Box
                sx={{
                flex: '1',
                height: '92%',
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
                    width: '46px',
                    height: '46px',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <img src={collections} alt='Collections' />
                    <Typography variant='body2' marginTop='14px' sx={{ whiteSpace: 'nowrap' }}>
                    Compartilhe seu talento com milhares de<wbr /> pessoas
                    </Typography>
                </Box>
                </Box>

                <Box
                sx={{
                    width: '413px',
                    height: '336px',
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

            <Box sx={{ marginTop: '20px' }}>
                <Link href='' sx={{ display: 'block', marginTop: '16px', color: '#515255', textDecoration: 'none' }}>
                Visualizar publicação
                </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                variant='contained'
                color='secondary'
                sx={{
                    width: 'Hug (101px)',
                    height: 'Hug (42px)',
                    padding: '8px 22px',
                    borderRadius: '4px',
                    marginRight: '16px',
                    color: '#FCFDFF',
                }}
                >
                Salvar
                </Button>
                <Button
                variant='outlined'
                sx={{
                    width: 'Hug (101px)',
                    height: 'Hug (42px)',
                    padding: '8px 22px',
                    borderRadius: '4px',
                    color: '#00000061 38%',
                }}
                >
                Cancelar
                </Button>
            </Box>
            </Box>
        </Box>
        </Modal>
    </ThemeProvider>
    );
};

export default AddProjectModal;
