let mailUtente = prompt("Inserire indirizzo e-mail");

let listaIscritti = ["gino@libero.it", "pino@libero.it", "gina@libero.it", "pina@libero.it"];

console.log (listaIscritti);

if (listaIscritti.includes(mailUtente)) {
    alert ("Benvenuto")
} else {
    alert ("Accesso negato")
}


