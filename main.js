const prezzoKm = 0.21;
const sconto20 = 0.8;
const sconto40 = 0.6;

//esercizio base
/*
let eta = parseInt(prompt("Inserisci la tua età"));
if (eta )
let km = parseInt(prompt("Inserisci il numero di chilometri del viaggio"))

// struttura della sezione di condizione
if (eta <= 17) {
    // calcolo costo del biglietto
    let prezzoBiglietto = km * prezzoKm * sconto20;
    //stampo il risultato
    document.getElementById('sconto').innerHTML = "hai diritto ad uno sconto del 20%"
    document.getElementById('prezzo').innerHTML = "il prezzo del biglietto è: " + (prezzoBiglietto.toFixed(2)) + "\u20AC";
}else if (eta >= 65){
    // calcolo costo del biglietto
    let prezzoBiglietto = km * prezzoKm * sconto40;
    //stampo il risultato
    document.getElementById('sconto').innerHTML = "hai diritto ad uno sconto del 40%"
    document.getElementById('prezzo').innerHTML = "il prezzo del biglietto è: " + (prezzoBiglietto.toFixed(2)) + "\u20AC";


}else{
    // calcolo costo del biglietto
    let prezzoBiglietto = km * prezzoKm ;
    //stampo il risultato
    document.getElementById('prezzo').innerHTML = "Il prezzo del biglietto è: " + (prezzoBiglietto.toFixed(2)) + "\u20AC";

}
*/

// esercizio che controlla che il dato d'ingresso sia un numero
let eta = prompt("inserisci la tua età");

//struttura di controllo con if che è valida solo una volta
/*if (isNaN(eta)){
    alert("Il valore inserito non è numerico");
    eta = parseInt(prompt("Inserisci la tua età"));
    
} */

//struttura di controllo con while che è valida all'infinito
while (isNaN(eta)){
    alert("Il valore inserito non è numerico");
    eta = prompt("Inserisci la tua età");
}

let km = prompt("Inserisci il numero di chilometri del viaggio");
//struttura di controllo con if che è valida solo una volta
/*
if (isNaN(eta)){
    alert("il valore inserito non è numerico");
    km = parseInt(prompt("Inserisci il numero di chilometri del viaggio"));
}

*/
// struttura della sezione di condizione
while (isNaN(km)){
    alert("Il valore inserito non è numerico");
    km = prompt("Inserisci il numero di chilometri del viaggio");
}

if (eta <= 17) {
    // calcolo costo del biglietto
    let prezzoBiglietto = km * prezzoKm * sconto20;
    //stampo il risultato
    document.getElementById('sconto').innerHTML = "Hai diritto ad uno sconto del 20%"
    document.getElementById('prezzo').innerHTML = "il prezzo del biglietto è: " + (prezzoBiglietto.toFixed(2)) + "\u20AC";
}else if (eta >= 65){
    // calcolo costo del biglietto
    let prezzoBiglietto = km * prezzoKm * sconto40;
    //stampo il risultato
    document.getElementById('sconto').innerHTML = "Hai diritto ad uno sconto del 40%"
    document.getElementById('prezzo').innerHTML = "il prezzo del biglietto è: " + (prezzoBiglietto.toFixed(2)) + "\u20AC";


}else{
    // calcolo costo del biglietto
    let prezzoBiglietto = km * prezzoKm ;
    //stampo il risultato
    document.getElementById('prezzo').innerHTML = "Il prezzo del biglietto è: " + (prezzoBiglietto.toFixed(2)) + "\u20AC";

}