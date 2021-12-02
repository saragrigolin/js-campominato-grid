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

    //dichiaro le colonne, le righe, l'array di numeri dei quadrati e l'array delle bombe
    let row = 0;
    let col = 0;
    let numbers = [];
    let blackListNumbers = [5, 13, 27, 41, 49, 68, 80];
    

    //in base al livello di difficoltà, cambiano le colonne e le righe e i numeri che equivalgono alle bombe
    if (level == 'easy'){
        row = 10;
        col = 10;
        
    } else if (level == 'intermediate') {
        row = 9;
        col = 9;
        
    } else if (level == 'difficult') {
        row = 7;
        col = 7;
        
    }

    //calcolo grandezza della griglia e i numeri random da inserire dentro
    let numberSquare = row * col;

    //genero i quadrati in base al numero di righe e colonne
    for (let index = 0; index < numberSquare; index++) {

        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;

        //inserisco i quadrati nella griglia
        containerGrid.append(square);
        numbers.push(index+1);

        //inserisco il numero crescente nei quadrati
        square.append(numbers[index]);

        //se dentro ai quadrati c'è un numero che corrisponde all'array della blacklist, aggiungo la classe blacklist
        if (blackListNumbers.includes(parseInt(square.innerText))) {
            square.classList.add('black-list');
        }
        
        //al click del quadrato, diventa azzurro
        square.addEventListener('click', function () {

            // se il bottone è black-list
            if (square.classList.contains('black-list')){

                //aggiunge classe active-red a tutti i black-list
                let element = document.querySelectorAll('.black-list');
                for (let index = 0; index < element.length; index++) {
                    element[index].classList.add('active-red');
                }
                //esce la scritta per aver perso
                let h4 = `
                    <div class="lost"> 
                        <h4>Oh no, hai perso! Vuoi fare un'altra partita?</h4>
                        <button class="btn-blue" type="submit" onClick="refreshPage()">Gioca di nuovo</button>
                    </div>`;

                //mostra il messaggio con un timeout di 800ms
                setTimeout(function () {
                    grid.innerHTML += h4;
                }, 800);
            } else { //altrimenti aggiunge active
                this.classList.add('active');
            }
        })
    }
})

//funzione per aggiornare la pagina e giocare di nuovo
function refreshPage() {
    window.location.reload();
}

