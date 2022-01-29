<?php
        //add products to basket
	session_start(); 
        
	//variables
	$product_id=$_POST['product_id'];
        $quantity=$_POST['quantity'];
        
        //if user is authorized
        if(isset($_SESSION['role'])){
                   if($_SESSION ['register_status']=="login"){
                        
                       //if session is empty set value 0
                        if(!isset($_SESSION["cart_serial"])){
                            $cart_serial=0; 
                            $_SESSION["cart_serial"]=$cart_serial;
                         } else {
                             $cart_serial=$_SESSION["cart_serial"];              
                            }
                        $cart_serial++;

                        //if the basic values is fill 
                        if (isset($_POST['product_id']) && isset($_POST['quantity'])) 
                        {
                            $cartArray = array($product_id, $quantity);                            

                            if(empty($_SESSION["shopping_cart"][$cart_serial])) 
                                {
                                    $_SESSION["shopping_cart"][$cart_serial] = $cartArray;
                                }             
                                    }  
                                      $_SESSION["cart_serial"]=$cart_serial;                   

                                   header('Location: ' . $_SERVER['HTTP_REFERER']);

                    }else {
                        echo ("<script LANGUAGE='JavaScript'> window.alert('Θα πρεπει να κανεις είσοδο ή να εγγραφής για να κάνεις αγορες');
                        </script>");
                        header('Location: ' . $_SERVER['HTTP_REFERER']);               
                        } 
                                                   
            }else {
                    echo ("<script LANGUAGE='JavaScript'> window.alert('Θα πρεπει να κανεις είσοδο ή να εγγραφής για να κάνεις αγορες');
                    </script>");
                   echo ("<script LANGUAGE='JavaScript'> 
                    window.location.href='http://localhost/index.php';</script>");
                } 
                            
        
        
          
	?>