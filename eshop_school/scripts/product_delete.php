<?php


	//login variables
	$host="localhost";
	$dbuser="spiros";
	$dbpassword="1234";
	$db="dbspurou";
	//variables
	$product_id=$_POST['product_id'];
	 
	
	//if the basic values is fill 
	if (isset($_POST['product_id'])) 
	{
		//connect to the database
		$connection_status = mysqli_connect($host,$dbuser,$dbpassword,$db);
				
		if ($connection_status) 
		{
			//checks if user the username exists
			$query = "DELETE FROM product WHERE product_id=$product_id";
			$result = $connection_status->query($query );
                            if ($result === TRUE) {
                                echo("<script LANGUAGE='JavaScript'> window.alert('Record deleted successfully'); 
			window.location.href='http://localhost/product_list.php';</script>");
                                    //close connection with database
                                    mysqli_close($connection_status);
			exit();
                              } else {
                                  echo("<script LANGUAGE='JavaScript'> window.alert('Error deleting record:'); 
                              window.location.href='http://localhost/product_list.php';</script>");
                                    //close connection with database
                                    mysqli_close($connection_status);
                              }		
			
		}else 
		{	//show message and redirect to account page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('Can not connect with database try again'); 
			window.location.href='http://localhost/product_list.php';</script>");
			exit();
		}
	}
		//if registration fails return to login page
		else 
		{	//show message and redirect to account page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('ID field is empty'); 
			window.location.href='http://localhost/product_list.php';</script>");
			exit();
		}

	?>