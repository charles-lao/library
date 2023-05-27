/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */

// refactor old book object to class and create modules for library and library display


class Book {
    constructor(author, title, noOfPages, isRead) {
        this.author = author;
        this.title = title;
        this.noOfPages = noOfPages;
        this.isRead = isRead;
    }
}

const library = (() => {

    const myLibrary = [];

    // sample books
    const _book1 = new Book('J.K. Rowling', 'Harry Potter and the Deathly Hallows', 607, 'No');
    const _book2 = new Book('J.K. Rowlong', 'Harry Potter and the Philosopher\'s Stone', 223, 'No');

    const addBookToLibrary = (newBook) => {
        // do stuff here
        myLibrary.push(newBook);
        
    }

    addBookToLibrary(_book1);
    addBookToLibrary(_book2);

    return {
        myLibrary, addBookToLibrary
    }
})();



const libraryDisplay = (() => {

    const libraryTable = document.querySelector('.library-tbody');
    const bookForm = document.querySelector('.book-form');

    const authorInput = document.querySelector('#author');
    const titleInput = document.querySelector('#title');
    const pagesInput = document.querySelector('#pages');

    function addBookRows() {

        // reset tbody
        libraryTable.textContent = '';
    
        for (let i = 0; i < library.myLibrary.length; i++) {
            
            const row = document.createElement('tr');
    
            for (let j = 0; j < 5; j++) {
    
                const cell = document.createElement('td');
    
                if(j == 4) {
                    const removeBtn = document.createElement('input');
                    removeBtn.setAttribute('type', 'button');
                    removeBtn.setAttribute('value', 'REMOVE');
                    removeBtn.setAttribute('data-index-number', i);
                    removeBtn.setAttribute('class', 'remove-btns');
    
                    const readBtn = document.createElement('input');
                    readBtn.setAttribute('type', 'button');
                    readBtn.setAttribute('value', 'READ / UNREAD');
                    readBtn.setAttribute('data-index-number', i);
                    readBtn.setAttribute('class', 'remove-btns');
                    
                    removeBtn.addEventListener('click', function (e) {
                        library.myLibrary.splice(this.dataset.indexNumber, 1);
                        addBookRows();
                    });
    
                    readBtn.addEventListener('click', function (e) {
                        
    
                        switch(library.myLibrary[i].isRead) {
                            case 'Yes':
                                library.myLibrary[i].isRead = 'No';
                                break;
                            case 'No':
                                library.myLibrary[i].isRead = 'Yes';
                                break
                            default:
                                break;
                        }
                        addBookRows();
                    });
    
                    cell.appendChild(removeBtn);
                    cell.appendChild(readBtn);
                } else {
                    const cellText = document.createTextNode(Object.values(library.myLibrary[i])[j]);
                    cell.appendChild(cellText);
                }
                
                row.appendChild(cell);
            }
    
            libraryTable.appendChild(row);
    
        }
    };


    const addBookBtn = document.querySelector('#add-btn');
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

    const cancelBtn = document.querySelector('#cancel-btn');
    cancelBtn.addEventListener('click', () => {
        bookForm.style.display = 'none';
    });

    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', () => {

        
        // check if all fields are filled up
        if(authorInput.value != "" && titleInput.value != "" && pagesInput.value != "") {

        
            let isRead;
        
            if(document.getElementById('yes').checked){
                isRead = 'Yes';
            } else if (document.getElementById('no').checked) {
                isRead = 'No';
            }
        
            const newBook = new Book(authorInput.value, titleInput.value, pagesInput.value, isRead);
            library.addBookToLibrary(newBook);
            addBookRows();

        }
    });

    return {
        addBookRows
    }

})();


// prevent the submit button from refreshing the page
const handleSubmit = (event) => {
    event.preventDefault();
}

libraryDisplay.addBookRows();







