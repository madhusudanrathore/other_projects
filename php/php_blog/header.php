<?php
	session_start();
	if(!isset($_SESSION['user_email'])) {
		header("location:./register.php");
	}
	require './model.php';
?>
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	</head>
	<body>

		<div class="container-fluid" style="margin: 10px 0px;">
			<form method="POST" action="./controller.php">
				<h1 style="text-align: center;">Welcome to LBlog!</h1>
				<div style="float: right;">
					<span>Hello! <b><?php echo $_SESSION['user_email']; ?></b></span>
					<a href="./create_blogs.php" class="btn btn-primary">New Blog</a>
					<input type="submit" class="btn btn-danger" name="log_out_btn" value="Log Out">
				</div>
			</form>
		</div>