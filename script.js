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

// Log book function
function addBook(book) {
  myLibrary.push(book);
}

// ------- ------    ---    ------ -------


console.log(myLibrary);

// const omats = new Book('The Old Man and the Sea', 'Ernest Hemingway', 150)

addBook(new Book( 'The Old Man and the Sea', 
                  'Ernest Hemingway', 
                  150));

console.log(myLibrary);


// const mf = new Book('A Moveable Feast', 'Ernest Hemingway', 300, true)

addBook(new Book( 'A Moveable Feast', 
                  'Ernest Hemingway', 
                  300, 
                  true));

console.log(myLibrary);
console.log(myLibrary[1].readStatus);


// table populator 

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
    tbody.append(row);
  };
}

// ------- ------ Book log form ------ -------

const logButton = document.querySelector('.log-button');
const logArrow = document.querySelector('.log-arrow');
const formContainer = document.querySelector('.form-container');

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






// ------- ------- run functions ------- ------
buildTable(myLibrary);

