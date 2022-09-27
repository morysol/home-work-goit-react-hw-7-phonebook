import { useSelector } from 'react-redux';
//
import { getContactsItems, getFilter } from 'redux/selectors';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getFilter);

  // console.log(filter);

  if (contacts.length > 0) {
    return (
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <ContactsListItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
      </ul>
    );
  }
  return <div>No contacts yet</div>;
};
