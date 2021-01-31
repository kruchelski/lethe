import * as LethaiEngine from './LethaiEngine';

const defaultMood = 'strange';
const defaultGreeting = 'Welcome to Lethe! A terminal like note APP.';
const defaultGlobalHelper = 'Type :help or touch the ? button to get some help.';
const defaultNoteHelper = 'This is your note. Type :help or touch the ? button to get help.';
const defaultNoteSuccess = 'Note successfully saved.';
const defaultNoteDeleted = 'Note successfully deleted.';
const defaultInputError = 'Invalid command. Type :help or touch the ? button to get help.';

export const getMood = (refresh = null) => {
  LethaiEngine.shuffleLethai();
  let lethai = LethaiEngine.getLethai(refresh);
  return lethai.mood || defaultMood;
}

export const getGreeting = (refresh = null) => {
  LethaiEngine.shuffleLethai();
  let lethai = LethaiEngine.getLethai(refresh);
  return lethai.greeting || defaultGreeting;
}

export const getGlobalHelper = (refresh = null) => {
  LethaiEngine.shuffleLethai();
  let lethai = LethaiEngine.getLethai(refresh);
  return lethai.globalHelper || defaultGlobalHelper; 
}

export const getNoteHelper = (refresh = null) => {
  LethaiEngine.shuffleLethai();
  let lethai = LethaiEngine.getLethai(refresh);
  return lethai.noteHelper || defaultNoteHelper; 
}

export const getNoteSuccess = (refresh = null) => {
  LethaiEngine.shuffleLethai();
  let lethai = LethaiEngine.getLethai(refresh);
  return lethai.noteSuccess || defaultNoteSuccess; 
}

export const getNoteDeleted = (refresh = null) => {
  LethaiEngine.shuffleLethai();
  let lethai = LethaiEngine.getLethai(refresh);
  return lethai.noteDeleted || defaultNoteDeleted; 
}

export const getInputError = (refresh = null) => {
  LethaiEngine.shuffleLethai();
  let lethai = LethaiEngine.getLethai(refresh);
  return lethai.inputError || defaultInputError; 
}