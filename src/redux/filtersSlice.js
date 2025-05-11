import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlise = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, actions) => {
      state.name = actions.payload;
    },
  },
});

export const { changeFilter } = filtersSlise.actions;
export default filtersSlise.reducer;
