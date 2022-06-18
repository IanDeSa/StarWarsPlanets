import styled from 'styled-components';

export const DivForms = styled.div`
  h2 {
    color: white;
  }
  button{
    color: #FFFF00;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 1003px;
`;

export const DivInputNameLabel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  label {
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    transition: all 0.5s;
    input {
      background-color: transparent;
      border: 1px solid white;
      border-radius: 3px;
      color: white;
      font-size: 20px;
      height: 40px;
      margin: 5px 0;
      outline: none;
      padding-left: 10px;
      margin-bottom: 50px;
    }
    :hover {
      color: #FFFF00;
      input {
        border-color: #FFFF00;
      }
    }
  }
`;

export const Form = styled.form`
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
  input[type="number"] {
    height: 25px;
  }
  button {
    height: 60px;
  }
  input[type="number"] {
    background-color: transparent;
    border: 1px solid #FFFFFF;
    border-radius: 3px;
    color: white;
    height: 30px;
    padding-left: 12px;
    width: 90px;
    :hover {
      border-color: #FFFF00;
    }
  }
`;

export const LabelSelect = styled.label`
  background-color: transparent;
  color: rgb(200, 200, 200);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  height: 18px;
  text-align: left;
  width: 90px;
  select {
    background-color: transparent;
    color: white;
    cursor: pointer;
    border: none;
    border-bottom: solid 1px #f1f1f1;
    width: 110px;
    :active {
      background-color: #1c1c1c;
      color: white;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  border: solid 1px #f1f1f1;
  border-radius: 3px;
  cursor: pointer;
  font-family: helvetica;
  font-weight: bold;
  height: 80px;
  padding: 10px;
  width: 90px;
  :hover {
    border-color: #FFFF00;
    transition: all 0.5s;
  }
`;

export const DivOrder = styled.div`
  label {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    cursor: pointer;
    input {
      cursor: pointer;
    }
  }
`;

export const DivFilters = styled.div`
  p {
    background-color: rgb(18, 18, 18);
    color: white;
    font-size: 16px;
    padding: 10px;
  }
  div {
    padding: 10px;
  }
  span {
    color: white;
    cursor: pointer;
    padding-right: 20px;
    :hover {
      color: #FFFF00;
      transition: all 0.5s;
    }
  }
  button {
    background-color: #1c1c1c;
    border: none;
    cursor: pointer;
  }
`;

export default DivForms;
