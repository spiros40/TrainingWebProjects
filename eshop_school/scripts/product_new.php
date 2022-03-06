<?php
//view the product list from database
	//login variables
	$host="localhost";
	$dbuser="spiros";
	$dbpassword="1234";
	$db="dbspurou";
	//variables
	$name=$_POST['name'];
	$category=$_POST['category'];
	$description=$_POST['description'];
	$photograph=$_POST['photograph'];
	$store=$_POST['store'];
	$price=$_POST['price'];
		 
	
	//if the basic values is fill 
	if (isset($_POST['name']) && isset($_POST['category']) && isset($_POST['description']) && isset($_POST['photograph'])&& isset($_POST['store'])&& isset($_POST['price'])) 
	{
		//connect to the database
		$connection_status = mysqli_connect($host,$dbuser,$dbpassword,$db);
		
		
		if ($connection_status) 
		{
			//checks if user the username exists
                    $query = "INSERT INTO product (name, category, description, photograph, store, price)
                    VALUES ('$name', '$category', '$description', '$photograph', '$store', '$price');";
			$result = $connection_status->query($query );
							
				
					// if data store correctly show message and redirect to login (account) page again
					if ($result == TRUE) 
					{						
						echo ("<script LANGUAGE='JavaScript'> window.alert('New record created successfully'); 
						window.location.href='http://localhost/product_list.php';</script>");						
					} 
					else 
					{
						echo ("Error: " . $query . "<br>" . $connection_status->error);
					}																	                                        		
			
                                    //close connection with database
                                    mysqli_close($connection_status);
			
		}else {	//show message and redirect to account page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('Can not connect with database try again'); 
			window.location.href='http://localhost/product_list.php';</script>");
			exit();
		}
	
	
		//if registration fails return to login page
        }else {	//show message and redirect to account page again
		echo ("<script LANGUAGE='JavaScript'> window.alert('You must fill the fields'); 
		window.location.href='http://localhost/product_list.php';</script>");
		exit();
		}

	?>