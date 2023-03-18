/* eslint-disable no-plusplus */
const myLibrary = [];
const libraryTable = document.querySelector('#library');

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

const book1 = new Book('J.K. Rowling', 'Harry Potter and the Deathly Hallows', 607);
const book2 = new Book('J.K. Rowlong', 'Harry Potter and the Philosopher\'s Stone', 223);

addBookToLibrary(book1);
addBookToLibrary(book2);

function addBookRows() {
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

addBookRows(myLibrary);

