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
      <InputFields />
      <ButtonGroup />
      <CtaCteSection />
      <FilterSection />
    </div>
  );
}

export default App;