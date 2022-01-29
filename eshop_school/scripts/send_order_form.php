<?php

 session_start();


//view the product list from database
	//login variables
	$host="localhost";
	$dbuser="spiros";
	$dbpassword="1234";
	$db="dbspurou";
	//variables from sessions
        $cart_serial=$_SESSION["cart_serial"];
        //put session to variable
        $cartArray=$_SESSION["shopping_cart"];        
        //get user email
        $email=$_SESSION ['user'];
        
        
	$first_name=$_POST['first_name'];
	$second_name=$_POST['second_name'];
	$mob_number=$_POST['mob_number'];
	$email=$_POST['email'];
	$address=$_POST['address'];
	
        
        foreach ($cartArray as $items){         
      
                $product_id=$items[0]; 
                $quantity=$items[1];
                //connect to the database
		$connection_status = mysqli_connect($host,$dbuser,$dbpassword,$db);		
		if ($connection_status) 
		{
                    //recall users id and stored to a variable
                    $query = "SELECT user_id FROM user WHERE email= '".$email."'";                    
                    $result = $connection_status->query($query );
                    if ($result->num_rows > 0)
                    {
                        // output data of each row
                        while($row = $result->fetch_assoc())
                        {
                            $user_id=$row ['user_id'];	
                    }
                    
                    }
                    
                    if ($connection_status) 
		{
                    //gets values from product    
                    $query = "SELECT price FROM product WHERE product_id= '".$product_id."'";  
                    $result = $connection_status->query($query );
                    if ($result->num_rows > 0)
                    {
                        // output data of each row
                        while($row = $result->fetch_assoc())
                        {
                            //sets values to database
                            $price=$row ['price'];
                            $status="Κατατέθηκε";
                    }
                    
                    }
                    }
                     
		}else {	//show message and redirect to  page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('Can not connect with database try again'); 
			window.location.href='http://localhost/cart.php';</script>");
			exit();}
                
		if ($connection_status) 
		{
			//checks if user the username exists
                    $query = "INSERT INTO prod_order ( user_id, product_id,quantity, price, status)
                    VALUES ('$user_id', '$product_id','$quantity', '$price', '$status');";
			$result = $connection_status->query($query );											
			// if data store correctly show message and redirect to login (account) page again
			if ($result == TRUE){	
                            //if it's successful delete the product
                            include 'scripts/include/product_delete.php';
                            
				echo ("<script LANGUAGE='JavaScript'> window.alert('New record created successfully'); 
				window.location.href='http://localhost/cart.php';</script>");						
				}else{
					echo ("Error: " . $query . "<br>" . $connection_status->error);
					}																	                                        		
			
		}else {	//show message and redirect to account page again
			echo ("<script LANGUAGE='JavaScript'> window.alert('Can not connect with database try again'); 
			window.location.href='http://localhost/cart.php';</script>");
			exit();
		}		
	
                
                //close connection with database         
                mysqli_close($connection_status);
                       
        }
       
	?> 