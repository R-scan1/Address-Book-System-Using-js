const Contact = require('../model/contact');

class ContactService {
  constructor() {
    this.addressBook = [];
  }

  addContact(firstName, lastName, address, city, state, zip, phone, email) {
    try {
      const contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
      this.addressBook.push(contact);
    } catch (error) {
      console.log(error.message);
    }
  }

  getAllContacts() {
    return this.addressBook;
  }

  findContactByName(name) {
    return this.addressBook.filter(contact => `${contact.firstName} ${contact.lastName}` === name);
  }

  updateContact(name, newAddress, newCity, newState, newZip, newPhone, newEmail) {
    let contact = this.findContactByName(name)[0];
    if (contact) {
      contact.address = newAddress;
      contact.city = newCity;
      contact.state = newState;
      contact.zip = newZip;
      contact.phone = newPhone;
      contact.email = newEmail;
    }
  }

  deleteContactByName(name) {
    const index = this.addressBook.findIndex(contact => `${contact.firstName} ${contact.lastName}` === name);
    if (index !== -1) {
      this.addressBook.splice(index, 1);
      console.log(`${name} has been deleted from the address book.`);
    } else {
      console.log(`${name} not found in the address book.`);
    }
  }

  countContacts() {
    return this.addressBook.reduce((count) => count + 1, 0); // Initial value is 0
  }
}

module.exports = ContactService;
