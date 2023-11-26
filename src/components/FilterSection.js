// src/components/FilterSection.js
import React from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import FilterDropdown from './FilterDropdown';

const FilterSection = () => {

  const materiaOptions = [
    'IMPUESTO PREDIAL',
    '[16333] JR. JOSE GALVEZ (EX JOSE VALENCIA) NUM. 0220 * (Arbitrios)',
    '[11750] AV. JAVIER PRADO OESTE NUM. 2485 INT. 0801 * (Arbitrios)',
    '[33538] JR. MARISCAL CASTILLA NUM. 1121 INT. P 74 * (Arbitrios)',
    'GASTOS Y COSTAS PROCESALES',
  ];

  const situacionOptions = ['Todas las Opciones', 'Pendiente', 'Pagado', 'Fraccionado', 'Coactivo', 'Descargado'];

  return (
    <Container>
      <div className="">
        <FilterDropdown label="Denominacion de la Materia" options={materiaOptions} defaultOption={materiaOptions[0]} />
        <FilterDropdown label="Situacion de Deuda" options={situacionOptions} defaultOption={situacionOptions[0]} />
      </div>
    </Container>
  );
};

export default FilterSection;