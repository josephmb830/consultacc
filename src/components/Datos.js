// src/components/Datos.js
import React from 'react';

const Datos = () => {
  // Definir opciones y otros elementos si es necesario

  return (
    <div className="form-control">

      <h5 className='subtitulo'>Datos</h5>

      <div className='espaciadom'> 
      </div>

      {/* Primer grupo */}
      <div className=" col-lg-12 d-flex">
        <div>
          <label className="label col-lg-12 " >Nombre :</label>
        </div>
        <div>
          <span className=''>______________{persona.nombre}____________</span>
        </div>
      </div>

      <div className='espaciadom'> 
      </div>

      {/* Segundo grupo */}
      <div className=" col-sx-12 d-flex">
        <label className="label">Direccion : </label>
        <span>_____________{persona.direccion}___________</span>
      </div>

      <div className='espaciadox'> 
      </div>

    </div>
  );
};

export default Datos;

function cambiarNombre (objeto) {
  objeto.nombre = 'Nuevo nombre'
}

let persona = { nombre: 'Nombre del Contribuyente', direccion: 'Dirección del Contribuyente'}

//cambiarNombre(persona)

console.log(persona) 