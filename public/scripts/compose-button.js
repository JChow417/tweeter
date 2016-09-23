function composeButton() {

  //var button = $('button.compose')[0]
  //this is DOM function, best keep consistency

  //var button = document.querySelector('button.compose')
  //button.addEventListener('click', function(event) {

  var button = $('button.compose')
  button.on('click', function(event){
    $('.new-tweet').slideToggle("fast", function() {
      $(this).find('textarea').focus();
    });
  });
}


