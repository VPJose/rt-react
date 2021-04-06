import {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './Sytle.scss';
import logo from './restaurant.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => {
          return (
            <div className="fondo">
              <Link to="/prueba">
                Prueba
              </Link>
              <h1>Restaurant with React</h1>
              <img src={logo} alt="" srcset=""/>
            </div>
          )
        }}/>
        <Route exact path="/prueba" render={() => {
          return (
            <div className="fondo">
              <Link to="/">
                Home
              </Link>
              <h1>Pagina de Prueba</h1>
            </div>
          )
        }}/>
      </Router>
    )
  }
}

export default App;
