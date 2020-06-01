import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tareas } from './tareas.jason';

function App() extends Component {
  constructor(){
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
            <div className="card-header">
              <h3>{tareas.titulo}</h3>
            </div>
            <div className="card-body">
              <p>{tareas.descripcion}</p>
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
          </a>
        </nav>

        <div className="conteiner">
          <div className="row mt-4">
          { tareas }
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
