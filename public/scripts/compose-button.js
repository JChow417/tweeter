$(document).ready(function(){
  var button = document.querySelector('button.compose')
  button.addEventListener('click', function(event) {
    console.log('YOYO');
    $('.new-tweet').slideToggle("fast", function() {
      $(this).find('textarea').focus();
    });
  });

});