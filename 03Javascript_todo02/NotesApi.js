export default class NotesApi {
  //② Get All memo from API
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    return notes;
  }

  //① Api to save memo
  static saveNote(noteToSave) {
    noteToSave.id = Math.floor(Math.random() * 1000000);
    noteToSave.updated = new Date().toISOString();
    notes.push(noteToSave);

    localStorage.setItem("notes", JSON.stringify(notes));
  }

  //③ Api to delete memo
  static deleteNote() {}
}
