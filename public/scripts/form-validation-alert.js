function removeAlert() {
  $('.new-tweet div.alert').remove();
}


function showAlert(text) {
  var $newTweet = $('.new-tweet');
    removeAlert();
  var alertMessage;
  if(text.length > charLimit) {
    alertMessage = `You have exceed the ${charLimit} character Limit`;
  } else {
    alertMessage = "You have entered a blank tweet";
  }
  var alertElement = $('<div>').addClass('alert').text(alertMessage);
  $newTweet.append(alertElement);
}