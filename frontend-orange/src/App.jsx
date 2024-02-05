import "./main.css"
import { Outlet } from "react-router-dom";
// import ThemeProvider from "@mui/material/";
// import { ThemeProvider } from "@mui/material/styles";
// import {theme} from './utils/Theme'
// import ContainerImagemTelaLogin from "./components/tela-login/ContainerImagemTelaLogin"
// import TextoTelaLogin from "./components/TextoTelaLogin"
// import FormularioLogin from "./components/tela-login/FormularioLogin"
// import BotaoEntrarComGoogle from "./components/tela-login/BotaoEntrarComGoogle"
// import LogoGoogle from "./components/tela-login/BotaoGoogleLogin"
// import BotaoGoogleLogin from "./components/tela-login/BotaoGoogleLogin"
// import TelaLogin from "./pages/TelaLogin"
import MainHeader from "./components/main-header/Header"
import TelaLogin from "./pages/TelaLogin"
// import MainHeader from "./components/main-header/Header"
// import CardPerfil from "./components/meu-portfolio/cardPerfil"
// import FormBuscarTags from "./components/meu-portfolio/FormBuscarTags"
// import ListaProjetos from './components/meu-portfolio/ListaProjetos';
// import MeuPortfolio from "./pages/MeuPortfolio";
// import Descobrir from "./pages/Descobrir";
// import ModalProjeto from './components/meu-portfolio/ModalProjeto';
// import DescobrirMobile from './pages/DescobrirMobile'
// import RegistrationPage from './pages/RegistrationPage.jsx'
// import AddProjectModal from "./components/modals/AddProjectModal";
// import ProjectDeletedModal from "./components/modals/ProjectDeletedModal";
// import DeleteModal from "./components/modals/DeleteModal";
// import CadastroFormulario from './components/tela-cadastro/CadastroFormulario';
import AdicionaProjeto from './components/modals/AdicionaProjeto'




function App() {

  return (
    <>    
      <Outlet />         
    </>

  )
}

export default App;