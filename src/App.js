import React, { useState } from 'react';
import SetorForm from './components/SetorForm';

const App = () => {
  const [setores, setSetores] = useState([]);

  return (
    <div>
      <h1></h1>
      <SetorForm setores={setores} setSetores={setSetores} />
    </div>
  );
};

export default App;

