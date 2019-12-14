$(document).ready(function() {

    var templateHtml = $("#template").html();
    var templateFunction = Handlebars.compile(templateHtml);


    $.ajax({
         url : "https://flynn.boolean.careers/exercises/api/array/music",
         method : "get",
         success : function(data) {
             // recupero l'array che contiene tutti i dischi

             var datiDischi = data.response;
             // ciclo per tutti i dischi
             for (var i = 0; i < datiDischi.length; i++) {
                 // recupero il disco corrente nell'iterazione
                 var datiDisco = datiDischi[i];
                 console.log(datiDisco);

                 // per ogni disco recupero le varie informazioni
                 var imgCopertina = datiDisco.poster;
                 var nomeAlbum = datiDisco.title;
                 var nomeArtista = datiDisco.author;
                 var annoUscita = datiDisco.year;
                 // creo le varianti Handlebars
                 var variabili = {
                     copertina : imgCopertina,
                     album : nomeAlbum,
                     artista : nomeArtista,
                     anno : annoUscita
                 };
                 console.log(variabili);
                 // creo il template
                 var htmlFinale = templateFunction(variabili);
                 
                 // lo appendo nel contenitore dei dischi
                 $(".container").append(htmlFinale);
             }
         },
         error : function () {}
    });












});
