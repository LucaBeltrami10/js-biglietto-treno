/* richiedere all'utente l'età del passeggero */
const passengerAge = parseInt(prompt('Inserire età del Passeggero'));
document.getElementById('passenger-age').innerHTML = `${passengerAge}€`

/* richiedere all'utente il numero di km da percorrere */
const travelDistance = parseFloat(prompt('Inserire il numero di Chilometri del viaggio'))
document.getElementById('travel-distance').innerHTML = `${travelDistance}€`

console.log(`età del passeggero: ${passengerAge} - lunghezza del tragitto: ${travelDistance} `)

/*? calcolare prezzo viaggio in base ai km */

let travelPrice = travelDistance * 0.21

document.getElementById('initial-price').innerHTML = `${parseFloat(travelPrice).toFixed(2)}€`

console.log(`Prezzo del viaggio senza sconti: ${travelPrice}€`)

/*? applicare sconto del 20% se <18 anni */
/*? applicare sconto del 40% se >65 anni */
/* colcolare il prezzo totale del viaggio con eventuali sconti applicati */
if (passengerAge < 18){
    travelPrice = (travelDistance * 0.21) * 0.8
} else if (passengerAge > 65){
    travelPrice = (travelDistance * 0.21) * 0.6
}

console.log(`Prezzo del viaggio CON sconti: ${travelPrice}€`)
console.log(`Prezzo del viaggio CON sconti e arrotondato a 2 decimali: ${parseFloat(travelPrice).toFixed(2)}€`)


/* mostrare sul schermo il prezzo eventualmente scontato con soli 2 decimali */
document.getElementById('final-price').innerHTML = `${parseFloat(travelPrice).toFixed(2)}€`


