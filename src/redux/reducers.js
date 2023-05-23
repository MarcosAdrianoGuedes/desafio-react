import { combineReducers } from 'redux';
import { SET_SETORES, ADD_SETOR, ADD_CARGO } from './actions';

const setoresReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SETORES:
      return action.payload;
    case ADD_SETOR:
      return [...state, action.payload];
    default:
      return state;
  }
};

const cargosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CARGO:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setores: setoresReducer,
  cargos: cargosReducer,
});

export default rootReducer;
