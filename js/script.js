/* richiedere all'utente l'età del passeggero */
const passengerAge = parseInt(prompt('Inserire età del Passeggero'));

/* richiedere all'utente il numero di km da percorrere */
const travelDistance = parseInt(prompt('Inserire il numero di Chilometri del viaggio'))


console.log(`età del passeggero: ${passengerAge} - lunghezza del tragitto: ${travelDistance} `)

/*? calcolare prezzo viaggio in base ai km */

let travelPrice = travelDistance * 0.21

console.log(`Prezzo del viaggio senza sconti: ${travelPrice}€`)

/*? applicare sconto del 20% se <18 anni */
/*? applicare sconto del 40% se >65 anni */
/* colcolare il prezzo totale del viaggio */

/* mostrare sul schermo il prezzo eventualmente scontato con soli 2 decimali */