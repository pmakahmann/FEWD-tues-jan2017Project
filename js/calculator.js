
function calcResistance() {
  var voltage = parseInt(document.getElementById("voltage").value);
  var current = parseInt(document.getElementById("current").value);
  returnCalculation.innerHTML="Resistance = " + (voltage/current) + "&#8486";
}

function calcVoltage() {
  var resistance = parseInt(document.getElementById("resistance").value);
  var current = parseInt(document.getElementById("current").value);
  returnCalculation.innerHTML="Voltage = " + (current * resistance) + "v";
}

function calcCurrent() {
  var resistance = parseInt(document.getElementById("resistance").value);
  var voltage = parseInt(document.getElementById("voltage").value);
  returnCalculation.innerHTML="Current = " + (voltage / resistance) + "a";
}
//variables inside the function.  If outside, they will not look for the new data in input fields when function is run.
//parseInt used to convert string to number for calculation.
//how do I write it so that it sends the calculated number into the third textbox??
//Include JS to return "Please input only numbers into two fields" if value of returnCalculation is NaN and return it as the innerHTML
