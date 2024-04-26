<?php
header("Access-Control-Allow-Origin: *");
require('functions.php');



//ensure the request type is a post request and check if all necessary variables are provided before proceeding to ensure validity.
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['action']) && $_POST['action'] == "signup" && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['pwd'])){
    reg_user();     //call the reg_user function which has been imported from the functions.php file
}


if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['action']) && $_POST['action'] == "login" && isset($_POST['email']) && isset($_POST['pwd'])){
    log_in();       //call the reg_user function which has been imported from the functions.php file
}


exit(); //exit the current script