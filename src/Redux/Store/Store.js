import { configureStore } from "@reduxjs/toolkit";
import { noteOpenSlice } from "./NoteOpenSlice";
import { viewNoteSlice } from "./ViewNoteSlice";
export const store = configureStore({
  reducer: {
    noteOpenSlice: noteOpenSlice.reducer,
    viewNoteSlice: viewNoteSlice.reducer,
  },
});

// store.subscribe(() => console.log(store.getState()));
