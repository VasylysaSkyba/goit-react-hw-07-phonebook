import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.addContact(data);
        return result;
      } catch (error) {
        return rejectWithValue(error);

    }
}
  );

  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
      try {
        await api.removeContact(id);
        return id;
      } catch (error) {
        return rejectWithValue(error);
    }
}
  );


