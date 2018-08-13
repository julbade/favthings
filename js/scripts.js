$(document).ready(function() {
$("#infos").submit(function(event)  {
    event.preventDefault()
  // var faves = ["food", "car", "color", "shoes"];
  var food = $("input#food").val();
  var car = $("input#car").val();
  var color = $("input#color").val();
  var shoes = $("input#shoes").val();
  var userInputs = [food, car, color, shoes]
  var userArrays = [];



    $("#food-output").text(userInputs[0]);
    $("#car-output").text(userInputs[1]);
    $("#color-output").text(userInputs[2]);
    $("#shoes-output").text(userInputs[3]);

    userArrays.push(userInputs[0]);
    userArrays.push(userInputs[1]);
    userArrays.push(userInputs[2]);
    userArrays.push(userInputs[3]);

        $("#infos").append("<li>" + userArrays.pop() + "</li>");
        $("#infos").append("<li>" + userArrays.pop() + "</li>");
        $("#infos").append("<li>" + userArrays.pop() + "</li>");
        $("#infos").append("<li>" + userArrays.pop() + "</li>");




 });
});
