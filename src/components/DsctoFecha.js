// src/components/DsctoFecha.js
import React from 'react';
import { Form } from 'react-bootstrap';

const DsctoFecha = () => {

  return (
    <div className="">
      <Form.Group>
        <Form.Check className="label" type="checkbox" label="Aplicar dscto. varios" defaultChecked />
      </Form.Group>
      {/* Fecha de Proyección */}
      <label className='label'>Fecha de Proyeccion:</label>
      <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
    </div>
  );
};

export default DsctoFecha;