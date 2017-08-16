var questions = ["Which Major League Baseball team holds the record for most World Series wins with 27 titles?", "Which quarterback holds the record for the most touchdown passes in a season with 55?"]
var possibleAnswers = [["A.The New York Yankees", "B.The St. Louis Cardinals", "C.The Boston Red Sox", "D.The Tampa Bay Rays"], ["A.Tom Brady", "B.Aaron Rogers", "C.Peyton Manning", "D.Bart Starr"]]
var correctAnswers = ["A.The New York Yankees", "C.Peyton Manning"]
var count = 20;
var count2 = 10;
var clock;
var clock2;
var right = "That is correct!!";
var wrong = "I'm sorry, you are wrong";
var correct = 0;
var incorrect = 0;
var answered = false;
var questionCount = 1;


//Repeatable timer function
function timer () {
  clock = setInterval(twentySeconds, 1000);
  function twentySeconds () {
    if (count === 0) {
      clearInterval(clock);
    }
    if(count > 0) {
      count--;
    }
    $("#timer").html("<h2>Time Remaining: " + count +" seconds</h2>");
  }
}



//Starts the game
$(".btn-danger").on("click", function() {
  $(this).prop("disabled",true);
  timer();
  $("#question").html("<h3>" + questions[0] + "</h3>");
  $("#option1").html("<h3>" + possibleAnswers[0][0] + "</h3>");
  $("#option2").html("<h3>" + possibleAnswers[0][1] + "</h3>");
  $("#option3").html("<h3>" + possibleAnswers[0][2] + "</h3>");
  $("#option4").html("<h3>" + possibleAnswers[0][3] + "</h3>");
});

//Record answer and display correct answer
$("#option1").on("click", function() {
  clearInterval(clock);
  $(".jumbotron2").html("<h3>" + right + "</h3>");
  $(".jumbotron2").append("<br>");
  $(".jumbotron2").append("<img src='assets/images/yankees.jpg'/>");
  correct++;
  answered = true;
  questionCount++;
  
});
$("#option2").on("click", function() {
  clearInterval(clock);
  $(".jumbotron2").html("<h3>" + wrong + "</h3>");
  $(".jumbotron2").append("<br>");
  $(".jumbotron2").append("<h3>The correct answer is the New York Yankees");
  $(".jumbotron2").append("<img src='assets/images/yankees.jpg'/>");
  incorrect++;
  answered = true;
  questionCount++;
  
});
$("#option3").on("click", function() {
  clearInterval(clock);
  $(".jumbotron2").html("<h3>" + wrong + "</h3>");
  $(".jumbotron2").append("<br>");
  $(".jumbotron2").append("<h3>The correct answer is the New York Yankees");
  $(".jumbotron2").append("<img src='assets/images/yankees.jpg'/>");
  incorrect++;
  answered = true;
  questionCount++;
  
});
$("#option4").on("click", function() {
  clearInterval(clock);
  $(".jumbotron2").html("<h3>" + wrong + "</h3>");
  $(".jumbotron2").append("<br>");
  $(".jumbotron2").append("<h3>The correct answer is the New York Yankees");
  $(".jumbotron2").append("<img src='assets/images/yankees.jpg'/>");
  incorrect++;
  answered = true;
  questionCount++;
  
});




 





