/*
Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
La chiamata ajax vi ritornerà ogni volta un'email random.
*/
//creo l'oggetto per la richiesta http

var xhr = new XMLHttpRequest();
var mailList = document.getElementsByClassName('mail')[0];


  //listener che una volta ricevuta una risposta eseguirà uno script
xhr.onreadystatechange = function() {
    /*
    il codice ready state della richiesta è uguale a 4 e il codice di stato del server è uguale a 200 quindi non ci sono errori allora riceverò i dati e potrò manipolari

    */
  for (var i = 1; i <= 10; i++) {
    if(this.readyState === 4 && this.status === 200){
      console.log(this.response)
  //poichè ritorna un json bisogna parsarlo per strasformarlo in un oggetto per poterlo navigare
      var responseObject = JSON.parse(this.response);
      mailList.innerHTML += '<li>' + responseObject.response + '</li>'
    }
  }

}
//qui apro la connessione per fare la richiesta
xhr.open('GET',
'https://flynn.boolean.careers/exercises/api/random/mail', true)
xhr.send();
