<?php
	require './dbconnection.php';

	class model{
	    private $conn;
	    function __construct(){
	        	$db = new dbconnection();
	        	$this->conn = $db->connect_to_db();
		}

		function register_user( $name_param, $email_param, $contact_param, $password_param ){
			/*MAKE A NEW ENTRY RECORD FOR USER*/
			$new_user_query = "INSERT INTO user_table (NAME, EMAIL, CONTACT_NUMBER, PASSWORD) VALUES ('$name_param', '$email_param', '$contact_param', '$password_param')";
			/*MAKE A NEW TABLE TO STORE USER'S BLOGS*/
			$new_usertable_query = "CREATE TABLE `$email_param` ( HEADING VARCHAR(50) , DESCRIPTION VARCHAR(500) NOT NULL, PUBLISH_DATE TIMESTAMP )";

			if ($this->conn->query($new_usertable_query) === TRUE) {
			    if ($this->conn->query($new_user_query) === TRUE) {
				    $_SESSION['user_email'] = $email_param;
				} else {
				    echo "Error: " . $new_user_query . " " . $conn->error;
				}
			} else {
			    echo "Error creating table: " . $this->conn->error;
			}
		}

		function get_data( $email_param ){
			$get_data_query = "SELECT * FROM `$email_param` ORDER BY PUBLISH_DATE DESC";
			$result = $this->conn->query($get_data_query);
			return $result;
		}

		function login_user( $email_param, $password_param ){
			$login_query = "SELECT * FROM user_table WHERE EMAIL='$email_param'";
			$result = $this->conn->query($login_query);

			$row = $result->fetch_assoc();
			$user_entered_password = $password_param;
			$original_password = $row["PASSWORD"];

			if ($result->num_rows > 0) {
				if( $user_entered_password == $original_password ){
					$_SESSION['user_email'] = $email_param;
				}else{
					echo "INVALID LOGIN PASSWORD";
				}
			}
		}

		function new_blog( $email_param, $heading_param, $content_param ){
			$new_blog_query = "INSERT INTO `$email_param` ( HEADING, DESCRIPTION ) VALUES ( '$heading_param', '$content_param' )";
			if ($this->conn->query($new_blog_query) === FALSE ) {  echo "Error: " . $new_blog_query . " " . $this->conn->error;  }
		}

		function delete_blog( $email_param, $heading_param, $content_param ){
			$delete_blog_query = "DELETE FROM `$email_param` WHERE HEADING='$heading_param'";
			if ($this->conn->query($delete_blog_query) === FALSE) {  echo "Error: " . $delete_blog_query . " " . $this->conn->error; }
		}

		function edit_blog( $email_param, $heading_param, $content_param ){
			$edit_blog_query = "UPDATE `$email_param` SET DESCRIPTION = '$content_param' WHERE HEADING = '$heading_param'";
			if ($this->conn->query($edit_blog_query) === FALSE) { echo "Error: " . $edit_blog_query . " " . $this->conn->error; }
		}

		function log_out(){
			session_unset();
			session_destroy();
			mysqli_close($this->conn);
		}
	}
?>