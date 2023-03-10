/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
    // I datatype in javascript sono tipi di dato che si possono assegnare ad una variabile.
    // Javascript prevede 5 tipi principali :
      let nome = "nome"; //string
      let numero = 5; //number
      Boolean //Questo tipo di dato può assumere solo valori true e false.
      null
      undefined


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
    //Un oggetto in javascript è un contenitore di proprietà che contiene elementi caratterizzati da un nome e un valore
       var persona = {
       nome : "Mario",
       cognome : "Rossi"
    }


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
       let numero1 = 12;
       let numero2 = 20;
       let risultato = numero1 + numero2;
       console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
       let x = 12;
       console.log(x);
       //oppure
       let y;
       y = 12;
       console.log(y);


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
       let name ="Franko";


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
       let num1 = 4;
       let differenza = num1 - x;
       console.log(differenza);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
       let name1;
       let name2;

       name1 = "john";
       name2 = "John";

       console.log(name1 != name2);
