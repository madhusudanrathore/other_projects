<?php
	session_start();
	if(isset($_SESSION['user_email'])) {
	  header("location: ./index.php");
	}
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h1 class="display-4">Welcome to LBlog!</h1>
			<p class="lead">Share your ideas through this portal to LDCE.</p>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<h1>New User?</h1>
				<h2>Register Below</h2>
				<form method="POST" action="./controller.php">
					<div class="form-group" style="text-align: center;">
						<input type="text" class="form-control" name="user_name" placeholder="enter name">
						<input type="email" class="form-control" name="user_email" placeholder="enter email">
						<input type="number" class="form-control" name="user_contact_number" placeholder="enter contact number">
						<input type="password" class="form-control" name="user_password" placeholder="password">
					</div>
					<input type="submit" class="btn btn-primary" name="sign_up_btn" value="Sign Up">
				</form>
			</div>
			<div class="col-sm-6">
				<h1>Already have an Account?</h1>
				<form method="POST" action="./controller.php">
					<div class="form-group" style="text-align: center;">
						<input type="email" class="form-control" name="user_email" placeholder="enter email">
						<input type="password" class="form-control" name="user_password" placeholder="password">
					</div>
					<input type="submit" class="btn btn-success" name="log_in_btn" value="Log In">
				</form>
			</div>
		</div>
	</div>

</body>
</html>