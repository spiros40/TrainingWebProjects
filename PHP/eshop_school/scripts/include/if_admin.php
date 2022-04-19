<?php
       
        
         if(isset($_SESSION['role']))
                       {
                   if($_SESSION ['role']=="admin")
                       {
                            echo '<img src="pics/admin.jpg" style="height:30px; width:30px" />'
                                    . '<a href="/product_list.php"><u>Κατάλογοι</u></a><br />';
                       } else {
                            echo '<img src="pics/mail.png" style="height:30px; width:30px;" />
                                <u><a href="mailto://sales@petshop.gr">sales@petshop.gr</a>
                        <br /></u>Email για παραγγελία';
                            }
                                                   
                       } else {
                            echo '<img src="pics/mail.png" style="height:30px; width:30px;" />
                                <u><a href="mailto://sales@petshop.gr">sales@petshop.gr</a>
                        <br /></u>Email για παραγγελία';
                            }
                            
?>                            