const Contact = require('../model/contact');

class ContactService {
  constructor() {
    this.addressBook = [];
  }

  addContact(firstName, lastName, address, city, state, zip, phone, email) {
    const isDuplicate = this.addressBook.some(contact => 
      `${contact.firstName} ${contact.lastName}` === `${firstName} ${lastName}`
    );

    if (isDuplicate) {
      console.log(`Duplicate entry found for ${firstName} ${lastName}. Contact not added.`);
    } else {
      try {
        const contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
        this.addressBook.push(contact);
        console.log(`Contact for ${firstName} ${lastName} added successfully.`);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  searchByCityOrState(location) {
    const results = this.addressBook.filter(contact => 
      contact.city === location || contact.state === location
    );
    return results;
  }

  getAllContacts() {
    return this.addressBook;
  }
}

module.exports = ContactService;
