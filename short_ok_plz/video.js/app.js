var app = angular.module('videoApp', []);
app.controller('videoCtrl', function($scope,$interval) {
	$scope.myPlayer = videojs('my-video');
   $scope.start = function(){
	  
	   console.log('duration',$scope.myPlayer.duration());
	   var whereYouAt = $scope.myPlayer.currentTime();
	   var minutes = Math.floor(whereYouAt / 60);   
	   var seconds = Math.floor(whereYouAt - minutes * 60)
	   var x = minutes < 10 ? "0" + minutes : minutes;
	   var y = seconds < 10 ? "0" + seconds : seconds;
	   console.log('start' , x, ':',y )
	   $scope.seekBar = $scope.myPlayer.player().controlBar.progressControl.seekBar;
	   
	   $scope.bar = $scope.myPlayer.player().controlBar.progressControl.seekBar.bar;
	   $scope.bar.addClass("seekBar");

	   console.log($scope.myPlayer.currentTime() ,$scope.seekBar.getPercent() )
	  
	   //$scope.value = $scope.seekBar.getPercent();
	   
	   $scope.crisp ={}
	   $scope.crisp.css = {
			color : colorGenerator(),
			left : whereYouAt,
			new : true
		}
	   createCrisp(
			whereYouAt,
			"seekBar",
			$scope.crisp.css.color,
			0
		);
	}

	function colorGenerator(){
		var rangeSize = 100; // adapt as needed
	    var color = [
	        Math.floor(Math.random() * 256),
	        Math.floor(Math.random() * rangeSize),
	        Math.floor(Math.random() * rangeSize) + 256 - rangeSize 
	    ]
    	.sort(function (a, b) {
			return Math.random() < 0.5;
		})
    	.map(function (p) {
			return ('0' + p.toString(16)).substr(-2);
		})
		.join('');
    	
    	return color;
	}


	function createCrisp( left, id, color, width ) {
		var hex = '#' + color,
		div = document.createElement('div');
		div.className = 'c' + color;
		//$scope.bar.addChild(div);
		angular
			.element($scope.bar.el())
			.append(div); 
	
		angular
			.element(document.querySelector('.c' + color ) )
			.css({
					"width" : width + 'px',
					"background-color" : hex,
					"margin-left" : left + '%',
					"height" : "5px",
					"z-index" : 1,
					"position" : "absolute"
				});
		//console.log($scope.bar.el());
		$scope.crispInterval = $interval(function(){
			expandCrisp( 
				(($scope.seekBar.getPercent()*100) - left),
				$scope.crisp.css.color
			);
		}, 100);
		
		
	}

	function expandCrisp(width, color) {
		console.log($scope.myPlayer.currentTime() ,$scope.seekBar.getPercent() )
		
		angular
			.element( document.querySelector('.c' + color ) )
			.css({
				"width" : width + 'px'
			});
			
	}
		

   $scope.stop =function(){
   	//console.log($scope.bar.el());
   	var whereYouAt = $scope.myPlayer.currentTime();
   	var minutes = Math.floor(whereYouAt / 60);   
	var seconds = Math.floor(whereYouAt - minutes * 60)
	var x = minutes < 10 ? "0" + minutes : minutes;
	var y = seconds < 10 ? "0" + seconds : seconds;
	console.log('end' , x, ':',y )
   	$interval.cancel( $scope.crispInterval );
   }
   
});