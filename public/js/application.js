$(document).ready(function() {
  //click is a button event, submit is a form event
  $('.vote-button').on('click', function(e){
    e.preventDefault();
    var element = e.target; //only a dom obj, need $ to make it js obj

    var url = $(e.target).parent().attr('action');
    $.ajax({
      url: url,
      method: 'POST', //can also use delete and put here
      data: {message: 'here\s a message'}
    }).done(function(res) {
      //console.log(res);    prints num
      $(element).closest('article').find('.points').html(res);//whats actually being shown
      $(element).css('color', 'red');
    }).fail(function(){
      console.log('oh no!');
    });
  }); //onclick

  $('.delete').on('click', function(event) {
    event.preventDefault();
    var element = event.target;
    var url = $(element).attr('href');

    $.ajax({
      url: url,
      method: 'DELETE',
      data: {message: "Deleted"}
    }).done(function() {
      $(element).closest('article').remove();
    }).fail(function(){
      console.log("Delete failed.");
    });
  });

  $('#posts').on('submit', function(event) {
    event.preventDefault();
    var element = event.target;
    var url = $(element).attr('action');
    var cloned_post = $(element).siblings('.post-container').children('article').first()
    var title = $(this).serialize();
    this.reset();
    console.log(title);
    console.log(title.title);
    $.ajax({
      url: url,
      method: 'POST',
      data: title
    }).done(function(response) {
      console.log(response);
      $('.post-container').append(cloned_post);
      $('article').last().find('a').first().text(title); //works but puts title= first

    }).fail(function(){
      console.log("Post failed");
    })

  })
// $('article').last().append(cloned_post);

}); //ready
