<?php
	session_start();
	require './model.php';

	$m = new model();

	extract($_POST);
	if(isset($_POST['sign_up_btn'])){/*IF SIGN UP BUTTON IS CLICKED*/
		$name = $_POST['user_name'];
		$email = $_POST['user_email'];
		$contact = $_POST['user_contact_number'];
		$password = $_POST['user_password'];
		$m->register_user( $name, $email, $contact, $password );
		header("location: ./index.php");
	}
	if(isset($_POST['log_in_btn'])){/*IF LOG IN BUTTON IS CLICKED*/
		$email = $_POST['user_email'];
		$password = $_POST['user_password'];
		$m->login_user( $email, $password );
		header("location: ./index.php");
	}
	if(isset($_POST['log_out_btn'])){/*IF LOGOUT BUTTON IS CLICKED*/
		$m->log_out();
		header("location: ./register.php");
	}
	if(isset($_POST['new_blog_btn'])){/*IF NEW BLOG BUTTON IS CLICKED*/
		$email = $_SESSION['user_email'];
		$heading = $_POST['blog_heading'];
		$content = $_POST['blog_content'];
		$m->new_blog( $email, $heading, $content );
		header("location: ./index.php");
	}
	if(isset($_POST['delete_blog_btn'])){/*IF DELETE BLOG BUTTON IS CLICKED*/
		$email = $_SESSION['user_email'];
		$heading = $_POST['blog_heading'];
		$content = $_POST['blog_content'];
		$m->delete_blog( $email, $heading, $content );
		header("location: ./index.php"); 
	}
	if(isset($_POST['confirm_edit_blog_btn'])){/*IF EDITING OF BLOG IS CONFIRMED*/
		$email = $_SESSION['user_email'];
		$heading = $_POST['blog_heading'];
		$content = $_POST['blog_content'];
		$m->edit_blog( $email, $heading, $content );
		header("location: ./index.php");
	}
?>