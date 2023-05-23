import React, { useState } from 'react';
import CargoForm from './CargoForm';
import './SetorForm.css';

const SetorForm = () => {
  const [nomeSetor, setNomeSetor] = useState('');
  const [cargos, setCargos] = useState([]);
  const [setores, setSetores] = useState([]);
  const [setorEditado, setSetorEditado] = useState(null);
  const [nomeSetorEditado, setNomeSetorEditado] = useState('');

  const handleAddCargo = (nomeCargo) => {
    if (!nomeCargo || nomeCargo.trim() === '') {
      console.log('O nome do cargo não pode estar vazio.');
      return;
    }

    const novoCargo = {
      id: Date.now(),
      nome: nomeCargo,
    };

    setCargos([...cargos, novoCargo]);
  };

  const handleRemoveCargo = (cargoId) => {
    const novoCargos = cargos.filter((cargo) => cargo.id !== cargoId);
    setCargos(novoCargos);
  };

  const handleAddSetor = () => {
    if (nomeSetor.trim() === '') {
      console.log('O nome do setor não pode estar vazio.');
      return;
    }

    const novoSetor = {
      id: Date.now(),
      nome: nomeSetor,
      cargos: [...cargos],
    };

    console.log('Setor a ser salvo:', novoSetor);

    setSetores([...setores, novoSetor]);
    setNomeSetor('');
    setCargos([]);
  };

  const handleEditSetor = (setor) => {
    setSetorEditado(setor);
    setNomeSetorEditado(setor.nome);
    setCargos([...setor.cargos]);
  };

  const handleUpdateSetor = () => {
    if (!setorEditado) {
      return;
    }

    const setorAtualizado = {
      ...setorEditado,
      nome: nomeSetorEditado,
      cargos: [...cargos],
    };

    const setoresAtualizados = setores.map((setor) => {
      if (setor.id === setorAtualizado.id) {
        return setorAtualizado;
      }
      return setor;
    });

    setSetores(setoresAtualizados);
    setSetorEditado(null);
    setNomeSetor('');
    setNomeSetorEditado('');
    setCargos([]);
  };

  const handleDeleteSetor = (setId) => {
    const setoresAtualizados = setores.filter((setor) => setor.id !== setId);
    setSetores(setoresAtualizados);
  };

  return (
    <div className="container">
      <h2>CRIAR SETOR</h2>
      <div className="retangulo-esquerdo"></div> {/* Adicionando a classe CSS */}
      <div className="retangulo-direito">
        <div className="input-container">
          <input
            type="text"
            value={nomeSetor}
            onChange={(e) => setNomeSetor(e.target.value)}
            placeholder="Nome do setor"
          />
          {setorEditado && (
            <>
              <input
                type="text"
                value={nomeSetorEditado}
                onChange={(e) => setNomeSetorEditado(e.target.value)}
                placeholder="Novo nome do setor"
              />
              <button onClick={handleUpdateSetor}>Salvar Edição</button>
            </>
          )}
          {!setorEditado && (
            <button onClick={handleAddSetor}>Salvar Setor</button>
          )}
        </div>

        <div className="cargos-container">
          <h3>CARGOS</h3>
          <ul>
            {cargos.map((cargo) => (
              <li key={cargo.id}>
                {cargo.nome}
                <button onClick={() => handleRemoveCargo(cargo.id)}>Remover</button>
              </li>
            ))}
          </ul>
          {setorEditado && (
            <div className="buttons-container">
              <button onClick={() => handleEditSetor(setorEditado)}>Editar Setor</button>
              <button onClick={() => handleDeleteSetor(setorEditado.id)}>Excluir Setor</button>
            </div>
          )}

          <CargoForm handleAddCargo={handleAddCargo} />
        </div>
      </div>

      <h3>SETORES:</h3>
      <ul>
        {setores.map((setor) => (
          <li key={setor.id}>
            <strong>Nome do Setor: {setor.nome}</strong>
            <ul>
              {setor.cargos.map((cargo) => (
                <li key={cargo.id}>{cargo.nome}</li>
              ))}
            </ul>
            <div className="buttons-container">
              <button onClick={() => handleEditSetor(setor)}>Editar Setor</button>
              <button onClick={() => handleDeleteSetor(setor.id)}>Excluir Setor</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetorForm;
