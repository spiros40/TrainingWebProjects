
<?php
//view the number of product's in basket
    if(empty($_SESSION["cart_serial"])){
        echo 'ο καλάθι είναι άδειο';
         } else {
             
             echo 'Εχετε ';
             echo $_SESSION["cart_serial"];
             echo ' προιόντα';
        }



?>