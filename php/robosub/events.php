<?php include 'header.php';?>

<script>
  $(document).ready(function(){

    $("#idBackE1").hide();
    $("#spanE1").hide();
    $("#idBackE2").hide();
    $("#spanE2").hide();
    $("#idBackE3").hide();
    $("#spanE3").hide();
    $("#idBackE4").hide();
    $("#spanE4").hide();
    $("#idBackE5").hide();
    $("#spanE5").hide();
    $("#idBackE6").hide();
    $("#spanE6").hide();



    //CLICK READ MORE 1
    $("#idReadE1").click(function(){
      $("#E2").hide(500);
      $("#E3").hide(500);
      $("#E4").hide(500);
      $("#E5").hide(500);
      $("#E6").hide(500);

      $("#idReadE1").hide();
      $("#idBackE1").show();
      $("#spanE1").show();

      var x=document.getElementById("E1");
      x.classList.add('col-xs-12');
      x.classList.remove('col-xs-6');

    });

    //CLICK BACK 1
    $("#idBackE1").click(function(){
    $("#E2").show(500);
    $("#E3").show(500);
    $("#E4").show(500);
    $("#E5").show(500);
    $("#E6").show(500);

    $("#idReadE1").show();
    $("#idBackE1").hide();
    $("#spanE1").hide();

    var x=document.getElementById("E1");
    x.classList.remove('col-xs-12');
    x.classList.add('col-xs-6');
    });


    //CLICK READ MORE 3
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

  //CLICK BACK 3
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

  //CLICK READ MORE 2
  $("#idReadE2").click(function(){
    $("#E1").hide(500);
    $("#E3").hide(500);
    $("#E4").hide(500);
    $("#E5").hide(500);
    $("#E6").hide(500);

    $("#idReadE2").hide();
    $("#idBackE2").show();
    $("#spanE2").show();

    var x=document.getElementById("E2");
    x.classList.add('col-xs-12');
    x.classList.remove('col-xs-6');

  });

  //CLICK BACK 2
  $("#idBackE2").click(function(){
  $("#E1").show(500);
  $("#E3").show(500);
  $("#E4").show(500);
  $("#E5").show(500);
  $("#E6").show(500);

  $("#idReadE2").show();
  $("#idBackE2").hide();
  $("#spanE2").hide();

  var x=document.getElementById("E2");
  x.classList.remove('col-xs-12');
  x.classList.add('col-xs-6');
  });

  //CLICK READ MORE 4
  $("#idReadE4").click(function(){
    $("#E1").hide(500);
    $("#E2").hide(500);
    $("#E3").hide(500);
    $("#E5").hide(500);
    $("#E6").hide(500);

    $("#idReadE4").hide();
    $("#idBackE4").show();
    $("#spanE4").show();

    var x=document.getElementById("E4");
    x.classList.add('col-xs-12');
    x.classList.remove('col-xs-6');

  });

  //CLICK BACK 4
  $("#idBackE4").click(function(){
  $("#E1").show(500);
  $("#E2").show(500);
  $("#E3").show(500);
  $("#E5").show(500);
  $("#E6").show(500);

  $("#idReadE4").show();
  $("#idBackE4").hide();
  $("#spanE4").hide();

  var x=document.getElementById("E4");
  x.classList.remove('col-xs-12');
  x.classList.add('col-xs-6');
  });

  //CLICK READ MORE 5
  $("#idReadE5").click(function(){
    $("#E1").hide(500);
    $("#E2").hide(500);
    $("#E3").hide(500);
    $("#E4").hide(500);
    $("#E6").hide(500);

    $("#idReadE5").hide();
    $("#idBackE5").show();
    $("#spanE5").show();

    var x=document.getElementById("E5");
    x.classList.add('col-xs-12');
    x.classList.remove('col-xs-6');

  });

  //CLICK BACK 5
  $("#idBackE5").click(function(){
  $("#E1").show(500);
  $("#E2").show(500);
  $("#E3").show(500);
  $("#E4").show(500);
  $("#E6").show(500);

  $("#idReadE5").show();
  $("#idBackE5").hide();
  $("#spanE5").hide();

  var x=document.getElementById("E5");
  x.classList.remove('col-xs-12');
  x.classList.add('col-xs-6');
  });

      //CLICK READ MORE 6
      $("#idReadE6").click(function(){
        $("#E1").hide(500);
        $("#E2").hide(500);
        $("#E3").hide(500);
        $("#E4").hide(500);
        $("#E5").hide(500);

        $("#idReadE6").hide();
        $("#idBackE6").show();
        $("#spanE6").show();

        var x=document.getElementById("E6");
        x.classList.add('col-xs-12');
        x.classList.remove('col-xs-6');

      });

    //CLICK BACK 6
    $("#idBackE6").click(function(){
      $("#E1").show(500);
      $("#E2").show(500);
      $("#E3").show(500);
      $("#E4").show(500);
      $("#E5").show(500);

      $("#idReadE6").show();
      $("#idBackE6").hide();
      $("#spanE6").hide();

      var x=document.getElementById("E6");
      x.classList.remove('col-xs-12');
      x.classList.add('col-xs-6');
    });
});

</script>

<!--EVENTS SECTION-->
<div class="eventsLink">

  <div  class="row" >
      <div class="wow zoomIn col-xs-6" id="E1">
          <h1>Event 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod o laboris nisi ut aliquip ex ea commodo consequat.
            <span id="spanE1">Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
            <a id="idReadE1">Read More</a>
            <a id="idBackE1">Back</a>
          </p>
      </div>
      <div class="wow zoomIn col-xs-6" id="E2">
          <h1>Event 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod o laboris nisi ut aliquip ex ea commodo consequat.
            <span id="spanE2">Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
            <a id="idReadE2">Read More</a>
            <a id="idBackE2">Back</a>
          </p>
      </div>
  </div>
  <div  class="row" >
      <div class="wow zoomIn col-xs-6" id="E3">
          <h1>Event 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod o laboris nisi ut aliquip ex ea commodo consequat.
            <span id="spanE3">Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
            <a id="idReadE3">Read More</a>
            <a id="idBackE3">Back</a>
          </p>
      </div>
      <div class="wow zoomIn col-xs-6" id="E4">
          <h1>Event 4</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod o laboris nisi ut aliquip ex ea commodo consequat.
            <span id="spanE4">Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
            <a id="idReadE4">Read More</a>
            <a id="idBackE4">Back</a>
          </p>
      </div>
  </div>
  <div  class="row" >
      <div class="wow zoomIn col-xs-6" id="E5">
          <h1>Event 5</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod o laboris nisi ut aliquip ex ea commodo consequat.
            <span id="spanE5">Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
            <a id="idReadE5">Read More</a>
            <a id="idBackE5">Back</a>
          </p>
      </div>
      <div class="wow zoomIn col-xs-6" id="E6">
          <h1>Event 6</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod o laboris nisi ut aliquip ex ea commodo consequat.
            <span id="spanE6">Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
            <a id="idReadE6">Read More</a>
            <a id="idBackE6">Back</a>
          </p>
      </div>
  </div>

</div>

<?php include 'footer.php';?>
