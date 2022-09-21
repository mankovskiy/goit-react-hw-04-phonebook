import { DeleteBtn } from './ContactListItem.styled';
import PropTypes from 'prop-types';
export function ContactListItem({ id, name, number, handleDeleteContact }) {
  return (
    <li>
      <p>name:{name} </p>
      <p>number:{number} </p>
      <DeleteBtn onClick={() => handleDeleteContact(id)}>delete</DeleteBtn>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  handleDeleteContact: PropTypes.func,
};
