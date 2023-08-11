// ContactData.js
import { randomFirstNames, randomLastNames } from "../NameData";

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 1000000000); // Generate a 9-digit random number
  return `+995${randomNumber}`;
};

const generateRandomContacts = (count) => {
  const contacts = [];
  for (let i = 1; i <= count; i++) {
    const randomFirstName =
      randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)];
    const randomLastName =
      randomLastNames[Math.floor(Math.random() * randomLastNames.length)];
    contacts.push({
      id: i,
      name: `${randomFirstName} ${randomLastName}`,
      number: generateRandomNumber(),
    });
  }
  return contacts;
};

export default generateRandomContacts;
