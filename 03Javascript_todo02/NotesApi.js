export default class NotesApi {
  //② Get All memo from API
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    return notes;
  }

  //① Api to save memo
  static saveNote(noteToSave) {
    const notes = NotesApi.getAllNotes();
    const existingNote = notes.find((note) => note.id === noteToSave.id);

    // 編集と更新
    if (existingNote) {
      existingNote.title = noteToSave.title;
      existingNote.body = noteToSave.body;
      existingNote.updated = new Date().toISOString();
    } else {
      // noteToSave.id = Math.floor(Math.random() * 1000000);
      // noteToSave.updated = new Date().toISOString();
      // notes.push(noteToSave);

      noteToSave.id = noteToSave.id;
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }

    localStorage.setItem("notes", JSON.stringify(notes));
  }

  //③ Api to delete memo
  static deleteNote(id) {
    const notes = NotesApi.getAllNotes();
    const deletedNote = notes.filter((note) => note.id !== id);

    localStorage.setItem("notes", JSON.stringify(deletedNote));
  }
}
