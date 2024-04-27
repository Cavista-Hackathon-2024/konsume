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

/**
 * function to register user to the database
 */
function reg_user(){
    /**
     * function to register user.
     */

    //retrieve user data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $pwd = password_hash($_POST['pwd'],PASSWORD_DEFAULT); // encrypt the password


    $db = mysqli_connect("localhost","root","","cavista_healthcare_app");       //establish sql connection
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
            session_start();        //start a new session
            $_SESSION['email'] = $email;
            success(); // call success function
        }
        exit(); // exit the script
    }
}

/**
 * function to log user in
 */
function log_in(){
    //retrieve user data
    $isThrough = false;
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];

    $db = mysqli_connect("localhost","root","","cavista_healthcare_app");       //establish sql connnection

    //verify if the email exists in the database
    $check_email_query = mysqli_query($db,"SELECT * FROM users WHERE email = '$email'");
    if(!($check_email_query)){
        dbErr();    //call db error function
    }
    if (mysqli_num_rows($check_email_query) == 0){
        echo "invalid Email.";
        exit(); // echo null_email back to frontend and exit code if email is not found in the database
    }
    else{
        $assoc = mysqli_fetch_assoc($check_email_query);


        if (password_verify($pwd, $assoc['pwd'])) {
            session_start();        //start a new session
            $_SESSION['email'] = $email;    //assign a email value to last for the session
            success();
        } else {
            echo "Incorrect Password"; // return incorrct password if password is incorrect
            exit();
        }
    }
}

/**
 * function to get user data
 */
function get_user_data(){
    // echo $_SESSION['email'];

    $db = mysqli_connect("localhost","root","","cavista_healthcare_app");       //establish database connection

    $email = $_SESSION['email'];
    //verify if the email exists in the database
    $check_email_query = mysqli_query($db,"SELECT * FROM users WHERE email = '$email'");        //get useer data from database
    if(mysqli_num_rows($check_email_query) > 0){        //ensure the data fetched exists by checking the number of rows returned
        $assoc = mysqli_fetch_assoc($check_email_query);

        unset($assoc['pwd']);
        echo json_encode($assoc);
        exit();
        $_SESSION['name'] = $assoc['name'];
        $_SESSION['email'] = $assoc['email'];
    }
}