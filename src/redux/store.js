import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contacts/slice";
import filtersReducer from "../redux/filters/slice";
import { authReducer } from "./auth/slice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});

export default store;
