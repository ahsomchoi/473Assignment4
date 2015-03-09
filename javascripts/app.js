var main = function () {
  "use strict";

  var readZip = function () {
    var $url;
    if($(".zip-input input").val() !== "") {
      $url = "http://zip.getziptastic.com/v2/US/"+$(".zip-input input").val();
      //console.log($url);

      $.getJSON($url, function (result) {
        alert("You live in "+result.city+", "+result.state);
      });
    }

  };

  $(".zip-input button").on("click", function (event) {
    //console.log("hello1");
    readZip();
  });

  $(".zip-input input").on("keypress", function (event) {
    //console.log("hello2");
    if (event.keyCode === 13) {
      readZip();
    }
  });

};

$(document).ready(main);
