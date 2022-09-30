import { useState } from 'react';
import { Form } from './ContactForm.stuled';
import { AddBtn } from './ContactForm.stuled';
import { Input } from './ContactForm.stuled';
// import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactFormLabel } from './ContactForm.stuled';

// const initialValues = { name: '', number: '' };

export function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
      id: nanoid(5),
    };

    onAddContact(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    // <Formik onSubmit={this.handleSubmit} initialValues={initialValues}>
    <Form onSubmit={handleSubmit}>
      <ContactFormLabel>Name</ContactFormLabel>
      <Input
        onChange={handleChangeInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
      />
      <ContactFormLabel>Number</ContactFormLabel>
      <Input
        onChange={handleChangeInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
      />
      <AddBtn type="submit">add contact</AddBtn>
    </Form>
    // </Formik>
  );
}

ContactForm.propTypes = {
  handleChangeInput: PropTypes.func,
};
