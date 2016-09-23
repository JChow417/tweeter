function removeAlert(alertCounter) {
  setTimeout(()=>{
    $('.new-tweet div.alert.' + alertCounter).remove();
  }, 2000);
}

function selectAlertMessage(text) {
  var alertMessage;
  if(text.length > charLimit) {
      alertMessage = `You have exceed the ${charLimit} character Limit`;
    } else {
      alertMessage = "You have entered a blank tweet";
    }
  return alertMessage;
}

var showAlert = ((text) => {
//var showAlert = (function(text) {
  var alertCounter = 0;

  return (text) => {
  //return function(text) {
    alertCounter += 1;

    var $newTweet = $('.new-tweet');
    $newTweet.find('div.alert').remove();

    var alertMessage = selectAlertMessage(text);

    var alertElement = $('<div>').addClass('alert ' + alertCounter).text(alertMessage);
    $newTweet.append(alertElement);
    removeAlert(alertCounter);
  };

})();