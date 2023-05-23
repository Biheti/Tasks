var movies = ["the godfather", "the shawshank redemption", "the dark knight", "pulp fiction", "the lord of the rings"];

function checkAvailability() {
    var movieInput = document.getElementById("movieInput").value.toLowerCase();
    var result = document.getElementById("result");
    if (movies.includes(movieInput)) {
        result.textContent = "Film " + movieInput + " je dostupan za iznajmljivanje.";
        result.style.color = "green";
    } else {
        result.textContent = "Film " + movieInput + " nije dostupan.";
        result.style.color = "red";

    };
};

var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", checkAvailability);


