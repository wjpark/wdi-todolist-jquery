$(document).ready(function() {
  $('button').click(function() {
    var newTodo = $('input[id=new_todo]').val();
    $('#todos_list ol').append('<li>' + newTodo);
    $('#input').val('');
  });
});


