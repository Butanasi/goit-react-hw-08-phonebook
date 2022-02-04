import { useSelector } from 'react-redux';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../redux/ContactApi';
import { getFilter } from '../redux/filter/selector';
import style from './ContactPage.module.scss';
import { Form } from '../Components/Form';
import { Filter } from '../Components/Filter';
import { Loader } from '../Components/Loader';
import { ContactList } from '../Components/ContactList';

export default function ContactsPage() {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <Form contacts={data} />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      {isFetching && <Loader />}
      {data && (
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      )}
    </div>
  );
}
