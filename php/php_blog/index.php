<?php
	require './header.php';
	$m = new model();
	$table_name = $_SESSION['user_email'];
	$result = $m->get_data($table_name);
	if ($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
?>
	<div class="container">
		<div class="jumbotron">
			<h2 class="display-4"><?php echo $row["HEADING"]; ?></h2>
			<p class="lead"><?php echo $row["DESCRIPTION"]; ?></p>
			<p class="lead">published by <?php echo $_SESSION["user_email"]. " on " .  $row["PUBLISH_DATE"]; ?></p>
			<form method="POST" action="./edit_blog.php">
				<?php $heading = $row['HEADING']; $content = $row["DESCRIPTION"]; ?>
				<input type="hidden" name="edit_blog_hidden_heading_parameter" value="<?php echo htmlspecialchars($heading); ?>">
				<input type="hidden" name="edit_blog_hidden_content_parameter" value="<?php echo htmlspecialchars($content); ?>">

				<input type="submit" class="btn btn-danger" name="delete_blog_btn" value="Delete">
				<input type="submit" class="btn btn-primary" name="edit_blog_btn" value="Edit">
			</form>
		</div>
		<?php }
			}else{
		?>
		<h1>NO BLOGS TO DISPLAY!</h1>
		<h4>Start blogging today!</h4>
		<?php } ?>
	</div>
<?php require './footer.php'; ?>