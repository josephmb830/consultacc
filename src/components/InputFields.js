// src/components/InputFields.js
import React from 'react';

const InputFields = () => {
  return (
    <div className="input-fields">
      {/* Código de Contribuyente */}
      <label>Codigo de Contribuyente:</label>
      <input type="number" placeholder="Ingrese código" />

      {/* Código de Predio */}
      <label>Codigo de Predio:</label>
      <input type="number" placeholder="Ingrese código" />

      {/* Fecha de Proyección */}
      <label>Fecha de Proyeccion:</label>
      <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
    </div>
  );
};

export default InputFields;