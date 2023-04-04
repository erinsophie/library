// my library array of objects 

const myLibrary = [
  { title: 'Harry Potter', author: 'J.K Rowling', pages: 295, read: false },
];

// books grid 

const booksGrid = document.querySelector('.books-grid');

// create card element for the last object that was added (most recent book)

function displayBook() {
   const book = myLibrary[myLibrary.length - 1];

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
    readBtn.textContent = 'Not read';
  
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
  
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


displayBook()

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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add book to library when button is clicked

function addBook(event) {
  event.preventDefault(); 

  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const read = document.querySelector('#is-read').checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  displayBook();
  closeModal();
}
 
formBtn.addEventListener('click', addBook);




