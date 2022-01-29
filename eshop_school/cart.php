﻿﻿<?php session_start();  ?>
<!DOCTYPE html>

<html lang="gr" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <!-- Επιλεγμένη γλώσσα είναι τα ελλήνικά -->
    <meta charset="greek" />
    <title>pet shop</title>
    <link rel="stylesheet" type="text/css" href="formatting.css" />
    <!-- η θέση του logo του search και menu  -->              
          
    <div>
      
        <table>
         <tr>
             <!-- logo-->
           <td style="height: 180px;width: 435px;" > 
               <div ><img src="pics/logo.png" alt="pet shop" style="height: 180px; width: 430px"/></div>
           </td>
             
             <!--search-->
           <td> 
               <div style=" width: 262px;"> <a href="index.php"><img src="pics/search.jpg" alt="pet shop" style="height:65px; width:65px"/></a>&nbsp;<input type="text"size="35" placeholder="Αναζήτηση" style="width: 170px"/></div>
           </td>
            
             <!--menu-->
           <td style="width: 500px; height: 200px;"> <div style="margin-left: 1px;">
               <table>     
               <tr> 
                   <td style="height: 80px;width:250px;">
                       <img src="pics/cart.png" style="height:30px; width:30px" />&nbsp;<a href="cart.php"> <u><?php 
                         include 'scripts/include/cart_inform.php'; ?></u></a>
                    </td>
                   <td><?php include 'scripts/include/if_login.php';?> </td>
               </tr>     
               <tr>    
                   <td><?php include 'scripts/include/if_admin.php';?></td>
                    <td style="height: 80px;width:250px;">
                        <img src="pics/phone.png"style="height:30px; width:30px;" />&nbsp;2310123456 <br/> Τηλεφωνική παραγγελία 
                    </td>
                </tr>
                   </table>
                   </div>
               </td>
            </tr>
        </table>
       
   </div>

     <!-- κεντρικό menu-->
    <hr>
       <menu id="main_menu">      
           <a href="index.php"> <button><h2><u>Αρχικη</u></h2></button></a>
           <a href="dogs.php">  <button><h2><u>Σκύλοι</u></h2></button></a>
           <a href="index.php"> <button><h2><u>Γάτες</u></h2></button></a>         
           <a href="index.php"> <button><h2><u>Ψάρια</u></h2></button></a>
           <a href="index.php"> <button><h2><u>Πουλία</u></h2></button></a>
           <a href="index.php"> <button><h2><u>Ερπετά</u></h2></button></a>
           <a href="index.php"> <button><h2><u>Μικρά ζώα</u></h2></button></a>                
       </menu>
    <hr>
    
</head>

<body>
    
    

    <table id="main_table">
        <tr>
            <!-- first cell -->
            <td style="border-style: groove; height:500px; width:450px;">
                <font size="5" color="black"><b>Περιεχόμενα στο καλάθι</b></font>

                <table id="cart_first_line">
                     <!-- line 1 -->
                                         
                    <tr id="back_color1">
                        <!-- product -->
                        <td><font size="3" color="white" ><b>Προιόν</b></font></td> 
                        <!-- price -->
                        <td><font size="3" color="white"><b>Τιμή</b></font></td> 
                        <!-- quantity -->
                        <td><font size="3" color="white"><b>Ποσότητα</b></font></td>
                        <!-- total -->
                        <td><font size="3" color="white"><b>Σύνολο</b></font></td>
                        <!-- delete -->
                        <td><font size="3" color="white"<b>Διαγραφή</b></font></td>
                    </tr>
                     <?php 
                     $cart_serial=$_SESSION["cart_serial"];
                     if($cart_serial>0){
                     include 'scripts/include/cart_view.php';                     
                    } else {
                         echo ("<script LANGUAGE='JavaScript'> window.alert('Το καλάθι σας είναι άδειο!');
                window.location.href='http://localhost/index.php';</script>");
                        
                    }?>
                </table>

            </td>

            <!-- second cell -->
            <td style="border-style: groove; height:500px; width:600px;">
                
                <table >
                    <!--line 1 -->
                    <tr><font size="5" color="black"><b>Αποστολή και πληρωμή</b></font><br /></tr>

                    <td>
                   
                      <?php include 'scripts/include/order_form.php'; ?>        
    
                    </td>
                    




                </table>
                
                
            </td>



        </tr>





    </table> 
    


   
  

</body>
     <!-- footer menu -->
    <footer>
         
      <div id="footer1">
          <hr />
          <b><a href="index.php" > Τρόποι πληρωμής</a> <b>|</b> 
              <a href="index.php"> Τρόποι αποστολής</a> <b>|</b> 
              <a href="index.php"> Όροι χρήσης</a> <b>|</b>
              <a href="index.php"> Πολιτική απορρήτου</a><b>|</b>
              <a href="index.php"> Επικοινωνία</a></b>
     </div>   
     </footer>
    
</html>