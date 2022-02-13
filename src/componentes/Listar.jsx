import React from "react";
import { Link} from "react-router-dom";
class Listar extends React.Component {
    constructor(props){
        super(props);
    this.state={};
}render() { 
        return (<table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nombre</th>
                    <th>correo</th>
                    <th>acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>patricio</td>
                    <td>codisac@gmail.com</td>
                    <td>
                    <div className="btn-group" role="group" aria-label="">
                        <link className="btn btn-warning" to={"/Editar"}>Editar</link>
                        <button type="button" className="btn btn-danger">Borrar</button>
                      </div>
                    </td>
                </tr>
                
            </tbody>
        </table>);
    }
}
 
export default Listar;