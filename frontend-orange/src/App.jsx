import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationPage from '../src/pages/registration-page';
import TelaLogin from '../src/pages/TelaLogin';
import MainHeader from '../src/components/main-header/Header';
import './main.css';

function App() {

  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/" exact={true} component={TelaLogin} />
        <Route path="/registration" component={RegistrationPage} />
      </Switch>
    </Router>
  )
}

export default App;
