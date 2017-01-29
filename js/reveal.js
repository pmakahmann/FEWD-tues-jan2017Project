//Hide the answer
$(".testQuestions span").hide();
//Add a button
$(".testQuestions").append("<button>Reveal</button>");
//When the button is clicked
$("button").click(function(){
  //Reveal the answer in ohms
  $(this).prev().show()
  //Remove button
  $(this).remove();

});
