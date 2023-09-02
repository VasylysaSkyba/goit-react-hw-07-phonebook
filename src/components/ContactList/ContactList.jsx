import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import css from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem';

const ContactList = () => {

  const contacts = useSelector(getFilteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} name={name} phone={phone} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;