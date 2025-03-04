const ContactService = require('./service/contactService');
const contactService = new ContactService();

contactService.addContact('Raj', 'Scan', '123 Main St', 'Anytown', 'Anystate', '12345', '123-456-7890', 'raj.scan@example.com');
contactService.addContact('Manish', 'Patel', '456 Oak St', 'Rewa', 'Bhopal', '67890', '987-654-3210', 'manish.patel@example.com');
contactService.addContact('Arpita', 'Goutam', 'Satna', 'Katni', 'Somestate', '54321', '123-456-7890', 'arpita.goutam@example.com');

console.log(`Number of contacts: ${contactService.getNumberOfContacts()}`);

console.log('Contacts in Anytown:');
console.log(contactService.viewByCityOrState('Anytown'));

console.log('Searching for contacts in Bhopal:');
console.log(contactService.searchByCityOrState('Bhopal'));

const locationCount = contactService.getCountByCityOrState('Anytown');
console.log(`Number of contacts in Anytown: ${locationCount.cityCount}`);
console.log(`Number of contacts in Anystate: ${locationCount.stateCount}`);

contactService.deleteContactByName('Raj Scan');
console.log('After deletion:');
console.log(contactService.viewByCityOrState('Anytown'));

console.log('Contacts sorted by Name:');
console.log(contactService.sortByName());

console.log('Contacts sorted by City:');
console.log(contactService.sortByCity());

console.log('Contacts sorted by State:');
console.log(contactService.sortByState());

console.log('Contacts sorted by Zip:');
console.log(contactService.sortByZip());
