﻿<?php session_start();  ?>
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
    <script type="text/javascript" src="scripts/validate_new_user.js"></script>   
</head>

<body>
    <!-- registretion form -->
  <table id="login_table">
      <tr>
          <td>
    <h1>Φορμα εγγραφής</h1>

      <form name="new_user" class="login_form"  action="scripts/personal_information.php" method="POST" onsubmit="return validate_new_user();">
    
                    <label for="first_name">Όνομα:</label></>
                    <input type="text" name="first_name" size="35" required="required"/><br /><br />
          
                    <label for="second_name">Επώνυμο:</label></>
                    <input type="text" name="second_name" size="30" required="required"/><br /><br />

                    <label for="mob_number">Κινητό τηλέφωνο:</label>
                    <input type="text" name="mob_number"value="NULL" size="25"pattern="(?=.*[0-9]).{10,}" /><br /><br />    
          
                    <label for="email">Ηλεκτρονικό ταχυδρομείο:</label>
                    <input type="text" name="email" size="15" required="required"/><br /><br />    
                    
                    <!-- password must contain 8 characters and some symbol's-->   
                    <label for="password">Κωδικός:</label>
                    <input type="password" name="password" size="30" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  required="required"/><br /><br />

                    <label for="confirm_password">Επιβεβαίωση κωδικού:</label>
                    <input type="password" name="confirm_password" size="20" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  required="required"/><br /><br />    

                    <label for="role">Διαλέξτε ρόλο:</label>
                    <select name="role" required="required">
                        <option selected="" value="Default">(Παρακαλώ διαλέξτε ρόλο)</option>
                        <option value="admin">Διαχειριστής</option>
                        <option value="client">Πελάτης</option>                        
                    </select><br /><br />

                    <label for="address">Διεύθυνση:</label>
                    <input type="text" name="address" value="NULL" size="30" /><br /><br />                    

                    <label for="birth_date">Ημερομηνία γέννησης:</label>
                    <input type="text" name="birth_date" value="NULL" size="15" /><br /><br />

                    <input type="submit" name="submit" value="Submit" /> 
                    <button type="button" onclick="this.form.reset();" >Καθαρισμός</button> <br /><br />
    
               </form>
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