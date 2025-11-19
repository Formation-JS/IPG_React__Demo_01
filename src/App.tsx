import type { PersonData } from './@types/person';
import './App.css';
import PersonList from './components/PersonList/PersonList';
import Welcome from './components/Welcome/Welcome';

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

      <PersonList data={people} />
    </>
  );
}

export default App;
