import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-slice';
import { filterReducer } from './filter/filter-slice';


const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterReducer,
  },
});

export default store;