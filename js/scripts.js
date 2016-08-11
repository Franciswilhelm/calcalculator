var add = function(number1,number2) {return number1 + number2};
var subtract = function(number1,number2) {return number1 - number2};
var multiply = function(number1,number2) {return number1 * number2};
var divide = function(number1,number2) {return number1 / number2};

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var num1 = parseInt($("#input1").val());
    var num2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    if (operator==="add") {
      var result =add(num1, num2)
    }
    else if (operator==="subtract") {
      var result =subtract(num1, num2)
    }

    else if (operator==="multiply") {
    var result = multiply(num1, num2)
    }

    else if (operator==="divide") {
      var result = divide(num1, num2)
    }
    $("#answersection").text(result);
  });



});















//
//
// //var userHeight = parseInt(prompt("How tall are you in inches?"));
// //var userWeight = parseInt(prompt("How much do you weigh?"));
// //Function for BMI
// var bmi = function(height, weight) {return ((weight / (height * height)) * 703);};
//
// //var result = bmi(userHeight, userWeight).toFixed(2);
// //var farenheit = parseInt(prompt("provide temperature in Farenheit"));
// var celsius = parseInt(prompt("provide temperature in Celsius"));
//
// //var faren_cels = function(faren) {return ((faren - 32)/1.8)};
// var cels_faren = function(cel) {return (cel * 1.8 + 32)};
//
// //var result_c = faren_cels(farenheit);
// var result_f = cels_faren(celsius);
//
// //alert(result_c);
// alert(result_f);
