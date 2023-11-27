/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/

//Svolgimento

// acquisisco l'elemento che ha per classe box
const Box = document.querySelector(".Box");

// acquisisco l'elemento che ha per classe string: nome della stringa composta
const scelta = document.querySelector(".scelta");

// acquisisco l'elemento (bottone) che ha per id controllo,
const chekButton = document.getElementById("controllo1");


// Quando viene cliccato il pulsante ivia
chekButton.addEventListener("click",

    function () {

        let val1 = scelta.value;
        
        document.getElementById("first").style="display:none"; 

        document.getElementById("second").style="display:block"; 

        checkValue(val1);
    }
);

function checkValue(val1) {
    if(val1 === "pari")
}