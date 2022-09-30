import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// import { filterContacts } from 'helpers/filterContacts';
import { Box } from './Box/Box';

const LS_KEY = 'saved_contact';

const initialValue = () => {
  const savedContacts = localStorage.getItem(LS_KEY);
  console.log(savedContacts);
  if (savedContacts === '' || JSON.parse(savedContacts) === null) {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  }
  return JSON.parse(savedContacts);
};

//  useEffect(() => {
//    // const savedContacts = localStorage.getItem(LS_KEY);
//    const contactParse = JSON.parse(savedContacts);
//    if (contactParse) {
//      setContacts(contactParse);
//    }
//  }, []);

export function App() {
  const [contacts, setContacts] = useState(initialValue);
  const [filter, setFilter] = useState('');

  const handleAddContact = contact => {
    if (contacts.some(cont => cont.name === contact.name)) {
      alert('Contact alredy exist');
      return;
    }
    const { id, name, number } = contact;

    setContacts(prev => [...prev, { id, name, number }]);
  };

  const setFilterValue = ({ target: { value } }) => {
    setFilter(value);
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
    const contactParse = JSON.parse(savedContacts);
    if (contactParse) {
      setContacts(contactParse);
    }
  }, []);

  useEffect(() => {
    const contStringify = JSON.stringify(contacts);
    localStorage.setItem(LS_KEY, contStringify);
  }, [contacts]);

  const filterContacts = (contacts, name) => {
    const filterValue = name.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <>
      <Box p={20}>
        <Box as="h2">Phonebook</Box>

        <ContactForm onAddContact={handleAddContact} />
      </Box>
      <Box p={20}>
        <h2>Contacts</h2>
        <Filter handleSetFilterValue={setFilterValue} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </Box>
    </>
  );
}
