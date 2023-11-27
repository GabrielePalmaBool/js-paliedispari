/*

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/


//Svolgimento

// acquisisco l'elemento che ha per classe box
const Box = document.querySelector(".Box");

// acquisisco l'elemento che ha per classe string: nome della stringa composta
const stringa = document.querySelector(".string");

// acquisisco l'elemento (bottone) che ha per id controllo,
const chekButton = document.getElementById("controllo");

// Quando viene cliccato il pulsante ivia
chekButton.addEventListener("click",

    function () {
        
        //chiamo la funzione per la ricerca di parola palindroma
        checkS();
    }
);


function checkS() {

    //Acquisisco il valore digitato dall'utente in pagina
    let val1 = stringa.value;

    //Acquisisco il primo carattere della stringa
    let FirstC=val1.slice(0, 1);

    //Acquisisco il secondo carattere della stringa
    let SecondC=val1.slice(1, 2);

    //Acquisisco il penultimo carattere della stringa
    let LastC2=val1.slice(-2, -1);

    //Acquisisco l'ultimo carattere della stringa
    let LastC=val1.slice(-1);

    //acquisisco i valore nel tag p(qualora ci fosse)
    const number = document.querySelector('#box p');

    //Verifico che c'è
    if(number != null){
    
        //rimuovo scritta dal documento
        Box.removeChild(Box.lastChild);
    }

    // controllo a 4 (prime due lettere con ultime due)
    if (FirstC === LastC && SecondC === LastC2){
        //Creo l'elemento all'interno del mio file html
        const stringa = document.createElement ("p");

        //inserisco scritta all'interno del mio contenuto
        stringa.append("La stringa è palindroma");

        //inserisco stringa all'interno del mio contenitore
         Box.append(stringa);
    }

    else {
         //Creo l'elemento all'interno del mio file html
         const stringa = document.createElement ("p");

         //inserisco scritta all'interno del mio contenuto
         stringa.append("La stringa non è palindroma");
 
         //inserisco stringa all'interno del mio contenitore
          Box.append(stringa);
    }

}

