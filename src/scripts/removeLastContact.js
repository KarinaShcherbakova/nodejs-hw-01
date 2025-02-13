import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('ℹ️ Немає контактів для видалення.');
      return;
    }

    const removedContact = contacts.pop();
    await writeContacts(contacts); 

    console.log(`Видалено контакт: ${removedContact.name} (${removedContact.email})`);

  } catch (error) {
    console.error(`Помилка видалення останнього контакту: ${error.message}`);
  }
};

removeLastContact();
