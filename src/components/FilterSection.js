// src/components/FilterSection.js
import React from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import FilterDropdown from './FilterDropdown';

const FilterSection = () => {
  const procedenciaOptions = [
    'Todas las Procedencias',
    'SUB GERENCIA ADMINISTRACION TRIBUTARIA',
    'SUB GERENCIA DE FISCALIZACION',
    'SUB GERENCIA DE EJECUTORIA COACTIVA',
  ];

  const tipoOptions = ['Detallado', 'Agrupado Trimestralmente'];

  const materiaOptions = [
    'IMPUESTO PREDIAL',
    '[16333] JR. JOSE GALVEZ (EX JOSE VALENCIA) NUM. 0220 * (Arbitrios)',
    '[11750] AV. JAVIER PRADO OESTE NUM. 2485 INT. 0801 * (Arbitrios)',
    '[33538] JR. MARISCAL CASTILLA NUM. 1121 INT. P 74 * (Arbitrios)',
    'GASTOS Y COSTAS PROCESALES',
  ];

  const anioOptions = ['Todos los Años', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

  const situacionOptions = ['Todas las Opciones', 'Pendiente', 'Pagado', 'Fraccionado', 'Coactivo', 'Descargado'];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center p-4">
            <h2 className="mb-4">Criterios de Filtracion</h2>
            <Form>
              <Row>
                <Col md={6}>
                  <FilterDropdown label="Procedencia" options={procedenciaOptions} defaultOption={procedenciaOptions[0]} />
                  <FilterDropdown label="Tipo" options={tipoOptions} defaultOption={tipoOptions[1]} />
                  <Form.Group>
                    <Form.Check type="checkbox" label="Aplicar dscto. varios" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <FilterDropdown label="Denominacion de la Materia" options={materiaOptions} defaultOption={materiaOptions[0]} />
                  <FilterDropdown label="Años de Deuda" options={anioOptions} defaultOption={anioOptions[0]} />
                  <FilterDropdown label="Situacion de Deuda" options={situacionOptions} defaultOption={situacionOptions[0]} />
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterSection;