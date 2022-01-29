
<?php
	//login variables
	$host="localhost";
	$dbuser="spiros";
	$dbpassword="1234";
	$db="dbspurou";
	//variables
	$user_id=$_POST['user_id'];
	$first_name=$_POST['first_name']; 
        
	//if the basic values is fill 
	if (isset($_POST['user_id'])) 
	{
		//connect to the database
		$connection_status = mysqli_connect($host,$dbuser,$dbpassword,$db);
				
		if ($connection_status) 
		{
			//checks if user the username exists
			$query = "DELETE FROM user WHERE user_id=$user_id";
			$result = $connection_status->query($query );
                            if ($result === TRUE) {
                                echo("<script LANGUAGE='JavaScript'> window.alert('Επιτυχής διαγραφή'); 
			window.location.href='http://localhost/scripts/logout.php';</script>");
                                    //close connection with database
                                    mysqli_close($connection_status);
			exit();
                              } else {
                                  echo("<script LANGUAGE='JavaScript'> window.alert('Αποτυχία διαγραφής:'); 
                              window.location.href='http://localhost/scripts/logout.php';</script>");
                                    //close connection with database
                                    mysqli_close($connection_status);
                              }		
			
		}else 
		{	//show message and redirect to account page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('Δεν υπάρχει σύνδεση με την βάση προσπαθήστε αργότερα'); 
			window.location.href='http://localhost/scripts/logout.php';</script>");
			exit();
		}
	}
		//if registration fails return to login page
		else 
		{	//show message and redirect to account page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('Αποτυχία διαγραφής'); 
			window.location.href='http://localhost//scripts/logout.php';</script>");
			exit();
		}

	?>