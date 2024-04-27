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
 * function to start session only if it not started.
 */
function start_session(){
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
}

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
        echo "E-mail has been used";
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
    // session_start();
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
    start_session();
    if(isset($_SESSION['email'])){
        $db = mysqli_connect("localhost","root","","cavista_healthcare_app");       //establish database connection

        $email = $_SESSION['email'];
        //verify if the email exists in the database
        $check_email_query = mysqli_query($db,"SELECT * FROM users WHERE email = '$email'");        //get useer data from database
        if(mysqli_num_rows($check_email_query) > 0){        //ensure the data fetched exists by checking the number of rows returned
            $assoc = mysqli_fetch_assoc($check_email_query);

            //remove password from the data to be sent to front end.
            unset($assoc['pwd']);
            echo "isset session: ".isset($_SESSION['email']);

            //convert user data to json and echo it.
            echo json_encode($assoc);
            exit();
            $_SESSION['name'] = $assoc['name'];
            $_SESSION['email'] = $assoc['email'];
        }
    }
}

/**
 * function to put additional info into the database
 */
function put_add_info(){
    //code...
    $db = mysqli_connect("localhost","root","","cavista_healthcare_app");       //establish database connection
    $height = $_POST['height'];
    $age = $_POST['age'];
    $weight = $_POST['weight'];
    $user_goal = $_POST['userGoal'];
    $user_disease = $_POST['userDiseases'];
    $email = $_SESSION['email'];



    $query_1 = mysqli_query($db,"UPDATE user SET age = '$age' WHERE email = '$email'");
    $query_2 = mysqli_query($db,"UPDATE user SET height = '$height' WHERE email = '$email'");
    $query_3 = mysqli_query($db,"UPDATE user SET weight = '$weight' WHERE email = '$email'");
    $query_4 = mysqli_query($db,"UPDATE user SET goal = '$user_goal' WHERE email = '$email'");
    $query_5 = mysqli_query($db,"UPDATE user SET health_challenges	 = '$user_disease' WHERE email = '$email'");

    if(!($query_1) || !($query_2) || !($query_3) || !($query_4) || !($query_5)){
        dbErr();
    }
    else{
        success();
    }

}