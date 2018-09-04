<?php

	include('../connection.php');

	switch ($_REQUEST['action']) {

		case "sendMessage":
			//echo "response"; confirming RESPONSE MESSAGE FROM THIS PAGE
			session_start();
			$query = $db->prepare("INSERT INTO messages SET user=?, message=?");
			$run = $query->execute([$_SESSION['username'], $_REQUEST['message']]);
			if( $run ){
				echo 1;
				exit;
			}
			break;

			case "getMessages":
				//echo "something";
				$query = $db->prepare("SELECT * FROM messages");
				$run = $query->execute();
				$rs = $query->fetchAll(PDO::FETCH_OBJ);
				//echo var_dump($rs);
				$chatMessage='';
				foreach ( $rs as $chatMessageToBeDisplayed ) {
					$chatMessage .= '<div class="messageDisplayed">
									<strong>'.$chatMessageToBeDisplayed->user.':</strong>'.$chatMessageToBeDisplayed->message.'
									<span>'.date('m-d-Y h:i a',strtotime($chatMessageToBeDisplayed->date)).'</span>
									</div>';
				}
				echo $chatMessage;
			break;
	}

?>