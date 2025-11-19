import type { PersonData } from '../../@types/person';

type PersonListProps = {
  data: PersonData[];
};
export default function PersonList({ data }: PersonListProps) {

  return (
    <table>
      <PersonListHeader />
      <tbody>
        {data.map(element => (
          <PersonListRow key={element.id} {...element}/>
        ))}
      </tbody>
    </table>
  );
}

type PersonListRowProps = PersonData & {
  // onDelete : (id: number) => void
};
function PersonListRow({ firstname, lastname, birthdate }: PersonListRowProps) {

  const formattedDate = birthdate?.toLocaleDateString('fr-be', { dateStyle: 'long' });

  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{formattedDate}</td>
    </tr>
  );
}

function PersonListHeader() {
  return (
    <thead>
      <tr>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Date de naissance</th>
      </tr>
    </thead>
  );
}