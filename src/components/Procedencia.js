// src/components/InputFields.js
import React from 'react';
import FilterDropdown from './FilterDropdown';

const Procedencia = () => {
  // Definir opciones y otros elementos si es necesario
  const procedenciaOptions = [
    'Todas las Procedencias',
    'SUB GERENCIA ADMINISTRACION TRIBUTARIA',
    'SUB GERENCIA DE FISCALIZACION',
    'SUB GERENCIA DE EJECUTORIA COACTIVA',
  ];

  const tipoOptions = ['Detallado', 'Agrupado Trimestralmente'];

  return (
    <div className="">
      <div className='d-flex'>
        <label className="label col-sm-4">Procedencia:</label>
        <div className='custom-filter-dropdown'>
          <FilterDropdown className="object-filter-dropdown" options={procedenciaOptions} defaultOption={procedenciaOptions[0]} />
        </div>
      </div>
      <div className='d-flex'>
        <label className="label col-sm-4">Tipo:</label>
        <div className='custom-filter-dropdown'>
          <FilterDropdown options={tipoOptions} defaultOption={tipoOptions[1]} />
        </div>
      </div>

    </div>
  );
};

export default Procedencia;
