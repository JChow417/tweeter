function composerCharCounter(charLimit) {

  var textarea = document.querySelector('.new-tweet textarea');

  textarea.addEventListener('input', function(event) {
    var counterText = $(this).parent().children('.counter');
    var charCount = $(this).val().length;
    var counter = charLimit - charCount;
    counterText.text(counter);

    if (counter < 0 ) {
      counterText.addClass('red');
    } else {
      counterText.removeClass('red');
    }

  });

}
