import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

// Função auxiliar para fazer as requisições GET
const get = (endpoint) => {
  return axios.get(`${API_BASE_URL}/${endpoint}`);
};

// Função auxiliar para fazer as requisições POST
const post = (endpoint, data) => {
  return axios.post(`${API_BASE_URL}/${endpoint}`, data);
};

// Função auxiliar para fazer as requisições PUT
const put = (endpoint, data) => {
  return axios.put(`${API_BASE_URL}/${endpoint}`, data);
};

// Função auxiliar para fazer as requisições DELETE
const remove = (endpoint) => {
  return axios.delete(`${API_BASE_URL}/${endpoint}`);
};

// Função para buscar todos os setores
export const fetchSetores = () => {
  return get('setores');
};

// Função para buscar um setor pelo ID
export const fetchSetorById = (setId) => {
  return get(`setores/${setId}`);
};

// Função para salvar um setor
export const saveSetor = (setor) => {
  return post('setores', setor);
};

// Função para atualizar um setor
export const updateSetor = (setor) => {
  return put(`setores/${setor.id}`, setor);
};

// Função para excluir um setor
export const deleteSetor = (setId) => {
  return remove(`setores/${setId}`);
};
