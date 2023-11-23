// src/App.js
import React from 'react';
import InputFields from './components/InputFields';
import Datos from './components/Datos';
import ButtonGroup from './components/ButtonGroup';
import CtaCteSection from './components/CtaCteSection';
import FilterSection from './components/FilterSection';
import FiltersInputSection from './components/FiltersInputSection';
import './App.css';

function App() {
  return (
    <>

    <div class="container text-center">
      <div class="row">
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-4">
              <label for="codigo" class="form-label">Código</label>
              <input id="codigo" class="form-control" type="text" placeholder="Ingrese Código"></input>
            </div>
            <div class="col-sm-8 card navy-card">
              <Datos />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <label for="codigo" class="form-label">Código</label>
              <input id="codigo" class="form-control" type="text" placeholder="Ingrese Código"></input>
            </div>
          </div>
        </div>
        <div class="col-sm-4 card medium-ocean-card">
          <div class="row">
            <div class="col-sm-12">
              <ButtonGroup />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <ButtonGroup />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 card dark-blue-card">
          <FiltersInputSection />
        </div>
        <div class="col-sm-6 card dark-blue-card">
          <FilterSection />
        </div>
      </div>
    </div>

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

        <div className="row"> 

          <div className="col-lg-6">

            <div className="card dark-blue-card">
              <FiltersInputSection />
            </div>

          </div>

          <div className="col-lg-6">

            <div className="card dark-blue-card">
              <FilterSection />
            </div>

          </div>


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