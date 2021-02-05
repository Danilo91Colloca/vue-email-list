/*
Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
La chiamata ajax vi ritornerà ogni volta un'email random.
*/

new Vue({
  el : '#app',
  data : {
    eMails : [] //array che sarà popolato da ciò che chiederò al server
  },
  mounted(){ //tutto quello che scrivo qui si verifica dopo il caricamento del DOM reale
    const self = this; //utile per accedere da uno scope più interno a quello più esterno

    //ciclo for che farà partire una query ajax per 10 volte
    for (var i = 1; i <= 10; i++) {
      //richiamo la axios library per fare facilmente una richiesta HTTP
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      // se la richiesta andrà a buon fine allora avrò la risposta
      .then(function(queryReturn){//qsta riga non è staccata dal get() è a capo per comodità
        //estraggo dalla risposta alla query ciò che mi serve e la pusho in un array
          self.eMails.push(queryReturn.data.response)
        });
    }



  }



});

Vue.config.devtools = true
