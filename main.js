const prezzoKm = 0.21;
const sconto20 = 0.8;
const sconto40 = 0.6;

let eta = parseInt(prompt("Inserisci la tua età"));
let km = parseInt(prompt("Inserisci il numero di chilometri del viaggio"))

// struttura della sezione di condizione
if (eta <= 17) {
    // calcolo costo del biglietto

    let prezzoBiglietto = km * prezzoKm * sconto20;
    document.getElementById('prezzo').innerHTML = "hai diritto ad uno sconto del 20% \r il prezzo del biglietto è: " + (prezzoBiglietto.toFixed(2)) + "\u20AC";


}else if (eta >= 65){

    let prezzoBiglietto = km * prezzoKm * sconto40;
    document.getElementById('prezzo').innerHTML = "hai diritto ad uno sconto del 40% \r il prezzo del biglietto è: " + (prezzoBiglietto.toFixed(2)) + "\u20AC";


}else{
    let prezzoBiglietto = km * prezzoKm ;
    document.getElementById('prezzo').innerHTML = "Il prezzo del biglietto è: " + (prezzoBiglietto.toFixed(2)) + "\u20AC";

}
