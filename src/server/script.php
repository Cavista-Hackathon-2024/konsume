<?php
header("Access-Control-Allow-Origin: *");
require('functions.php');



//ensure the request type is a post request and check if all necessary variables are provided before proceeding to ensure validity.
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['action']) && $_POST['action'] == "signup" && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['pwd'])){        //ensure the request method is post and all needed varianles are present
    reg_user();     //call the reg_user function which has been imported from the functions.php file
}


if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['action']) && $_POST['action'] == "login" && isset($_POST['email']) && isset($_POST['pwd'])){      //ensure the request method is post and all needed varianles are present
    log_in();       //call the reg_user function which has been imported from the functions.php file
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['action']) && $_POST['action'] == "get_u_data"){       //ensure the request method is post and all needed varianles are present
    get_user_data();       //call the get_user_data function which has been imported from the functions.php file
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['action']) && $_POST['action'] == "put_add_info" && isset($_POST['name']) && isset($_POST['weight']) && isset($_POST['userGoal']) && isset($_POST['userDiseases'])){       //ensure the request method is post and all needed varianles are present
    put_add_info();       //call the get_user_data function which has been imported from the functions.php file
}


exit(); //exit the current script