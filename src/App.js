// src/App.js
import React from 'react';
import InputFields from './components/InputFields';
import ButtonGroup from './components/ButtonGroup';
import CtaCteSection from './components/CtaCteSection';
import FilterSection from './components/FilterSection';
import FiltersInputSection from './components/FiltersInputSection';
import './App.css';

function App() {
  return (
    <>
      
      <div className="container">

        <div className="row">

          <div className="col-lg-6">

            {/* Sección de InputFields, ButtonGroup y FiltersInputSection en la misma card */}
            <div className="card-container">
              <div className="card navy-card-group">
                <div className="card navy-card d-flex navy-card-group-inner">
                  <div className="flex-grow-1">
                      <InputFields />
                    </div>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">

            {/* Sección de botones azul marino */}
            <div className="card-container">
              <div className="card medium-ocean-card">
                <ButtonGroup />
              </div>
            </div>

          </div>


        </div>


      </div>
  

      {/* Sección de Filtros en card azul claro */}
      <div className="card-container">
        <div className="card dark-blue-card">
          <FiltersInputSection />
          <FilterSection />
        </div>
      </div>

      {/* Sección de CtaCte en card azul oscuro */}
      <div className="card-container">
        <div className="card light-blue-card">
          <CtaCteSection />
        </div>
      </div>

    </>
  );
}

export default App;