// src/App.js
import React from 'react';
import Datos from './components/Datos';
import Codigo from './components/Codigo';
import ButtonGroup from './components/ButtonGroup';
import Procedencia from './components/Procedencia';
import CtaCteSection from './components/CtaCteSection';
import FilterSection from './components/FilterSection';
import FiltersInputSection from './components/FiltersInputSection';
import './App.css';

function App() {
  return (
    <>
    <form>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <Codigo />
          </div>
          <div class="col-sm-5">
            <Datos />
          </div>
          <div class="col-sm-3">
            <ButtonGroup />
          </div>
        </div>
        <div class="row" className="form-control d-flex">
          <div class="col-sm-4">
            <Procedencia />
          </div>
          <div class="col-sm-4">
            <FiltersInputSection />
          </div>
          <div class="col-sm-4">
            <FilterSection />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <CtaCteSection />
          </div>
        </div>
      </div>
    </form>
    </>
  );
}

export default App;