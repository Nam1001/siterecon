import { createSlice } from "@reduxjs/toolkit";

export const noteOpenSlice = createSlice({
  name: "noteSlice",
  initialState: {
    value: false,
  },
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

export const { open, close } = noteOpenSlice.actions;
