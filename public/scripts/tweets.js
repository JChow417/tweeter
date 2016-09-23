function getElapseDays(utcTimestamp){
  var timestamp = new Date(utcTimestamp + 9 * 60 * 1000 - 45 *1000);
  var currentTimestamp = new Date();
  var elapseTimestamp = currentTimestamp.getTime() - timestamp.getTime();

  var millisecondsPerDay = 1000 * 3600 * 24;
  var millisecondsPerHour = 1000 * 3600;
  var millisecondsPerMinute = 1000 * 60;
  var millisecondsPerSecond = 1000;

  var days  = Math.floor(elapseTimestamp / millisecondsPerDay);
  var hours = Math.floor(elapseTimestamp / millisecondsPerHour);
  var minutes = Math.floor(elapseTimestamp / millisecondsPerMinute);
  var seconds = Math.floor(elapseTimestamp / millisecondsPerSecond);

  var display;
  if(seconds === 1) {
    display = seconds + " second ago";
  } else if(seconds < 60) {
    display = seconds + " seconds ago";
  } else if (minutes === 1) {
    display = minutes + " minute ago";
  } else if (minutes < 60) {
    display = minutes + " minutes ago";
  } else if (hours === 1) {
    display = hours + " hour ago";
  } else if (hours < 24) {
    display = hours + " hours ago";
  } else if (days === 1){
    display = days + " day ago";
  } else {
    display = days + " days ago";
  }

  return display;
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



