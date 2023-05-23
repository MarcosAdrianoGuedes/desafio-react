import axios from 'axios';

export const SET_SETORES = 'SET_SETORES';
export const ADD_SETOR = 'ADD_SETOR';
export const ADD_CARGO = 'ADD_CARGO';

export function setSetores(setores) {
  return {
    type: SET_SETORES,
    payload: setores,
  };
}

export function addSetor(setor) {
  return (dispatch) => {
    axios
      .post('http://localhost:3001/setores', setor)
      .then((response) => {
        dispatch({
          type: ADD_SETOR,
          payload: response.data,
        });
        alert('Setor adicionado com sucesso!');
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function addCargo(cargo) {
  return (dispatch) => {
    axios
      .post('http://localhost:3001/cargos', cargo)
      .then((response) => {
        dispatch({
          type: ADD_CARGO,
          payload: response.data,
        });
        alert('Cargo adicionado com sucesso!');
      })
      .catch((error) => {
        console.log(error);
      });
  };
}