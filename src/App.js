// src/App.js
import React from 'react';
import Logo from './components/Logo';
import Titulo from './components/Titulo';
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
        <div class="row" className='d-flex'>
          <div class="col-sm-1">
            <Logo />
          </div>
          <div class="col-sm-11">
            <Titulo />
          </div>
        </div>
        <div class="row" className='principal d-flex'>
          <div class="mright col-sm-4">
            <Codigo />
          </div>
          <div class="mright col-sm-5">
            <Datos />
          </div>
          <div class="col-sm-3">
            <ButtonGroup />
          </div>
        </div>
        <div class="row" className="principal form-control">
          <h5 className='subtitulo'>Filtros Principales</h5>
          <div className='d-flex'>
            <div class="col-sm-4">
              <FiltersInputSection />
            </div>
            <div class="col-sm-4">
              <Procedencia />
            </div>
            <div class="col-sm-4">
              <FilterSection />
            </div>
          </div>
          <div className='espaciadom'> 
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