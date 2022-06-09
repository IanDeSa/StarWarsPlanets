import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import Table from './Table';

function Forms() {
  const {
    handlePlanetName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    handleClickNumericFilter,
    optionsColumn,
  } = useContext(planetsContext);

  return (
    <main>
      <h2>Forms</h2>
      <form>
        <label htmlFor="input-planet-name">
          <input
            data-testid="name-filter"
            type="text"
            id="input-planet-name"
            placeholder="Planet Name"
            onChange={ handlePlanetName }
          />
        </label>
        <label htmlFor="select-column-filter">
          Column
          <select
            data-testid="column-filter"
            id="select-column-filter"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {
              optionsColumn.map((option) => (
                <option key={ option }>{option}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="select-comparison-filter">
          Operator
          <select
            data-testid="comparison-filter"
            id="select-comparison-filter"
            value={ comparison }
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="input-value-filter">
          <input
            data-testid="value-filter"
            id="input-value-filter"
            type="number"
            onChange={ ({ target }) => setValue(target.value) }
            value={ value }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClickNumericFilter }
        >
          Filtrar
        </button>
        <Table />
      </form>
    </main>
  );
}

export default Forms;
