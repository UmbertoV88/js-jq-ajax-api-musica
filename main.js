$(document).ready(function() {

    var templateHtml = $("#template").html();
    var templateFunction = Handlebars.compile(templateHtml);

    var variabili = {
        copertina : "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
        album : "New Jersey",
        artista : "Bon Jovi",
        anno : "1988"
    }



    var htmlFinale = templateFunction(variabili);
    $(".container").append(htmlFinale);

    $.ajax({
         url : "https://flynn.boolean.careers/exercises/api/array/music",
         method : "get",
         success : function(data) {
             console.log(data);
         },
         error : function () {}
    });












});
