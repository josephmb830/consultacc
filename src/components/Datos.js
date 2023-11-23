// src/components/Datos.js
import React from 'react';

const Datos = () => {
  // Definir opciones y otros elementos si es necesario

  return (
    <div className="input-fields d-flex">
      {/* Primer grupo */}
      <div className="form-group d-flex align-items-center">
        <label className="input-fields__text">Nombre:</label>
        <input className="input-fields__input form-control" type="text" placeholder="Ingrese nombre" />
      </div>

      {/* Segundo grupo */}
      <div className="form-group d-flex align-items-center ml-4">
        <label className="input-fields__text">Dirección:</label>
        <input className="form-control" type="text" placeholder="Ingrese dirección" />
      </div>
    </div>
  );
};

export default Datos;