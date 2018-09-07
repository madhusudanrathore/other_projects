<?php require './header.php'; ?>

	<div class="container">
		<h1>Let go of your mind!</h1>
		<form method="POST" action="./controller.php">
			<div class="form-group" style="text-align: center;">
				<input type="text" name="blog_heading" placeholder="heading goes here"><br /><br />
				<textarea rows="10" cols="50" name="blog_content" placeholder="content goes here"></textarea>
			</div>
			<input type="submit" class="btn btn-success" name="new_blog_btn" value="Publish">
			<input type="reset" class="btn btn-danger" name="cancel_blog_btn" value="Cancel">
		</form>
	</div>

<?php require './footer.php'; ?>