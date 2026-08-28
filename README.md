# 🔢 Counter App

Una semplice applicazione web che simula il comportamento di un **contatore (counter)**, sviluppata in JavaScript puro (Vanilla JS), HTML e CSS.

## 📋 Descrizione del progetto

L'applicazione permette all'utente di aumentare, diminuire o azzerare il valore di un counter attraverso tre pulsanti dedicati: **+**, **−** e **Reset**.

Al caricamento della pagina, il valore del counter viene impostato a **0** e visualizzato a schermo. Da quel momento l'utente può interagire con i pulsanti per modificarne il valore in tempo reale, oppure riportarlo istantaneamente a 0.

## ✨ Funzionalità

- Visualizzazione del valore iniziale del counter impostato a `0`
- Pulsante **+** per incrementare il valore di 1
- Pulsante **−** per decrementare il valore di 1
- Pulsante **Reset** per riportare il valore del counter a `0`
- Creazione dinamica degli elementi dell'interfaccia tramite JavaScript (DOM manipulation)
- Aggiornamento in tempo reale del valore mostrato a schermo

## 🛠️ Tecnologie utilizzate

- **HTML5** — struttura della pagina
- **CSS3** — stile e layout dell'interfaccia
- **JavaScript (Vanilla JS)** — logica applicativa e gestione del DOM

## 📁 Struttura del progetto

```
counter-app/
│
├── index.html      # Pagina principale
├── style.css       # Fogli di stile
├── script.js       # Logica del counter
└── README.md        # Documentazione del progetto
```

## 🚀 Come avviare il progetto

1. Clona o scarica questo repository
   ```bash
   git clone <url-del-repository>
   ```
2. Entra nella cartella del progetto
   ```bash
   cd counter-app
   ```
3. Apri il file `index.html` nel tuo browser preferito

Non sono richieste dipendenze esterne né un server: l'applicazione funziona interamente lato client.

## ⚙️ Funzionamento

1. All'apertura della pagina viene creato dinamicamente il markup dell'interfaccia (contenitore, valore del counter e pulsanti) tramite JavaScript.
2. Una variabile `count` tiene traccia del valore corrente, inizializzata a `0`.
3. Al click sul pulsante **+**, la variabile viene incrementata di 1 e il valore mostrato a schermo viene aggiornato.
4. Al click sul pulsante **−**, la variabile viene decrementata di 1 e il valore mostrato a schermo viene aggiornato.
5. Al click sul pulsante **Reset**, la variabile viene riportata a `0` e il valore mostrato a schermo viene aggiornato di conseguenza.

## 🔮 Possibili sviluppi futuri

- Impedire che il counter scenda sotto lo 0
- Permettere di impostare uno step di incremento/decremento personalizzato
- Aggiungere animazioni di transizione al cambio del valore
- Salvare il valore del counter nel `localStorage` per mantenerlo tra le sessioni
- Aggiungere una conferma prima del reset, per evitare azzeramenti accidentali

## 📄 Licenza

Questo progetto è distribuito a scopo didattico.
