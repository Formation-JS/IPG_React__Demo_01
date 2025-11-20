import type { RegistrationCamping } from '../../@types/registration';
import { useId, useState } from 'react';

export default function RegistrationForm() {

  // ↓ Identifiant pour l'accessibilité du composant
  const inputId = useId();

  // ↓ Les state du formulaire
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState('');
  const [breakfast, setBreakfast] = useState(true);
  const [camping, setCamping] = useState<RegistrationCamping>('no');

  // ↓ Gestion du submit
  const handleSubmit = (e: React.FormEvent) => {
    //? Déactivation du comportement par defaut
    e.preventDefault();

    //? Traitement
    const data = { email, name, breakfast, camping };
    console.log(data);

    //? Reset du formulaire
    setEmail('');
    setName('');
    setBreakfast(false);
    setCamping('no');
  };

  // ↓ Rendu
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={inputId + 'email'}>Email : </label>
        <input id={inputId + 'email'} type='email'
          value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor={inputId + 'name'}>Nom : </label>
        <input id={inputId + 'name'} type='text'
          value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor={inputId + 'breakfast'}>Dejeuner : </label>
        <input id={inputId + 'breakfast'} type='checkbox'
          checked={breakfast} onChange={(e) => setBreakfast(e.target.checked)} />
      </div>
      <div>
        <label htmlFor={inputId + 'camping'}>Camping : </label>
        <select id={inputId + 'camping'}
          value={camping} onChange={(e) => setCamping(e.target.value as RegistrationCamping)}>
          <option value='no'>Nope</option>
          <option value='base'>Basique</option>
          <option value='apollo'>Apollo</option>
        </select>
      </div>
      <div>
        <button type='submit'>Valider</button>
      </div>
    </form>
  );
}