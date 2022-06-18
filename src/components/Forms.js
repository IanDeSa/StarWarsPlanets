import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import {
  DivForms, DivInputNameLabel, Form, LabelSelect, Button, DivOrder, DivFilters,
} from '../style/FormsStyles';
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
    <DivForms>
      <DivInputNameLabel>
        <h2>Projeto Star Wars - Trybe</h2>
        <label htmlFor="input-planet-name">
          Planet Name
          <input
            data-testid="name-filter"
            type="text"
            id="input-planet-name"
            onChange={ handlePlanetName }
          />
        </label>
      </DivInputNameLabel>
      <Form>
        <LabelSelect htmlFor="select-column">
          Coluna
          <select
            data-testid="column-filter"
            id="select-column"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {
              optionsColumn.map((option) => (
                <option key={ option }>{option}</option>
              ))
            }
          </select>
        </LabelSelect>
        <LabelSelect htmlFor="select-operator">
          Operador
          <select
            data-testid="comparison-filter"
            id="select-operator"
            value={ comparison }
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </LabelSelect>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ ({ target }) => setValue(target.value) }
          value={ value }
        />
        <Button
          data-testid="button-filter"
          type="button"
          onClick={ handleClickNumericFilter }
        >
          Filtrar
        </Button>
        <LabelSelect>
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
        </LabelSelect>
        <DivOrder>
          <label htmlFor="input-radio-asc">
            <input
              data-testid="column-sort-input-asc"
              id="input-radio-asc"
              type="radio"
              name="radio-sort"
              value="ASC"
              checked
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
        </DivOrder>
        <Button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleClickSort }
        >
          Ordenar
        </Button>
        {
          filterByNumericValues.length > 0 && (
            <Button
              type="button"
              data-testid="button-remove-filters"
              onClick={ removeAllFilters }
            >
              Remover Filtros
            </Button>
          )
        }
      </Form>
      <DivFilters>
        <p>Filtros</p>
        {filterByNumericValues.map((filter) => (
          <div
            data-testid="filter"
            key={ `${filter.column}-${filter.value}` }
          >
            <label htmlFor="remove-filter">
              <span>
                {`${filter.column} ${filter.comparison} ${filter.value}`}
              </span>
              <button
                type="button"
                id="remove-filter"
                name={ filter.column }
                onClick={ ({ target }) => deleteFilterNumeric(target.name) }
              >
                ❌
              </button>
            </label>
          </div>
        ))}
      </DivFilters>
      <Table />
    </DivForms>
  );
}

export default Forms;
