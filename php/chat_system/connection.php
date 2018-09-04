<?php

	// try{
	// 	$conn = new mysqli("localhost", "root", "", "chat_system");
	// }
	// catch( Exception $e){
	// 	$e->getMessage();
	// }

	$dbhost = 'locahost';
	$dbname = 'chat_system';
	$dbuser = 'root';
	$dbpass = '';
	try{
		$db = new PDO("mysql:dbhost=$dbhost;dbname=$dbname", "$dbuser", "$dbpass");
	}catch( PDOException $e ){
		echo $e->getMessage();
	}

?>