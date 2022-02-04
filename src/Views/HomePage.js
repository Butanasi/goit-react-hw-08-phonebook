// import { Form } from '../Components/Form';
// import { Filter } from '../Components/Filter';
// import { ContactList } from '../Components/ContactList';
// import { Loader } from '../Components/Loader';
// import style from './Home.module.scss';
// import { useSelector } from 'react-redux';
// import { getFilter } from '../redux/filter/selector';
// import {
//   useDeleteContactMutation,
//   useFetchContactsQuery,
// } from '../redux/ContactApi';

export default function HomePage() {
  // const { data, isFetching } = useFetchContactsQuery();
  // const [deleteContact] = useDeleteContactMutation();
  // const filter = useSelector(getFilter);
  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   const visibleContacts = data.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  //   return visibleContacts;
  // };

  return (
    <div
    // className={style.container}
    >
      {/* <h1 className={style.title}>Phonebook</h1>
      <Form contacts={data} />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      {isFetching && <Loader />}
      {data && (
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      )} */}
      <h1>
        Hi!!! I will help you keep all your contacts. To do this, you need to
        register. And if this is not your first time, then log in and
        <i> let's get started!</i>
      </h1>
    </div>
  );
}
