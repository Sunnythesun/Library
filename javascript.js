let myLibrary = [];

const form = document.querySelector('#form');
const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function () {
        document.getElementById("library").innerHTML += (title + " by " + author + ", " + "Pages: " + pages + ", " + "Status: " + readStatus + "<br>");
    }

}

const shogun = new Book("'Shogun'", "James Clavell", "1152", "Read");
const taipan = new Book("'Tai-Pan'", "James Clavell", "727", "Read");
const gaijin = new Book("'Gai-Jin'", "James Clavell", "1126", "Not Read");

myLibrary.push(shogun);
myLibrary.push(taipan);
myLibrary.push(gaijin);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, "Not Read");
    myLibrary.push(inputBook);

    document.getElementById("library").innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].info();
    }

});

for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].info();
}

