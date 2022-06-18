import React from 'react';
import Forms from './components/Forms';
import PlanetsProvider from './context/PlanetsProvider';
import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <main>
      <GlobalStyles />
      <PlanetsProvider>
        <Forms />
      </PlanetsProvider>
    </main>
  );
}

export default App;
