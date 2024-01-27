import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, TextField, Typography, Box, Grid } from '@mui/material';
import { theme } from '../../utils/Theme';

const AddProjectModal = ({ open, onclose }) => {
    const [projectData, setProjectData] = useState({
        title: '',
        tags: '',
        link: '',
        description: '',
      });
}

export default AddProjectModal;