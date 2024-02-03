import { useState } from 'react';
import { Box, ThemeProvider, Link, Typography, Autocomplete, TextField, useMediaQuery } from '@mui/material/';
import {theme} from '../utils/Theme'
import Header from '../components/main-header/Header';
import CardPerfil from '../components/meu-portfolio/CardPerfil';
// import FormBuscarTags from '../components/meu-portfolio/FormBuscarTags';
import ListaProjetos from '../components/meu-portfolio/ListaProjetos';
// import { useEffect, useState } from "react";
// import profilePicture from '../assets/profile-picture/picture.svg';
import CardProjeto from '../components/meu-portfolio/CardProjeto';
// import figuraProjeto from '../assets/projects/project1.svg'
// import figuraProjeto1 from '../assets/projects/project1.svg'
// import EditProjectModal from '../components/modals/EditProjectModal'
import {mockBdResponseAllProjects} from '../utils/mock'
import axios from 'axios';

// Importações omitidas para simplificar o exemplo

const MeuPortfolio = () => {
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'));
  const [cardPerfil, setCardPerfil] = useState(mockBdResponseAllProjects);
  const [cardSelecionado, setCardSelecionado] = useState({});
  const [tagProjeto, setTagProjeto] = useState(cardPerfil);
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  const arrayTags = tagProjeto.map((item) => item.tags);

  const tagsUnicas = [...new Set(arrayTags)];

  const [openEditProjectModal, setOpenEditProjectModal] = useState(false);
  const [openModalProjeto, setOpenModalProjeto] = useState(false);

  const handleToggleModal = (setState) => () => {
    setState((prevState) => !prevState);
  };

  const handleOpenModalProjeto = handleToggleModal(setOpenModalProjeto);
  const handleEditProjectModal = handleToggleModal(setOpenEditProjectModal);

  const renderProjetos = () => {
    if (cardPerfil[0].length < 1 || !cardPerfil[0]) {
      return (
        <Link onClick={handleOpenModalProjeto} underline="none" width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'} style={{ cursor: 'pointer' }}>
          <ListaProjetos />
        </Link>
      );
    }

    const projetosFiltrados = tagsSelecionadas.length > 0
      ? cardPerfil.filter((itemCard) => tagsSelecionadas.includes(itemCard.tags))
      : cardPerfil;

    return projetosFiltrados.map((itemCard, index) => (
      <CardProjeto
        key={index}
        width={responsivo1 ? 'calc(33.33% - 17.33px)' : '100%'}
        color="neutral.dark"
        colorIconMenu="secondary.secondaryLight"
        avatar={itemCard.user.avatar}
        widthAvatar="24px"
        heightAvatar="24px"
        chipsHeight="32px"
        nome={itemCard.user.nome}
        labelChip={itemCard.tags}
        data={itemCard.date}
        imagem={itemCard.image}
        openModalProjeto={openModalProjeto}
        setOpenModalProjeto={setOpenModalProjeto}
        handleOpenModalProjeto={handleOpenModalProjeto}
        openEditProjectModal={openEditProjectModal}
        setOpenEditProjectModal={setOpenEditProjectModal}
        handleEditProjectModal={handleEditProjectModal}
      />
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginBottom: '70px' }}>
        <Header avatar={cardPerfil[0].user.avatar} email={cardPerfil[0].user.email} nome={cardPerfil[0].user.nome} pais="Brasil" />
        <CardPerfil
          pais="Brasil"
          avatar={cardPerfil[0].user.avatar}
          nome={cardPerfil[0].user.nome}
          marginAuto="auto"
          marginTop={responsivo1 ? '185px' : '49px'}
          flexDirection={responsivo1 ? 'row' : 'column'}
          width={responsivo1 ? '364px' : '312px'}
          height={responsivo1 ? '122px' : '236px'}
          gapCard={responsivo1 ? '42px' : '5px'}
          alignItens={!responsivo1 ? 'center' : null}
          marginBottomTyp={!responsivo1 ? '10px' : null}
          buttonOnOff={cardPerfil}
          openModalProjeto={openModalProjeto}
          setOpenModalProjeto={setOpenModalProjeto}
          handleOpenModalProjeto={handleOpenModalProjeto}
        />

        <Box sx={{ margin: '0px 32px', marginTop: '56px' }}>
          <Box
            color="neutral.darkest"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              opacity: '60%',
              fontWeight: '500',
              lineHeight: '20px',
              marginBottom: '40px',
              gap: '7px',
            }}
          >
            <Typography variant="h6">Meus projetos</Typography>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={tagsUnicas}
              multiple
              onChange={(event, value) => {
                setTagsSelecionadas(value);
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    width: responsivo1 ? '513px' : '312px',
                    height: '56px',
                  }}
                  {...params}
                  label="Buscar tags"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: '26px', flexWrap: 'wrap' }}>{renderProjetos()}</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MeuPortfolio;