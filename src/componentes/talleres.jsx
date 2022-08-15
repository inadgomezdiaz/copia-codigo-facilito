import React from "react";
import '../hojas-de-estilo/talleres.css';


class Taller extends React.Component {
  render() {
    return (
      <div className="contenedor-taller">
        <h2 className="fecha-taller">{this.props.fecha}</h2>
        <h2 class="nombre-taller">{this.props.nombre}</h2>
        <div className="contenedor-encargado">
          <img
            className="img-taller"
            src={require(`../imagenes/taller-${this.props.imagen}.jpg`)}
            alt={`foto de ${this.props.nombre}`} />
          <div className="contenedor-texto-encargado">
            <p className="nombre-encarcago">{this.props.encargado}</p>
            <p className="descripcion-encargado">{this.props.descripcion}</p>
          </div>
        </div>
        <button className="boton-de-añadir">Añadir al calendario</button>
      </div>
    );
  }
};


export default Taller;