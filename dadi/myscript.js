let numeroGiocatore = parseInt(6* Math.random() + 1);

document.getElementById("numero_giocatore").innerHTML = numeroGiocatore;

let numeroComputer = parseInt(6* Math.random() + 1);

document.getElementById("numero_computer").innerHTML = numeroComputer;

if (numeroGiocatore > numeroComputer) {
    document.getElementById("giocatore").innerHTML = "Tu!"
} else {
    document.getElementById("computer").innerHTML = "Il computer"
}


