<!-- create list of users's  -->
<table id="data_table">
<thead>
<tr>
<th ">user_id</th>
<th >Ονομα</th>
<th>Επωνυμο</th>
<th>Κινητο</th>
<th>Email</th>
<th>Ρολο</th>
<th>Διεύθυνση</th>

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
           $query = "SELECT user_id,first_name,second_name,mob_number,email,role,address FROM user ORDER BY second_name DESC; ";
            $result = $connection_status->query($query);

                if ($result->num_rows > 0)
                {
                    // output data of each row
                    while($row = $result->fetch_assoc())
                    {
                     ?>
                     
                        <tr>
                        
                         <td id="cell"><label> <b><?php echo $row ['user_id']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['first_name']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['second_name']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['mob_number']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['email']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['role']; ?></b></label> </td> 
                         <td id="cell"><label> <b><?php echo $row ['address']; ?></b></label> </td> 
                                                
                     
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