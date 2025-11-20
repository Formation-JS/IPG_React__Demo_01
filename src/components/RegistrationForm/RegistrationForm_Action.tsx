import { useId } from 'react';
import type { RegistrationCamping, RegistrationData } from '../../@types/registration';

// Recap pour la mise en place des actions
// - Ajouter un "name" à chaque input, textarea, select
// - Créer une action
// - Utiliser le FormData depuis l'action

function registrationAction(formData : FormData) {
  
  console.log(formData);

  const data : RegistrationData = {
    email: formData.get('email') as string,
    name: formData.get('name') as string,
    breakfast: formData.has('breakfast'),
    camping: formData.get('camping') as RegistrationCamping
  } 
  console.log(data);
  
}

export default function RegistrationForm() {

  // ↓ Identifiant pour l'accessibilité du composant
  const inputId = useId();

  return (
    <form action={registrationAction}>
      <div>
        <label htmlFor={inputId + 'email'}>Email : </label>
        <input id={inputId + 'email'} type='email' name='email' />
      </div>
      <div>
        <label htmlFor={inputId + 'name'}>Nom : </label>
        <input id={inputId + 'name'} type='text' name='name' />
      </div>
      <div>
        <label htmlFor={inputId + 'breakfast'}>Dejeuner : </label>
        <input id={inputId + 'breakfast'} type='checkbox' name='breakfast'/>
      </div>
      <div>
        <label htmlFor={inputId + 'camping'}>Camping : </label>
        <select id={inputId + 'camping'} name='camping'>
          <option value='no'>Nope</option>
          <option value='base'>Basique</option>
          <option value='apollo'>Apollo</option>
        </select>
      </div>
      <div>
        <button type='submit'>Valider</button>
      </div>
    </form>
  )
}