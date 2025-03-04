const ContactService = require('./service/contactService');

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
  '789 New St', 
  'Newtown', 
  'Newstate', 
  '54321', 
  '321-654-9870', 
  'arpita.goutam@example.com'
);

let searchLocation = 'Newstate';  
let searchResults = contactService.searchByCityOrState(searchLocation);

console.log(`Contacts in ${searchLocation}:`);
searchResults.forEach(contact => {
  console.log(`Name: ${contact.firstName} ${contact.lastName}`);
  console.log(`Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}`);
  console.log(`Phone: ${contact.phone}`);
  console.log(`Email: ${contact.email}`);
  console.log("---------------------");
});
