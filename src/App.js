// import { Routs } from './const';
// import { Switch, Route } from 'react-router-dom';
// import {} from './Views';
// import { Form } from './Components/Form';
// import { ContactList } from './Components/ContactList';
// import { Filter } from './Components/Filter';
import style from './App.module.scss';
// import {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
// } from './redux/ContactApi';
// import { Loader } from './Components/Loader';
// import { getFilter } from './redux/filter/selector';
// import { useSelector } from 'react-redux';
import { Login } from './Components/Login';
import { Logout } from './Components/Logout/Logout';
// import { FormRegister } from './Components/FormRegister/FormRegister';

function App() {
  // // const { data, isFetching } = useFetchContactsQuery();
  //   // const [deleteContact] = useDeleteContactMutation();
  //   // const filter = useSelector(getFilter);
  //   // const getVisibleContacts = () => {
  //   //   const normalizedFilter = filter.toLowerCase();
  //   //   const visibleContacts = data.filter(contact =>
  //   //     contact.name.toLowerCase().includes(normalizedFilter),
  //   //   );
  //   //   return visibleContacts;
  //   // };
  return (
    <div className={style.container}>
      {/* <h1 className={style.title}>Phonebook</h1>
  //       <Form contacts={data} />
  //       <h2 className={style.title}>Contacts</h2>
  //       <Filter />
  //       {isFetching && <Loader />}
  //       {data && (
  //         <ContactList
  //           contacts={getVisibleContacts()}
  //           onDeleteContact={deleteContact}
  //         />
  //       )} */}
      <Login />
      {/* <FormRegister /> */}
      <Logout />
    </div>
  );
}

export default App;

// // const { data, isFetching } = useFetchContactsQuery();
//   // const [deleteContact] = useDeleteContactMutation();
//   // const filter = useSelector(getFilter);

//   // const getVisibleContacts = () => {
//   //   const normalizedFilter = filter.toLowerCase();
//   //   const visibleContacts = data.filter(contact =>
//   //     contact.name.toLowerCase().includes(normalizedFilter),
//   //   );
//   //   return visibleContacts;
//   // };

//   return (
//     <div className={style.container}>
//       {/* <h1 className={style.title}>Phonebook</h1>
//       <Form contacts={data} />
//       <h2 className={style.title}>Contacts</h2>
//       <Filter />
//       {isFetching && <Loader />}
//       {data && (
//         <ContactList
//           contacts={getVisibleContacts()}
//           onDeleteContact={deleteContact}
//         />
//       )} */}
//       <Login />
//       {/* <FormRegister /> */}
//       <Logout />
//     </div>
//   );
