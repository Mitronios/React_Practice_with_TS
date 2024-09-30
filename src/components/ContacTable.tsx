import { Contact } from "../schemas/Contact";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ContacTable({ contacts, onClick }: Props) {
  return (
    <table className="table table-striped table-hover mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr
            onClick={() => onClick(c.id)}
            style={{ cursor: "pointer" }}
            key={c.id}
          >
            <td>{c.name}</td>
            <td>{c.lastname}</td>
            <td>{c.email}</td>
            <td>{c.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContacTable;
