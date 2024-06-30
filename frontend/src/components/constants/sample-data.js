/** @format */

export const formDataWithMissingCVC = {
  firstName: "John",
  lastName: "Doe",
  street: "123 Elm Street",
  houseNumber: "A12",
  addressLine2: "Apt 4B",
  zipcode: "12345",
  city: "Somewhere",
  region: "SomeRegion",
  country: "SomeCountry",
  creditCardNumber: "4111111111111111",
  expirationDate: "12/2025",
  // Missing 'cvc'
};

export const formDataWithInvalidCreditCard = {
  firstName: "John",
  lastName: "Doe",
  street: "123 Elm Street",
  houseNumber: "A12",
  addressLine2: "Apt 4B",
  zipcode: "12345",
  city: "Somewhere",
  region: "SomeRegion",
  country: "SomeCountry",
  creditCardNumber: "1234567890123456", // Invalid number
  expirationDate: "12/2025",
  cvc: "123",
};

export const formDataWithExpiredCreditCard = {
  firstName: "John",
  lastName: "Doe",
  street: "123 Elm Street",
  houseNumber: "A12",
  addressLine2: "Apt 4B",
  zipcode: "12345",
  city: "Somewhere",
  region: "SomeRegion",
  country: "SomeCountry",
  creditCardNumber: "4111111111111111",
  expirationDate: "12/2020", // Expired date
  cvc: "123",
};

export const formDataWithInvalidHouseNumber = {
  firstName: "John",
  lastName: "Doe",
  street: "123 Elm Street",
  houseNumber: "12345", // Invalid house number format
  addressLine2: "Apt 4B",
  zipcode: "12345",
  city: "Somewhere",
  region: "SomeRegion",
  country: "SomeCountry",
  creditCardNumber: "4111111111111111",
  expirationDate: "12/2025",
  cvc: "123",
};

export const formDataWithMultipleMissingFields = {
  firstName: "John",
  street: "123 Elm Street",
  houseNumber: "A12",
  addressLine2: "Apt 4B",
  zipcode: "12345",
  city: "Somewhere",
  region: "SomeRegion",
  country: "SomeCountry",
  creditCardNumber: "4111111111111111",
  expirationDate: "12/2025",
  cvc: "123",
  // Missing 'lastName'
};

export const validFormData = {
  firstName: "John",
  lastName: "Doe",
  street: "123 Elm Street",
  houseNumber: "A12",
  addressLine2: "Apt 4B",
  zipcode: "12345",
  city: "Somewhere",
  region: "SomeRegion",
  country: "SomeCountry",
  creditCardNumber: "411111111111111123",
  expirationDate: "12/2025",
  cvc: "123",
};
