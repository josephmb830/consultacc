// src/components/FiltersInputSection.js
import React from 'react';
import { Form } from 'react-bootstrap';
import FilterDropdown from './FilterDropdown';

const FiltersInputSection = () => {
  const procedenciaOptions = [
    'Todas las Procedencias',
    'SUB GERENCIA ADMINISTRACION TRIBUTARIA',
    'SUB GERENCIA DE FISCALIZACION',
    'SUB GERENCIA DE EJECUTORIA COACTIVA',
  ];

  const tipoOptions = ['Detallado', 'Agrupado Trimestralmente'];

  return (
    <div className="filter-group">
      <FilterDropdown label="Procedencia" options={procedenciaOptions} defaultOption={procedenciaOptions[0]} />
      <FilterDropdown label="Tipo" options={tipoOptions} defaultOption={tipoOptions[1]} />
      <Form.Group>
        <Form.Check type="checkbox" label="Aplicar dscto. varios" defaultChecked />
      </Form.Group>
    </div>
  );
};

export default FiltersInputSection;