<?php include 'header.php';?>


<div class="row">

	<!--GOOGLE MAP ID-->
	<div class="col-sm-6">
	<br /><h1 style="color: #11c700; border-bottom: 2px solid #11c700;">FIND US HERE <i class="fa fa-hand-o-down" style="color: #09a128;" aria-hidden="true"></i></h1><br />

    <div id="map" style="text-align: center;height: 400px; width: 100%;"></div>
	    <script>
	        function initMap() {
	            var uluru = {
	                lat: 23.033800,
	                lng: 72.546584
	            };
	            var map = new google.maps.Map(document.getElementById('map'), {
	                zoom: 15,
	                center: uluru
	            });
	            var marker = new google.maps.Marker({
	                position: uluru,
	                map: map
	            });
	        }
	    </script>
    	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIL06LvZ1UBqamk1ZV27Fs78Gbe6UYAso&callback=initMap"></script>
	</div>


	<!--CONTACT FORM-->
	<div class="col-sm-6">
		<br><h1 style="color: #11c700; border-bottom: 2px solid #11c700;">OR MEET BY FOR <i class="fa fa-coffee" style="color: #a67b57" aria-hidden="true"></i></h1><br>

		<form action="mail.php" method="post">

			<div class="form-group">
		    	<input type="text" class="form-control" placeholder="Name" name="name">
			</div>

			<div class="form-group">
		    	<input type="text" class="form-control" placeholder="Contact Number" name="contactNumber">
		  	</div>

		    <div class="form-group">
		      <input type="email" class="form-control" placeholder="Email" name="email">
		    </div>

		    <div class="form-group">
		      <input type="textarea" rows="10" cols="30" class="form-control" placeholder="Message..." name="message">
		    </div>

		    <button type="submit" class="btn btn-success" style="font-weight: bold;">Submit</button>
			<button type="reset" class="btn btn-danger" style="font-weight: bold;">Reset</button>

  		</form>
	</div>

</div>

<hr>

<div class="row" style="text-align: center;">
	<h1 class="col-xs-12">OR</h1>
	<h1 class="col-xs-12">TRY OUR ONLINE CHAT AGENT</h1>
	<h4 class="col-xs-12">We are online and ready for you.</h4>
	<h4 class="col-xs-12">You will get a Pop-Up from our Chat Bot Shortly.</h4>
</div>

<!--TAWK TO JS-->
<script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/59a3a7114fe3a1168eada01b/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
 </script>-

<?php include 'footer.php';?>
