import React from 'react';
import './App.css';
import Forms from './components/Forms';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Forms />
    </PlanetsProvider>
  );
}

export default App;
