import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contacts-operations';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  return (
    <li className={css.item}>
      <p className={css.contact}>
        {name} {number}
      </p>
      <button
        className={css.buttonDelete}
        type="submit"
        onClick={() => onRemoveContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;