import styled from 'styled-components';

const Table = styled.section`
  table {
    color: white;
    border-spacing: 0;
    font-size: 10px;
    th { 
      background-color: rgb(18, 18, 18);
      heigth: 200px;
      
    }
    tr:nth-child(even) {
      background-color: #141414;
    }
  }
`;

export default Table;
