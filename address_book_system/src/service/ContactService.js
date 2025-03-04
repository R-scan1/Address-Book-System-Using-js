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

  searchByCityOrState(location) {
    return this.addressBook.filter(contact => contact.city === location || contact.state === location);
  }

  getNumberOfContacts() {
    return this.addressBook.reduce((count) => count + 1, 0);
  }

  getCountByCityOrState(location) {
    const countByCity = this.addressBook.filter(contact => contact.city === location).length;
    const countByState = this.addressBook.filter(contact => contact.state === location).length;
    return { cityCount: countByCity, stateCount: countByState };
  }

  sortByName() {
    return this.addressBook.sort((a, b) => {
      const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
      const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  sortByCity() {
    return this.addressBook.sort((a, b) => a.city.localeCompare(b.city));
  }

  sortByState() {
    return this.addressBook.sort((a, b) => a.state.localeCompare(b.state));
  }

  sortByZip() {
    return this.addressBook.sort((a, b) => a.zip.localeCompare(b.zip));
  }

  isDuplicate(contact) {
    return this.addressBook.some(existingContact => 
      existingContact.firstName === contact.firstName && existingContact.lastName === contact.lastName
    );
  }
}

module.exports = ContactService;
