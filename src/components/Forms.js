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
    filterByNumericValues,
    deleteFilterNumeric,
    removeAllFilters,
    initalOptions,
    columnOrder,
    setColumnOrder,
    setRadioOrder,
    handleClickSort,
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
        <label htmlFor="dropdown-column-sort">
          Ordenar
          <select
            data-testid="column-sort"
            id="dropdown-column-sort"
            value={ columnOrder }
            onChange={ ({ target }) => setColumnOrder(target.value) }
          >
            {
              initalOptions.map((option) => (
                <option key={ option }>{option}</option>
              ))
            }
          </select>
          <label htmlFor="input-radio-asc">
            <input
              data-testid="column-sort-input-asc"
              id="input-radio-asc"
              type="radio"
              name="radio-sort"
              value="ASC"
              onChange={ ({ target }) => setRadioOrder(target.value) }
            />
            Ascendente

          </label>
          <label htmlFor="input-radio-desc">
            <input
              data-testid="column-sort-input-desc"
              id="input-radio-desc"
              type="radio"
              name="radio-sort"
              value="DESC"
              onChange={ ({ target }) => setRadioOrder(target.value) }
            />
            Descendente

          </label>
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleClickSort }
        >
          Ordenar
        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeAllFilters }
        >
          Remover Filtros
        </button>
        <section>
          {
            filterByNumericValues.map((filter) => (
              <div data-testid="filter" key={ `${filter.column}-${filter.value}` }>
                <span>
                  {`${filter.column} ${filter.comparison} ${filter.value}`}
                </span>
                <button
                  type="button"
                  name={ filter.column }
                  onClick={ ({ target }) => deleteFilterNumeric(target.name) }
                >
                  ❌
                </button>
              </div>

            ))
          }
        </section>
        <Table />
      </form>
    </main>
  );
}

export default Forms;
