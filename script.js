

// my library array of objects 

const myLibrary = [
  { title: 'Harry Potter', author: 'J.K Rowling', pages: 295, read: false },
];

// books grid 

const booksGrid = document.querySelector('.books-grid');

// loop through library array and create card element for each object


myLibrary.forEach((book) => {
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
  readBtn.classList.add('not-read');
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
});


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}
