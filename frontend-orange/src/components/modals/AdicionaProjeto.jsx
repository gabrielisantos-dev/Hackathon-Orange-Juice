import React from 'react'
import { Modal, Box, Typography, Link, Button, TextField } from "@mui/material";
import {useForm} from 'react-hook-form'
import projetoFoto from '../../assets/projects/project1.svg'
import ViewPostModal from './ViewPostModal';
import {useState} from 'react'
import {theme} from '../../utils/Theme'
import {ThemeProvider} from '@mui/material';
import axios from 'axios'
import { readfilesSync } from 'readfiles-sync';





export default function AdicionaProjeto(props) {
  
  const [viewPostModalOpen, setViewPostModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(true)
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () =>{
    openModal ? setOpenModal(true) : setOpenModal(false)
  }


  const onSubmit = async (data) => {


    

    
    const{titulo,tags,descricao,links, image} = data

   
    const fileList = readfilesSync('../../assets/projects/')
      
    console.log(fileList)
   

    // const token = localStorage.getItem('token');
    // const formData = new FormData();
    //         formData.append('titulo', titulo);
    //         formData.append('tags', tags);
    //         formData.append('links', links);
    //         formData.append('descricao', descricao);  
            // formData.append('image', image); 
            
    // const teste = {"projectSaveDTO":{titulo,tags,links,descricao}, image}

    // const teste1 = {"titulo":"Testando", "tags":"UI", "links":"https://blogdamaria.com", "descricao":"Como fazer um bolo de chocolate"}
    // const teste2 = {"image": null}
    
      // await axios.post('https://orange-9dj9.onrender.com/project/save', {teste1}, {
      //           headers: {'Authorization': `Bearer ${token}`},'Content-Type': 'application/json',}
      //           )
      //           .then((res)=> console.log(res))
                
      //           .catch((e) => (console.log(e)))  
    
    console.log(image)
    // console.log(teste2)
    // console.log(formData)
    // console.log(formData)
    
    
  }

  return (
    
    
    <ThemeProvider theme={theme}>
    <Button onClick={handleOpen}>Open modal</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      overflow='scroll'
    >
      <Box 
      onSubmit={handleSubmit(onSubmit)}
      component='form'
      
      sx={{width:'890px', height:'522px', backgroundColor: '#FEFEFE', margin:'auto', marginTop:'155px', padding:'24px 32px'}}>
        <Box>
          <Typography variant='h5'>Adicionar projeto</Typography>
        </Box>
        <Box 
          
          sx={{
            display:'flex',
            justifyContent:'space-between',
            height:'336px',
            marginTop:'20px'
            }}
            >
          <Box 
            sx={{
              width:'389px',
              display:'flex',
              flexDirection:'column',
              gap:'15px'
              }}
              >
            <Typography>Selecione o conteúdo que você deseja fazer upload</Typography>          
            <TextField 
            {...register('image',{
              required:'Campo Ob',
              pattern:{
                value:'',
                message:''
              },
            })}  
            sx={{width:'100%', height:'100%'}} type='file'><img src='' alt="" /></TextField>
          </Box>
          <Box 
            sx={{
              display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between', width:'413px' }}>

            <TextField
              sx={{
                width:'100%'
              }}
              label='Título'
              error={!!errors?.titulo}
              helperText={errors?.titulo ? errors.titulo.message : null}
              {...register('titulo',{
                required:'Campo Obrigatório',
                pattern:{
                  value:'',
                  message:''
                },
              })}            
            />
            
            <TextField
              sx={{
                width:'100%'
              }}
              label='Tags'
              error={!!errors?.tags}
              helperText={errors?.tags ? errors.tags.message : null}
              {...register('tags',{
                required:'Campo Obrigatório',
                pattern:{
                  value:'',
                  message:''
                },
              })}       
            />
            <TextField
              sx={{
                width:'100%'
              }}
              label='Link'
              error={!!errors?.links}
              helperText={errors?.links ? errors.links.message : null}
              {...register('links',{
                required:'Campo Obrigatório',
                pattern:{
                  value:'',
                  message:''
                },
              })}       
            />
            <TextField
              sx={{
                width:'100%'
              }}
              label='Descrição'
              multiline
              rows={4}
              error={!!errors?.descricao}
              helperText={errors?.descricao ? errors.descricao.message : null}
              {...register('descricao',{
              required:'Campo Obrigatório',
              pattern:{
                value:'',
                message:''
              },
            })}       
              />
          </Box>
        </Box>
        <Box>
          <Link
          // onClick={()=>{handleClick}}
          onClick={() => {
            setViewPostModalOpen(true);
            // setSelectedProject({ ...projectData, image: URL.createObjectURL(projectData.image) });
        }}



          sx={{textDecoration:'none', color:'#515255', cursor:'pointer'}}
          ><Typography sx={{margin:'15px 0'}}>Visualizar Projeto</Typography></Link>
          <Box
            sx={{
              display:'flex',
              gap:'15px'
            }}
          >
            <Button 
              type='submit'
              variant='contained'
              color='secondary'
              sx={{
                width: 'Hug (109px)',
                height: 'Hug (42px)',
                padding: '8px 22px',
                borderRadius: '4px',
                backgroundColor: '#FF5522',
                color: '#FCFDFF',
                '&:hover':{bgcolor:'#818388'}
              }}              
              >Salvar</Button>
            <Button 
              onClick={handleClose}
              type='submit'
              variant='contained'
              color='secondary'
              sx={{
                width: 'Hug (109px)',
                height: 'Hug (42px)',
                padding: '8px 22px',
                borderRadius: '4px',
                backgroundColor: '#818388',
                color: '#FCFDFF',
              }}          
              >Cancelar</Button>
          </Box>         
        </Box>
      </Box>  
      
    </Modal>
          
    {viewPostModalOpen && (
        <ViewPostModal
            onClose={() => {
            setViewPostModalOpen(false);
            // setSelectedProject(null);
            }}
            // projectData={selectedProject}
        />
        )}
        {/* {savePostModalOpen && (
        <SavePostModal
            onClose={() => {
            setSavePostModalOpen(false);
            }}
        />
        )} */}
     
    </ThemeProvider> 
  )
}


