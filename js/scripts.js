//back end logic
var toRoboger = function(number) {
  var robogers = "";
  var outputString = "";
  for(i = 0; i <= number; i++) {
    var numStr = i.toString();
    
    if (numStr.includes("3")) {
      robogers = "Won't you be my neighbor?";
    } else if (numStr.includes("2")) {
      robogers = "Boop!";
    } else if (numStr.includes("1")) {
      robogers = "Beep!";
    } else {
      robogers = numStr;
    }
    //$(".outputRobogers").append("<li>" + robogers + "</li>");
    outputString += "<li>" + robogers + "</li>";
  }
  return outputString;
};


//front end logic
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("#userNum").val());

    if (isNaN(userNum) || userNum === "") {
      alert("Enter a number please!")
    } else {
      var result = toRoboger(userNum);
      $(".outputRobogers").append(result);
      $("#result").show();
    }

  });
});