<?php
	class dbconnection{
		private $servername = "localhost";
		private $username = "root";
		private $password = "";
		private $dbname = "php_blog";
	    function connect_to_db(){
	        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
	        	if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }
	        	else { return $conn; }
	    }
	}
?>