/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
  $(function() {
    var $button = $('.new-tweet form');
    //var $button = $('#load-more-posts');
    $button.on('submit', function () {
      event.preventDefault();
      console.log('Button clicked, performing ajax call...');
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize(),
        success: function (temp) {
          console.log('Success');
          //console.log(temp);
          //$button.replaceWith(morePostsHtml);
          loadTweets();
        }
      });
    });
  });

  function loadTweets () {
    $.get("/tweets", function (data) {
      renderTweets(data);
    });
  }

  // Fake data taken from tweets.json

  function getElapseDays(utcTimestamp){
    var timestamp = new Date(utcTimestamp);
    var currentTimestamp = new Date();
    var elapseTimestamp = currentTimestamp.getTime() - timestamp.getTime();
    var millisecondsPerDay = 1000 * 3600 *24;
    return Math.ceil(elapseTimestamp / millisecondsPerDay);
  }

  function renderTweets(tweets) {
    // loops through tweets
    tweets.forEach(function(tweetData) {
      // calls createTweetElement for each tweet
      var $tweetElement = createTweetElement(tweetData);
      // takes return value and appends it to the tweets container
      $('#tweets-container').append($tweetElement);
    });
  }

  function createHeader(userData) {
    var $header = $("<header>");
    var avatarUrl = userData.avatars.small;
    var name = userData.name;
    var handle = userData.handle;

    var imgElement = $('<img>').attr('src', avatarUrl).addClass('avatar');
    var h2Element = $('<h2>').text(name);
    var handleElement = $('<span>').text(handle).addClass('handle');
    $header.append(imgElement, h2Element, handleElement);
    return $header;
  }

  function createP(text) {
    var $p = $("<p>").text(text);
    return $p;
  }

  function createFooter(utcTimestamp) {
    var $footer = $("<footer>");
    var elapseDays = getElapseDays(utcTimestamp);

    var timestampElement = $('<span>').text(`${elapseDays} days ago`).addClass('time-stamp');


    $footer.append(timestampElement);
    //TEMPERARY
    $footer.append(
      `<a href="http://www.example.com"><i class="fa fa-heart" aria-hidden="true"></i></a>
      <a href="http://www.example.com"><i class="fa fa-retweet" aria-hidden="true"></i></a>
      <a href="http://www.example.com"><i class="fa fa-flag" aria-hidden="true"></i></a>`
      );

    return $footer;
  }

  function createTweetElement(tweetData) {
    var $tweet = $("<article>").addClass("tweet");

    $header = createHeader(tweetData.user);
    $p = createP(tweetData.content.text);
    $footer = createFooter(tweetData.created_at);

    $tweet.append($header, $p, $footer);
    return $tweet;
  }

});