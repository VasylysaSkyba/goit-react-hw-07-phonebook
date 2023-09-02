import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchContacts} from 'redux/contacts/contacts-operations';

import { getContacts } from 'redux/contacts/contacts-selectors';
import css from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Notification from './Notification';

function App() {
  const contacts = useSelector(getContacts);
  const isContacts = Boolean(contacts.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(contacts);

  return (
    <div className={css.phonebookContainer}>
      <h1 className={css.titlePhonebook}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titleContacts}>Contacts</h2>
      <div className={css.allContacts}>All contacts: {contacts.length}</div>

      {isContacts ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </div>
  );
}


export default App;