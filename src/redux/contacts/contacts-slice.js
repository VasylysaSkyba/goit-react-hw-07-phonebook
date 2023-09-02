import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;