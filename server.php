<?php
  

  session_start();
  $db = mysqli_connect('localhost', 'root', '', '7eleven_users');

  $name = "";
  $email = "";
  $password = "";
  $id = 0;
  $update = false;

  if (isset($_POST['save'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    mysqli_query($db, "INSERT INTO user_info (name, email, password) VALUES ('$name', '$email', '$password')"); 
    $_SESSION['message'] = "Address saved"; 
    header('location: registration.php'asdasdasdasdasdasdasdasdasdasdasd);
}

?>

