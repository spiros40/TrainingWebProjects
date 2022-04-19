	<?php

	//login variables
	$host="localhost";
	$dbuser="spiros";
	$dbpassword="1234";
	$db="dbspurou";
	//variables
	$first_name=$_POST['first_name'];
	$second_name=$_POST['second_name'];
	$mob_number=$_POST['mob_number'];
	$email=$_POST['email'];
	$password=$_POST['password'];
	$role=$_POST['role'];
	$address=$_POST['address'];
	$birth_date=$_POST['birth_date'];
	 
	
	//if the basic values is fill 
	if (isset($_POST['first_name']) && isset($_POST['second_name']) && isset($_POST['email']) && isset($_POST['password'])) 
	{
		//connect to the database
		$connection_status = mysqli_connect($host,$dbuser,$dbpassword,$db);
		
		//if connected to database takes user data    
		if ($connection_status) 
		{
			//checks if user the username exists
			$query = "SELECT email FROM user ";
			$result = $connection_status->query($query );
							
				if ($result->num_rows > 0) 
				{
					// read data of each row
					while($row = $result->fetch_assoc()) 
					{
						 $dbmail=$row["email"]; 
						 
						 //checks if user the username exists
						if ($dbmail==$email) 
						{
							//if exists show message and go to registration page
							echo ("<script LANGUAGE='JavaScript'> window.alert('Το όνομα χρήστη υπάρχει δοκιμάστε ένα άλλο!!'); 
								window.location.href='http://localhost/new_user.php';</script>");
								
								//close connection with database
								mysqli_close($connection_status);
								exit();					
						}						
					}														
				} 

				//insert data to table
				if ($connection_status) 
				{
					//create the query for the database
					$query = "INSERT INTO user (first_name,second_name,mob_number,email,password,role,address,birth_date) 
					VALUES('$first_name','$second_name','$mob_number','$email','$password','$role','$address','$birth_date') ";
					
					// if data store correctly show message and redirect to login (account) page again
					if ($connection_status->query($query) == TRUE) 
					{						
						echo ("<script LANGUAGE='JavaScript'> window.alert('Ο νέος χρήστης δημιουργήθηκε με επιτυχία!!'); 
						window.location.href='http://localhost/account.php';</script>");						
					} 
					else 
					{
						echo ("Error: " . $query . "<br>" . $connection_status->error);
					}
					
				}
			
                                    //close connection with database
                                    mysqli_close($connection_status);
			
		}
		else 
		{	//show message and redirect to account page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('Δεν υπάρχει σύνδεση με την βάση προσπαθήστε αργότερα'); 
			window.location.href='http://localhost/new_user.php';</script>");
			exit();
		}
	}
	
		//if registration fails return to login page
		else 
		{	//show message and redirect to account page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('Θα πρέπει να συμπληρώσετε τα πεδία'); 
			window.location.href='http://localhost/new_user.php';</script>");
			exit();
		}

	?>