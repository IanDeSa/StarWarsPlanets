import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';

const MAGIC_NUMBER = -1;

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [optionsColumn, setOptionsColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const response = await fetch(URL);
        const { results } = await response.json();
        results.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return MAGIC_NUMBER;
          }
          return 0;
        });
        // (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        // O lint não permite dois ternários na mesma linha
        setData(results);
        setFilteredData(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlanets();
  }, []);

  // O método para ordenar array de objetos em ordem alfabética
  // https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/

  useEffect(() => {
    const filteredPlanets = data.filter((planet) => (
      planet.name.toLowerCase().includes(filterByName.name)));
    const filteredByNumericFilters = filterByNumericValues
      .reduce((acc, filter) => acc.filter((planet) => {
        switch (filter.comparison) {
        case 'maior que':
          return Number(planet[filter.column]) > Number(filter.value);
        case 'menor que':
          return Number(planet[filter.column]) < Number(filter.value);
        case 'igual a':
          return Number(planet[filter.column]) === Number(filter.value);
        default:
          return true;
        }
      }), filteredPlanets);
    setFilteredData(filteredByNumericFilters);
  }, [filterByName, filterByNumericValues]);

  useEffect(() => {
    setColumn(optionsColumn[0]);
  }, [optionsColumn]);

  const handlePlanetName = ({ target }) => {
    setFilterByName({ name: target.value.toLowerCase() });
  };

  const handleClickNumericFilter = () => {
    const newFilterByNumericValues = {
      column,
      comparison,
      value,
    };
    const optionsAfterClick = optionsColumn.filter((option) => option !== column);
    setOptionsColumn(optionsAfterClick);
    setFilterByNumericValues([...filterByNumericValues, newFilterByNumericValues]);
  };

  const contextValue = {
    data,
    filteredData,
    handlePlanetName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    handleClickNumericFilter,
    optionsColumn,
  };

  return (
    <planetsContext.Provider value={ contextValue }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
