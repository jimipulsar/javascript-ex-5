
// ESERCIZIO 1
document.writeln("<h3>Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.</h3>" ) ;

var studente = {
  nome : "Pietro",
  cognome : "Ricci",
  età : "33"
};

for(var key in studente) {
  document.writeln( key + ": " + studente[key] + "<br>");
}

// ESERCIZIO 2
document.writeln("<br> <h3>-Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome<br></h3>");

var studente1 = {
  nome : "Luigi",
  cognome : "Corvaglia",
  età : 25
};

var studente2 = {
  nome : "Paolo",
  cognome : "Palermo",
  età : 30
};

var studenti = [studente, studente1, studente2];

for (var i = 0; i < studenti.length; i++) {
  document.writeln("<br>");
  for(var key in studenti[i]) {
    document.writeln(key + ": " + studenti[i][key] + "<br>");
  }
}

// ESERCIZIO 3
document.writeln("<br><h3>- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.<br></h3>");

var studente_creato = crea_nuovo_studente();

studenti.push(studente_creato);


for (var i = 0; i < studenti.length; i++) {
  document.writeln("<br>");
  for(var key in studenti[i]) {
    document.writeln(key + ": " + studenti[i][key] + "<br>");
  }
}

console.log(studenti);

function crea_nuovo_studente() {

  var nuovo_studente = {
    nome : "",
    cognome : "",
    età : 0
  };

  for(var key in nuovo_studente) {
    nuovo_studente[key] = prompt("Inserisci " + key);
  }

return nuovo_studente;
}
