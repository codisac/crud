import "./App.css";
import Listar from "./componentes/Listar.jsx";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import {Link} from "react-router-dom";

function App() {
  return (
    <Router>
      
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div class="nav navbar-nav">
          <link class="nav-item nav-link active" to={"/"}>sistema <span class="sr-only"> (current) </span></link>
          <link class="nav-item nav-link" to={"/Crear"}>crear empleado </link>
          <link class="nav-item nav-link" to={"/Editar"}>Editar empleado</link>
        </div>
      </nav>
      <div className="container">
        <Route exact path="/" component={Listar}></Route>
        <Route path="/crear" component={Crear}></Route>
        <Route path="/Editar" component={Editar}></Route>
      </div>
    </Router>
  );
}
export default App;
