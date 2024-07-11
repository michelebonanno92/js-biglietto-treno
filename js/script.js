/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

const percorso = prompt('Quanti Kilometri vuoi percorrere?', "100");
console.log('i kilometri che vuole percorrere il passegero sono' , percorso);

const eta = prompt('Quanti anni hai?' , 17) ;
console.log("Gli anni del passeggero sono" , eta ) ;

const prezzoBase =  0.21 ;
console.log("Il prezzo minimo al km è" , prezzoBase ) ;

const prezzoBiglietto = ( percorso * prezzoBase ) ;
console.log("Il costo totale al km è" , prezzoBiglietto ) ;

if ( eta <= 17 ) {
    const prezzoBigliettoSconto = (  prezzoBiglietto - ( prezzoBiglietto * 20 / 100 ) ) ;
    console.log("Il costo totale al km con lo sconto del 20% è " , prezzoBigliettoSconto ) ;

}
else if ( eta >= 66 ) {
    const prezzoBigliettoSconto = (  prezzoBiglietto - ( prezzoBiglietto * 40 / 100 ) ) ;
    console.log("Il costo totale al km con lo sconto del 40% è " , prezzoBigliettoSconto ) ;
}
else{
} 









 


