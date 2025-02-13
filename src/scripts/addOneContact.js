import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();

    const updatedContacts = [...existingContacts, newContact];
    await writeContacts(updatedContacts);

    console.log(`Додано новий контакт: ${newContact.name}, ${newContact.phone}`);
  } catch (error) {
    console.error(`Помилка при додаванні контакту: ${error.message}`);
  }
};

addOneContact();
