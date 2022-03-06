<!-- user's data  -->
<table id="data_table">
<thead>
<tr>
<th>user_id</th>
<th>Ονομα</th>
<th>Επώνυμο</th>
<th>Κινητό</th>
<th>email</th>
<th>Κωδικός</th>
<th>Διεύθυνση</th>
<th>Ημερομηνία γέννησης</th>
</tr>
        
</thead>
<tbody>
<?php

    //variables
    $host="localhost";
    $user="spiros";
    $password="1234";
    $db="dbspurou"; 
    //write the session name to a value to use it to sql query
     $who_is=$_SESSION['user'];
    
        //connect to the database
        $connection_status = mysqli_connect($host,$user,$password,$db);

        //if connected to database takes user data
        if ($connection_status)
        {
            //takes data from user
           $query = "SELECT user_id,first_name,second_name,mob_number,email,password,address,birth_date FROM user WHERE email= '".$who_is."' ;";
            $result = $connection_status->query($query);

                if ($result->num_rows > 0)
                {
                    // output data of each row
                    while($row = $result->fetch_assoc())
                    {
                     ?>
                     
                        <tr>
                     <form name="change_user_data"  action="scripts/include/user_change.php" method="POST">   
                         
                        <input type="hidden" name="user_id" value="<?php echo $row ['user_id']; ?>"/>
                        <td id="cell"><label> <b><?php echo $row ['user_id']; ?></b></label> </td> 
                        <td><input type="text" name="first_name" value="<?php echo $row ['first_name']; ?>" size="15" /> </td> 
                        <td><input type="text" name="second_name" value="<?php echo $row ['second_name']; ?>" size="15" /> </td>   
                        <td><input type="text" name="mob_number" value="<?php echo $row ['mob_number']; ?>" size="15" /> </td>   
                        <td><input type="text" name="email" value="<?php echo $row ['email']; ?>" size="15" /> </td>  
                        <td><input type="password" name="password" value="<?php echo $row ['password']; ?>" size="15" /> </td>  
                        <td><input type="text" name="address" value="<?php echo $row ['address']; ?>" size="15" /> </td>   
                        <td><input type="text" name="birth_date" value="<?php echo $row ['birth_date']; ?>" size="15" /> </td>                           
                        <!--change button-->
                        <td><input type="submit" name="submit" value="Αλλαγή"/> </td>
                        <!--second action button delete-->
                        <td><input type="submit" formaction="scripts/include/user_delete.php"  value="  Διαγραφή  " /> </td>
                        
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