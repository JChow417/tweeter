/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var charLimit = 140;

function resetNewTweet(that){
  that.reset();
  $(that).children('span.counter').text(charLimit);
  removeAlert();
};

$(document).ready(function() {

  $(function createNewTweet() {
    var $button = $('.new-tweet form');
    $button.on('submit', function() {
      event.preventDefault();
      console.log('Button clicked, performing ajax call...');
      var text = $(this).find('textarea').val();

      if(text.length <= charLimit && text !== "" && text !== null) {
        $.ajax({
          url: '/tweets',
          method: 'POST',
          data: $(this).serialize(),
          success: function () {
            console.log('Success');
            loadTweets();
          }
        });
        resetNewTweet(this);
      } else {
        showAlert(text);
      }

    });
  });

  composerCharCounter(charLimit);
  composeButton();
  loadTweets();

});