const commands = {
  global: [
    { comm: 'list', desc: 'List existing notes'},
    { comm: 'new <[name]>', desc: 'Creates a new note. name (optional): Name of the note. If no name is provided, a random one will be assigned. The content is initialized with random data' },
    { comm: 'note <id>', desc: 'Access the note. id: The number ID of the note' },
    { comm: 'rm <id>', desc: 'Delete a note. id: The number ID of the note' },
    { comm: 'rmall', desc: 'Delete all notes' },
  ],
  note: [
    { comm: 'edit', desc: 'Enter edit mode for the note' },
    { comm: 'show', desc: 'Show the note content' },
    { comm: 'title <note_name>', desc: 'Changes the title of the note. If no arguments is passed, the title will be reseted' },
    { comm: 'reset', desc: 'Discard the changes in the note and exit edit mode' },
    { comm: 'clear', desc: 'In edit mode, clears the content of the note and returns to Show mode' },
    { comm: 'save', desc: 'When in edit mode, saves changes' },
    { comm: 'rm', desc: 'Delete the note' }
  ]
}

export default commands;