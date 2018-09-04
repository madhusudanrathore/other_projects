$(document).ready(function(){

  $("#idBackE3").hide();
  $("#spanE3").hide();


  //CLICK READ MORE
  $("#idReadE3").click(function(){
    $("#E1").hide(500);
    $("#E2").hide(500);
    $("#E4").hide(500);
    $("#E5").hide(500);
    $("#E6").hide(500);

    $("#idReadE3").hide();
    $("#idBackE3").show();
    $("#spanE3").show();

    var x=document.getElementById("E3");
    x.classList.add('col-xs-12');
    x.classList.remove('col-xs-6');

  });


//CLICK Back
$("#idBackE3").click(function(){
  $("#E1").show(500);
  $("#E2").show(500);
  $("#E4").show(500);
  $("#E5").show(500);
  $("#E6").show(500);

  $("#idReadE3").show();
  $("#idBackE3").hide();
  $("#spanE3").hide();

  var x=document.getElementById("E3");
  x.classList.remove('col-xs-12');
  x.classList.add('col-xs-6');
});

});
