<?php
	include_once('connection.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Chat System</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script><!--JQUERY CDN-->
</head>

<body>
	<div id="wrapper">
		<center><h2>Welcome <?php session_start(); echo $_SESSION['username']; ?></h2></center>
		
		<div id="chat_wrapper">

			<div id="chat"></div><!--for displaying all chats-->
			
			<form method="POST" id="messageForm"><!--for sending new messages-->
				<textarea name="message" rows="7" cols="100" class="textarea"></textarea>
			</form>

		</div>

	</div>

	<script>
		
		LoadChat();

		setInterval(function(){
				LoadChat();
		}, 1000);//reloading every 1 sec so that if multiple users are using, all messages can be displayed

		function LoadChat(){
			$.post('handlers/messages.php?action=getMessages',function( response ){
				//$('#chat').html(response);
				//$('#chat').scrollTop( $('#chat').prop('scrollHeight') );//IMP
				
				var scrollpos = $('#chat').scrollTop();
				var scrollpos = parseInt(scrollpos) + 320;
				var scrollHeight = $('#chat').prop('scrollHeight');
				$('#chat').html(response);
				
				if( scrollpos > scrollHeight ){
					$('#chat').scrollTop( $('#chat').prop('scrollHeight') );
				}

			});
		}

		$('.textarea').keyup(function( e ){
			//alert($(this).val()); prints what is pressed and present in TEXTAREA class
			//alert(e.which); prints ASCII value of character pressed
			if( e.which == 13 ){
				$('form').submit();
			}
		});

		$('form').submit(function(){
			//alert('asdasd');
			var message = $('.textarea').val(); 
			$.post('handlers/messages.php?action=sendMessage&message='+message,function( response ){
				//alert(response);
				if( response==1 ){
					LoadChat();
					document.getElementById('messageForm').reset();
				}
			});
			return false;
		});

	</script>

</body>
</html>