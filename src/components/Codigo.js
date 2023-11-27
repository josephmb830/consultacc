// src/components/Codigo.js
import React from 'react';
import FilterDropdown from './FilterDropdown';

const anioOptions = ['Todos los Años', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

const Codigo = () => {
  // Definir opciones y otros elementos si es necesario

  return (
    <div className='form-control'> 
      
      <h5 className='subtitulo'>Filtros Principales</h5>
      
      {/* Código Contribuyente */}
      <div className="d-flex">
        <label for="codigo" className="label flex-1 col-sm-6">Código Contribuyente:</label>
        <input id="codigo" className="form-control flex-1" type="text" placeholder="Ingrese Código" />
      </div>

      {/* Código de Predio */}
      <div className="d-flex">
        <label className="label col-sm-5">Codigo de Predio:</label>
        <input type="number" placeholder="Ingrese código" className="form-control" />
      </div>

      <div className='d-flex'>
        <label className="label col-sm-5">Años de Deuda:</label>
        <div className="custom-filter-dropdown">
          <FilterDropdown options={anioOptions} defaultOption={anioOptions[0]} />
        </div>
      </div>
      <div className='espaciadop'> 
      </div>
    </div>
  );
};

export default Codigo;