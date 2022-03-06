<!-- create list of product's order -->
<table id="data_table">
<thead>
<tr>
    <th id="cell">order_id</th>
<th>user_id</th>
<th>product_id</th>
<th>Ποσότητα</th>
<th>Ημερομηνία</th>
<th>Τιμη</th>
<th>Κατάσταση</th>

</tr>
          
</thead>
<tbody>
<?php

    //variables
    $host="localhost";
    $user="spiros";
    $password="1234";
    $db="dbspurou"; 
    
        //connect to the database
        $connection_status = mysqli_connect($host,$user,$password,$db);

        //if connected to database takes user data
        if ($connection_status)
        {
            //takes data from user
           $query = "SELECT order_id,user_id,product_id,quantity,date_time,price,status FROM prod_order ORDER BY product_id DESC; ";
            $result = $connection_status->query($query);

                if ($result->num_rows > 0)
                {
                    // output data of each row
                    while($row = $result->fetch_assoc())
                    {
                     ?>
                     
                        <tr>
                        
                         <td id="cell"><label> <b><?php echo $row ['order_id']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['user_id']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['product_id']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['quantity']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['date_time']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['price']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['status']; ?></b></label> </td> 
                                                
                     
                        </tr>   
<?php } ?>
                        <?php 
                          
                          //close connection with database
                        mysqli_close($connection_status);                                           
                         
                    }
                }
        
                      
        else
        {	//show message and redirect to account page again
            echo ("<script LANGUAGE='JavaScript'> window.alert('Δεν υπάρχει σύνδεση με την βάση προσπαθήστε αργότερα');
            window.location.href='http://localhost/account.php';</script>");
            exit();
        }
    


?>
</tbody>
</table>