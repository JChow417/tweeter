function composeButton() {

  //var button = $('button.compose')[0]
  var button = document.querySelector('button.compose')
  button.addEventListener('click', function(event) {
    $('.new-tweet').slideToggle("fast", function() {
      $(this).find('textarea').focus();
    });
  });

}
  //var button = $('button.compose')
  //button.on('click')...

