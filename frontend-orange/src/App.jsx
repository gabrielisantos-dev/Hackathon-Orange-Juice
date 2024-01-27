<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationPage from '../src/pages/registration-page';
import TelaLogin from '../src/pages/TelaLogin';
import MainHeader from '../src/components/main-header/Header';
import './main.css';
=======
import "./main.css"
// import ContainerImagemTelaLogin from "./components/tela-login/ContainerImagemTelaLogin"
// import TextoTelaLogin from "./components/TextoTelaLogin"
// import FormularioLogin from "./components/tela-login/FormularioLogin"
// import BotaoEntrarComGoogle from "./components/tela-login/BotaoEntrarComGoogle"
// import LogoGoogle from "./components/tela-login/BotaoGoogleLogin"
// import BotaoGoogleLogin from "./components/tela-login/BotaoGoogleLogin"
// import TelaLogin from "./pages/TelaLogin"
// import MainHeader from "./components/main-header/Header"
// import CardPerfil from "./components/meu-portfolio/cardPerfil"
// import FormBuscarTags from "./components/meu-portfolio/FormBuscarTags"
// import ListaProjetos from './components/meu-portfolio/ListaProjetos';
import MeuPortfolio from "./pages/MeuPortfolio";


>>>>>>> meu-portfolio

function App() {

  return (
<<<<<<< HEAD
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/" exact={true} component={TelaLogin} />
        <Route path="/registration" component={RegistrationPage} />
      </Switch>
    </Router>
=======
    <>
      {/* <ImagemTelaLogin/> */}
      {/* <TextoTelaLogin variant='h3'/> */}
      {/* <FormularioLogin /> */}
      {/* <BotaoEntrarComGoogle/> */}
      {/* <BotaoGoogleLogin/> */}
      {/* <TelaLogin/> */}
      {/* <MainHeader/> */}
      {/* <ContainerImagemTelaLogin/> */}
      {/* <CardPerfil/> */}
      {/* <FormBuscarTags/> */}
      {/* <ListaProjetos/> */}
      <MeuPortfolio/>

    </>
>>>>>>> meu-portfolio
  )
}

export default App;
