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
                 var genereMusica = datiDisco.genre
                 // creo le varianti Handlebars
                 var variabili = {
                     copertina : imgCopertina,
                     album : nomeAlbum,
                     artista : nomeArtista,
                     anno : annoUscita,
                     genere : genereMusica
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

    $(".genere").change(function(){
        var genereSelezionato = $(".genere").val();//oppure $(this).val();
        if (genereSelezionato == " ") {
            $(".scheda-album").fadeIn();
        }else{
            // controllo per ogni disco se il suo genere corrisponde a quello selezionato
            $(".scheda-album").each(function(){
                var genereDisco = $(this).attr("data-genere");
                console.log(genereDisco);
                // se il genere selezionato corrisponde a quello del disco, lo mostro
                if (genereDisco.toLowerCase() == genereSelezionato.toLowerCase()) {
                    $(this).fadeIn();

                }else {
                    $(this).fadeOut();
                }
                // altrimenti lo nascondo

            });
        };


    })










});
