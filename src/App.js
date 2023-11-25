// src/App.js
import React from 'react';
import InputFields from './components/InputFields';
import Datos from './components/Datos';
import Codigo from './components/Codigo';
import ButtonGroup from './components/ButtonGroup';
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
          <div class="col-sm-8">
            <div class="row">
              <div class="col-sm-2">
                <Codigo />
              </div>
              <div class="col-sm-10">
                <Datos />
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <ButtonGroup />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
          <InputFields />
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