const ContactService = require('./service/ContactService');
const Contact = require('./model/contact');

let contactService = new ContactService();

contactService.addContact(
  'Raj', 
  'Scan', 
  '123 Main St', 
  'Anytown', 
  'Anystate', 
  '12345', 
  '123-456-7890', 
  'raj.scan@example.com'
);

contactService.addContact(
  'Manish', 
  'Patel', 
  '456 Oak St', 
  'Rewa', 
  'Bhopal', 
  '67890', 
  '987-654-3210', 
  'manish.patel@example.com'
);

contactService.addContact(
  'Arpita', 
  'Goutam', 
  'Satna', 
  'Katni', 
  'Somestate', 
  '54321', 
  '123-456-7890', 
  'arpita.goutam@example.com'
);

let searchResult = contactService.findContactByName('Arpita Goutam');
console.log('Search Result for "Arpita Goutam":');
console.log(searchResult);

contactService.updateContact('Raj Scan', '123 New Main St', 'Newcity', 'Newstate', '54321', '321-654-9870', 'new.raj.scan@example.com');

console.log('Updated Address Book:');
contactService.getAllContacts().forEach(contact => {
  console.log(`Name: ${contact.firstName} ${contact.lastName}`);
  console.log(`Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}`);
  console.log(`Phone: ${contact.phone}`);
  console.log(`Email: ${contact.email}`);
  console.log("---------------------");
});
