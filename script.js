/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const myLibrary = [];
const libraryTable = document.querySelector('.library-tbody');
const addBookBtn = document.querySelector('#add-btn');

const bookForm = document.querySelector('.book-form');
const cancelBtn = document.querySelector('#cancel-btn');
const submitBtn = document.querySelector('#submit-btn');

const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');

function Book(author, title, noOfPages) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
}

function addBookToLibrary(newBook) {
    // do stuff here
    myLibrary.push(newBook);
    
}


// sample books
const book1 = new Book('J.K. Rowling', 'Harry Potter and the Deathly Hallows', 607);
const book2 = new Book('J.K. Rowlong', 'Harry Potter and the Philosopher\'s Stone', 223);

addBookToLibrary(book1);
addBookToLibrary(book2);

function addBookRows() {

    // reset tbody
    libraryTable.textContent = '';

    for (let i = 0; i < myLibrary.length; i++) {
        
        const row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {

            const cell = document.createElement('td');
            const cellText = document.createTextNode(Object.values(myLibrary[i])[j]);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        libraryTable.appendChild(row);

    }
}

addBookRows();

addBookBtn.addEventListener('click',  () => {

    switch(bookForm.style.display){
        case 'none':
            bookForm.style.display = 'flex';
            break;
        case 'flex':
            bookForm.style.display = 'none';
            break;
        default:
            bookForm.style.display = 'flex';
            break;
    }
});

cancelBtn.addEventListener('click', () => {
    bookForm.style.display = 'none';
});

submitBtn.addEventListener('click', () => {
    const newBook = new Book(authorInput.value, titleInput.value, pagesInput.value);
    addBookToLibrary(newBook);
    addBookRows();
});