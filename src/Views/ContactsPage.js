import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../redux/ContactApi';
import { getFilter } from '../redux/filter/selector';
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
    <div>
      <Typography variant="h2" component="h2" textAlign="center">
        Phonebook
      </Typography>
      <Form contacts={data} />
      <Typography variant="h2" component="h2" textAlign="center">
        Contacts
      </Typography>
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
