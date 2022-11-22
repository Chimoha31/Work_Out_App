import NotesApi from "./NotesApi.js";
import NotesView from "./NotesView.js";

// update and save
// NotesApi.saveNote({
//   id: 123456,
//   title: "Updated Test02 memo app",
//   body: "Updated creating Test02 memo...",
// });

// delete
// NotesApi.deleteNote(720366);

// instance化
const app = document.querySelector("#app");
const view = new NotesView(app, {
  onNoteSelect(id) {
    console.log(id, ":Clicked!");
  },
  onNoteAdd() {
    console.log("Clicked!!!!!");
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
});

console.log(NotesApi.getAllNotes());

const notes = NotesApi.getAllNotes();
view.updateNoteList(notes);
