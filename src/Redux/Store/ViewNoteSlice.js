import { createSlice } from "@reduxjs/toolkit";
import { notes } from "../../dummy";

export const viewNoteSlice = createSlice({
  name: "viewNoteSlice",
  initialState: {
    value: { data: {}, boolen: false,notes:notes },
  },
  reducers: {
    openNote: (state, actions) => {
      state.value.boolen = true;
      const filteredBadge = state?.value?.notes.filter((note) => {
        return note.id === actions.payload;
      });
      state.value.data = filteredBadge[0];
    },
    closeNote: (state, actions) => {
      state.value.boolen = false;
    },
    addcomment:(state,actions)=>{
      const filteredData = state?.value?.notes.filter((note) => {
        return note.id === actions.payload;
      });
      const updatedComments = [...filteredData[0].comments, "hii"];
      const newstate = {
        ...filteredData[0],
        comments: updatedComments
      };
      
      const updateNotes=state.value.notes.map((note)=>{
         if(note.id===actions.payload){
          return {
            ...note,
            comments: updatedComments,
          };
         }
         return note
      })
      state.value.notes=updateNotes
      state.value.data=newstate
    }
  },
});

export const { openNote, closeNote,addcomment } = viewNoteSlice.actions;
