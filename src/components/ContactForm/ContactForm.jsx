import { Component } from 'react';
import { Form } from './ContactForm.stuled';
import { AddBtn } from './ContactForm.stuled';
import { Input } from './ContactForm.stuled';
// import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactFormLabel } from './ContactForm.stuled';

// const initialValues = { name: '', number: '' };

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = ({ target: { value, name } }) => {
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      ...this.state,
      id: nanoid(5),
    };

    this.props.onAddContact(contact);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      // <Formik onSubmit={this.handleSubmit} initialValues={initialValues}>
      <Form onSubmit={this.handleSubmit}>
        <ContactFormLabel>Name</ContactFormLabel>
        <Input
          onChange={this.handleChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
        />
        <ContactFormLabel>Number</ContactFormLabel>
        <Input
          onChange={this.handleChangeInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
        />
        <AddBtn type="submit">add contact</AddBtn>
      </Form>
      // </Formik>
    );
  }
}

ContactForm.propTypes = {
  handleChangeInput: PropTypes.func,
};
