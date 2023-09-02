import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const onRemoveContact = payload => {
    dispatch(deleteContact(payload));
  };

  return (
    <li className={css.item}>
      <p className={css.contact}>
        {name} {phone}
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
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;