import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { getContacts } from 'redux/selectors';

import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';

import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  // Получаем части состояния
  // const { items, isLoading, error } = useSelector(getContacts);
  // const { items, isLoading, error } = useSelector(getContacts);
  const { isLoading, error } = useSelector(getContacts);

  // console.log(items);
  // console.log(isLoading);
  // console.log(error);

  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      <SearchFilter />
      <ContactsList />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </Container>
  );
};

export default App;

//  <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
