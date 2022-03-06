
               
                        
    <table id="sent_form_table" cellspacing="1">
      <tr>
          <td>

      <form name="new_user" class="login_form"  action="scripts/send_order_form.php" method="POST">
    
            <tr><td><label for="first_name">Όνομα:</label><input type="text" name="first_name" size="35" required="required"/>&nbsp;
          
                  <label for="second_name">Επώνυμο:</label>
                  <input type="text" name="second_name" size="30" required="required"/></td></tr>

            <tr><td><label for="mob_number">Κινητό τηλέφωνο:</label>
                    <input type="text" name="mob_number" value="NULL" size="15"pattern="(?=.*[0-9]).{10,}" /> 
          
                    <label for="email">Email:</label>
                    <input type="text" name="email" size="15" required="required"/></td></tr>  
                    
            <tr><td><label for="address">Διεύθυνση:</label>
                    <input type="text" name="address" required placeholder="Διεύθυνση" name="Οδός-Αριθμός"size="20"maxlength="25"/>&nbsp;&nbsp;
                    <input type="text"name="tk" required placeholder="TK" size="8"maxlength="8" />&nbsp;&nbsp;
                    <input type="text" name="town"required placeholder="Πόλη-περιοχή" size="12"maxlength="15"/>&nbsp;&nbsp;
                           <select name="Νομός">
                               <option value="athens">Αθήνα</option>
                               <option value="thessaloniki"> Θεσσαλονίκη</option>
                               <option value="patra"> Πάτρα</option>
                               <option value="serres"> Σέρρες</option>
                               <option value="larisa"> Λάρισα</option>
                           </select></td></tr>
                    
           <tr><td><label for="how_to_send">Αποστολή:</label>
                    <input type="radio"name="send" value="from_store"/>Παραλαβή απο το κατάστημα</p>
                             <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <input type="radio"name="send" value="our_courier"/>Παράδοση με δική μας μεταφορική</p>
                             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <input type="radio"name="send" value="client decide"/>Παράδοση με μεταφορική της επιλογής σας</p></td></tr>
                             
            <tr><td> <label for="payment">Πληρωμή:</label>
                    <input type="radio"name="payment" value="with_cart"/>Πιστωτική, Χρεωστική  Κάρτα Online</p>
                             <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio"name="payment" value="bank_deposit"/>Τραπεζική κατάθεση</p></td></tr>

            <tr><td><label for="comments">Σχόλια:</label>   
                      <input type="text"name="comments" size="50"  maxlength="300" placeholder="Τα σχόλια σας"/></td></tr>
                             
            
            <tr><td> <p><input type="checkbox" name="privacy_policy"/>&nbsp;Συμφωνώ με τους <a href="#">όρους χρήσης</a> και την <a href="#">πολιτική απορρήτου</a></p></td></tr>				

                    
            <tr><td><input type="submit" name="submit" value="Καταχώριση"/> 
                    <button type="button" onclick="this.form.reset();">Καθαρισμός</button></td></tr>
    
               </form>
              </td>
          </tr>

    </table>
                     
                     

                         
