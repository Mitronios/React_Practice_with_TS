import { useState } from "react";
import ContacTable from "./ContacTable";
import ContactForm from "./ContactForm";
import { Contact } from "../schemas/Contact";

function Cms() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) =>
    setContacts([
      {
        ...contact,
        id: Math.random().toString(),
      },
      ...contacts,
    ]);

  const deleteContact = (id: string) =>
    setContacts(contacts.filter((c) => c.id != id));
  return (
    <div className="container">
      <div className="row">
        <div className="col bg-light">
          <h1 className="text-light text-center bg-dark mb-3">My contacts</h1>
          <ContactForm onSubmit={addContact} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContacTable contacts={contacts} onClick={deleteContact} />
        </div>
      </div>
    </div>
  );
}

export default Cms;
