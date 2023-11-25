// src/components/Datos.js
import React from 'react';

const Datos = () => {
  // Definir opciones y otros elementos si es necesario

  return (
    <div className="form-control">
      {/* Primer grupo */}
      <div className=" col-lg-12">
        <label className="col-lg-12" >Nombre : </label><span>___________________ _______________ ___________________________________________</span>
      </div>

      {/* Segundo grupo */}
      <div className=" col-sx-12">
        <label className="">Direccion : <span>___________________ _______________ ___________________________________________</span></label>
      </div>
    </div>
  );
};

export default Datos;