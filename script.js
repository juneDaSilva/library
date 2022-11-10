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