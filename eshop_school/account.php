<?php session_start();  ?>

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
                       <td><?php 
                         include 'scripts/include/if_login.php';
                    ?> </td>
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
        <script type="text/javascript" src="scripts/validate_login.js"></script>   
    </head>
    
    <body>
        

      <!-- login form -->
      <table id="login_table">
          <tr>
              <td>
        <div>
          
            <form name="login_form" class="login_form" action="scripts/login_form.php"  method="POST" onsubmit="return validate_email();">
      
              <div class="form_content">
                  <label<h2><b>Παρακαλώ εισάγετε τα στοιχεία εισόδου σας.</b></h2></label><br /><br />   

                  <label for="email"><b>Email</b></label>&nbsp;
                  <input type="text" placeholder="Δώσε email" name="email" required="required" /> <br /><br />
    
                  <label for="psw"><b>Κωδικός</b></label>&nbsp;
                  <input type="password" placeholder="Δώσε κωδικό" name="psw" required="required"/> <br /><br />

                  <button type="submit" name="submit" value="login">Είσοδος</button>
                  <button type="button" onclick="this.form.reset();" >Καθαρισμός</button> <br /><br />
              
                  <span >Νέος χρήστης! <a href="new_user.php"> Εγγραφή </a></span>
        
            </form>
       </div> 
   

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