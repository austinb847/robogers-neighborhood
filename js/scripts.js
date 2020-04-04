//back end logic
var toRoboger = function(number) {
  var robogers = "";
  for(i = 0; i <= number; i++) {
    var numStr = i.toString();
    //console.log(numStr);
    var countOf1 = 0;
    var countOf2 = 0;
    var countOf3 = 0;
    for(var e = 0; e <= numStr.length; e++) {
      if (numStr[e] === "1") {
        countOf1 = countOf1 + 1;
      }
      if (numStr[e] === "2") {
        countOf2 = countOf2 + 1;
      }
      if (numStr[e] === "3") {
        countOf3 = countOf3 + 1;
      }  
    }

    if (countOf3 > 0) {
      robogers = "Won't you be my neighbor?";
    } else if (countOf2 > 0) {
      robogers = "Boop!";
    } else if (countOf1 > 0) {
      robogers = "Beep!";
    } else {
      robogers = numStr;
    }
    $(".outputRobogers").append("<li>" + robogers + "</li>");
  }
};


//front end logic
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("#userNum").val());

    if (isNaN(userNum) || userNum === "") {
      alert("Enter a number please!")
    } else {
      toRoboger(userNum);
      $("#result").show();
    }

  });
});