/*
Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
La chiamata ajax vi ritornerà ogni volta un'email random.
*/

$(document).ready(function(){
  //faccio eseguire la richiesta per 10 volte
  for (var i = 1; i <= 10; i++) {
    //eseguo una richiesta ajax http
    $.ajax(
      { //indirizzo al quale fare la richiesta
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        // stabilisco che si tratta di una richiesta e non di un invio di dati
        method: 'GET',
        // se la richiesta avviene con successo mi ritorneranno i seguenti parametri
        success: function(data, status) {
          console.log(data) //ritorna un oggetto
          console.log(status) //ritorna se la richiesta ha avuto successo
          //ad ogni ciclo stampo il risultato della query 
          $(`<li>${data.response}</li>`).appendTo($('.mail'))
        }
      }
    )


  }

})
