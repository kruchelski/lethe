import * as lethaiConstants from './LethaiConstants';

var lethai = null;

function LethaiEngine() {
  this.mood = _getMood();
  this.greeting = '';
  this.globalHelper = '';
  this.noteHelper = '';
  this.noteSuccess = '';
  this.noteDeleted = '';
  this.inputError = '';
}

function _lethaiInit(lethai) {
  lethai.greeting = _getGreeting(lethai.mood);
  lethai.globalHelper = _getGlobalHelper(lethai.mood);
  lethai.noteHelper = _getNoteHelper(lethai.mood);
  lethai.noteSuccess = _getNoteSuccess(lethai.mood);
  lethai.inputError = _getInputError(lethai.mood);
}

function _getMood() {
  let moodLength = Object.keys(lethaiConstants.MOODS).length;
  moodLength -= 0.1;
  const moodIndex = Math.floor(Math.random() * moodLength);
  return lethaiConstants.MOODS[moodIndex];
}

function _getGreeting(mood) {
  let greetingsLength = Object.keys(lethaiConstants.GREETINGS[mood]).length;
  greetingsLength -= 0.1;
  let greetingIndex = Math.floor(Math.random() * greetingsLength);
  return lethaiConstants.GREETINGS[mood][greetingIndex];
}

function _getGlobalHelper(mood) {
  let globalHelperLength = Object.keys(lethaiConstants.GLOBAL_HELPER[mood]).length;
  globalHelperLength -= 0.1;
  let globalHelperIndex = Math.floor(Math.random() * globalHelperLength);
  return lethaiConstants.GLOBAL_HELPER[mood][globalHelperIndex];
}

function _getNoteHelper(mood) {
  let noteHelperLength = Object.keys(lethaiConstants.NOTE_HELPER[mood]).length;
  noteHelperLength -= 0.1;
  let noteHelperIndex = Math.floor(Math.random() * noteHelperLength);
  return lethaiConstants.NOTE_HELPER[mood][noteHelperIndex];
}

function _getNoteSuccess(mood) {
  let noteSuccessLength = Object.keys(lethaiConstants.NOTE_SUCCESS[mood]).length;
  noteSuccessLength -= 0.1;
  let noteSuccessIndex = Math.floor(Math.random() * noteSuccessLength);
  return lethaiConstants.NOTE_SUCCESS[mood][noteSuccessIndex];
}

function _getNoteDeleted(mood) {
  let noteDeletedLength = Object.keys(lethaiConstants.NOTE_SUCCESS[mood]).length;
  noteDeletedLength -= 0.1;
  let noteDeletedIndex = Math.floor(Math.random() * noteDeletedLength);
  return lethaiConstants.NOTE_DELETE[mood][noteDeletedIndex];
}

function _getInputError(mood) {
  let inputErrorLength = Object.keys(lethaiConstants.INPUT_ERROR[mood]).length;
  inputErrorLength -= 0.1;
  let inputErrorIndex = Math.floor(Math.random() * inputErrorLength);
  return lethaiConstants.INPUT_ERROR[mood][inputErrorIndex];
}

export function shuffleLethai() {
  if (!lethai) {
    lethai = new LethaiEngine();
  }
  _lethaiInit(lethai);
}

export function getLethai(refresh = null) {
  if (!lethai || refresh) {
    lethai = new LethaiEngine();
    _lethaiInit(lethai);
  }

  return lethai;
}