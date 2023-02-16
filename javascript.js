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
        return "'" + title + "'" + " by " + author + "\n" + "Pages: " + pages + "\n" + "Status: " + readStatus;
    }
}

const shogun = new Book("Shogun", "James Clavell", "1152", "Read");
const hp1 = new Book("Harry Potter and the Philosopher's Stone", "JK Rowling", "223", "Read");
const wap = new Book("War and Peace", "Leo Tolstoy", "1215", "Not Read");

myLibrary.push(shogun);
myLibrary.push(hp1);
myLibrary.push(wap);


//add book form
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let readStatus;
    const radioStatus = document.querySelectorAll('input[name="readStatus"]:checked');

    for (let i = 0; i < radioStatus.length; i++) {
        if (radioStatus[i].checked) {
            readStatus = radioStatus[i].value;
        }
    }

    const inputBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, readStatus);
    myLibrary.push(inputBook);

    document.getElementById("library").innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {                                //FIX THIS
        myLibrary[i].info();
    }

    //closes modal when submitting
    modal.style.display = "none";
    document.getElementById("form").reset();

});


for (let i = 0; i < myLibrary.length; i++) {
    //myLibrary[i].info();

    //generate cards dynamically
    const card = document.createElement("div");
    card.className = "card";
    document.getElementById("flex").appendChild(card);

    const cardText = document.createElement("p");
    cardText.innerText = myLibrary[i].info();;
    card.appendChild(cardText);
}


//modal
var modal = document.getElementById("modal");
var btn = document.getElementById("modalButton");
var span = document.getElementsByClassName("closeModal")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

