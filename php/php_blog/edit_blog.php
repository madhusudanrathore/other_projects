<?php
	require './header.php';
	$m = new model();
	if(isset($_POST['edit_blog_btn'])){/*IF EDIT BLOG BUTTON IS CLICKED*/
		$email = $_SESSION['user_email'];
		$heading = $_POST['edit_blog_hidden_heading_parameter'];
		$content = $_POST['edit_blog_hidden_content_parameter'];
?>
	<div class="container">
		<h1>Edit the blog <b><?php echo $heading; ?></b></h1>
		<form method="POST" action="./controller.php">
			<div class="form-group" style="text-align: center;">
				<input type="text" name="blog_heading" placeholder="heading goes here" value="<?php echo htmlspecialchars($heading); ?>"><br /><br />
				<textarea rows="10" cols="50" name="blog_content" placeholder="content goes here"><?php echo htmlspecialchars($content); ?></textarea>
			</div>
			<input type="submit" class="btn btn-success" name="confirm_edit_blog_btn" value="Edit">
			<input type="reset" class="btn btn-danger" name="cancel_edit_blog" value="Cancel">
		</form>
	</div>
<?php } require './footer.php'; ?>