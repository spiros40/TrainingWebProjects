
        <?php
            
            if(isset($_SESSION['register_status']))
                       {
                   if($_SESSION ['register_status']=="login")
                       {
                            echo '<img src="pics/account.png" style="height:30px; width:30px" />'
                                    . '<a href="scripts/logout.php"><u>Εξοδος</u></a>/';
                            
                            echo '<a href="users_page.php"><u>Λογαριασμός</u></a><br />';
                       }
                                                   
                       } else {
                            echo '<img src="pics/account.png" style="height:30px; width:30px" /><a href="account.php">'
                                    . '<u>Είσοδος/Εγγραφή</u></a><br />';
                            }
        
        
        
            ?>