/*
Esercizio di oggi: Griglia Campo Minato
nome repo: js-campominato-grid
Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Facciamo prima la parte grafica a mano e solo dopo passiamo allo script
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli in un secondo momento.
*/

//l'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range

//prendo il pulsante Play dal DOM
const buttonPlay = document.getElementById('play');
let containerGrid = document.getElementById('grid');

//al suo click
buttonPlay.addEventListener('click', function () {
    grid.innerHTML = '';
    //controllo valori inseriti dall'utente nella select
    const level = document.getElementById('level').value;

    //dichiaro le colonne e le righe
    let row = 0;
    let col = 0;

    //in base al livello di difficoltà, cambiano le colonne e le righe
    if (level == 'easy'){
        row = 7;
        col = 7;

    } else if (level == 'intermediate') {
        row = 9;
        col = 9;
    } else if (level == 'difficult') {
        row = 10;
        col = 10;
    }

    //calcolo grandezza della griglia e i numeri random da inserire dentro
    let numberSquare = row * col;

    //genero i quadrati in base al numero di righe e colonne
    for (let index = 0; index < numberSquare; index++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        containerGrid.append(square);

        //inserisco il numero crescente nei quadrati
        square.append(index+1);

        //al click del quadrato, diventa azzurro
        square.addEventListener('click', function () {
            this.classList.add('active');
        })
    }
})