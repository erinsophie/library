// my library array of objects 
const myLibrary = [];

// books grid 
const booksGrid = document.querySelector('.books-grid');

// capitalise first letter of input 
function capitaliseLetter(str) {
  const splitStr = str.split(' ');
  const capitalised = splitStr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalised.join(' ');
}

// check if library is empty
function isLibraryEmpty() {
  if(myLibrary.length === 0) {
    return true;
  } 
  return false;
}

function messageStatus() {
  const message = document.querySelector('.empty-msg');
  if(!isLibraryEmpty()) {
    message.style.display = 'none';
  } else {
    message.style.display = 'block';
  }
}

// update index of each card in myLibrary array

function updateCardIndexes() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.setAttribute('data-index', index);
  });
}


// create card element for the each book
function displayBook(book, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', index);
  
    const title = document.createElement('p');
    title.classList.add('book-title');
    title.textContent = capitaliseLetter(book.title);
  
    const author = document.createElement('p');
    author.classList.add('author');
    author.textContent = `by ${capitaliseLetter(book.author)}`
  
    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.textContent = `${book.pages} pages`;
  

    // READ BUTTON
    const readBtn = document.createElement('button');
    readBtn.classList.add('read-btn');
    // displays inital value based on checkbox
    readBtn.textContent = book.read ? 'Read' : 'Not read';
    if(book.read) {
      readBtn.classList.add('green')
    } else {
      readBtn.classList.add('red')
    }
    // toggle read status when button is clicked
    readBtn.addEventListener('click', () => {
    book.toggleReadStatus();
    readBtn.textContent = book.read ? 'Read' : 'Not read';
    readBtn.classList.toggle('green', book.read);
    readBtn.classList.toggle('red', !book.read);
  });

   // REMOVE BUTTON
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      const cardIndex = card.dataset.index;
      card.remove();
      myLibrary[cardIndex].removeBook(cardIndex);
      isLibraryEmpty();
      messageStatus();
    });
  
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    btnContainer.appendChild(readBtn);
    btnContainer.appendChild(removeBtn);
  
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(btnContainer);
  
    booksGrid.appendChild(card);
    isLibraryEmpty()
    messageStatus();
  };


// make form pop up when add book button is clicked
const modal = document.querySelector('.modal');
const addBookBtn = document.querySelector('.add-btn')
const overlay = document.querySelector('.overlay')
const form = document.getElementById('book-form');

addBookBtn.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
  form.reset();
})

// class 
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleReadStatus() {
    this.read = !this.read;
  }

  removeBook(index) {
    myLibrary.splice(index, 1);
    updateCardIndexes();
  }
}


// close modal
function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', closeModal);


// check library in case book already exists 
function checkLibrary(book) {
  for(let i = 0; i < myLibrary.length; i++) {
    if(book.title === myLibrary[i].title) {
      alert('This book already exists in your library')
      return true;
    }
  }
  return false;
}


// Add book to library when form button is clicked
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    alert('Please fill out all fields');
    return;
  }

  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const read = document.querySelector('#is-read').checked;

  const newBook = new Book(title, author, pages, read);

  // if book already exists, then exit addBook function
  if(checkLibrary(newBook)) {
    return;
  }
  
  myLibrary.push(newBook);
  const index = myLibrary.indexOf(newBook);
  displayBook(newBook, index);
  closeModal();
});