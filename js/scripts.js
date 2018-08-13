$(document).ready(function() {
$("#infos").submit(function(event)  {
event.preventDefault()
  var firstnameInput = $("input#firstname").val();
  var lastnameInput = $("input#lastname").val();
  var addressInput = $("input#address").val();



    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".address").text(addressInput);
    $("#frontpage").hide();
    $("#backpage").show();
});

$("#goback").click(function(event) {
  event.preventDefault()
  $("#frontpage").show();
  $("#backpage").hide();
  $("#lastpage").hide()


});


$("#next").click(function(event) {
  event.preventDefault()

  $("#frontpage").hide();
  $("#backpage").hide();
  $("#lastpage").show();

});


$("#submit").click(function(event) {
    event.preventDefault();
    var QuestionOne = $("input:radio[name=choice]:checked").val();
    if (QuestionOne === "violet") {
      alert("you can do C sharp!");
    }
    else if (QuestionOne === "blue") {
      alert("you can do Java!");
    }
    else if (QuestionOne === "red") {
      alert("you can do Ruby!");
    }
    else if (QuestionOne === "orange") {
      alert("you can do PHP!");
    }
    else if (QuestionOne === "white") {
      alert("Click the link below for an awesome school!");
    }
  });
});
