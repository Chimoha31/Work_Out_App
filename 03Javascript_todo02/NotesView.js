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
    <!-- Sidebar作成 -->
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

    const btnAddNote = this.root.querySelector(".notesAdd");
    const inputTitle = this.root.querySelector(".notesTitle");
    const inputBody = this.root.querySelector(".notesBody");

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [inputTitle, inputBody].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const updateTitle = inputTitle.value.trim();
        const updateBody = inputBody.value.trim();

        this.onNoteEdit(updateTitle, updateBody);
      });
    });
  }

  // "_" ->>> private method
  _createListItemHTML(id, title, body, updated) {
    const MA_BODY_LENGTH = 60;
    return `
    <div class="notesList-item" data-note-id=${id}>
        <div class="notesSmall-title">
          ${title}
        </div>
        <div class="notesSmall-body">
          ${body.substring(0, MA_BODY_LENGTH)}
          ${body.length > MA_BODY_LENGTH ? "..." : ""}
        </div>
        <div class="notesSmall-updated">
         ${updated}
        </div>
    </div>
    `;
  }

  updateNoteList(notes) {
    const notesListContainer = this.root.querySelector(".notesList");

    for (const note of notes) {
      const html = this._createListItemHTML(
        note.id,
        note.title,
        note.body,
        new Date(note.update)
      );
      notesListContainer.insertAdjacentHTML("beforeend", html);
    }

    // Select a memo(one note)
    notesListContainer.querySelectorAll('.notesList-item').forEach((noteListItem) => {
      noteListItem.addEventListener("click", () => {
        console.log(noteListItem.dataset)
        this.onNoteSelect(noteListItem.dataset.noteId)
      })
    })
  }
}
