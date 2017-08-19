var correctAnswers = ["The New York Yankees", "Peyton Manning", "Wayne Gretzky", "14", "Muggsy Bogues", "Roger Federer", "Deion Sanders", "10 Feet", "Badmiton", "The University of North Carolina Tar Heels"]
var count = 45;
var q1Answer;
var q2Answer;
var q3Answer;
var q4Answer;
var q5Answer;
var q6Answer;
var q7Answer;
var q8Answer;
var q9Answer;
var q10Answer;
var correct = 0;
var incorrect = 0; 
var unanswered = 0;


//Repeatable timer function
function timer () {
  count = 45;
  clock = setInterval(fourtyFiveSeconds, 1000);
  function fourtyFiveSeconds () {
    if (count === 0) {
      clearInterval(clock);
      $("#audiotag1")[0].pause();
      $("#audiotag2")[0].play();
      endGame();
      $(".btn-warning").on("click", function() {
      location.reload();
      });
    }
    if(count > 0) {
      count--;
    }
    $("#timer").html("<h2>Time Remaining: " + count +" seconds</h2>");
  }
}

function endGame(){
  q1Answer = $("input[name='q1']:checked").val();
    if (q1Answer === correctAnswers[0]) {
      correct++;
    }
    else if (q1Answer === undefined) {
      unanswered++;
    }
    else {
      incorrect++;
    } 
  q2Answer = $("input[name='q2']:checked").val();
    if (q2Answer === correctAnswers[1]) {
      correct++;
    }
    else if (q2Answer === undefined) {
      unanswered++;
    }
    else {
      incorrect++;
    } 
  q3Answer = $("input[name='q3']:checked").val();
    if (q3Answer === correctAnswers[2]) {
      correct++;
    }
    else if (q3Answer === undefined) {
      unanswered++;
    }
    else {
      incorrect++;
    } 
  q4Answer = $("input[name='q4']:checked").val();
   if (q4Answer === correctAnswers[3]) {
    correct++;
   }
   else if (q4Answer === undefined) {
     unanswered++;
   }
   else {
    incorrect++;
   } 
  q5Answer = $("input[name='q5']:checked").val();
    if (q5Answer === correctAnswers[4]) {
      correct++;
    }
    else if (q5Answer === undefined) {
      unanswered++;
    }
    else {
      incorrect++;
    } 
  q6Answer = $("input[name='q6']:checked").val();
    if (q6Answer === correctAnswers[5]) {
      correct++;
    }
    else if (q6Answer === undefined) {
      unanswered++;
    }
    else {
      incorrect++;
    } 
  q7Answer = $("input[name='q7']:checked").val();
    if (q7Answer === correctAnswers[6]) {
      correct++;
    }
    else if (q7Answer === undefined) {
      unanswered++;
    }
    else {
      incorrect++;
    } 
  q8Answer = $("input[name='q8']:checked").val();
     if (q8Answer === correctAnswers[7]) {
      correct++;
    }
    else if (q8Answer === undefined) {
      unanswered++;
    }
    else {
      incorrect++;
    } 
  q9Answer = $("input[name='q9']:checked").val();
    if (q9Answer === correctAnswers[8]) {
      correct++;
    }
    else if (q9Answer === undefined) {
      unanswered++;
    }
    else {
      incorrect++;
    } 
  q10Answer = $("input[name='q10']:checked").val();
    if (q10Answer === correctAnswers[9]) {
      correct++;
    }
    else if (q10Answer === undefined) {
      unanswered++;
    }
    else {
      incorrect++;
    }

  $("#audiotag1")[0].pause();
  $(".jumbotron2").empty();
  $(".jumbotron2").html("<h2 class=>See your results below:</h2>");
  $(".jumbotron2").append("<br>");
  $(".jumbotron2").append("<h3>Correct: " + correct + "</h3>");
  $(".jumbotron2").append("<br>");
  $(".jumbotron2").append("<h3>Incorrect: " + incorrect + "</h3>");
  $(".jumbotron2").append("<br>");
  $(".jumbotron2").append("<h3>Unanswered: " + unanswered + "</h3>");
  $(".jumbotron2").append("<br>");
  $(".jumbotron2").append("<button class='btn-warning'>Try Again?</button>");
  $(".jumbotron2").append("<br>");
  $(".jumbotron2").append("<br>");

  if (correct === 10) {
    $(".jumbotron2").append("<img src='assets/images/kingofsports.jpg' class='endImage'/>")
  }
  else if (correct < 4) {
    $(".jumbotron2").append("<img src='assets/images/dunce.jpg' class='endImage'/>")
  }
  else {
    $(".jumbotron2").append("<img src='assets/images/almost-there.jpg' class='endImage'/>")
  }
  clearInterval(clock);
}





//Game starts here
//-----------------------------------------------------------
$(".btn-danger").on("click", function() {
  timer();
  $("#audiotag1")[0].play();
  $(".jumbotron2").css("visibility", "visible");
  $(".btn-danger").prop("disabled",true);
  
});

$(".btn-success").on("click", function() {
  endGame();
  $(".btn-warning").on("click", function() {
  location.reload();
});
});














 





