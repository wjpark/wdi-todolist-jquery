$(document).ready(function() {
  $("button").click(function() {
    var entry = $("#inputfield").val();
    var newTodo = $("<li><input type='checkbox'>" + entry + "</input><button class='delete'>delete</button></li>");
    
    newTodo.appendTo($("#notcompleted ol"));
    $("#inputfield").val(''); //clears input field

		$("input:checkbox").click(function() {
			var doneTodo = $(this);
			if(doneTodo.is (":checked")) {
				doneTodo.parent().appendTo("#completed ol");
				doneTodo.parent().css("color", "red");
				doneTodo.parent().css("text-decoration", "line-through");
			} else {
				doneTodo.parent().appendTo("#notcompleted ol");
				doneTodo.parent().css("color", "black");
				doneTodo.parent().css("text-decoration", "none");
			}
		});

		$(".delete").click(function() {
			$(this).parent().remove();
		});
	});
});