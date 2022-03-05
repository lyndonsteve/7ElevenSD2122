<?php


if(isset($_POST["submit"])){

    //Grabiing the data
    $uid = $_POST["name"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];
    $mm = $_POST["mm"];
    $yyyy = $_POST["yyyy"];
    $dd = $_POST["dd"];
    
    include_once "configure/autoload.php";

    $signup = new SignUpController($name, $pwd, $email, $yyyy, $mm, $dd);

    // running error ghandler and user signup
    $signup->signupUser();

    //going to back to front page
    header("location: ../login.php");
}
else{
    header("location: ../login.php");
    exit();
}