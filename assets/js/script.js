/*
Milestone 1

Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: concentriamoci su HTML e CSS 
riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

Milestone 2

Utilizzando Postman, testiamo una chiamata a questo endpoint: 

https://lanciweb.github.io/demo/api/pictures/

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in 
pagina una serie di foto!

Font utilizzati:

titoli:  ‘Edu Tas Beginner’, sans-serif;d
ate: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts… 😉)

Bonus

rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia
una dimensione adeguata

Note

Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile 🙂

*/


//Utilizzando Postman, testiamo una chiamata a questo endpoint: 
//https://lanciweb.github.io/demo/api/pictures/
//Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

const urlApi = 'https://lanciweb.github.io/demo/api/pictures/'

const column = document.querySelector('#column')

fetch(urlApi)
    .then(response => response.json())
    .then(data => {
        console.log(data);//un array di 6 oggetti contenebti id, title, date, url
        data.forEach(card => {
            newCard(card)
        });
    }
    )
    .catch(error => {
        console.error(error)
    }
    )

function newCard(obj) {
    //creo una colonna Bootstrap
    const col = document.createElement("div");
    col.classList.add("col-lg-4", "col-md-6", "col-sm-12");

    //creo la card
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img class="pin" src="./assets/img/pin.svg" alt="pin">
    <img src="${obj.url}" alt="${obj.title}">
    <div class="card-body">
      <p class="card-date">${obj.date}</p>
      <h2 class="description">${obj.title}</h2>
    </div>
  `;

    //inserisco la card nella colonna
    col.appendChild(card);

    //e infine la colonna nella row
    const row = document.getElementById('row')
    row.appendChild(col);
}

//const myObj = [{id: 1, title: 'Skate Park', date: '01-07-2024', url: 'https://marcolanci.it/boolean/assets/pictures/1.png'}]
//newCard(myObj[0])

/*
Milestone 1

Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque 
ed un button di chiusura.

Milestone 2

Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .

Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.

Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

Milestone 3

Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto 
a essere mostrata all’interno dell’overlay.

Ci sono diversi modi di farlo, prova a sperimentare 🙂

Bonus

Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà 
fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare
*/