export const filterContacts = (contacts, name) => {
  const filterValue = name.toLowerCase().trim();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};
