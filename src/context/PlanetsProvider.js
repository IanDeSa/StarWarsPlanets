import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const response = await fetch(URL);
        const { results } = await response.json();
        setData(results);
        setFilteredData(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filteredPlanets = data.filter((planet) => (
      planet.name.toLowerCase().includes(filterByName.name)));
    setFilteredData(filteredPlanets);
  }, [filterByName]);

  const handlePlanetName = ({ target }) => {
    setFilterByName({ name: target.value.toLowerCase() });
  };

  const contextValue = {
    data,
    filteredData,
    handlePlanetName,
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
