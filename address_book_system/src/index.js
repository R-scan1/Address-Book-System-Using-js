const Contact = require('./model/contact');

const contact1 = new Contact(
  'Raj', 
  'S can', 
  '123 Main St', 
  'Anytown', 
  'Anystate', 
  '12345', 
  '123-456-7890', 
  'raj.scan@example.com'
);

const contact2 = new Contact(
  'Manish', 
  'Patel', 
  'Bhopal', 
  'Rewa', 
  '\Temp state', 
  '67890', 
  '987-654-3210', 
  'manish.patel@example.com'
);

const addressBook = [contact1, contact2];

console.log('Address Book:');
addressBook.forEach(contact => {
  console.log(`Name: ${contact.firstName} ${contact.lastName}`);
  console.log(`Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}`);
  console.log(`Phone: ${contact.phone}`);
  console.log(`Email: ${contact.email}`);
  console.log("---------------------");
});
