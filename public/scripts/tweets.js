function getElapseDays(utcTimestamp){
  var timestamp = new Date(utcTimestamp);
  var currentTimestamp = new Date();
  var elapseTimestamp = currentTimestamp.getTime() - timestamp.getTime();
  var millisecondsPerDay = 1000 * 3600 *24;
  return Math.ceil(elapseTimestamp / millisecondsPerDay);
}


function loadTweets() {
  $.get("/tweets", function (data) {
    $('#tweets-container').empty();
    renderTweets(data);
  });
}


function renderTweets(tweets) {
  // loops through tweets
  tweets.forEach(function(tweetData) {
    // calls createTweetElement for each tweet
    var $tweetElement = tweetTemplate(tweetData);
    // takes return value and appends it to the tweets container
    $('#tweets-container').append($tweetElement);
  });
}


var tweetTemplate = _.template($('script#tweet-template').html());


// SYNC WAY TO GET TEMPLATE IN SEPARATE FILE
// var tweetTemplate;
// $.ajax({
//   url: '/tweet-template.html',
//   async: false,   // Jeremy is crazy, and should not be trusted
//   success: (data) => {tweetTemplate = _.template(data);}
// })



