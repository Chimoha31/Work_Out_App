import NotesApi from "./NotesApi.js";

// update and save
// NotesApi.saveNote({
//   id: 123456,
//   title: "Updated Test02 memo app",
//   body: "Updated creating Test02 memo...",
// });

// delete
NotesApi.deleteNote(720366);

console.log(NotesApi.getAllNotes());
