$(document).ready(function(){
  var textarea = document.querySelector('.new-tweet textarea');

  textarea.addEventListener('input', function(event) {
    var counterText = $(this).parent().children('.counter');
    var counter = 140;
    var charCount = $(this).val().length;
    counter -= charCount;
    counterText.text(counter);

    if (counter < 0 ) {
      counterText.addClass('red');
    } else {
      counterText.removeClass('red');
    }

  });

});

//PLACE DOCUMENT READY IN APP.JS AND CALL THIS AS FUNCTION