//estraiamo i dadi pe computer randomicamente da 1 a 6
var pc_dadi = Math.floor(Math.random()*5) +1;

//chiediamo all'utente un numero da 1 a 6
var dadi_utente = Math.floor(Math.random()*5) +1;

//risultati
var risultato ='';

if (dadi_utente <7 && dadi_utente >=1 && isNaN(dadi_utente) == false) {
    console.log(dadi_utente);
    console.log(pc_dadi);

    if (dadi_utente > pc_dadi) {
        risultato = 'hai vinto!';
        console.log('hai vinto!');

    } else if (dadi_utente == pc_dadi) {
        risultato = 'Hai pareggiato';
        console.log('Hai pareggiato');
    }
    else {
        risultato = 'hai perso';
        console.log('hai perso');
    }
} else {
    risultato = 'il dado ha 6 numeri';
    console.log('il dado ha 6 numeri');
}
