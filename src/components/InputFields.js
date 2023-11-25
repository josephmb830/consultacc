// src/components/InputFields.js
import React from 'react';
import ButtonGroup from './ButtonGroup';
import FiltersInputSection from './FiltersInputSection';
import FilterDropdown from './FilterDropdown';

const anioOptions = ['Todos los Años', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

const InputFields = () => {
  // Definir opciones y otros elementos si es necesario

  return (
    <div className="form-control">

      {/* Código de Predio */}
      <label>Codigo de Predio:</label>
      <input type="number" placeholder="Ingrese código"class="form-control" />

      <FilterDropdown label="Años de Deuda" options={anioOptions} defaultOption={anioOptions[0]} />

    </div>
  );
};

export default InputFields;