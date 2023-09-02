export const getContacts = state => state.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};