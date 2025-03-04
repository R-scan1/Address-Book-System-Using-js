const ContactService = require('./service/contactService');
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

console.log('Address Book Before Deletion:');
contactService.getAllContacts().forEach(contact => {
  console.log(`Name: ${contact.firstName} ${contact.lastName}`);
  console.log(`Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}`);
  console.log(`Phone: ${contact.phone}`);
  console.log(`Email: ${contact.email}`);
  console.log("---------------------");
});

contactService.deleteContactByName('Raj Scan');

console.log('Address Book After Deletion:');
contactService.getAllContacts().forEach(contact => {
  console.log(`Name: ${contact.firstName} ${contact.lastName}`);
  console.log(`Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}`);
  console.log(`Phone: ${contact.phone}`);
  console.log(`Email: ${contact.email}`);
  console.log("---------------------");
});
