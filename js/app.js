$(document).ready(function(){
	$(".button").on("click",function(){
			
	    var userInput = $(".todo-item").val();
	    $("ul").append('<div id="item"><input type="checkbox" />' + userInput + '</div>');
	})
	

	$("ul").on("dblclick","div",function(){
			
	    $(this).remove() 

	})
})



