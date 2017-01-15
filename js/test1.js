//Hide the answer
$(".test1questions span").hide();
//Add a button
$(".test1questions").append("<button>Reveal</button>");
//When the button is clicked
$("button").click(function(){
  //Reveal the answer in ohms
  $(this).prev().show()
  //Remove button
  $(this).remove();

});
