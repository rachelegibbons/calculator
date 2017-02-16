//Business Logic (Back-End) Logic:
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1,number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//User Interface (Front-End) Logic:

$(function() {
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $(".add1").text(number1);
    $(".add2").text(number2);
    $(".resultAdd").text(result);
    $("form#add").hide();
    $("#outputAdd").show();
  });

  $("#addAgain").click(function(){
    $("form#add").show();
    $("#outputAdd").hide();
  });

  $("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $(".subtract1").text(number1);
    $(".subtract2").text(number2);
    $(".resultSubtract").text(result);
    $("form#subtract").hide();
    $("#outputSubtract").show();
  });

  $("#subtractAgain").click(function() {
    $("form#subtract").show();
    $("#outputSubtract").hide();
  })

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $(".multiply1").text(number1);
    $(".multiply2").text(number2);
    $(".resultMultiply").text(result);
    $("form#multiply").hide();
    $("#outputMultiply").show();
  });

  $("#multiplyAgain").click(function() {
    $("form#multiply").show();
    $("#outputMultiply").hide();
  });

  $("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $(".divide1").text(number1);
    $(".divide2").text(number2);
    $(".resultDivide").text(result);
    $("form#divide").hide();
    $("#outputDivide").show();
  });

  $("#divideAgain").click(function(){
    $("form#divide").show();
    $("#outputDivide").hide();
  });

});
