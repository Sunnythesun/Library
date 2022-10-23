let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title - title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function () {
        console.log(title + " by " + author + ", " + pages + ", " + readStatus)
    }

}

const shogun = new Book("'Shogun'", "James Clavell", "1152", "Read");
const taipan = new Book("'Tai-Pan'", "James Clavell", "727", "Read");
const gaijin = new Book("'Gai-Jin'", "James Clavell", "1126", "Not Read");

myLibrary.push(shogun);
myLibrary.push(taipan);
myLibrary.push(gaijin);


shogun.info();
taipan.info();
gaijin.info();

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
}

// function addBookToLibrary() {
//     console.log(Shogun.title);
// }


