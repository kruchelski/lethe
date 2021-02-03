import { useReducer } from 'react';

const initialState = {
  notes: []
}

const notesReducer = (state, action) => {
  let newState = null;
  let i = null;
  switch (action.type) {
    case 'new':
      newState = { ...state };
      newState.notes.push(action.note);
      return newState;
    case 'replace':
      newState = { ...state };
      i = newState.notes.findIndex(note => note.id === action.note.id);
      newState.notes[i].content = action.note.content;
      newState.notes[i].title = action.note.title;
      return newState;
    case 'remove':
      newState = { ...state };
      i = newState.notes.findIndex(note => note.id === action.id);
      newState.notes.splice(i, 1);
      return newState;
    case 'remove_all':
      newState = { ...state };
      newState.notes = [];
      return newState;
    default:
      return { ...state }
  }
}

const notesReducerApi = () => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  const addNote = (note) => {
    let newId = 0;
    if (state.notes && state.notes.length) {
      state.notes.sort((a, b) => a.id - b.id);
      newId = state.notes[state.notes.length - 1].id + 1; 
    }
    note.id = newId;
    dispatch({ type: 'new', note })
  };

  const replaceNote = (note) => {
    dispatch({ type: 'replace', note });
  };

  const deleteNote = (id) => {
    dispatch({ type: 'remove', id })
  };

  const deleteAll = () => {
    dispatch({ type: 'remove_all' })
  };

  return {
    state,
    addNote,
    replaceNote,
    deleteNote,
    deleteAll
  }
}

export { notesReducer, initialState, notesReducerApi }