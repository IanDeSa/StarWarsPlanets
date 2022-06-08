import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import Table from './Table';

function Forms() {
  const { handlePlanetName } = useContext(planetsContext);

  return (
    <main>
      <h2>Forms</h2>
      <form>
        <label htmlFor="input-planet-name">
          <input
            data-testid="name-filter"
            type="text"
            id="input-planet-name"
            placeholder="Digite o nome do planeta"
            onChange={ handlePlanetName }
          />
        </label>
        <Table />
      </form>
    </main>
  );
}

export default Forms;
