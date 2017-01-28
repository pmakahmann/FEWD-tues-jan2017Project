
function calcResistance() {
  var voltage = parseInt(document.getElementById("voltage").value);
  var current = parseInt(document.getElementById("current").value);
  returnCalculation.innerHTML="Resistance = " + (voltage/current) + " Ohms";
}

function calcVoltage() {
  var resistance = parseInt(document.getElementById("resistance").value);
  var current = parseInt(document.getElementById("current").value);
  returnCalculation.innerHTML="Voltage = " + (current * resistance);
}

function calcCurrent() {
  var resistance = parseInt(document.getElementById("resistance").value);
  var voltage = parseInt(document.getElementById("voltage").value);
  returnCalculation.innerHTML="Current = " + (voltage / resistance);
}
//variables inside the function.  If outside, they will not look for the new data in input fields when function is run.
//parseInt used to convert string to number for calculation.
//how do I write it so that it sends the calculated number into the third textbox??
