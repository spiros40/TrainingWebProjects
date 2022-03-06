
<?php
  if (session_status() == PHP_SESSION_NONE) {
  session_start();
}

    
    //variables
    $host="localhost";
    $user="spiros";
    $password="1234";
    $db="dbspurou"; 
    $line_color=0;
    //takes session data
    $cart_serial=$_SESSION["cart_serial"];
    //put session to variable
    $cartArray=$_SESSION["shopping_cart"];
    if($cart_serial>0){
        //loop run until selected products end
        foreach ($cartArray as $items){

            //connect to the database
            $connection_status = mysqli_connect($host,$user,$password,$db);

            //if connected to database takes user data
            if ($connection_status)
            {
                //takes data from user
                $query = "SELECT product_id,name,price FROM product WHERE product_id=$items[0]";
                $result = $connection_status->query($query);

                    if ($result->num_rows > 0)
                    {
                        // output data of each row
                        while($row = $result->fetch_assoc())
                        {
                            //makes the line colors
                            if($line_color==0){$line_color=1;
                                echo '<tr id="back_color1">';                     
                            }else {$line_color=0;echo '<tr id="back_color2">';}

                         ?>

                         <form name="cart_view"  action="scripts/include/cart_view_delete_product.php"  method="POST">   
                            <input  type="hidden" name="product_id" value="<?php echo $row ['product_id'];?>"/>                        
                            <td><label> <b><?php echo $row ['name']; ?></b></label> </td> 
                            <td><label> <b><?php echo $row ['price']; ?>&euro;</b></label> </td> 
                            <td><input  style="width:30px" type="number" min="1" max="10" step="1" value="1" size="15"/> </td> 
                            <td><b><?php $resu=$row['price']*5;  echo "$resu";   ?></b> </td>                             
                           <td><input type="submit" name="submit" value="Διαγραφή" </td>
                           
                            

                            <?php } ?>

                         </form>
                            </tr>   

                            <?php 

                              //close connection with database
                             $result->close();
                            mysqli_close($connection_status);                                           

                        }
                    }                              
            else
            {	//show message and redirect to account page again
                echo ("<script LANGUAGE='JavaScript'> window.alert('Δεν υπάρχει σύνδεση με την βάση προσπαθήστε αργότερα');
                window.location.href='http://localhost/account.php';</script>");
                exit();
            }

        }

    } else {
        echo ("<script LANGUAGE='JavaScript'> window.alert('Το καλάθι σας είναι άδειο!');
                window.location.href='http://localhost/index.php';</script>");
        }
?>

 