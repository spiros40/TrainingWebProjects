	<?php

	//login variables
	$host="localhost";
	$dbuser="spiros";
	$dbpassword="1234";
	$db="dbspurou";
	
        //variables
	$user_id=$_POST['user_id'];
        $first_name=$_POST['first_name'];
	$second_name=$_POST['second_name'];
	$mob_number=$_POST['mob_number'];
	$email=$_POST['email'];
	$address=$_POST['address'];
	$birth_date=$_POST['birth_date'];
	 
	
	//if the basic values is fill 
	if (isset($_POST['first_name']) && isset($_POST['second_name']) && isset($_POST['mob_number'])&& isset($_POST['email'])&& isset($_POST['address'])&& isset($_POST['birth_date'])) 
	{
		//connect to the database
		$connection_status = mysqli_connect($host,$dbuser,$dbpassword,$db);
				
		if ($connection_status) 
		{
			//insert the new values                   
			//$query = "UPDATE product SET name=$name, category=$category, description=$description, photograph=$photograph, 
                        //store=$store, price=$price, WHERE product_id=$product_id";
                        $query = ("UPDATE user SET first_name ='".$first_name."', second_name ='".$second_name."', mob_number ='".$mob_number."', email ='".$email."', address ='".$address."' , birth_date ='".$birth_date."' WHERE user_id ='".$user_id."'");
                      
                        $result = $connection_status->query($query );
							
				// if data store correctly show message and redirect to login (account) page again
					if ($result == TRUE) 
					{						
						echo ("<script LANGUAGE='JavaScript'> window.alert('Η εγγραφή άλλαξε με επιτυχία'); 
						window.location.href='http://localhost/users_page.php';</script>");						
					} 
					else 
					{
						echo ("Error: " . $query . "<br>" . $connection_status->error);
					}																	                                        		
			
                                    //close connection with database
                                    mysqli_close($connection_status);
			
		}else {	//show message and redirect to account page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('Δεν υπάρχει σύνδεση με την βάση προσπαθήστε αργότερα'); 
			window.location.href='http://localhost/users_page.php';</script>");
			exit();
		}
	
	
		//if registration fails return to login page
        }else {	//show message and redirect to account page again
		echo ("<script LANGUAGE='JavaScript'> window.alert('Θα πρέπει να συμπληρώσετε τα πεδία'); 
		window.location.href='http://localhost/users_page.php';</script>");
		exit();
		}

	?>