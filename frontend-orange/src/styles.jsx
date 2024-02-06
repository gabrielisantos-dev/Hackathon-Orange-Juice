const styles = {
  mainContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    position: 'relative',
    flexDirection: 'column',
  },
  formularioContainer: {
    width: '110%',
    maxWidth: '517px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '4px',
    marginLeft: '7%',
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
  alert: {
    width: '60%',
    height: 'auto',
    position: 'absolute',
    top: '-40%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '4px',
    marginTop: '30px'
  },
};

export default styles;
