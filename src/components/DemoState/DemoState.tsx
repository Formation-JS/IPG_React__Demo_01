import { useState } from 'react';

export default function DemoState() {

  const [msg, setMsg] = useState('');

  const handleAddZzz = () => {
    // Modification sur base de l'état précédent
    setMsg(msg => msg + ' Zzz')
  }

  const handleReset = () => {
    // Modification de la valeur
    setMsg('');
  }

  return (
    <>
      <p>Donald: {msg}</p>
      <button onClick={handleAddZzz}>Zzz</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}