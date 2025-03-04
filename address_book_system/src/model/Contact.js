class Contact {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    this.firstName = this.validateName(firstName, 'First Name');
    this.lastName = this.validateName(lastName, 'Last Name');
    this.address = this.validateAddress(address, 'Address');
    this.city = this.validateAddress(city, 'City');
    this.state = this.validateAddress(state, 'State');
    this.zip = this.validateZip(zip);
    this.phone = this.validatePhone(phone);
    this.email = this.validateEmail(email);
  }

  toString() {
    return `${this.firstName} ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state}, Zip: ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
  }

  validateName(name, field) {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if (!namePattern.test(name)) {
      throw new Error(`${field} should start with a capital letter and have a minimum length of 3 characters.`);
    }
    return name;
  }

  validateAddress(address, field) {
    if (address.length < 4) {
      throw new Error(`${field} should have a minimum length of 4 characters.`);
    }
    return address;
  }

  validateZip(zip) {
    const zipPattern = /^[0-9]{5}([ ]?[0-9]{3})?$/;
    if (!zipPattern.test(zip)) {
      throw new Error('Invalid zip code. It should be 5 or 6 digits long.');
    }
    return zip;
  }

  validatePhone(phone) {
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(phone)) {
      throw new Error('Invalid phone number. It should be in the format xxx-xxx-xxxx.');
    }
    return phone;
  }

  validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      throw new Error('Invalid email format.');
    }
    return email;
  }
}

module.exports = Contact;
