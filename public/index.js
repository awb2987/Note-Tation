// Get references to the DOM elements
let noteForm;
let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let clearBtn;
let noteList;

// Check if we are on the /notes page
document.addEventListener('DOMContentLoaded', () => {
  noteForm = document.querySelector('.note-form');
  noteTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  clearBtn = document.querySelector('.clear-btn');
  noteList = document.querySelector('#list-group');

  // Event listeners
  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  clearBtn.addEventListener('click', handleClearNote);

  // Fetch and render notes on page load
  getAndRenderNotes();
});

// SHOW an element
const show = (elem) => {
  elem.style.display = 'inline';
};

// HIDE an element
const hide = (elem) => {
  elem.style.display = 'none';
};

// ACTIVE Note
let activeNote = {};

// FETCH notes from the API
const getNotes = () => {
  return fetch('/api/notes').then(response => response.json());
};

// SAVE a new note via the API
const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note),
  });

// HANDLE saving a note
const handleNoteSave = (e) => {
  e.preventDefault();

  const newNote = {
    title: noteTitle.value,
    text: noteText.value,
  };

  if (!newNote.title || !newNote.text) {
    alert('Please fill in both title and text fields.');
    return;
  }

  saveNote(newNote)
    .then(() => {
      getAndRenderNotes();
      renderActiveNote();
    })
    .catch(err => {
      console.error('Error saving note:', err);
      alert('Failed to save note. Please try again.');
    });
};

// HANDLE clearing the note fields
const handleClearNote = () => {
  noteTitle.value = '';
  noteText.value = '';
  activeNote = {};
  renderActiveNote();
};

// RENDER the active note in the input fields
const renderActiveNote = () => {
  hide(saveNoteBtn);
  hide(clearBtn);

  if (activeNote.id) {
    show(newNoteBtn);
    noteTitle.setAttribute('readonly', true);
    noteText.setAttribute('readonly', true);
    noteTitle.value = activeNote.title;
    noteText.value = activeNote.text;
  } else {
    hide(newNoteBtn);
    noteTitle.removeAttribute('readonly');
    noteText.removeAttribute('readonly');
    noteTitle.value = '';
    noteText.value = '';
  }
};

// RENDER the list of notes
const renderNoteList = async (notes) => {
  if (window.location.pathname === '/notes') {
    noteList.innerHTML = '';
  }

  let noteListItems = [];

  const createLi = (text, delBtn = true) => {
    const liEl = document.createElement('li');
    liEl.classList.add('list-group-item');

    const spanEl = document.createElement('span');
    spanEl.classList.add('list-item-title');
    spanEl.innerText = text;
    spanEl.addEventListener('click', handleNoteView);

    liEl.append(spanEl);

    if (delBtn) {
      const delBtnEl = document.createElement('i');
      delBtnEl.classList.add('fas', 'fa-trash-alt', 'float-right', 'text-danger', 'delete-note');
      delBtnEl.addEventListener('click', handleNoteDelete);
      liEl.append(delBtnEl);
    }

    return liEl;
  };

  if (notes.length === 0) {
    noteListItems.push(createLi('No saved Notes', false));
  } else {
    notes.forEach((note) => {
      const li = createLi(note.title);
      li.dataset.note = JSON.stringify(note);
      noteListItems.push(li);
    });
  }

  noteListItems.forEach((note) => noteList.append(note));
};

// FETCH notes and render them on page load
const getAndRenderNotes = () => 
  getNotes()
    .then(renderNoteList)
    .catch(err => {
      console.error('Error fetching notes:', err);
      alert('Failed to fetch notes. Please try again.');
    });

// Handle new note view
const handleNewNoteView = (e) => {
  activeNote = {};
  show(clearBtn);
  renderActiveNote();
};

// SETS the active note based on user selection
const handleNoteView = (e) => {
  e.preventDefault();
  activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'));
  renderActiveNote();
};

// Handle deleting a note
const handleNoteDelete = (e) => {
  e.stopPropagation();
  const noteId = JSON.parse(e.target.parentElement.getAttribute('data-note')).id;
  
  fetch(`/api/notes/${noteId}`, {
    method: 'DELETE'
  })
  .then(() => {
    getAndRenderNotes();
    renderActiveNote();
  })
  .catch(err => {
    console.error('Error deleting note:', err);
    alert('Failed to delete note. Please try again.');
  });
};
