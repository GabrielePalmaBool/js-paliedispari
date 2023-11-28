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



// Quando viene cliccato il pulsante ivia (1 volta)
chekButton.addEventListener("click",

    function () {

        let val1 = scelta.value;
        
        document.getElementById("first").style="display:none"; 

        checkValue(val1);
    }
);




function checkValue(val1) {

    //se il valore scelto è pari
    if(val1 === "Pari"){

        document.getElementById("second").style="display:block"; 

        // Quando viene cliccato il pulsante ivia (2 volta)
        chekButton.addEventListener("click",

        function () {

            if(document.querySelector(".number").checked === true) {

                const number = document.querySelector(".number");

                let val2 = number.value;

                winner(val1,val2);
            }

            else if(document.querySelector(".number2").checked === true) {

                const number = document.querySelector(".number2");

                let val2 = number.value;

                winner(val1,val2);
            }

            else if (document.querySelector(".number3").checked === true) {

                const number = document.querySelector(".number3");

                let val2 = number.value;

                winner(val1,val2);
            }

        }
        );

    }

    //se il valore scelto è dispari
    else{

        document.getElementById("third").style="display:block"; 

        // Quando viene cliccato il pulsante ivia (2 volta)
        chekButton.addEventListener("click",

        function () {

            if(document.querySelector(".number4").checked === true) {

                const number = document.querySelector(".number4");

                let val2 = number.value;

                winner(val1,val2);
            }

            else if(document.querySelector(".number5").checked === true) {

                const number = document.querySelector(".number5");

                let val2 = number.value;

                winner(val1,val2);
            }

            else if (document.querySelector(".number6").checked === true) {

                const number = document.querySelector(".number6");

                let val2 = number.value;

                winner(val1,val2);
            }

        }
        );

    }
    
}




//funzione per la scelta del vincitore
function winner(val1, val2){

    //acquisisco scelta del giocatore
    let TypeU = val1;
    let valU = val2;

    //acquisico random il numero scelto del pc;
    let valPc = Math.floor(Math.random() * 7);

    //acquisisco i valore nel tag p(qualora ci fosse)
    const number = document.querySelector('#box p');

    //Verifico che c'è
    if(number != null){
    
        //rimuovo qualsiasi cosa ci sia
        Box.removeChild(Box.lastChild);
    }

    //verifico che il numero scelto dal pc sia pari
    if(valPc % 2 === 0){

        //se il valore scelto dal pc è maggiore del valore scelto dall'utente
        if(valPc > valU){

            //Creo l'elemento all'interno del mio file html
            const stringa = document.createElement ("p");

            //inserisco scritta all'interno del mio contenuto
            stringa.append("Vince computer con: "+valPc+ " un valore Pari");

            //inserisco stringa all'interno del mio contenitore
            Box.append(stringa);

        }

        //in alternativa
        else if (valPc < valU) {

            //Creo l'elemento all'interno del mio file html
            const stringa = document.createElement ("p");

            //inserisco scritta all'interno del mio contenuto
            stringa.append("Vince giocatore con: "+valU+ " un valore "+TypeU);

            //inserisco stringa all'interno del mio contenitore
            Box.append(stringa);

        }

        // in caso di valori uguali
        else {

            //Creo l'elemento all'interno del mio file html
            const stringa = document.createElement ("p");

            //inserisco scritta all'interno del mio contenuto
            stringa.append("Parità");

            //inserisco stringa all'interno del mio contenitore
            Box.append(stringa);

        }

    }

    //in alternativa
    else {

        //se il valore scelto dal pc è maggiore del valore scelto dall'utente
        if (valPc > valU){

            //Creo l'elemento all'interno del mio file html
            const stringa = document.createElement ("p");

            //inserisco scritta all'interno del mio contenuto
            stringa.append("Vince computer con: "+valPc+ " un valore Dispari");

            //inserisco stringa all'interno del mio contenitore
            Box.append(stringa);

        }

        //in alternativa
        else if (valPc < valU) {

            //Creo l'elemento all'interno del mio file html
            const stringa = document.createElement ("p");

            //inserisco scritta all'interno del mio contenuto
            stringa.append("Vince giocatore con: "+valU+ " un valore "+TypeU);

            //inserisco stringa all'interno del mio contenitore
            Box.append(stringa);

        }

        // in caso di valori uguali
        else {

            //Creo l'elemento all'interno del mio file html
            const stringa = document.createElement ("p");

            //inserisco scritta all'interno del mio contenuto
            stringa.append("Parità");

            //inserisco stringa all'interno del mio contenitore
            Box.append(stringa);

        }
    }

}