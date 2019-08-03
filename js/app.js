$("#todos").click(function(evento){
    $("*").addClass("selector");
    //alert("Haz precionado el boton ALL!!!");
});
$("#elemento").click(function(evento){
    // alert("elemento prueba");
     $("p").addClass("selector");
 
 });
 $("#idelemento").click(function(evento){
    // alert("elemento prueba");
     $("#email").addClass("selector");
 
 });
 $("#claseElemento").click(function(evento){
    // alert("elemento prueba");
     $(".Ejemplo").addClass("selector");
 
 });
 $("#tipoelemento").click(function(evento){
    // alert("elemento prueba");
     $("input").addClass("selector");
 
 });
 $("#ajax").click(function(evento){
    // alert("elemento prueba");
     $.ajax({
         url: "https://swapi.co/api/planets",
         success: function(respuesta){
             console.log(respuesta);
         },
         error: function(){
             console.log("Existe un error al realizar la petición");
        }
     });
 
 });