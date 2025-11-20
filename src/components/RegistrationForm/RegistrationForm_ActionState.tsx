import { useActionState, useId } from 'react';
import type { RegistrationCamping, RegistrationData } from '../../@types/registration';

// Recap pour la mise en place des actions avec un state
// - Ajouter un "name" à chaque input, textarea, select
// - Créer une action asynchrone avec un state
// - Utiliser le hook "useActionState"

type RegistrationActionState = {
  message: null | string;
  formData: null | FormData;
};

async function registrationAction(state: RegistrationActionState, formData: FormData): Promise<RegistrationActionState> {

  // Delay -> Ne pas faire ça en prod hein !
  await new Promise(resolve => setTimeout(resolve, 500));

  // Extration des données du FormData
  const data: RegistrationData = {
    email: formData.get('email') as string,
    name: formData.get('name') as string,
    breakfast: formData.has('breakfast'),
    camping: formData.get('camping') as RegistrationCamping
  };
  
  // Test de garde
  if(data.name.length < 3) {
    return {
      message: 'Erreur ! Le nom doit contenir minimum 3 lettres !',
      formData
    }
  } 
  
  // Traitement...
  console.log(data);

  return {
    message: `Formulaire envoyé. Merci ${data.name}`,
    formData: null
  };
}

export default function RegistrationForm() {

  // ↓ Identifiant pour l'accessibilité du composant
  const inputId = useId();

  // ↓ Utilisation du useActionState
  const [state, handleSubmit, isPending] = useActionState(registrationAction, { message: null, formData: null });

  console.log(state.formData?.get('camping')?.toString());
  
  // ↓ Rendu
  return (
    <form action={handleSubmit}>
      <div>
        <label htmlFor={inputId + 'email'}>Email : </label>
        <input id={inputId + 'email'} type='email' name='email'
          defaultValue={state.formData?.get('email')?.toString()} />
      </div>
      <div>
        <label htmlFor={inputId + 'name'}>Nom : </label>
        <input id={inputId + 'name'} type='text' name='name'
          defaultValue={state.formData?.get('name')?.toString()} />
      </div>
      <div>
        <label htmlFor={inputId + 'breakfast'}>Dejeuner : </label>
        <input id={inputId + 'breakfast'} type='checkbox' name='breakfast'
          defaultChecked={state.formData?.has('breakfast')} />
      </div>
      <div>
        <label htmlFor={inputId + 'camping'}>Camping : </label>
        <select id={inputId + 'camping'} name='camping' defaultValue={state.formData?.get('camping')?.toString()} >
          <option value='no'>Nope</option>
          <option value='base'>Basique</option>
          <option value='apollo'>Apollo</option>
        </select>
      </div>
      <div>
        <button disabled={isPending} type='submit'>Valider</button>
        <span>Message : {state.message}</span>
      </div>
    </form>
  );
}