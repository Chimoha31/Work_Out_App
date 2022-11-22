export default class NotesView {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
    <div class="notesSidebar">
    <button class="notesAdd" type="button">Add note</button>
    <div class="notesList">
      <div class="notesList-item">
       
      </div>
    </div>
  </div>

  <!-- Preview notes -->
  <div class="notesPreview">
    <input type="text" class="notesTitle" placeholder="Add Title" />
    <textarea class="notesBody" placeholder="Add note here"></textarea>
  </div>
    `;
  }
}
