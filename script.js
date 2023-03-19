/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
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

const removeBtns = document.querySelectorAll('.remove-btns');

function Book(author, title, noOfPages, isRead) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
    this.isRead = isRead;
}

function addBookToLibrary(newBook) {
    // do stuff here
    myLibrary.push(newBook);
    
}


// sample books
const book1 = new Book('J.K. Rowling', 'Harry Potter and the Deathly Hallows', 607, 'No');
const book2 = new Book('J.K. Rowlong', 'Harry Potter and the Philosopher\'s Stone', 223, 'No');

addBookToLibrary(book1);
addBookToLibrary(book2);

function addBookRows() {

    // reset tbody
    libraryTable.textContent = '';

    for (let i = 0; i < myLibrary.length; i++) {
        
        const row = document.createElement('tr');

        for (let j = 0; j < 5; j++) {

            const cell = document.createElement('td');

            if(j == 4) {
                const cellBtn = document.createElement('input');
                cellBtn.setAttribute('type', 'button');
                cellBtn.setAttribute('value', 'REMOVE');
                cellBtn.setAttribute('data-index-number', i);
                cellBtn.setAttribute('class', 'remove-btns');
                
                cellBtn.addEventListener('click', function (e) {
                    myLibrary.splice(this.dataset.indexNumber, 1);
                    addBookRows();
                });

                cell.appendChild(cellBtn);
            } else {
                const cellText = document.createTextNode(Object.values(myLibrary[i])[j]);
                cell.appendChild(cellText);
            }

            

            
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

    let isRead;

    if(document.getElementById('yes').checked){
        isRead = 'Yes';
    } else if (document.getElementById('no').checked) {
        isRead = 'No';
    }

    const newBook = new Book(authorInput.value, titleInput.value, pagesInput.value, isRead);
    addBookToLibrary(newBook);
    addBookRows();
});

