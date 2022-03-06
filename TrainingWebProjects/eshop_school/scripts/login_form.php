    <?php
    Session_start();
    //variables
    $host="localhost";
    $user="spiros";
    $password="1234";
    $db="dbspurou";

    $db_username=$_POST['email'];
    $db_password=$_POST['psw'];

    //if the form is complite
    if (isset($_POST['email']) && isset($_POST['psw']))
    {
        //connect to the database
        $connection_status = mysqli_connect($host,$user,$password,$db);

        //if connected to database takes user data
        if ($connection_status)
        {
            //takes data from user
            $query = "SELECT email,password,role FROM user WHERE email= '".$db_username."'";
            $result = $connection_status->query($query);

            //if exist    
            if ($result->num_rows > 0)
                {
                    // output data of each row
                    while($row = $result->fetch_assoc())
                    {
                        //load the database values to variable
                         $dbmail=$row["email"];
                         $dbpassword= $row["password"];
                         $dbrole= $row["role"];
                         
                    }

                    //checks if user data is correct
                    if ($dbmail==$db_username && $dbpassword==$db_password)
                    {   
                        //set value to session
                        $_SESSION ['register_status']="login";  
                        //checks if is user or admin and starts a session
                        if($dbrole=="admin"){ $_SESSION ['role']="admin";}
                        if($dbrole=="client"){ $_SESSION ['role']="client";}
                        $_SESSION ['user']= "$dbmail";
                       
                        //close connection with database
                        mysqli_close($connection_status);
                        echo ("<script LANGUAGE='JavaScript'> "
                                . "window.location.href='http://localhost/index.php';</script>");
                        
                        
                    }
                    //then if user not registered ends connection
                    else
                    {
                        echo ("<script LANGUAGE='JavaScript'> window.alert('User not registered!!');
                            window.location.href='http://localhost/account.php';</script>");
                            //close connection with database
                            mysqli_close($connection_status);
                    }
                }

                else
                {
                     ("<script LANGUAGE='JavaScript'> window.alert('Field is empty!!');
                            window.location.href='http://localhost/account.php';</script>");
                }

            //close connection with database
            mysqli_close($connection_status);
        }
        else
        {	//show message and redirect to account page again
            echo ("<script LANGUAGE='JavaScript'> window.alert('Can not connect with database try again');
            window.location.href='http://localhost/account.php';</script>");
            exit();
        }
    }

        //if registration fails return to login page
        else
        {	//show message and redirect to account page again
            echo ("<script LANGUAGE='JavaScript'> window.alert('Possible wrong email or password');
            window.location.href='http://localhost/account.php';</script>");
            exit();
        }

?>