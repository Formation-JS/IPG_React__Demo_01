import type { PersonData } from './@types/person';
import './App.css';
import PersonList from './components/PersonList/PersonList';
import Welcome from './components/Welcome/Welcome';
import logo from './assets/Logo_IPG.png';
import DemoState from './components/DemoState/DemoState';

const people : PersonData[] = [
  { id: 1, firstname: 'Della', lastname: 'Duck', birthdate: null },
  { id: 2, firstname: 'Zaza', lastname: 'Vanderquack', birthdate: new Date(2001, 5, 13) }
];

function App() {

  return (
    <>
      <h1>Demo React</h1>
      <Welcome firstname='Della' lastname='Duck' />
      {/* <Welcome firstname='Justine' />       */}

      <img className='logo-ipg' src={logo} alt='Logo IPG'/>

      <PersonList data={people} />

      <DemoState />
    </>
  );
}

export default App;
