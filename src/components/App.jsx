import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { nanoid } from 'nanoid'


export class App extends Component{
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
  number: ''
  }
  handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
      const contactsLS = localStorage.getItem("contacts");
      const parsedContact = JSON.parse(contactsLS);
      this.setState({ contacts: parsedContact || [] });
    
    }
    
    componentDidUpdate(_,prevState) {
      if ( prevState.contacts !== this.state.contacts ||
      prevState.filter !== this.state.filter) {
        console.log("componentDidUpdate")
        localStorage.setItem("contacts",JSON.stringify(this.state.contacts))
      }
    
    }
  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  }
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  handleDelete = (contactId) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
  }));
};
 handleButton = (e) => {
  e.preventDefault();
  const { name, number, contacts } = this.state;

  if (name && number) {
    const isContactExists = contacts.some((contact) => contact.name.toLowerCase() === name.trim().toLowerCase());

    if (isContactExists) {
      alert(`Contact with name "${name}" already exists in the phonebook.`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: "",
        number: "",
      }));
    }
  }
   
};
  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
  <h1>Phonebook</h1>
        <ContactForm name={this.state.name}
          handleInput={this.handleInput}
          number={this.state.number}
  handleButton={this.handleButton}      />

  <h2>Contacts</h2>
        <Filter value={this.state.filter}
        onChange={this.handleChange}/>
        <ContactList contacts={filteredContacts}
                    contactDelete={this.handleDelete}      />
</div>
    )
  }
}
