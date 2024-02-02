import {theme} from '../utils/Theme'
import {useMediaQuery} from '@mui/material/';
import DescobrirDesktop from './DescobrirDesktop';
import DescobrirMobile from './DescobrirMobile';
import { mock } from '../utils/mock';
import {useState} from "react"

export default function Descobrir(){
  const responsivo1 = useMediaQuery(theme.breakpoints.up('sm'))

  const [cardPerfil, setCardPerfil] = useState(mock);
  const [openDescobrir, setOpenDescobrir] = useState(true);
  const [cardSelecionado, setCardSelecionado] = useState({});
  const [open, setOpen] = useState(false);
  const [openVm, setOpenVm] = useState(false)
  const handleOpenDesk = () => setOpen(true);
  const handleOpenMobile = () => {
    setOpen(true)
    setOpenDescobrir(false)
  };  
  const handleCloseDesk = () => setOpen(false);
  const handleCloseMobile = () => setOpen(false);
  const [tagProjeto, setTagProjeto] = useState(cardPerfil);
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  const arrayTags = []

  tagProjeto.map(item => arrayTags.push(item.tag))

  const tagUnicas = arrayTags.filter((item, index, self) => {
    return self.indexOf(item) === index
  });

  return(
    <>
      {responsivo1 ?
      
      <DescobrirDesktop
        respBk1={responsivo1}
        cardPerfil={cardPerfil}
        setCardPerfil={setCardPerfil}
        open={open}
        setOpen={setOpen}
        handleOpenDesk={handleOpenDesk}
        cardSelecionado={cardSelecionado}
        setCardSelecionado={setCardSelecionado}
        handleCloseDesk={handleCloseDesk}
        tagProjeto={tagProjeto}
        setTagProjeto={setTagProjeto}
        tagsSelecionadas={tagsSelecionadas}
        setTagsSelecionadas={setTagsSelecionadas}
        arrayTags={arrayTags}
        tagUnicas={tagUnicas}

      />

       :
       
      <DescobrirMobile
        respBk1={responsivo1}
        cardPerfil={cardPerfil}
        openDescobrir={openDescobrir}
        setOpenDescobrir={setOpenDescobrir}
        cardSelecionado={cardSelecionado}
        setCardSelecionado={setCardSelecionado}
        open={open}
        setOpen={setOpen}
        handleOpenMobile={handleOpenMobile}
        handleCloseMobile={handleCloseMobile}
        tagProjeto={tagProjeto}
        setTagProjeto={setTagProjeto}
        tagsSelecionadas={tagsSelecionadas}
        setTagsSelecionadas={setTagsSelecionadas}
        arrayTags={arrayTags}
        tagUnicas={tagUnicas}
      

      />
      
      }
    </>
   )
}