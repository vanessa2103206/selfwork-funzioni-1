function giocoDadi() {
    // 1. Chiediamo all'utente quanti tiri effettuare e lo convertiamo in numero
    let tiri = parseInt(prompt("Quanti tiri di dado volete effettuare?"));

    // Controlliamo se l'utente ha inserito un numero valido
    if (isNaN(tiri) || tiri <= 0) {
        alert("Inserisci un numero di tiri valido maggiore di 0!");
        return;
    }

    let puntiGiocatore1 = 0;
    let puntiGiocatore2 = 0;

    // 2. Ciclo per simulare i tiri di entrambi i giocatori
    for (let i = 1; i <= tiri; i++) {
        // Generiamo il punteggio del dado (da 1 a 6) usando la formula fornita
        let tiro1 = Math.floor(Math.random() * (6 + 1 - 1) + 1);
        let tiro2 = Math.floor(Math.random() * (6 + 1 - 1) + 1);

        // Sommiamo i punti tiro dopo tiro
        puntiGiocatore1 += tiro1;
        puntiGiocatore2 += tiro2;
    }

    // Stampiamo i punteggi finali totalizzati
    console.log(`Punteggio finale Giocatore 1: ${puntiGiocatore1}`);
    console.log(`Punteggio finale Giocatore 2: ${puntiGiocatore2}`);

    // 3. Confrontiamo i punteggi e decretiamo il vincitore
    if (puntiGiocatore1 > puntiGiocatore2) {
        console.log("Il Vincitore è il Giocatore 1! 🏆");
    } else if (puntiGiocatore2 > puntiGiocatore1) {
        console.log("Il Vincitore è il Giocatore 2! 🏆");
    } else {
        console.log("Incredibile! È un pareggio! 🤝");
    }
}

// Avviamo la funzione per far partire il gioco
giocoDadi();
