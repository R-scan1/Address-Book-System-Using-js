const Contact = require('../model/contact');

class ContactService {
  constructor() {
    this.addressBook = [];
  }

  addContact(firstName, lastName, address, city, state, zip, phone, email) {
    try {
      const contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
      if (this.isDuplicate(contact)) {
        throw new Error('Duplicate entry: A contact with this name already exists');
      }
      this.addressBook.push(contact);
    } catch (error) {
      console.log(error.message);
    }
  }

  deleteContactByName(name) {
    const index = this.addressBook.findIndex(contact => `${contact.firstName} ${contact.lastName}` === name);
    if (index === -1) {
      console.log('Contact not found');
      return;
    }
    this.addressBook.splice(index, 1);
    console.log(`Contact ${name} deleted successfully.`);
  }

  viewByCityOrState(location) {
    return this.addressBook.filter(contact => contact.city === location || contact.state === location);
  }

  getNumberOfContacts() {
    return this.addressBook.length;  // Directly use length property
  }

  getCountByCityOrState(location) {
    const countByCity = this.addressBook.filter(contact => contact.city === location).length;
    const countByState = this.addressBook.filter(contact => contact.state === location).length;
    
    return {
      cityCount: countByCity,
      stateCount: countByState
    };
  }

  isDuplicate(contact) {
    return this.addressBook.some(existingContact => 
      existingContact.firstName.toLowerCase().trim() === contact.firstName.toLowerCase().trim() &&
      existingContact.lastName.toLowerCase().trim() === contact.lastName.toLowerCase().trim()
    );
  }
}

module.exports = ContactService;
