
import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = payload;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addContact.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items.push(payload);
    },
    [addContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [ deleteContact.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [ deleteContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
    [ deleteContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});


export const contactsReducer = contactsSlice.reducer;