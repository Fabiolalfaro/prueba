import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { tareas } from './tareas.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas
    }
  }

  render(){
    const tareas = this.state.tareas.map((tarea, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{tareas.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                  {tareas.responsable}
              </span>
            </div>
            <div className="card-body">
              {tareas.descripcion}
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.tareas.length}
            </span>
          </a>
        </nav>

        <div className="conteiner">
          <div className="row mt-8">
          {tareas}
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
