// src/components/ButtonGroup.js
import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="form-control row">
      <div className='espaciado'> 
      </div>
      <div class="col-sm-12"> 
        <input class="btn btn-secondary buttonc" type="submit"  value ="Consultar" />
      </div>
      <div className='espaciadom'> 
      </div>
      <div class="col-sm-12"> 
       <button type="button" class="btn btn-secondary buttoni">Imprimir</button>
      </div>
      <div className='espaciado'> 
      </div>
    </div>
  );
};

export default ButtonGroup;