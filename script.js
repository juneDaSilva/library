// ------ MAIN WORKING PIECES -----

// Library array
let myLibrary = [];

// Book constructor
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = Boolean(readStatus);
}


// ------- -------- Table populator 

function buildTable(library) {
  const tbody = document.querySelector('.booksList');
  tbody.innerHTML = '';

  // loop over length of library and create row for each entry
  for (let i = 0; i < library.length; i++) {
    let row = document.createElement('tr');
    row.classList.add('bookRow');
      
      // loop through entries in each book
      // for entry, create a cell and populate it with corresponging HTML 
      for (let key in library[i]) {
        let cell = document.createElement('td');
        cell.classList.add('bodyCell');
        
        if (library[i][key] === false) { 
          cell.innerHTML = 'not read';
        }
        else if (library[i][key] === true) {
          cell.innerHTML = 'read'
        } else {cell.innerHTML = library[i][key];}
        

        row.append(cell);
      }
      // create one last cell for a remove button 
      let removeCell = document.createElement('td');
      removeCell.classList.add('bodyCell');

      // create inner image element to put inside remove cell
      let removeImg = document.createElement('img');
      removeImg.classList.add('removeButton'); // add class that will allow removeImg to inherit properties from css
      removeImg.value = library[i].title;
      
      removeCell.append(removeImg); // add removeImg into new removeCell

      row.append(removeCell); // add new removeCell into row
      
      tbody.append(row); // add new row into table body
  };

  // Adding the removeButton listener inside the build table function somehow works
  // whereas building it outside doesnt. Dont know why.
  removeButton = document.querySelectorAll('.removeButton');

  removeButton.forEach((button) => {
    button.addEventListener('click', () => {
      // console.log(button.value);
      
      for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === button.value) {
          myLibrary.splice(i, 1);
          buildTable(library);
        }
      }
    });
  });
}

// ------- ------ Book log form ------ -------

const logButton = document.querySelector('.log-button');
const logArrow = document.querySelector('.log-arrow');
const formContainer = document.querySelector('.form-container-folded');

// function to make arrow rotate
function toggleArrow() {
  logArrow.classList.toggle('log-arrow-active')
}

// function to make form appear
function toggleForm() {
  formContainer.classList.toggle('form-unfolded')
}

// make toggleForm and toggleArrow activate on button click
logButton.addEventListener('click', () => {
  toggleArrow(); // why does this one need a ()
  toggleForm; // but not this one?
});

// ------- ------ Add book from form ------ ------ -------

// Log book function
function addBook(book) {
  myLibrary.push(book);
}

form = document.querySelector('.form');

form.addEventListener("submit", (e) => {
    
  title = document.querySelector('#title');
  author = document.querySelector('#author');
  pages = document.querySelector('#pages');
  read = document.querySelector('#readStatus');
  
  // make a book
  var book = new Book(title.value, author.value, pages.value, read.checked);

  addBook(book);

  buildTable(myLibrary);

  //  clear form
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;

  e.preventDefault();
})

// ------- ------- run functions ------- ------

var book1 = new Book('The Sun Also Rises', 'Ernest Hemingway', 147, true);
var book2 = new Book('Women', 'Charles Bukowski', 291, true);
var book3 = new Book('Notes From The Underground', 'Fyodor Dosteovsky', 124, true);

addBook(book1);
addBook(book2);
addBook(book3);

buildTable(myLibrary);


// ------- -------- Remove book button -------- --------

// removeButton = document.querySelectorAll('.removeButton');

// removeButton.forEach((button) => {
//   button.addEventListener('click', () => {
//     // console.log(button.value);
    
//     for (let i = 0; i < myLibrary.length; i++) {
//       if (myLibrary[i].title === button.value) {
//         myLibrary.splice(i, 1);
//         console.log(myLibrary);
//       }
//     }
//   });
// });

