// my library array of objects 

const myLibrary = [];

// books grid 

const booksGrid = document.querySelector('.books-grid');

// create card element for the last object that was added (most recent book)

function displayBook(book, index) {

    const card = document.createElement('div');
    card.classList.add('card');
  
    const title = document.createElement('p');
    title.classList.add('book-title');
    title.textContent = book.title;
  
    const author = document.createElement('p');
    author.classList.add('author');
    author.textContent = `by ${book.author}`;
  
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
      book.removeBook(index);
      card.remove()
    })
  
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    btnContainer.appendChild(readBtn);
    btnContainer.appendChild(removeBtn);
  
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(btnContainer);
  
    booksGrid.appendChild(card);
  };


// make form pop up when add book button is clicked

const modal = document.querySelector('.modal');
const addBookBtn = document.querySelector('.add-btn')
const overlay = document.querySelector('.overlay')

addBookBtn.addEventListener('click', () => {
  modal.classList.add('active')
  overlay.classList.add('active')
})

// close modal

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', closeModal);

// form button

const formBtn = document.querySelector('.form-btn')

// constructor 

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// check library in case book already exists 

function checkLibrary(book) {
  for(let i = 0; i < myLibrary.length; i++) {
    if(book.title === myLibrary[i].title) {
      alert('This book already exists in your library')
      return true;
    }
  }
  return false 
}


// Add book to library when form button is clicked

function addBook(event) {
  event.preventDefault(); 

  // take the values from the inputs of the form and store them, then use them as the arguements for the new book constructor
 // loop through myLibrary to check if that book title already exists
 // assign an index to the new book and pass it to the function that creates the card
 // push the new book to the myLibrary array
 // call display book with the new book argument and its given index

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
}

// form button

formBtn.addEventListener('click', addBook);

// define read status function on prototype 

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};

// define remove book function on prototype

Book.prototype.removeBook = function(index) {
  myLibrary.splice(index, 1)
}










