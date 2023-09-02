import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const isDublicate = ({ name, number }, contacts) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const result = contacts.find(item => {
      return (
        normalizedName === item.name.toLowerCase() ||
        normalizedNumber === item.number.toLowerCase()
      );
    });

    return Boolean(result);
  };

  export const addContact = createAsyncThunk(
    'contacts/add',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.addContact(data);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    },
    {
      condition: (data, { getState }) => {
        const { contacts } = getState();
        if (isDublicate(data, contacts.items)) {
          alert(`${data.name} or ${data.number} is alredy exist`);
          return false;
        }
      },
    }
  );

  export const removeContact = createAsyncThunk(
    'contacts/remove',
    async (id, { rejectWithValue }) => {
      try {
        await api.removeContact(id);
        return id;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

