const Contact = require('./model/contact');

let addressBook = [];

function addContact(firstName, lastName, address, city, state, zip, phone, email) {
  try {
    const contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
    addressBook.push(contact);
  } catch (error) {
    console.log(error.message); 
  }
}

addContact(
  'Raj', 
  'Scan', 
  '123 Main St', 
  'Anytown', 
  'Anystate', 
  '12345', 
  '123-456-7890', 
  'raj.scan@example.com'
);

addContact(
  'Manish', 
  'Patel', 
  '456 Oak St', 
  'Rewa', 
  'Bhopal', 
  '67890', 
  '987-654-3210', 
  'manish.patel@example.com'
);

addContact(
  'Arpita', 
  'Goutam', 
  'Satna', 
  'Katni', 
  'Somestate', 
  '54321', 
  '123-456-7890', 
  'arpita.goutam@example.com'
);

console.log('Address Book:');
addressBook.forEach(contact => {
  console.log(`Name: ${contact.firstName} ${contact.lastName}`);
  console.log(`Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}`);
  console.log(`Phone: ${contact.phone}`);
  console.log(`Email: ${contact.email}`);
  console.log("---------------------");
});
