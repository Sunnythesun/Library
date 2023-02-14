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
        document.getElementById("library").innerHTML += ("'" + title + "'" + " by " + author + ", " + "Pages: " + pages + ", " + "Status: " + readStatus + "<br>");
    }

}

const shogun = new Book("Shogun", "James Clavell", "1152", "Read");
const taipan = new Book("Tai-Pan", "James Clavell", "727", "Read");
const gaijin = new Book("Gai-Jin", "James Clavell", "1126", "Not Read");

myLibrary.push(shogun);
myLibrary.push(taipan);
myLibrary.push(gaijin);


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

    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].info();
    }

    //closes modal when submitting
    modal.style.display = "none";
    document.getElementById("form").reset();

});


for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].info();
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

// //create card for book
const card = document.createElement("div");
card.className = "card";
document.getElementById("flex").appendChild(card);

const cardText = document.createElement("p");
cardText.innerText = "hello";
card.appendChild(cardText);

