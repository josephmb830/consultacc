// src/components/ButtonGroup.js
import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="form-control row">
      <div class="col-sm-12 button"> 
        <input class="btn btn-secondary consulta-button" type="submit"  value ="Consultar" />
      </div>
      <div class="col-sm-12 button"> 
       <button type="button" class="btn btn-secondary">Imprimir</button>
      </div>
    </div>
  );
};

export default ButtonGroup;