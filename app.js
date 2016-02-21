
$(document).ready( function() { 
$(".button").on("click",function(){
    
    var userInput = $(".todo-item").val();
    $("ul").append("<li>" +userInput+ "</li>");
     
})

$("ul").on("click","li",function(){
    
    $(this).remove() 

})

    
  });