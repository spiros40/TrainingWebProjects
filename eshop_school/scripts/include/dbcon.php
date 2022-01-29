<!-- create list of product's  -->
<table id="data_table">
<thead>
<tr>
<th>Product_id</th>
<th>Ονομα</th>
<th>Κατηγορία</th>
<th>Περιγραφή</th>
<th>Φωτογραφία</th>
<th>Απόθεμα</th>
<th>Τιμή</th>
<th>    </th>
<th>    </th>
</tr>
        <tr>
                     <form name="change_product"  action="scripts/product_new.php" method="POST">   
                         
                        <td><input type="text" name="product_id" value="" size="5" /> </td>
                        <td><input type="text" name="name" value="" size="15" /> </td> 
                        <td><input type="text" name="category" value="" size="15" /> </td>   
                        <td><input type="text" name="description" value="" size="15" /> </td>   
                        <td><input type="text" name="photograph" value="" size="15" /> </td>  
                        <td><input type="text" name="store" value="" size="15" /> </td>   
                        <td><input type="text" name="price" value="" size="15" /> </td>   
                        
                        <!--Add button-->
                        <td><input type="submit" name="submit" value="    Νέο   "  /> </td>
                        <!--to clear form-->
                        <td><button type="button" onclick="this.form.reset();" >Καθαρισμός</button></td>
                        
                     </form>
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
            $query = "SELECT product_id,name,category,description,photograph,store,price FROM product ";
            $result = $connection_status->query($query);

                if ($result->num_rows > 0)
                {
                    // output data of each row
                    while($row = $result->fetch_assoc())
                    {
                     ?>
                     
                        <tr>
                     <form name="change_product"  action="scripts/product_change.php" method="POST">   
                         
                        <td><input type="text" name="product_id" value="<?php echo $row ['product_id']; ?>" size="5" /> </td>
                        <td><input type="text" name="name" value="<?php echo $row ['name']; ?>" size="15" /> </td> 
                        <td><input type="text" name="category" value="<?php echo $row ['category']; ?>" size="15" /> </td>   
                        <td><input type="text" name="description" value="<?php echo $row ['description']; ?>" size="15" /> </td>   
                        <td><input type="text" name="photograph" value="<?php echo $row ['photograph']; ?>" size="15" /> </td>  
                        <td><input type="text" name="store" value="<?php echo $row ['store']; ?>" size="15" /> </td>   
                        <td><input type="text" name="price" value="<?php echo $row ['price']; ?>" size="15" /> </td>   
                        
                        <!--change button-->
                        <td><input type="submit" name="submit" value="Αλλαγή"/> </td>
                        <!--second action button delete-->
                        <td><input type="submit" formaction="scripts/product_delete.php"  value="  Διαγραφή  " /> </td>
                        
                     </form>
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