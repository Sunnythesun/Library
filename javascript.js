let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title - title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function () {
        // console.log(title + " by " + author + ", " + pages + ", " + readStatus);
        document.getElementById("library").innerHTML += (title + " by " + author + ", " + "Pages: " + pages + ", " + "Status: " + readStatus + "<br>");
    }

}

function inputData() {
    var inputTitle = document.getElementById('inputTitle').value;
    var inputAuthor = document.getElementById('inputAuthor').value;
    var inputPages = document.getElementById('inputPages').value;
    var inputStatus = document.getElementById('inputStatus').value;
}

const shogun = new Book("'Shogun'", "James Clavell", "1152", "Read");
const taipan = new Book("'Tai-Pan'", "James Clavell", "727", "Read");
const gaijin = new Book("'Gai-Jin'", "James Clavell", "1126", "Not Read");
// const input = new Book(inputTitle, inputAuthor, inputPages, inputStatus);

myLibrary.push(shogun);
myLibrary.push(taipan);
myLibrary.push(gaijin);
// myLibrary.push(input);


for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].info();
}



