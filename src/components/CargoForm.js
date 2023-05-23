import React, { useState } from 'react';

const CargoForm = ({ handleAddCargo }) => {
  const [nomeCargo, setNomeCargo] = useState('');
  const [cargoErrorMessage, setCargoErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nomeCargo || nomeCargo.trim() === '') {
      setCargoErrorMessage('O nome do cargo não pode estar vazio.');
      return;
    }

    handleAddCargo(nomeCargo);
    setNomeCargo('');
    setCargoErrorMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nomeCargo}
        onChange={(e) => setNomeCargo(e.target.value)}
        placeholder="Nome do cargo"
      />
      <button type="submit">Adicionar Cargo</button>
      {cargoErrorMessage && <p>{cargoErrorMessage}</p>}
    </form>
  );
};

export default CargoForm;
