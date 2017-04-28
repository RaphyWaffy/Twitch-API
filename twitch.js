/*jslint browser: true*/
/*global $, jQuery, alert*/
var streamers = ["garenatw", "reckful", "cretetion", "habathcx", "RobotCaleb", "noobs2ninjas", "trick2g", "imaqtpie", "voyboy", "IWillDominate", "Sjow"];

for (var i = 0; i < streamers.length; i++) {
  var details = "https://api.twitch.tv/kraken/channels/" + streamers[i] + "?client_id=7wmhnz8flfcb72ist762oq97mhydo7&callback=?";
  status = "https://api.twitch.tv/kraken/streams/" + streamers[i] + "?client_id=7wmhnz8flfcb72ist762oq97mhydo7&callback=?";

  $.when($.getJSON(details), $.getJSON(status)).done(function(deets, stats) {
    "use strict";
    console.log(deets[0]);
    if (stats[0].stream == null) {
      $("#master").append("<div class=offline>" + "<img class=logo src=" + deets[0].logo + ">" + "<a href=" + deets[0].url + "> " + deets[0].display_name + " </a>  " + deets[0].status + "</div>");
    } else {
      $("#master").append("<div class=online>" + "<img class=logo src=" + deets[0].logo + ">" + "<a href=" + deets[0].url + "> " + deets[0].display_name + " </a>  " + deets[0].status + "</div>");
    };
    
/* Buttons */
    $("#offline").click(function() {
      $("div.online").each(function() {
            $(this).hide();
          });
          $("div.offline").each(function() {
            $(this).show();
          });
    });

    $("#online").click(function() {
      $("div.online").each(function() {
            $(this).show();
          });
          $("div.offline").each(function() {
            $(this).hide();
          });
    });

    $("#all").click(function () {
      $("div").each(function() {
            $(this).show();
          });
    })



  });
}
