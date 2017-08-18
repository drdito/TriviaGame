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


//Repeatable timer function
function timer () {
  count = 45;
  clock = setInterval(fourtyFiveSeconds, 1000);
  function fourtyFiveSeconds () {
    if (count === 0) {
      clearInterval(clock);
    }
    if(count > 0) {
      count--;
    }
    $("#timer").html("<h2>Time Remaining: " + count +" seconds</h2>");
  }
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
  q1Answer = $("input[name='q1']:checked").val();
    if (q1Answer === correctAnswers[0]) {
      correct++;
    }
    else {
      incorrect++;
    } 
  q2Answer = $("input[name='q2']:checked").val();
     if (q2Answer === correctAnswers[1]) {
      correct++;
    }
    else {
      incorrect++;
    } 
  q3Answer = $("input[name='q3']:checked").val();
  q4Answer = $("input[name='q4']:checked").val();
  q5Answer = $("input[name='q5']:checked").val();
  q6Answer = $("input[name='q6']:checked").val();
  q7Answer = $("input[name='q7']:checked").val();
  q8Answer = $("input[name='q8']:checked").val();
  q9Answer = $("input[name='q9']:checked").val();
  q10Answer = $("input[name='q10']:checked").val();
  
  console.log(q2Answer);
  console.log(q8Answer);
  console.log(correct);


  
});











 





