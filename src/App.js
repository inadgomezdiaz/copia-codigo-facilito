import React from 'react';
import './App.css';
import Taller from './componentes/talleres.jsx';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="contenedor-titulo">
          <h1 className="titulo">Conoce los próximos Talleres</h1>
        </div>
        <div className="contenedor-aviso">
          <p className="aviso">Todos los talleres inician a las 20:00 hora de America/Argentina/Buenos_Aires </p>
        </div>
        <div className="contenedor-taller">
          <Taller
            nombre="Mi primer reporte de datos"
            fecha="14 de julio"
            imagen="jose"
            encargado="jose Antoño"
            descripcion="Research and development engineer"
          />
          <Taller
            nombre="Crea tu propio paquete con Python"
            fecha="18 de julio"
            imagen="maria"
            encargado="Maria antoñeta"
            descripcion="Full Stack Dev"
          />
          <Taller
            nombre="Inyección de dependencias con React "
            fecha="16 de julio"
            imagen="oscar"
            encargado="Oscar Melzar"
            descripcion="Full Stack Developer at Código Facilito."
          />
        </div>
  
      </div>
    );
  }
}


export default App;
