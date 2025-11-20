import type { PersonData } from './@types/person';
import './App.css';
import PersonList from './components/PersonList/PersonList';
import Welcome from './components/Welcome/Welcome';
import logo from './assets/Logo_IPG.png';
import DemoState from './components/DemoState/DemoState';

import RegistrationForm1 from './components/RegistrationForm/RegistrationForm_Control';
import RegistrationForm2 from './components/RegistrationForm/RegistrationForm_Action';
import RegistrationForm3 from './components/RegistrationForm/RegistrationForm_ActionState';
import Counter from './features/Counter/Counter';


const people : PersonData[] = [
  { id: 1, firstname: 'Della', lastname: 'Duck', birthdate: null },
  { id: 2, firstname: 'Zaza', lastname: 'Vanderquack', birthdate: new Date(2001, 5, 13) }
];

function App() {

  return (
    <>
      <h1>Demo React</h1>
      {/* <Welcome firstname='Della' lastname='Duck' /> */}
      {/* <Welcome firstname='Justine' />       */}

      <img className='logo-ipg' src={logo} alt='Logo IPG'/>

      {/* <PersonList data={people} /> */}

      {/* <DemoState /> */}

      <h2>Formulaire controllé</h2>
      <RegistrationForm1 />
      <h2>Formulaire avec action</h2>
      <RegistrationForm2 />
      <h2>Formulaire avec action et state</h2>
      <RegistrationForm3 />

      <Counter />
    </>
  );
}

export default App;
