import 'bootstrap/dist/css/bootstrap.min.css';
import Abastecimento from './componentes/Abastecimento/index'
import Historico from './componentes/Historico';
import { Switch, Route,BrowserRouter as Router,Link
} from 'react-router-dom'

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to={"/historico"} class="navbar-brand">
              Histórico
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/abastecimento'}>Novo Abastecimento  </Link >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <Switch>
        <Route exact path={["/", "/abastecimento"]} component={Abastecimento} />
        <Route path={"/historico"} component={Historico} />
      </Switch>
    </div>
  );
}

export default App;
