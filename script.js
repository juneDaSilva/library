// ------ MAIN WORKING PIECES -----

// Library array
let myLibrary = [];

// Book constructor
class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = Boolean(readStatus);
  }
}

// ------- -------- Table populator

function buildTable(library) {
  // get address for table body
  const tbody = document.querySelector(".booksList");
  // clear table body and prepare it to be populated with new things (necessary?)
  tbody.innerHTML = "";

  // loop over length of library and create row for each entry
  for (let i = 0; i < library.length; i++) {
    let row = document.createElement("tr");
    row.classList.add("bookRow");

    // loop through entries in each book
    // for entry, create a cell and populate it with corresponging HTML
    for (let key in library[i]) {
      let cell = document.createElement("td");
      cell.classList.add("bodyCell");

      if (library[i][key] === false) {
        cell.innerHTML = "not read";
        cell.classList.add("readStatus");
      } else if (library[i][key] === true) {
        cell.innerHTML = "read";
        cell.classList.add("readStatus");
      }
      // populate book information here by taking the keyth part of the ith book
      else {
        cell.innerHTML = library[i][key];
      }

      cell.value = i;

      row.append(cell);
    }
    // create one last cell for a remove button
    let removeCell = document.createElement("td");
    removeCell.classList.add("bodyCell");

    // create inner image element to put inside remove cell
    let removeImg = document.createElement("img");
    removeImg.classList.add("removeButton"); // add class that will allow removeImg to inherit properties from css
    removeImg.value = library[i].title;

    removeCell.append(removeImg); // add removeImg into new removeCell

    row.append(removeCell); // add new removeCell into row

    tbody.append(row); // add new row into table body
  }

  // Adding the removeButton listener inside the build table function somehow works
  // whereas building it outside doesnt. Probably because outside only runs "queryselector once"
  // so when build table function is run again, query selector isnt run again.
  removeButton = document.querySelectorAll(".removeButton");

  removeButton.forEach((button) => {
    button.addEventListener("click", () => {
      // console.log(button.value);

      for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === button.value) {
          myLibrary.splice(i, 1);
          buildTable(library);
        }
      }
    });
  });

  readButton = document.querySelectorAll(".readStatus");

  readButton.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.innerHTML === "read") {
        myLibrary[button.value] = false;
        button.innerHTML = "not read";
      } else {
        myLibrary[button.value] = true;
        button.innerHTML = "read";
      }
    });
  });
}

// ------- ------ Book log form ------ -------

const logButton = document.querySelector(".log-button");
const logArrow = document.querySelector(".log-arrow");
const formContainer = document.querySelector(".form-container-folded");

// function to make arrow rotate
function toggleArrow() {
  logArrow.classList.toggle("log-arrow-active");
}

// function to make form appear
function toggleForm() {
  formContainer.classList.toggle("form-unfolded");
  addFormListeners();
}

// make toggleForm and toggleArrow activate on button click
logButton.addEventListener("click", () => {
  toggleArrow(); // why does this one need a ()
  toggleForm; // but not this one?
});

// ------- ------ Add book from form ------ ------ -------

// Log book function
function addBook(book) {
  myLibrary.push(book);
}

form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  title = document.getElementById("title");
  author = document.getElementById("author");
  pages = document.getElementById("pages");
  read = document.getElementById("readStatus");

  // make a book
  var book = new Book(title.value, author.value, pages.value, read.checked);

  addBook(book); // put book into "myLibrary"

  buildTable(myLibrary); // rebuild table with updated myLibrary

  //  clear form
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;

  e.preventDefault();
});

const addFormListeners = () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");

  title.addEventListener("input", () => {
    validateInput(title);
  });

  author.addEventListener("input", () => {
    validateInput(author);
    // title.setCustomValidity("imma need an author here dawg");
  });

  pages.addEventListener("input", () => {
    validateInput(pages);
  });
};

const validateInput = (target) => {
  if (target.value == "") {
    target.className = "invalid";
    target.setCustomValidity("imma need something here dawg");
  } else {
    target.className = "valid";
    target.setCustomValidity("");
  }
};

// ------- ------- run functions ------- ------

var book1 = new Book("The Sun Also Rises", "Ernest Hemingway", 147, true);
var book2 = new Book("Women", "Charles Bukowski", 291, true);
var book3 = new Book(
  "Notes From The Underground",
  "Fyodor Dosteovsky",
  124,
  true
);

addBook(book1);
addBook(book2);
addBook(book3);

buildTable(myLibrary);

// ------- -------- Remove book button -------- --------
