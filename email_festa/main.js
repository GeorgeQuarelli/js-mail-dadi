//creo lista mail
var mail = ['george@gmail.com', 'pluto@gmail.com', 'pippo@gmail.com', 'paperino@gmail.com']
console.log(mail);

//chiediamo l'email all'utente
var mail_utente = prompt('inserisci il tuo indirizzo email per vedere se è in lista')
console.log(mail_utente);

//nel caso inserisca una mail non presente nel sistema
var lista = false;

//controllo se l'email è nel sistema
for (var i = 0; i < mail.length; i++) {
    if (mail_utente == mail[i]) {
        lista = true;
    }
}

if (lista == true) {
    console.log('la tua mail è nella lista');
} else {
    console.log('la tua mail non è nella lista');
}
