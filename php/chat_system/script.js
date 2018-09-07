//for submitting data using JQUERY
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