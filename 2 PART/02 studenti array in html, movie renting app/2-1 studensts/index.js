let studenti = [];

let ime = document.getElementById('firstName');
let prezime = document.getElementById('lastName');
let godine = document.getElementById('age');
let email = document.getElementById('mail');

let dugme = document.getElementById('btn');
let spisak = document.getElementById('list');


function clearInput() {
    ime.value = "";
    prezime.value = "";
    godine.value = "";
    email.value = "";

};

dugme.addEventListener('click', function () {
    let student = {
        ime: ime.value,
        prezime: prezime.value,
        godine: godine.value,
        email: email.value
    };

    studenti.push(student);
    console.log(studenti);

    let final = `<p class="fw-bold fs-5">${ime.value} ${prezime.value} - ${godine.value} godina</p><p>${email.value}</p>`;
    spisak.insertAdjacentHTML("beforeend", final)
    clearInput();
});












