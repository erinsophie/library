// my library array of objects 

const myLibrary = [
  { title: 'Harry Potter', author: 'J.K Rowling', pages: 295, read: false },
];

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
  
    const readBtn = document.createElement('button');
    readBtn.classList.add('read-btn');
    // displays inital value based on checkbox
    readBtn.textContent = book.read ? 'Read' : 'Not read';
    // toggle read status when read button is clicked
    readBtn.addEventListener('click', () => {
    book.toggleReadStatus();
    readBtn.textContent = book.read ? 'Read' : 'Not read';
  });
  
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

Book.prototype.removeBook = function(index) {
  myLibrary.splice(index, 1)
}

function checkLibrary() {
  for(let i = 0; i < myLibrary.length; i++) {
    if(newBook.title === myLibrary[i].title) {
      
    }
  }
}








