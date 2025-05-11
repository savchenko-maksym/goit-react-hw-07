import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";

const initialState = {
  items: [],
  loadin: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.loadin = false;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loadin = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loadin = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, (state) => {
        state.loadin = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, (state) => {
        state.loadin = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected);
  },
});

export default contactsSlice.reducer;
