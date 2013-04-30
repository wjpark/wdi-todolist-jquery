$(document).ready(function() {
  $("button").click(function() {
    var value = $("#inputfield").val();
    var newTodo = $("<li><input type='checkbox'>" + value + "</input><button id='delete'>delete</button></li>");
    
    newTodo.appendTo($("#incomplete ol"));
    $("#inputfield").val('');

		$("input:checkbox").click(function() {
			var doneTodo = $(this);
			if(doneTodo.is (":checked")) {
				doneTodo.parent().appendTo("#completed ol");
				doneTodo.parent().css("color", "red");
				doneTodo.parent().css("text-decoration", "line-through");
			} else {
				doneTodo.parent().appendTo("#incomplete ol");
				doneTodo.parent().css("color", "black");
				doneTodo.parent().css("text-decoration", "none");
			}
		});

		$("#delete").click(function() {
			remove();
		});
	});
});