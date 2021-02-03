import React, { createContext } from 'react';
import { notesReducerApi } from '../reducers/NoteReducer';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  return (
    <NotesContext.Provider value={ notesReducerApi() }>
      { children }
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider }