    


<?php
    //delete products from basket
    session_start();
    $cartArray=array();
    $cartArray=$_SESSION["shopping_cart"];
    $i=1;
    $product_id=$_POST['product_id'];   
    $cart_serial=$_SESSION["cart_serial"];
  
    //loop run until selected products end       
    foreach ($cartArray as $items){         
      
        if($product_id==$items[0]){  
            //delete selected array
            unset($cartArray[$i]);            
            //decrease thw number of products 
            if ($cart_serial>0){$cart_serial--;}
            //setup new values to sessions
            $_SESSION["cart_serial"]= $cart_serial;                                   
            $_SESSION["shopping_cart"]=$cartArray;              
        }
        //increace 
        $i++;
    }
    
      header('Location: http://localhost/cart.php');  

?>