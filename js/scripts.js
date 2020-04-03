//back end logic
var toRoboger = function(number) {
  if (number > 0) {
    var robogers = "";
    for(i = 0; i <= number; i++) {
      var numStr = i.toString();
      console.log(numStr);
      
    }

    return robogers.join();
 
  } else {
    return false;
  }


};


//fron end logic
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("#userNum").val());
    var roboger = toRoboger(userNum);

    $(".numInput").text(userNum);
    $(".output").text(roboger);
    $("#result").show();

  });
});