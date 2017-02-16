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
    $(".result").text(result);
    $("form#add").hide();
    $("#outputAdd").show();
  });

  $("h2").click(function(){
    $("form#add").show();
    $("#outputAdd").hide();
  });

  $("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#outputSubtract").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#outputMultiply").text(result);
  });

  $("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#outputDivide").text(result);
  });

});
