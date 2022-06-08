import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Table() {
  const results = useContext(planetsContext);
  console.log(results);

  return (
    <planetsContext.Consumer>
      {
        () => (
          <section>
            <table>
              <tr>
                <th>Name</th>
                <th>Rotation Period</th>
                <th>Orbital Period</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Gravity</th>
                <th>Terrain</th>
                <th>Surface Water</th>
                <th>Population</th>
                <th>Films</th>
              </tr>
            </table>
          </section>
        )
      }
    </planetsContext.Consumer>
  );
}

export default Table;
