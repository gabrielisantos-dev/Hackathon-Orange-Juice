import { Modal, Box, Typography, ThemeProvider } from '@mui/material';
import { theme } from '../../utils/Theme';

const ViewPostModal = () => {
  return (
    <ThemeProvider theme={theme}>
    <Modal open={true}>
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          width: '1600px',
          height: '750px',
          marginTop: '50px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            width: '838px',
            height: '50px',
            top: '56px',
            left: '102px',
            gap: '175px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Box></Box>
          <Typography variant="h4" font="Roboto">
            Ecommerce One Page
          </Typography>
          <Box></Box>
        </Box>
      </Box>
      </Box>
    </Modal>
    </ThemeProvider>
  );
};

export default ViewPostModal;
