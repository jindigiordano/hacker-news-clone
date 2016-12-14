$(document).ready(function() {
  //click is a button event, submit is a form event
  $('.vote-button').on('click', function(e){
    console.log('clicked');
    e.preventDefault();
    var element = this; //only a dom obj, need $ to make it js obj

    var url = $(this).parent().attr('action');
    $.ajax({
      url: url,
      method: 'POST', //can also use delete and put here
      data: {message: 'here\s a message'}
    }).done(function(res) {
      console.log(res);
      var x = $(element).parent().parent().children('p').first().children('.points').html(res);
    }).error(
      console.log('oh no!')
    )
  }) //onclick
}); //ready
