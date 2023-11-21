// src/App.js
import React from 'react';
import InputFields from './components/InputFields';
import ButtonGroup from './components/ButtonGroup';
import CtaCteSection from './components/CtaCteSection';
import FilterSection from './components/FilterSection';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Sección de InputFields y ButtonGroup en la misma card */}
      <div className="card-container">
        <div className="card navy-card d-flex">
          <div className="flex-grow-1">
            <InputFields />
          </div>
          <div className="flex-grow-1">
            <ButtonGroup />
          </div>
        </div>
      </div>

      {/* Sección de CtaCte en card azul oscuro */}
      <div className="card-container">
        <div className="card dark-blue-card">
          <CtaCteSection />
        </div>
      </div>

      {/* Sección de Filtros en card azul claro */}
      <div className="card-container">
        <div className="card light-blue-card">
          <FilterSection />
        </div>
      </div>
    </div>
  );
}

export default App;