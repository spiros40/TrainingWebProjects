<!--view the products and put them to cart-->  

<table id="index_table">
<tbody>
   <tr>
<?php

    //variables
    $host="localhost";
    $user="spiros";
    $password="1234";
    $db="dbspurou"; 
    $box=0;
    
        //connect to the database
        $connection_status = mysqli_connect($host,$user,$password,$db);

        //if connected to database takes user data
        if ($connection_status)
        {
            //takes data from user
            $query = "SELECT product_id,name,category,description,photograph,store,price FROM product ";
            $result = $connection_status->query($query);

                if ($result->num_rows > 0)
                {
                    // output data of each row
                    while($row = $result->fetch_assoc())
                    {
                        // put three  product's  in line
                        if($box==3){ echo '<tr>'; }
                     ?>
             
    <form name="add_cart"  action="scripts/add_to_cart.php" method="POST">
   
        <td id="index_box">
                
            <font id="product_form">
                        <b><a href="#"><?php echo $row ['name']; ?></a></b></br/>
                        <p style="float: left;"><a href="#"></a><img src="<?php echo $row ['photograph']; ?>" style="height:200px;width:200px" /></p>

                        <p align="center;justif;">
                            <h4>
                                <?php echo $row ['description']; ?>
                            </h4>
                        </p>                        
                            <b><?php echo $row ['price']; ?>&euro;</b> 
                            <input style="width:30px" name="quantity" type="number" min="1" max="20  " step="1" value="1" />                            
                            <input type="submit" formtarget="scripts/add_to_cart.php" value="Προσθήκη στο καλάθι">                                                       
                            <img src="pics/addBasket.png" style="height:30px;width:30px;" />
                            <input type="hidden" name="product_id" value="<?php echo $row ['product_id']; ?>" />                                                                                                                        
               
        </td>
    </form>
                <!-- puts product's three in line-->
                <?php  if($box==3){echo '</tr>'; $box=0; }else {$box++;}  } ?>
                        <?php 
                          
                          //close connection with database
                        mysqli_close($connection_status);                                           
                         
                    }
                }                              
        else
        {	//show message and redirect to account page again
            echo ("<script LANGUAGE='JavaScript'> window.alert('Can not connect with database try again');
            window.location.href='http://localhost/account.php';</script>");
            exit();
        }
    


?>
                
               
            </tr>
</tbody>
</table>
 