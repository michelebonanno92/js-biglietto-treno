/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


passi ds seguire :
1 chideo il numero  di kilometri all'utente e lo salvo
1 chiedo l'età all' utente e lo salvo 
3 calcolo il prezzo base del biglietto
4 calcolo eventuali sconti :
 a se l'utente è minorenne : 
    - applico sconto del 20% 
 b altrimenti se l'utente è over 65 : 
    - applico sconto del 40% 
 c Altrimenti
 niente ssconto 

*/


//  chideo il numero  di kilometri all'utente e lo salvo
const percorso = prompt('Quanti Kilometri vuoi percorrere?', "100");
console.log('i kilometri che vuole percorrere il passegero sono' , percorso , typeof percorso );
const percorsoInNumber = parseInt(percorso);
console.log('percorsoInNumber' , percorsoInNumber , typeof percorsoInNumber );

//  chideo il numero  di kilometri all'utente e lo salvo
const eta = prompt('Quanti anni hai?' , 17) ;
console.log("Gli anni del passeggero sono" , eta , typeof eta ) ;
const etaInNumber = parseInt(eta);
console.log('etaInNumber' , etaInNumber , typeof etaInNumber );

//  calcolo il prezzo base del biglietto
const prezzoBase =  0.21 ;
console.log("Il prezzo minimo al km è" , prezzoBase ) ;

const prezzoBiglietto = ( percorso * prezzoBase ) ;
console.log("Il costo totale al km è" , prezzoBiglietto ) ;
// se utente minorenne applico sconto del 20% sul prezzo base 

if(isNaN(etaInNumber) || isNaN(percorsoInNumber)) {
    alert('Mannagia a te , scrvi solo numeri grazie')
}
else{
    if ( etaInNumber <= 17 ) {
        // const prezzoBigliettoSconto = (  prezzoBiglietto - ( prezzoBiglietto * 20 / 100 ) ) ;
        const prezzoBigliettoSconto = prezzoBiglietto * 0.8 ;
        console.log("Il costo totale al km con lo sconto del 20% è " , prezzoBigliettoSconto ) ;
        alert( 'il prezzo del biglietto è' + prezzoBigliettoSconto.toFixed(2))
    
    }// se utente over 65 applico sconto del 40% sul prezzo base 
    else if ( etaInNumber >= 66 ) {
        // const prezzoBigliettoSconto = (  prezzoBiglietto - ( prezzoBiglietto * 40 / 100 ) ) ;
        const prezzoBigliettoSconto = prezzoBiglietto * 0.6 ;
        console.log("Il costo totale al km con lo sconto del 40% è " , prezzoBigliettoSconto ) ;
        alert( 'il prezzo del biglietto è' + prezzoBigliettoSconto.toFixed(2))
    
    }// altrimenti nessun sconto sul prezzo base 
    else{
        alert( 'il prezzo del biglietto è ' + prezzoBiglietto.toFixed(2)  + ' nessuno sconto')
    
    } 
    
    
    
}
/* 







 */








 


