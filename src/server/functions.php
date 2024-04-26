<?php
header("Access-Control-Allow-Origin: *");


function dbErr(){
    /**
     * notify that there is an error connecting to database and exit the script.
     */
    echo "Error connecting to database"; // echo error back as response to the frontend
    exit(); // exit the script
}

function success(){
    /**
     * function to echo a success function back to frontend
     */
    echo true;
    exit();
}


function reg_user(){
    /**
     * function to register user.
     */

    //retrieve user data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $pwd = md5($_POST['pwd']); // hash the password using md5


    $db = mysqli_connect("localhost","root","","cavista_healthcare_app");
    $ver_email_query = mysqli_query($db,"SELECT * FROM users WHERE email = '$email'"); // query to check if email exists

    if(!($ver_email_query)){
        dbErr(); // call db error function
    }

    if(mysqli_num_rows($ver_email_query) > 0){
        echo "used_email";
        exit(); // exit the script
    }
    else{
        //insert data into the database
        $insert_query = mysqli_query($db,"INSERT INTO users(name,email,pwd) VALUES('$name','$email','$pwd')");
        if(!($insert_query)){
            dbErr(); // call db error function 
        }
        else{
            success(); // call success function
        }
        exit(); // exit the script
    }
}

//function to log user
function log_in(){
    //retrieve user data
    $isThrough = false;
    $email = $_POST['email'];
    $pwd = md5($_POST['pwd']);  //hash password

    $db = mysqli_connect("localhost","root","","cavista_healthcare_app");

    //verify if the email exists in the database
    $check_email_query = mysqli_query($db,"SELECT * FROM users WHERE email = '$email'");
    if(!($check_email_query)){
        dbErr();    //call db error function
    }
    if (mysqli_num_rows($check_email_query) == 0){
        echo "null_mail";
        exit(); // echo null_email back to frontend and exit code if email is not found in the database
    }
    else{
        $assoc = mysqli_fetch_assoc($check_email_query);
        if ($pwd != $assoc['pwd']){
            echo "wrong_pwd"; // return incorrct password if password is incorrect
            exit();
        }
        else{
            success();
        }
    }
}