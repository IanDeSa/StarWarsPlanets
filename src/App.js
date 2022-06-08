import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h2>Star Wars Project</h2>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
